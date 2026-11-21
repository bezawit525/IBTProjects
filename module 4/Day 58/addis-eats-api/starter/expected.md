# Expected results — Day 58

All errors have the same five keys: `statusCode`, `message`, `path`, `timestamp`, `requestId`.

| Request | HTTP | Expected message fragment |
|---|---:|---|
| `01-invalid-phone.json` | 400 | `phone must be a TeleBirr number: 09xxxxxxxx or +2519xxxxxxxx` |
| `02-fractional-total.json` | 400 | `totalSantim must be a whole number of santim, between 1 and 10,000,000 (100,000 ETB)` |
| `03-negative-total.json` | 400 | `totalSantim` |
| `04-zero-total.json` | 400 | `totalSantim` |
| `05-empty-lines.json` | 400 | `lines` |
| `06-missing-dish-id.json` | 400 | `lines.0.dishId` |
| `07-invalid-quantity.json` | 400 | `lines.0.quantity` |
| `08-unknown-property.json` | 400 | `isAdmin` |
| `09-invalid-restaurant-id.json` | 404 | `Restaurant 99 not found` |
| `10-closed-restaurant.json` | 409 | `Restaurant 3 is closed` |
| `11-dish-from-other-restaurant.json` | 422 | `Dish does not belong to restaurant 1` |
| `12-invalid-schedule.json` | 400 | `scheduledFor must be a future time when isScheduled is true` |
