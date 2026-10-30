# Authentication and authorization

## Demo accounts
- Customer: `0911111111` / `customer123`
- Staff: `0922222222` / `staff123`

These accounts are for local coursework only.

## Session
`lib/session.js` creates an HMAC-signed session token and stores it in an `httpOnly`, `sameSite=lax` cookie. The cookie uses `secure: true` in production. Configure `SESSION_SECRET` in `.env.local`; do not commit secrets.

## Protection layers
- `middleware.js` redirects requests to checkout, orders, and kitchen when the session cookie is missing.
- Server pages call `getSession()` and check the role where needed.
- Server Actions and Route Handlers check the session and permission again.
- Order details and status endpoints verify ownership, unless the user is staff.
- The sign-in `next` parameter only accepts safe local paths.

## Coursework limitation
This is a self-contained demo authentication flow, not a production identity provider. Replace it with the exact backend/session implementation required by your course before deployment.
