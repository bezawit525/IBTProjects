'use server';
import { redirect } from 'next/navigation';
import { revalidatePath } from 'next/cache';
import crypto from 'node:crypto';
import { store } from '@/lib/store';
import { getEvent } from '@/lib/events';
import { safeNext } from '@/lib/format';
import { createSession, destroySession, getUser, hashPassword, verifyPassword } from '@/lib/auth';
import { register, cancelForUser } from '@/lib/registrations';

const text = (fd, k) => String(fd.get(k) ?? '').trim();

export async function signUpAction(_prev, fd) {
  const name = text(fd, 'name'), email = text(fd, 'email').toLowerCase(), password = String(fd.get('password') ?? '');
  if (!name || name.length > 80) return { error: 'Enter your name.' };
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return { error: 'Enter a valid email address.' };
  if (password.length < 8) return { error: 'Use a password of at least 8 characters.' };
  if ([...store.users.values()].some((u) => u.email === email)) return { error: 'An account with this email already exists. Sign in instead.' };
  const id = crypto.randomUUID();
  store.users.set(id, { id, name, email, passwordHash: hashPassword(password) });
  createSession(id);
  redirect(safeNext(text(fd, 'next')));
}

export async function signInAction(_prev, fd) {
  const email = text(fd, 'email').toLowerCase(), password = String(fd.get('password') ?? '');
  const user = [...store.users.values()].find((u) => u.email === email);
  // Same message for unknown email and wrong password.
  if (!user || !verifyPassword(password, user.passwordHash)) return { error: 'Email or password is incorrect.' };
  createSession(user.id);
  redirect(safeNext(text(fd, 'next')));   // attack 3: crafted ?next= falls back to /dashboard
}

export async function signOutAction() {
  destroySession();
  redirect('/');
}

export async function registerAction(_prev, fd) {
  const slug = text(fd, 'slug');
  if (!getEvent(slug)) return { error: 'That event does not exist.' };
  const user = getUser();                                   // CHECK 1: who is calling? (attack 1)
  if (!user) redirect('/signin?next=' + encodeURIComponent('/events/' + slug));
  const result = register(user.id, { slug, name: text(fd, 'attendeeName'), quantity: Number(fd.get('quantity')) });
  if (result.error) return { error: result.error };
  revalidatePath('/events/' + slug);
  revalidatePath('/events');
  redirect('/dashboard/registrations/' + result.registration.id);
}

export async function cancelAction(fd) {
  const user = getUser();                                   // CHECK 1: signed in? (attack 1)
  if (!user) redirect('/signin?next=/dashboard');
  const result = cancelForUser(user.id, text(fd, 'id'));    // CHECK 2: owned by this user? (attack 2)
  if (result.ok) { revalidatePath('/events/' + result.slug); revalidatePath('/events'); }
  redirect('/dashboard');
}
