import 'server-only';
import crypto from 'node:crypto';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { store } from './store';

export const COOKIE = 'session';
const WEEK = 7 * 24 * 60 * 60;

function secret() {
  const s = process.env.SESSION_SECRET;
  if (s) return s;
  if (process.env.NODE_ENV === 'production') throw new Error('SESSION_SECRET is not set');
  return 'dev-only-secret-change-me';
}
const sign = (payload) => crypto.createHmac('sha256', secret()).update(payload).digest('base64url');

export function hashPassword(pw) {
  const salt = crypto.randomBytes(16).toString('hex');
  return salt + ':' + crypto.scryptSync(pw, salt, 64).toString('hex');
}
export function verifyPassword(pw, stored) {
  const [salt, hash] = stored.split(':');
  const a = Buffer.from(hash, 'hex');
  const b = crypto.scryptSync(pw, salt, 64);
  return a.length === b.length && crypto.timingSafeEqual(a, b);
}

export function createSession(userId) {
  const payload = Buffer.from(JSON.stringify({ uid: userId, exp: Math.floor(Date.now() / 1000) + WEEK })).toString('base64url');
  cookies().set(COOKIE, payload + '.' + sign(payload), {
    httpOnly: true, sameSite: 'lax', secure: process.env.NODE_ENV === 'production', path: '/', maxAge: WEEK
  });
}
export const destroySession = () => cookies().delete(COOKIE);

// Reads the signed cookie. The user id comes from HERE, never from the request body or URL.
export function getUser() {
  const raw = cookies().get(COOKIE)?.value;
  if (!raw) return null;
  const [payload, sig] = raw.split('.');
  if (!payload || !sig) return null;
  const a = Buffer.from(sig), b = Buffer.from(sign(payload));
  if (a.length !== b.length || !crypto.timingSafeEqual(a, b)) return null;
  try {
    const { uid, exp } = JSON.parse(Buffer.from(payload, 'base64url').toString());
    if (exp < Date.now() / 1000) return null;
    const u = store.users.get(uid);
    return u ? { id: u.id, name: u.name, email: u.email } : null;
  } catch { return null; }
}

// LAYER 2 for pages: every private page calls this (layouts do not re-run on client navigation).
export function requireUser(next = '/dashboard') {
  const user = getUser();
  if (!user) redirect('/signin?next=' + encodeURIComponent(next));
  return user;
}
