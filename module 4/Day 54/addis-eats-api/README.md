# Addis Eats — Day 54

NestJS implementation of the Addis Eats Orders module.

## Requirements

- Node.js
- npm

## Install

```bash
npm install
```

## Run in development

```bash
npm run start:dev
```

The API runs at `http://localhost:3000` with the global `/api` prefix.

## Endpoints

| Method | URL | Description |
|---|---|---|
| GET | `/api/orders` | List all seeded orders |
| GET | `/api/orders/:id` | Find an order by ID |
| POST | `/api/orders` | Create an order |

## Create order request

```json
{
  "customer": "Beza",
  "area": "Bole",
  "totalSantim": 45000,
  "phone": "0912345678"
}
```

`customer` must be a string, `area` must be one of the four supported areas,
`totalSantim` must be a positive integer, and `phone` is optional.

The global `ValidationPipe` uses `whitelist` and `transform`.

## Test requests

Open `requests.http` in VS Code with the REST Client extension and use
**Send Request** above each request.

## Build

```bash
npm run build
```

## Notes

The uploaded starter archive did not contain the original twelve-order seed file.
`src/seed-orders.ts` therefore contains twelve illustrative records matching the
existing Day 53 `Order` interface.

The project keeps the uploaded NestJS TypeScript configuration. Its `tsconfig.json`
uses `NodeNext` module settings; it has not been converted to CommonJS.
