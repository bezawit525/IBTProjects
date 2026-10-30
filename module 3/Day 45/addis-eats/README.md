# Addis Eats — Day 45

A course-scoped Next.js App Router demo integrating routing, Server and Client Components, Route Handlers, Server Actions, SWR, sessions, role checks, optimization, metadata, sitemap, robots, and documentation.

## Requirements
- Node.js 20.9 or newer recommended
- npm

## Setup
1. Open this project folder in VS Code.
2. In the terminal, run:

   ```bash
   npm install
   ```

3. Copy `.env.example` to `.env.local`.
4. Set a long random `SESSION_SECRET` in `.env.local`. Keep `.env.local` private.
5. Start the development server:

   ```bash
   npm run dev
   ```

6. Open http://localhost:3000.

## Demo sign-in accounts
- Customer: phone `0911111111`, password `customer123`
- Staff: phone `0922222222`, password `staff123`

These are demo-only credentials. Do not use them in a deployed application.

## Test the main flow
1. Visit `/menu`.
2. Search a dish and use Previous/Next pagination.
3. Open a dish and add it to the cart.
4. Visit `/cart`, then `/checkout`.
5. Sign in as the demo customer if asked.
6. Place an order and open its details.
7. In another browser session, sign in as staff and open `/kitchen`.
8. Change the order status. The customer's order detail page polls status every 5 seconds.
9. Test `/sitemap.xml` and `/robots.txt`.

## Production check
```bash
npm run build
npm run start
```

## Important limitations
This project uses an in-memory store so demo orders reset when the server restarts and may not be shared across multiple server instances. The built-in demo login is for coursework only. For deployment, connect the authentication and data operations to the backend/database provided by your course. `API_URL` is optional and expects `/dishes` to return an array or `{ "dishes": [] }`, and `/dishes/:id` to return one dish.
