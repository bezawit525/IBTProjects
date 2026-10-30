# Performance and environment

## Current implementation
- `next/font/google` loads Geist through Next.js font optimization.
- The interface uses responsive CSS grids and system fallbacks.
- Menu data is fetched on the server first.
- SWR is limited to interactive menu search/pagination and order status polling.
- API responses used for interactive data set `Cache-Control: no-store`.
- Metadata is defined in the root layout and route-specific pages.
- `app/sitemap.js` and `app/robots.js` generate sitemap and robots rules.

## Environment variables
- `API_URL`: optional server-side API base URL.
- `SESSION_SECRET`: HMAC signing secret; set a strong random value.
- `SITE_URL`: canonical site origin, e.g. `https://your-domain.example`.

Do not expose secrets through `NEXT_PUBLIC_*` variables and do not commit `.env.local`.

## Check
Run `npm run build`, then `npm run start`, and test `/`, `/menu`, `/cart`, `/signin`, `/orders`, `/kitchen`, `/sitemap.xml`, and `/robots.txt`.
