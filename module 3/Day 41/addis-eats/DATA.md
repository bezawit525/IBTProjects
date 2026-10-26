# Day 41 — Addis Eats Data-Fetching Decisions

## 1. Menu Search and Category Filtering

**What data is fetched?**

The menu API returns dishes matching the search text and selected category.

**Why does it need client-side behavior?**

The results need to update when the user types or changes the category.

**What is the query key?**

The SWR key is the API URL, including the search text and category.

**How long is the data fresh?**

SWR uses its default revalidation behavior. The menu is small and the example does not configure a custom freshness interval.

**What causes revalidation?**

Changing the search or category changes the key. SWR can also revalidate when the browser regains focus.

**What happens after a mutation?**

After a successful cart change, the cart calls `mutate()` to refresh its data.

**Is initial server data available?**

The home page displays initial menu data directly from a Server Component. The interactive search page fetches its results through SWR.

## 2. Live Order Tracking

**What data is fetched?**

The status, message, and last-updated time for a particular order.

**Why does it need client-side behavior?**

Order status may change while the user is viewing the page.

**What is the query key?**

`/api/orders/[id]`, with the actual order ID in the URL.

**How long is the data fresh?**

The example uses SWR polling every five seconds.

**What causes revalidation?**

The five-second refresh interval and browser focus revalidation.

**What happens after a mutation?**

This demo does not implement an order-status mutation. In a real application, an order update should trigger revalidation of the relevant order query.

**Is initial server data available?**

Yes. The Server Component fetches an initial order and passes it to the client component using `fallbackData`.

## 3. Pagination

**What data is fetched?**

A page of menu dishes, plus the current page and total page count.

**Why does it need client-side behavior?**

The user controls which page is displayed.

**What is the query key?**

The API URL includes `page` and `limit`, so each page has its own key.

**How long is the data fresh?**

SWR uses its default revalidation behavior.

**What causes revalidation?**

Clicking Next or Previous changes the page and therefore the key.

**What happens after a mutation?**

If a menu item changes, the affected menu pages should be revalidated.

**Is initial server data available?**

This example fetches paginated data on the client. Server-provided initial data could also be passed to SWR.

## 4. TanStack Query

The `/tanstack` page demonstrates the alternative TanStack Query approach.

- Query key: `["dishes"]`
- Query function: `getDishes`
- Freshness period: 30 seconds (`staleTime`)
- Manual revalidation: the Refresh Menu button calls `refetch()`.
- Provider: `QueryClientProvider` is configured in `app/providers.js`.

SWR and TanStack Query are both demonstrated for learning. A production application would usually select one main client-side query library for a given data domain.

## 5. Capstone Architecture Decision

The Addis Eats capstone should not move every request to the browser.

- **Server Components:** initial pages and data that do not need browser interaction.
- **SWR:** interactive search, pagination, polling, and refreshing the cart.
- **TanStack Query:** an alternative for applications that need structured query caching, mutations, and more complex invalidation.
- **API Route Handlers:** HTTP endpoints that provide data to the client.

The main principle is to choose the data-fetching approach based on what each screen needs.

## 6. Limitations

The menu, cart, and order status use demonstration data. The cart is stored in server memory and resets when the server restarts. Order tracking returns a simulated status and is not connected to a real restaurant or payment service.
