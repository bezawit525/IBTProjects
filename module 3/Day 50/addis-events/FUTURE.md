# FUTURE.md: what I cut, and why

Triage (Must / Should / Could):
- **Must (done):** sign up/in/out, browse events, reserve, view and cancel a ticket, protected dashboard.
- **Should (done):** empty/loading/error states, dashboard stats and chart, metadata, sitemap, robots.
- **Could (cut):** the items below.

## Cut
- Real persistence: accounts and reservations reset on restart (needs a database; Module 5).
- Email confirmations and payment (currently "pay at the door").
- Calendar (.ics) download and QR code on the ticket.
- Admin page to create events.
- Password reset and email verification.
- Rate limiting on sign-in.
- Dark-mode screenshot check and automated tests.
