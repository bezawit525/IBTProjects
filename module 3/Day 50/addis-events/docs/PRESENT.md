# Eight-minute script (rehearse aloud with a timer)

**0–1 What it is.** "Addis Events lets people in Addis Ababa find an event or workshop, reserve a seat, and keep their tickets in one place."
**1–3 Main flow (live URL).** Home → Events → search "jazz" → open event → reserve (redirects to sign-in) → create account → land back on the event → reserve → ticket with entry code → dashboard stats.
**3–5 One decision.** Server vs client boundary: open `app/events/page.js` (server, fetches data, static) then `components/EventBrowser.js` (client, because it holds search state). Header is static on purpose so no route turns dynamic.
**5–6 The three attacks.** Console: signed-out DELETE → 401; other user's id → 404; `/signin?next=https://example.com` → `/dashboard`. Point at `route.js`, `getForUser`, `safeNext`.
**6–7 PERF.md.** Before, after, and the cause.
**7–8 Cut and next.** FUTURE.md: persistence, payments, admin page.

## Five tabs to open first
1. `app/events/page.js` (server) 2. `components/EventBrowser.js` (client) 3. `app/actions.js` → `cancelAction` (both checks) 4. `lib/registrations.js` → `getForUser` (query) 5. `lib/format.js` → `safeNext` (refactor/security helper)

## Likely questions
- Why is this a client component? It needs state/hooks (search input, `useFormState`, `useFormStatus`).
- What if I call this action signed out? `getUser()` is null → redirect/401; the check is in the code, not the UI.
- Why this rendering strategy? Public pages are static with `revalidate = 60`; dashboard is `force-dynamic` because it is per-user.
- Hardest part / next week? Keeping pages static while still showing seat counts; next I would add a real database.
