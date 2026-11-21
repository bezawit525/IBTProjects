# Addis Eats API — Day 56: Routing & Controllers

This project extends the Day 55 Addis Eats NestJS API. Day 56 adds the full Orders route surface, route parameters, static routes, sub-resources, validated query DTOs, paging, status updates, deletion, and consistent JSON responses.

## Requirements

- Node.js 20+
- npm

## Install and run

```bash
npm install
npm run build
npm run start:dev
```

Base URL: `http://localhost:3000/api`

## Response-shape convention

This API uses one response convention throughout:

- Every collection endpoint returns `Page<T>`: `{ items, total, limit, offset }`.
- A single member endpoint returns the object itself.
- Errors use Nest's standard `{ statusCode, message, error }` response.
- `POST` returns 201 by Nest default.
- `DELETE` returns 204 with no response body.

The convention is applied to restaurants, dishes, orders, pending orders, and nested collection routes.

## Day 56 Orders routes

| Method | Path | Response |
|---|---|---|
| GET | `/api/orders` | `Page<Order>` |
| GET | `/api/orders/pending` | `Page<Order>` containing pending orders |
| GET | `/api/orders/:id` | `Order` or 404 |
| GET | `/api/restaurants/:id/orders` | `Page<Order>` or 404 if restaurant is absent |
| POST | `/api/orders` | Created `Order`, 201 |
| PATCH | `/api/orders/:id/status` | Updated `Order` |
| DELETE | `/api/orders/:id` | 204, empty body; 404 if absent |

The static `/orders/pending` route is declared before `/orders/:id`. The nested restaurant orders route checks that the restaurant exists before returning its orders.

## Query parameters

`FindOrdersQuery` supports:

- `status`: optional order status
- `area`: optional delivery area
- `limit`: default 10, integer from 1 through 50
- `offset`: default 0, non-negative integer
- `sort`: `customer` or `totalSantim`, default `customer`

Filtering and sorting happen before paging. `total` is calculated before slicing.

Example:

```http
GET /api/orders?status=pending&area=Bole&limit=5&offset=0
```

`@Type(() => Number)` converts query-string numbers before `@IsInt()` validation. The global `ValidationPipe` has `transform: true`.

## Domain conventions

- Areas: `Bole`, `Kazanchis`, `Piassa`, `Megenagna`.
- Order statuses: `pending`, `preparing`, `ready`, `out-for-delivery`, `delivered`.
- Money is represented as integer santim.
- Four seeded restaurants, eight seeded dishes, and fourteen seeded orders.

## Test requests

Open `requests-orders.http` for the twelve in-class Orders exercise calls. Open `requests.http` for the complete API route surface. Use the VS Code REST Client extension and click **Send Request**.

## Acceptance checklist

1. `/api/orders/pending` is registered above `/api/orders/:id`.
2. `GET /api/orders?limit=999` returns 400.
3. `GET /api/orders?limit=5` returns five items (when enough records match).
4. `GET /api/restaurants/99/orders` returns 404, not an empty page.
5. `DELETE /api/orders/14` returns 204 with an empty body.
6. Every collection endpoint returns `{ items, total, limit, offset }`.

## Inspect the route table

Run `npm run start:dev` and read the Nest startup log. Confirm that the static `/api/orders/pending` route appears before `/api/orders/:id`, and that both `/api/restaurants/:id/orders` and `/api/restaurants/:id/dishes` are mapped.

## Git workflow

```bash
git checkout -b day-56-routing-and-controllers
git add .
git commit -m "feat(orders): add routing, filtering, paging and status endpoints"
git push -u origin day-56-routing-and-controllers
```

Do not commit `node_modules`, `dist`, or local environment secrets.
