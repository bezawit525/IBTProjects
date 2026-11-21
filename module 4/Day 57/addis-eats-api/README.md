# Addis Eats API — Day 57: REST API Design

NestJS REST API extended from Day 56. This day audits resource naming, applies URI versioning, formalises HTTP method semantics and status codes, and standardises filtering, sorting, sparse fields and pagination.

## Install and run

```bash
npm install
npm run build
npm run start:dev
```

Base URL: `http://localhost:3000/api/v1`

Unversioned resource routes such as `/api/restaurants` intentionally return 404. All resource controllers use URI version `1`.

## Routes

| Method | Path | Meaning |
|---|---|---|
| GET | `/api/v1/restaurants` | List/filter restaurants |
| GET | `/api/v1/restaurants/:id` | One restaurant |
| POST | `/api/v1/restaurants` | Create restaurant (201 + Location) |
| GET | `/api/v1/restaurants/:id/dishes` | Restaurant's dishes |
| GET | `/api/v1/dishes` | List/filter dishes |
| GET | `/api/v1/dishes/:id` | One dish |
| GET | `/api/v1/orders` | List/filter orders |
| GET | `/api/v1/orders/:id` | One order |
| POST | `/api/v1/orders` | Create order (201 + Location) |
| PATCH | `/api/v1/orders/:id/status` | Change only status |
| DELETE | `/api/v1/orders/:id` | Delete order (204, idempotent) |
| GET | `/api/v1/restaurants/:id/orders` | Orders for a restaurant |

The old `GET /orders/pending` route was removed; use `GET /orders?status=pending`. The old `GET /restaurants/open` route was removed; use `GET /restaurants?isOpen=true`. Filters are query parameters, not resource paths. `PATCH /orders/:id/status` remains because it is a deliberate partial update of one member's status, not a collection filter.

## Query convention

- Equality: `?status=pending`
- Multi-value: `?status=pending,preparing`
- Range controls use separate named query keys where applicable.
- Sort ascending: `?sort=customer`
- Sort descending: `?sort=-totalSantim`
- Multiple sort keys: comma-separated, left to right.
- Sparse fields: `?fields=id,customer,status`
- Search key reserved: `q`
- Pagination: `limit` and `offset`; limit maximum is 50.

Reserved query names: `limit`, `offset`, `after`, `sort`, `fields`, `q`.

Collection responses use `{ items, total, limit, offset }`; member responses are bare resources.

## HTTP semantics

- GET is safe and idempotent.
- POST creates; the server assigns the ID and responds 201 with a `Location` header.
- PATCH changes only supplied fields.
- PUT is not used because clients do not submit full resource representations.
- DELETE returns 204 and remains 204 if the resource was already deleted.

## API versioning

URI versioning is selected because the version is visible in URLs, logs and browser tests. The whole API moves together under `/api/v1`; the unversioned paths are not registered. Additive optional changes do not require a new version; renaming/removing response fields or tightening request rules does.

## Error responses

Nest's built-in exception response is retained (`statusCode`, `error`, `message`). Do not add a competing error envelope. Day 58 adds request path and request ID.

## Requests

Open `requests-v1.http` with the VS Code REST Client extension and run the calls. It includes the versioning 404 check, create Location headers, repeat DELETE, filters, descending sort and sparse fields.

## Build and test

```bash
npm run build
npm test -- --runInBand
```

## Day 57 Git workflow

```bash
git checkout -b day-57-rest-api-design
git add .
git commit -m "feat(api): version and standardise REST resource routes"
git push -u origin day-57-rest-api-design
```
