# Addis Eats API route audit — Day 57

Audit each of the nine naming rules against the Day 56 route surface.

| # | Naming rule | Example checked | Result |
|---|---|---|---|
| 1 | Nouns, never verbs | `POST /orders` | Pass — the HTTP method expresses the action |
| 2 | Plural collection names | `/restaurants`, `/orders`, `/dishes` | Pass |
| 3 | Lowercase, hyphenated paths | `/restaurants/:id/dishes` | Pass |
| 4 | ID identifies one member only | `/orders/:id` | Pass |
| 5 | Nest resources to show belonging | `/restaurants/:id/dishes` | Pass |
| 6 | No file extensions | `/orders`, not `/orders.json` | Pass |
| 7 | No trailing slash | `/restaurants` | Pass |
| 8 | Filters belong in query strings | `/orders?status=pending` | Renamed from `/orders/pending` |
| 9 | Keep resource nesting to two levels | `/restaurants/:id/dishes` | Pass |

## Rename record

1. `GET /api/v1/orders/pending` was removed and replaced with `GET /api/v1/orders?status=pending`. A status is a filter on the orders collection, so the query string allows any status and combines naturally with other filters.
2. `GET /api/v1/restaurants/open` was removed and replaced with `GET /api/v1/restaurants?isOpen=true`. Open/closed is a view of the restaurant collection, not a separate resource.

`PATCH /api/v1/orders/:id/status` remains because it is a deliberate partial update to one order's status, not a collection filter.
