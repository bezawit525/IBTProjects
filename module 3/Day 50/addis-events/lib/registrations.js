import 'server-only';
import crypto from 'node:crypto';
import { store } from './store';
import { getEvent, isPast } from './events';

const confirmed = (slug) => store.registrations.filter((r) => r.eventSlug === slug && r.status === 'confirmed');

export function seatsLeft(slug) {
  const event = getEvent(slug);
  if (!event) return 0;
  return Math.max(0, event.capacity - confirmed(slug).reduce((n, r) => n + r.quantity, 0));
}

// SCOPED QUERIES: userId is always part of the lookup, so an id from the URL can never reach another user's record.
export const listForUser = (userId) =>
  store.registrations.filter((r) => r.userId === userId).sort((a, b) => b.createdAt.localeCompare(a.createdAt));
export const getForUser = (userId, id) =>
  store.registrations.find((r) => r.id === id && r.userId === userId) || null;

export function register(userId, { slug, name, quantity }) {
  const event = getEvent(slug);
  if (!event) return { error: 'That event does not exist.' };
  if (isPast(event)) return { error: 'This event has already happened.' };
  if (!name || name.length > 80) return { error: 'Enter the attendee name (up to 80 characters).' };
  if (!Number.isInteger(quantity) || quantity < 1 || quantity > 5) return { error: 'Choose between 1 and 5 tickets.' };

  // Idempotent: registering twice returns the existing registration instead of a duplicate.
  const existing = confirmed(slug).find((r) => r.userId === userId);
  if (existing) return { registration: existing, existing: true };

  if (quantity > seatsLeft(slug)) return { error: `Only ${seatsLeft(slug)} seat(s) left for this event.` };
  const registration = {
    id: crypto.randomUUID(), userId, eventSlug: slug, attendeeName: name, quantity,
    total: event.price * quantity, code: 'AE-' + crypto.randomBytes(3).toString('hex').toUpperCase(),
    status: 'confirmed', createdAt: new Date().toISOString()
  };
  store.registrations.push(registration);
  return { registration };
}

// Not-yours and does-not-exist look identical on purpose.
export function cancelForUser(userId, id) {
  const r = getForUser(userId, id);
  if (!r || r.status !== 'confirmed') return { ok: false };
  r.status = 'cancelled';
  return { ok: true, slug: r.eventSlug };
}
