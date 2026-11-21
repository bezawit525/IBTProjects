# Addis Eats API — Day 59: Middleware, Guards, Interceptors & Pipes

This project continues the Addis Eats NestJS API and implements the Day 59 in-class exercise in `src/common/`. The exercise is deliberately cross-cutting: controllers do not contain request-id, authorisation, logging, timeout, or area-normalisation logic.

## Requirements
- Node.js 22.22.3 or newer in the Node 22 line (NestJS 12 toolchain requirement)
- npm

## Setup (PowerShell / Windows)
```powershell
npm install
$env:API_KEY = "change-this-local-development-key"
npm run build
npm run start:dev
```
The API runs at `http://localhost:3000/api/v1`.

Keep the API key in an environment variable. Do not commit a real key. `.env.example` is a reference; this project reads `process.env` directly and does not load `.env` files automatically.

## Day 59 in-class deliverables
1. `src/common/middleware/request-id.middleware.ts` honours `x-request-id` or generates a UUID, writes it to the request and response, and is applied to every route by `MiddlewareConsumer`.
2. `src/common/guards/api-key.guard.ts` protects DELETE requests: missing key -> 401; wrong key -> 403; correct key passes. It reads `API_KEY` through an injected configuration service.
3. `src/common/decorators/roles.decorator.ts` defines `@Roles()`. `src/common/guards/roles.guard.ts` reads it using `getAllAndOverride([handler, class])` and is registered through `APP_GUARD`.
4. `src/common/interceptors/logging.interceptor.ts` logs method, path, controller/handler, outcome, elapsed milliseconds, and request id on both success and failure.
5. `src/common/interceptors/timeout.interceptor.ts` applies a five-second timeout and maps it to HTTP 408. `GET /api/v1/orders/slow` intentionally waits six seconds.
6. `src/common/pipes/parse-area.pipe.ts` accepts `bole` and `BOLE`, returns `Bole`, and rejects `adama` with 400. It is bound only to the `area` query parameter.

`src/common/interceptors/envelope.interceptor.ts` is an unregistered teaching example. It is intentionally not applied globally because wrapping all responses would break the API response contract published on Day 57/58.

## Test the 12 calls
Open `requests-d59.http` in VS Code with the REST Client extension and run each request. For call 6, ensure the request header matches the `API_KEY` value in your terminal. The request file includes all six acceptance checkpoints plus logging, role, timeout, and pipe checks.

Expected results:
- Calls 1–2: 200 and `x-request-id` response header (call 2 echoes `mine-123`).
- Call 3: 404 error body whose `requestId` is `error-check-123`.
- Calls 4–5: 401 then 403.
- Call 6: 204.
- Call 7: 403 because no staff identity is present.
- Call 9: 408 after five seconds; the log still records the timeout outcome and duration.
- Calls 10–11: 200 with the Bole orders.
- Call 12: 400 with the allowed-area message.

## Important registration order
`APP_GUARD` registers `ApiKeyGuard` before `RolesGuard`. `APP_INTERCEPTOR` registers `LoggingInterceptor` before `TimeoutInterceptor`, so logging wraps the timeout and records the full elapsed duration. Middleware adds the request id before the guards and interceptors run.

## Git
```bash
git checkout -b day-59-middleware-guards-interceptors-pipes
git add .
git commit -m "feat(api): add request middleware guards and interceptors"
git push -u origin day-59-middleware-guards-interceptors-pipes
```
