# Addis Eats — Authentication and Authorization

## Overview

Day 42 implements a learning example of authentication and authorization
using Next.js 16.

Authentication identifies the signed-in user.
Authorization determines what that user is allowed to access or change.

## Demo Accounts

| Role     | Email             | Password    |
| -------- | ----------------- | ----------- |
| Customer | user@example.com  | password123 |
| Staff    | staff@example.com | staff123    |

These are classroom-only credentials, not real user accounts.

## Protected Routes

| Route        | Protection                                  |
| ------------ | ------------------------------------------- |
| `/`          | Public                                      |
| `/menu`      | Public                                      |
| `/menu/[id]` | Public                                      |
| `/signin`    | Public                                      |
| `/checkout`  | Proxy and server-side session check         |
| `/orders`    | Proxy, session check and user-scoped orders |
| `/kitchen`   | Server-side session and staff-role check    |

## Protected Actions

### placeOrder

The server action must verify that a session exists before placing
an order. Order ownership must be determined from the session.

### cancelOrder

The server action checks:

1. A session exists.
2. The order exists.
3. The current user owns the order.
4. The order is eligible for cancellation.

### Sign out

`POST /api/signout` deletes the session cookie.

## Session Handling

The session helper is located at `lib/session.js`.

The demo session is stored in an HTTP-only cookie with:

- `httpOnly: true`
- `secure` in production
- `sameSite: "lax"`
- A seven-day maximum age

## Redirect Safety

The sign-in endpoint validates the `next` destination and rejects
external URLs and protocol-relative destinations.

## Security Principles

- Proxy is an early access check, not the final security boundary.
- Server pages verify sessions before showing private content.
- Server actions verify authentication and authorization themselves.
- Orders are filtered by the authenticated session's user ID.
- Staff permissions are checked on the server.
- Client-supplied user IDs and role checks are not trusted.

## Limitations

This is a classroom exercise, not production authentication.

The demo uses hardcoded credentials, predictable session values,
and in-memory sample orders. It does not provide a database-backed
session store, password hashing, persistent order cancellation,
rate limiting, or a complete account recovery system.

A production application should use a maintained authentication
library, securely hashed passwords, and database-backed authorization.
