# Addis Eats API — Day 58: Validation & Error Handling

Day 58 extends the Addis Eats NestJS API with strict edge validation, reusable custom validators, nested DTO validation, cross-field validation, one global exception filter, business guards, server-side totals, and an exhaustive order-status transition table.

## Requirements
- Node.js 22.22.3 or newer in the Node 22 line (Nest CLI 12 engine requirement)
- npm

## Run
```bash
npm install
npm run build
npm run start:dev
```
Base URL: `http://localhost:3000/api/v1`

## In-class exercise deliverables
- `src/common/validators/is-telebirr-number.validator.ts`: reusable TeleBirr decorator.
- `src/common/validators/is-santim.constraint.ts`: reusable ETB santim constraint.
- `src/common/validators/scheduled-needs-time.constraint.ts`: cross-field rule attached to `scheduledFor`.
- `src/orders/dto/create-order.dto.ts`: nested `OrderLineDto`, `@ValidateNested`, `@Type`, phone and total validators.
- `src/common/filters/all-exceptions.filter.ts`: `@Catch()` global filter with one five-field body shape.
- `src/orders/orders.service.ts`: ordered guards and `Record<OrderStatus, readonly OrderStatus[]>` transition invariant.
- `starter/bad-requests/`: twelve failing request bodies.
- `starter/expected.md`: expected status and message.
- `starter/run-all.sh`: sends all twelve requests and prints status/message.

## Test the twelve bad requests
Start the API in one terminal. In Git Bash or WSL, run:
```bash
bash starter/run-all.sh
```
The test data includes format errors, amount errors, empty and malformed nested lines, an undeclared property, missing/closed restaurants, a dish belonging to another restaurant, and an invalid scheduled time.

## Important API behaviour
- Valid create: 201 plus `Location: /api/v1/orders/:id`.
- Invalid DTO: 400.
- Missing restaurant: 404.
- Closed restaurant: 409.
- Dish from another restaurant: 422.
- Invalid status transition: 409.
- All errors: `{ statusCode, message, path, timestamp, requestId }`.
- The order total is calculated on the server from current dish prices and requested quantities.

## Git
```bash
git checkout -b day-58-validation-and-error-handling
git add .
git commit -m "feat(validation): enforce request rules and standardise API errors"
git push -u origin day-58-validation-and-error-handling
```

The incoming `totalSantim` is validated as an amount for the exercise, but the service never trusts it: the persisted order total is recalculated from the current dish prices and quantities on the server.
