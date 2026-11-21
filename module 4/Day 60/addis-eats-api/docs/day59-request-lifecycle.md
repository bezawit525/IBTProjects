# Day 59 request lifecycle

For `GET /api/v1/orders/4821`, the order is:

1. `RequestIdMiddleware` honours or generates `x-request-id`.
3. `ApiKeyGuard` (for DELETE only) checks the configured API key.
4. `RolesGuard` reads route metadata with `Reflector.getAllAndOverride([handler, class])`.
5. `LoggingInterceptor` starts its timer.
6. `TimeoutInterceptor` starts the five-second clock.
7. Pipes parse/validate parameters (`ParseIntPipe`, `ParseAreaPipe`, global `ValidationPipe`).
8. The controller invokes the service.
9. `TimeoutInterceptor` completes or raises 408.
10. `LoggingInterceptor` logs success or failure with duration and request id.
11. `AllExceptionsFilter` serialises thrown exceptions when needed.

Guards run before pipes: refuse unauthorised callers before parsing and validating request bodies. Interceptors are registered Logging first and Timeout second, so logging is the outer wrapper and includes timeout duration.
