# 🏺 Clay House

Handcrafted artisanal ceramics e-commerce — React capstone (Module 3, Day 35 kickoff).

**Stack:** React 19 · Vite · React Router · Tailwind CSS v4

## Run it

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build
npm run lint
```

## 1. The brief

Independent ceramic studios and small-batch potters face a bad choice: sell through mass marketplaces such as Amazon, where a hand-thrown mug is treated like any factory-made item, or take orders by message with no proper ordering process at all. Clay House is a calm, tactile online shop built for these studios. It shows the craft that marketplaces hide: glaze, dimensions and care instructions. It also keeps checkout short enough that a first-time visitor can finish it in a minute.

**The user** is a home decorator or slow-living shopper who wants authentic tableware and decor, not mass-produced goods. Later modules add a second audience, the studio potter, who releases seasonal drops and manages stock.

**On the first screen** the shopper sees the hero and the collection, filters by category (Mugs, Bowls, Plates, Vases, Decor) and opens any piece to inspect its photos, glaze and size. From there they set a quantity, add it to the cart, review live subtotal and flat-rate shipping, fill in a short delivery form, and receive an order reference such as `#CH123456`.

**The five screens** and the data each needs:

| # | Screen | Data it needs |
|---|--------|---------------|
| 1 | Home / catalog | Product list (fetched), selected category (URL) |
| 2 | Product detail | One product by `:id` (fetched): images, price, stock, rating, details |
| 3 | Cart | Cart lines, subtotal, shipping, total |
| 4 | Checkout | Cart lines and totals, delivery form fields |
| 5 | Order confirmation | The just-placed order (reference, lines, totals) |
| — | Not found (`*`) | Nothing |

Scope is deliberate: one user, one data source, five screens. No payments, accounts or admin yet; those arrive in the Next.js weeks.

## 2. Route map

| Path | Renders | Param | Needs sign-in |
|------|---------|-------|---------------|
| `/` | `HomePage` (`?category=mugs` filter) | query: `category` | No |
| `/products/:id` | `ProductDetailPage` | `:id` (slug, e.g. `ceramic-mug`) | No |
| `/cart` | `CartPage` | — | No |
| `/checkout` | `CheckoutPage` (lazy) | — | Not yet. Guest checkout now; guarded route with saved addresses in Days 41–45 |
| `/order-success` | `OrderSuccessPage` (lazy) | — | Not yet. Becomes `/orders/:id` with auth |
| `*` | `NotFoundPage` | — | No |

All routes are nested under `Layout` (navbar, `<Outlet />`, footer).

## 3. Component tree and ownership

```
App
└─ Layout                  navbar, ErrorBoundary + Suspense around <Outlet/>, footer
   ├─ HomePage             owns: category (URL), products (fetched)
   │  ├─ CategoryBar       props: selected, onSelect
   │  └─ ProductCard       props: product
   ├─ ProductDetailPage    owns: nothing — reads :id, fetches product
   │  └─ ProductView       owns: imageIndex, qty, added
   ├─ CartPage             reads: cart context
   ├─ CheckoutPage         owns: form, touched, submitting, submitError
   ├─ OrderSuccessPage     reads: last order (sessionStorage)
   └─ NotFoundPage
```

## 4. Where state lives

| State | Where | Why |
|-------|-------|-----|
| Selected category | URL `?category=` | Shareable, survives refresh |
| Fetched products / product | The component that displays them (`useFetch`) | Only that screen needs them |
| Cart lines | `CartContext` (reducer + `localStorage`) | Read on navbar, product, cart, checkout |
| Checkout form + touched | `CheckoutPage` only | Nobody else reads it |
| Gallery image, quantity | `ProductView` | Local to one screen |
| Last placed order | `sessionStorage` via `api/orders.js` | Confirmation survives a reload |

## 5. Folders (grouped by feature)

```
src/
├── api/        products.js, orders.js, productsData.js   (simulated API with abort support)
├── hooks/      useFetch.js                                (fetch + loading/error/retry + cleanup)
├── ui/         Spinner, ErrorMessage, ErrorBoundary, QuantityStepper, Icons, format
├── cart/       CartProvider, cart-context, useCart, CartBadge, CartPage
├── catalog/    HomePage, CategoryBar, ProductCard, ProductDetailPage
├── checkout/   CheckoutPage, Field, validate.js, OrderSuccessPage
├── App.jsx     route declarations
├── Layout.jsx  shell
└── NotFoundPage.jsx
```

## 6. Failure-path checks

- [x] Slow load: spinner while products load, no blank screen
- [x] Failed request: error message with a "Try again" button
- [x] Empty category (Decor): friendly note, not an error
- [x] Nonsense URL: 404 page; unknown product id: "couldn't find that piece"
- [x] Empty cart at `/cart` and `/checkout`: guidance, not a crash
- [x] Reload on every screen loads cold without crashing
- [x] Checkout validation: errors shown as text with a ⚠ marker (not colour alone), keyboard-operable

## Design reference

`docs/mockup.png` is the design mockup; `docs/screenshots/` holds screenshots of the built screens.
