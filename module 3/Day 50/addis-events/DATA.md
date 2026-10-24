# DATA.md

No database. Events are a static array (`lib/events.js`); users and registrations are in-memory (`lib/store.js`).

| Query | Where | Key / scope | Refresh rule | Why |
|---|---|---|---|---|
| `getEvents()` | Server (home, /events) | none | Static, `revalidate = 60` | Public and identical for everyone, so serve it prebuilt |
| `getEvent(slug)` | Server (`/events/[slug]`) | slug | `generateStaticParams`, `revalidate = 60` | Public page, good for SEO and speed |
| `seatsLeft(slug)` | Server | slug | `revalidate = 60` plus `revalidatePath` after register/cancel | Seat counts change, but staleness of a minute is acceptable |
| `listForUser(userId)` | Server (`/dashboard`) | userId from session | `force-dynamic`, never cached | Per-user data must never be shared |
| `getForUser(userId, id)` | Server (ticket page) | userId + id | `force-dynamic` | Scoped so an id alone cannot reach another user's data |
| Search/filter of events | **Client** (`EventBrowser`) | in-browser state | instant | Filtering a handful of events needs no network round trip |

Writes are Server Actions (`app/actions.js`) so the checks run on the server. `register` is idempotent: a second registration for the same event returns the existing one.
