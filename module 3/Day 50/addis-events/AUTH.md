# AUTH.md

Session: an HMAC-signed, `httpOnly`, `sameSite=lax` (`secure` in production) cookie holding `{uid, exp}`. Passwords are hashed with scrypt and a per-user salt. The user id is always read from the verified cookie (`lib/auth.js → getUser`), never from the URL or form.

## Private routes and actions, and their layers
| Route / action | Layer 1: middleware (optimistic) | Layer 2: page/action check | Layer 3: ownership |
|---|---|---|---|
| `/dashboard` | cookie present? else redirect | `requireUser()` in layout **and** page | `listForUser(user.id)` |
| `/dashboard/registrations/[id]` | same | `requireUser()` | `getForUser(user.id, id)`, else `notFound()` |
| `registerAction` | n/a | `getUser()`, else redirect to sign-in | user id from session |
| `cancelAction` | n/a | `getUser()` | `cancelForUser(user.id, id)` |
| `DELETE /api/registrations/[id]` | n/a | `getUser()`, else 401 | `cancelForUser(user.id, id)`, else 404 |

What each layer proves: middleware only saves a round trip (it checks a cookie exists, not that it is valid, and **is not the security check**). `requireUser`/`getUser` proves the cookie is genuine and unexpired. The scoped query proves the record belongs to that user.

## The three attacks (run on the live URL, from the browser console)
1. **Signed out:** `await fetch('/api/registrations/anything',{method:'DELETE'}).then(r=>r.status)` → **401**. Stopped by `if (!user) return ... 401` in `app/api/registrations/[id]/route.js` (and `getUser()` in `cancelAction`).
2. **Signed in as someone else:** sign in as user B, then `fetch('/api/registrations/<A's id>',{method:'DELETE'})` → **404**, and opening `/dashboard/registrations/<A's id>` shows "not found". Stopped by `userId` being part of the lookup in `getForUser`/`cancelForUser` (`lib/registrations.js`). Missing and not-yours are indistinguishable on purpose.
3. **Crafted return link:** `/signin?next=https://example.com` → after sign-in you land on `/dashboard`. Stopped by `safeNext()` in `lib/format.js` (only same-site paths starting with a single `/`).

Also: a cookie with a forged signature is rejected (`timingSafeEqual` in `getUser`) and returns 401. No secrets in the client bundle: only `NEXT_PUBLIC_SITE_URL` is public.
