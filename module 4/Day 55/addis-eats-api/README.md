# Addis Eats API — Day 55

NestJS REST API build for the CodeOps Day 55 exercise. The project extends the previous Addis Eats NestJS work and adds the Restaurants and Dishes resources using typed in-memory repositories.

## Requirements

- Node.js
- npm

## Install and run

```bash
npm install
npm run start:dev
```

The API listens on `http://localhost:3000` and uses the global `/api` prefix.

## Resources

### Restaurants

- `GET /api/restaurants` — list restaurants
- `GET /api/restaurants?area=Bole` — filter by delivery area
- `GET /api/restaurants/:id` — find one restaurant (404 if absent)
- `POST /api/restaurants` — create a restaurant (201)

Restaurant areas: `Bole`, `Kazanchis`, `Piassa`, `Megenagna`.

### Dishes

- `GET /api/dishes` — list dishes
- `GET /api/dishes/:id` — find one dish (404 if absent)
- `GET /api/dishes?restaurantId=1` — filter by restaurant
- `POST /api/dishes` — create a dish (201)

A dish must reference an existing restaurant. A missing restaurant reference returns `400 Bad Request`, because the submitted request contains an invalid relationship.

Dish request example:

```json
{
  "name": "Special Kitfo",
  "priceSantim": 42000,
  "restaurantId": 1
}
```

`priceSantim` is stored as an integer in santim. The DishesService has no dependency on `@nestjs/common`; HTTP errors are translated in the controller.

## Validation

The global `ValidationPipe` enables `whitelist` and `transform`. DTO validation rejects missing or invalid fields and strips properties not declared in the DTO.

## Test requests

Install the VS Code REST Client extension and open `requests.http`. Run each request using **Send Request**.

## Build

```bash
npm run build
```

## Git workflow for Day 55

```bash
git checkout -b day-55-first-api
git add .
git commit -m "feat(restaurants): add first working REST endpoints

GET /api/restaurants, GET /:id with 404, POST with validation.
In-memory store behind RestaurantRepository."
git push -u origin day-55-first-api
```

Do not commit `node_modules/`, `dist/`, `.env`, or log files. The repository `.gitignore` excludes these generated and private files.

## Project notes

- Restaurant and dish data are in-memory and reset when the server restarts.
- The restaurant seed contains four Addis restaurants.
- The dish seed contains eight dishes distributed across the four restaurants.
- Orders are retained as the previous Day 54 scaffold; Payments is scaffolded for the upcoming course work.
