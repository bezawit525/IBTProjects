# Addis Eats API — Day 60: Logging & API Documentation

Day 60 extends the Day 59 NestJS project. It adds Pino structured JSON logging, request correlation in service logs, centralized redaction, Swagger/OpenAPI documentation, a CLI plugin, and a committed OpenAPI export.

## Requirements
- Node.js 22.22.3 or newer in the Node 22 series
- npm

## Install and run
```bash
npm install
cp .env.example .env
# Set API_KEY in your terminal before starting (see below)
npm run build
npm run start:dev
```
PowerShell API key setup:
```powershell
$env:API_KEY = "change-this-local-development-key"
$env:LOG_LEVEL = "debug"
$env:NODE_ENV = "development"
npm run start:dev
```
API base URL: `http://localhost:3000/api/v1`
Swagger UI: `http://localhost:3000/docs` (not mounted when `NODE_ENV=production`).
Raw OpenAPI JSON: `http://localhost:3000/docs-json`; the same document is written to `openapi.json` at startup.

## Day 60 in-class exercise acceptance
1. Pino replaces Nest's default logger. `LOG_LEVEL` controls severity. Development uses `pino-pretty`; other environments emit newline-delimited JSON to stdout.
2. Request IDs are generated or accepted by the existing Day 59 middleware and are carried by `nestjs-pino` request context into service logs without changing service method arguments.
3. Redaction is configured centrally for authorization, `x-api-key`, and phone fields.
4. Swagger is mounted at `/docs` outside production, with a title, useful description, resource tags, and the `x-api-key` scheme.
5. The Swagger CLI plugin is enabled. All twelve routes have summaries and documented success/failure responses. DTO fields include examples/descriptions; nested `OrderLineDto[]` is explicitly declared.
6. `openapi.json` is generated at startup and included in the repository after running the app.

## Twelve documented endpoints
| Resource | Endpoint | Summary |
|---|---|---|
| Restaurants | `GET /restaurants` | List all restaurants |
| Restaurants | `GET /restaurants/:id` | Get one restaurant |
| Restaurants | `GET /restaurants/:id/dishes` | List a restaurant's menu |
| Dishes | `GET /dishes` | List/filter dishes |
| Dishes | `GET /dishes/:id` | Get one dish |
| Orders | `GET /orders` | List orders |
| Orders | `GET /orders/slow` | Demonstrate timeout |
| Orders | `GET /orders/staff-only` | Staff-only access |
| Orders | `GET /orders/:id` | Get one order |
| Orders | `POST /orders` | Place an order |
| Orders | `PATCH /orders/:id/status` | Update order status |
| Orders | `DELETE /orders/:id` | Delete an order (staff) |

## Prove redaction
Use `requests-d60.http`. Send a request containing `Authorization: Bearer do-not-log-this-token`, `x-api-key: do-not-log-this-key`, and a phone number in the body. Check the terminal output: the raw values must never appear; redacted fields show `[redacted]`. Use `bash starter/check-logs.sh` to scan a saved log file. The application writes logs to stdout, never to an application-managed log file.

## Export and commit OpenAPI
Start the application once; it writes `openapi.json` to the project root. Commit that generated file. Inspect it to confirm twelve paths, descriptions, request/response schemas and documented failure codes.

## Important API behaviour
- Money is represented in whole santim; 35000 santim is 350 ETB.
- Order totals are computed from menu item prices and quantities on the server.
- Closed restaurants remain visible in the restaurant list.
- Protected staff routes (`GET /orders/staff-only` and `DELETE /orders/:id`) require the `x-api-key` header.
- Error responses preserve the Day 58 five-field shape.

## Git
```bash
git checkout -b day-60-logging-and-api-documentation
git add .
git commit -m "feat(api): add structured logging and OpenAPI documentation"
git push -u origin day-60-logging-and-api-documentation
```
