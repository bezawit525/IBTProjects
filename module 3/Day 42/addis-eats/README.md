
## Day 42 — Authentication and Authorization

### What I implemented

- Protected `/checkout` and `/orders` with Next.js 16 Proxy.
- Created a sign-in page and sign-in Route Handler.
- Added a reusable `getSession()` helper.
- Protected the orders page with a server-side session check.
- Filtered example orders using the authenticated user's ID.
- Added an order cancellation Server Action with ownership checks.
- Added a staff-only `/kitchen` page.
- Implemented sign-out by deleting the session cookie.
- Validated the `next` redirect destination.
- Documented protected routes and actions in `AUTH.md`.

### Demo Credentials

Customer:
- Email: `user@example.com`
- Password: `password123`

Staff:
- Email: `staff@example.com`
- Password: `staff123`

These credentials are for local learning only.

### Run the Project

```bash
npm install
npm run dev
```

Open http://localhost:3000.

### Test Routes

- `/` — public home page
- `/menu` — public menu
- `/signin` — sign-in form
- `/orders` — protected customer orders
- `/checkout` — protected checkout
- `/kitchen` — staff-only page

### Documentation

See `AUTH.md` for the authentication model, protected routes,
authorization checks, and known limitations.

### Important

The authentication implementation is a learning exercise.
Demo credentials, session values, and sample orders are not
suitable for production use.
