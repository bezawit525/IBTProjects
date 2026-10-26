# Addis Eats — Day 41

## Project Description

Addis Eats is a food ordering application built with Next.js. This project explores data fetching, caching, searching, pagination, and server API routes.

## Technologies

- Next.js
- React
- JavaScript
- SWR
- TanStack Query
- CSS

## Features

- View available Ethiopian dishes.
- Search dishes by name.
- Filter dishes by category.
- Browse dishes using pagination.
- View and manage a sample cart.
- Track simulated order status.
- Compare SWR and TanStack Query data-fetching approaches.

## Getting Started

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open http://localhost:3000 in your browser.

## Available Pages

- `/` — Home
- `/menu` — Search and filter dishes
- `/menu/paginated` — Paginated menu
- `/cart` — Shopping cart
- `/orders/1001` — Order tracking
- `/tanstack` — TanStack Query demonstration

## API Endpoints

- `GET /api/dishes` — Fetch dishes
- `GET /api/cart` — Fetch cart
- `POST /api/cart` — Add a dish to the cart
- `DELETE /api/cart` — Remove a dish from the cart
- `GET /api/orders/1001` — Fetch order status

## Notes

The cart and order tracking use demonstration data. In-memory data can reset when the server restarts.

See `DATA.md` for data-fetching decisions and architecture notes.
