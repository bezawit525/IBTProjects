# Data fetching

## Menu
- `app/menu/page.js` loads initial dish data on the server.
- `lib/data.js` reads the built-in demo menu when `API_URL` is blank.
- When `API_URL` is set, `lib/data.js` requests `${API_URL}/dishes` and `${API_URL}/dishes/:id`.
- `app/api/dishes/route.js` supports `q`, `page`, and `limit` query parameters.

## SWR
`components/MenuSearch.js` waits 300 ms after the last keystroke before searching. SWR keeps previous results while a new request is pending and uses pagination in its request key.

`components/OrderStatus.js` uses the server-provided initial status and revalidates every 5 seconds.

## Demo data
`lib/store.js` stores dishes, demo users, and orders in memory. This is for learning only; restart clears orders. Replace it with the course API or persistent database for a deployed system.
