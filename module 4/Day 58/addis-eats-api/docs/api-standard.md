# Addis Eats API Standard — Day 58

## Versioning and resource design
All resources use URI versioning under `/api/v1`. Collection paths are plural nouns. Filters belong in query parameters. Create returns 201 and a `Location` header; deletes return 204.

## Validation at the edge
The global `ValidationPipe` uses `whitelist: true`, `forbidNonWhitelisted: true`, `transform: true`, `enableImplicitConversion: false`, and `stopAtFirstError: false`. Writes reject undeclared fields; nested arrays use both `@ValidateNested({ each: true })` and `@Type()`.

TeleBirr: `^(?:\+251|0)9\d{8}$`, with one reusable `@IsTeleBirrNumber()` message.
ETB amounts are integer santim, greater than zero and no more than 10,000,000 (100,000 ETB). A scheduled order must include a future `scheduledFor` value.

## Business rules and invariants
Rules requiring current state belong in the service. Order creation checks in this order: restaurant existence (404), restaurant open state (409), dish/restaurant relationship (422), then server-side total computation and persistence. The client cannot submit `totalSantim` as an authority: it is recomputed from dish prices and quantities.

Order status transitions:
- PENDING -> PREPARING or CANCELLED
- PREPARING -> ON_THE_WAY or CANCELLED
- ON_THE_WAY -> DELIVERED
- DELIVERED and CANCELLED are terminal

An invalid transition returns 409 Conflict.

## Error response contract
Every error response has exactly these five top-level fields:
`{ statusCode, message, path, timestamp, requestId }`.
`requestId` comes from the `x-request-id` request header, or is `null`.
Nest `HttpException`s retain their status. Domain errors map as follows: missing order/restaurant -> 404; closed restaurant/invalid transition -> 409; dish not on restaurant menu -> 422. Unexpected errors are logged server-side and return 500 with the generic message `Internal server error`. Stack traces are never sent to clients. Only 5xx errors are logged at error level.

The server computes the order total from dish prices and quantities; the client-provided total is never trusted or persisted.
