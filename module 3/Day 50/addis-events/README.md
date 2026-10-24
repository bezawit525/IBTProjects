# Addis Events: Event Ticket & Workshop Registration

A small Next.js (App Router, plain JavaScript) app where people browse events and workshops in Addis Ababa, create an account, reserve seats, and manage their tickets from a personal dashboard. **No database and no separate backend**: events are a static catalogue and accounts/reservations live in server memory.

**Live URL:** _paste your Vercel URL here_ (and set it as `NEXT_PUBLIC_SITE_URL`)

**Demo account:** `demo@example.com` / `demo1234` (or create your own; a new account shows every empty state).

## Run from a fresh clone
```bash
git clone <your-repo-url> && cd addis-events
npm install
cp .env.example .env.local     # then set SESSION_SECRET
npm run dev                    # http://localhost:3000
npm run build && npm start     # production check
```

## Environment variables
| Name | Required | Purpose |
|---|---|---|
| `SESSION_SECRET` | Production | Signs the session cookie. Generate: `node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"` |
| `NEXT_PUBLIC_SITE_URL` | Recommended | Your deployed URL. Used for absolute og:image, sitemap and robots. Public, not a secret. |

## Deploy (Vercel)
Push to GitHub, import the repo in Vercel, add both variables, deploy. To roll back, open Deployments and promote the previous one.

## Known limitation
Accounts and reservations are held in memory, so they reset on server restart or a cold serverless instance. This is deliberate (no database) and is listed in `FUTURE.md`.

## Documents
`AUTH.md` security layers and the three attacks · `DATA.md` every query · `PERF.md` performance budget · `FUTURE.md` what was cut · `docs/PRESENT.md` the eight-minute script · `REVIEW.md` peer-review template.

## Pictures
The app ships without pictures. To add real photos, put a `.jpg` or `.webp` (under 150 kB each) in `public/photos/` and add `image: '/photos/name.jpg', imageAlt: 'describe the photo'` to an event in `lib/events.js`. Cards, event pages and tickets show it automatically.
