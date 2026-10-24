import 'server-only';
import crypto from 'node:crypto';

// In-memory store (no database). Lives on globalThis so dev hot-reload keeps it.
// It resets when the server restarts or a serverless instance goes cold: see README.
const g = globalThis;
if (!g.__eventStore) {
  g.__eventStore = { users: new Map(), registrations: [] };
  const salt = 'demo-salt-0123456789abcdef';
  g.__eventStore.users.set('demo-user', {
    id: 'demo-user', name: 'Demo Attendee', email: 'demo@example.com',
    passwordHash: salt + ':' + crypto.scryptSync('demo1234', salt, 64).toString('hex')
  });
}
export const store = g.__eventStore;
