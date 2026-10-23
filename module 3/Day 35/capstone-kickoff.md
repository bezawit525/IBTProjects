# 🏺 Clay House — React Capstone Kickoff & Project Brief

> **Project Name:** Clay House  
> **Domain:** Handcrafted Artisanal Ceramics E-Commerce  
> **Course Module:** React Mini-Project & Capstone Kickoff (Module 3)  
> **Tech Stack:** React 19, Vite, React Router v7, Tailwind CSS v4

---

## 🎨 Design Mockup Reference

## 1. Project Brief

### 1.1 What problem are you solving?

Independent ceramic studios and small-batch pottery artisans face a digital dilemma: either sell through mass e-commerce marketplaces (Amazon, generic storefronts) where their handcrafted pieces are treated like commoditized, mass-produced items, or operate without an integrated digital ordering process.

**Clay House** solves this by providing an intentional, calm, and tactile e-commerce shopping experience. It honors the material aesthetic of stoneware and terracotta, emphasizes craftsmanship details (glaze types, dimensions, care instructions), and simplifies the checkout process for art collectors and mindful consumers.

### 1.2 Who is the main user?

- **Primary Shoppers:** Home decorators, interior design enthusiasts, slow-living lifestyle shoppers, and specialty culinary hosts seeking authentic, tactile tableware.
- **Secondary Audience (Future Module):** Studio potters and inventory admins who need to release seasonal drops, manage small-batch stock, and review customer orders.

### 1.3 What does the user do?

1. **Explores & Filters:** Browses handcrafted ceramics organized by functional category (_Mugs_, _Bowls_, _Plates_, _Vases_, _Decor_).
2. **Inspects Artistry:** Views high-resolution pottery galleries, reads speckled glaze/clay specifications, and evaluates customer reviews.
3. **Curates Cart:** Adjusts order quantities, views dynamic live calculations (subtotal and flat-rate shipping), and removes items.
4. **Orders:** Fills out a streamlined delivery form and receives instant order confirmation with a unique reference number.

### 1.4 What are the main features?

- **Warm Earthy Design System:** Custom terracotta and sand color palette with warm serif headings (`Playfair Display`) and clean body typography (`Plus Jakarta Sans`).
- **Category Filtering:** Dynamic pill-based filtering with smooth transitions.
- **Interactive Product Gallery:** Multi-thumbnail selector on the product detail page with stock badges and increment/decrement counters.
- **Persistent Shopping Cart Context:** Global React Context (`CartContext`) that synchronizes state to `localStorage` and drives real-time badge counts in the navigation bar.
- **Delivery Checkout & Validation:** Client-side validated form fields for customer details, coupled with a sticky order summary breakdown.
- **Order Confirmation Screen:** Generates a real-time order reference (e.g., `#CH123456`) and itemized receipts.
- **Custom 404 Experience:** Artisanal organic pottery artwork and one-click return home navigation.

---

## 3. Route Map & Architecture

```
src/
├── components/
│   ├── Navbar.jsx          # Header with logo & live cart count badge
│   ├── Footer.jsx          # "Clay House — Handmade with care."
│   ├── Layout.jsx          # Root layout shell with <Outlet />
│   └── ProductCard.jsx     # Reusable card component for catalog
├── context/
│   └── CartContext.jsx     # Cart state, item math, and localStorage sync
├── data/
│   └── products.js         # Curated pottery items, categories & imagery
├── pages/
│   ├── HomePage.jsx        # Screen 1: Catalog & Hero
│   ├── ProductDetailPage.jsx# Screen 2: Dynamic /products/:id
│   ├── CartPage.jsx        # Screen 3: /cart
│   ├── CheckoutPage.jsx    # Screen 4: /checkout
│   ├── OrderSuccessPage.jsx# Screen 5: /order-success
│   └── NotFoundPage.jsx    # Screen 6: 404 Catch-All
├── App.jsx                 # Route declarations
├── main.jsx                # BrowserRouter & CartProvider mounting
└── index.css               # Tailwind CSS v4 & theme design tokens
```

### 3.1 Dynamic Routes

- **`/products/:id`**: Matches any product by its slug (e.g. `/products/ceramic-mug`, `/products/serving-bowl`, `/products/decorative-vase`). Extracted via `useParams()`.

### 3.2 Authentication & Next.js Roadmap

- **Checkout & Customer Accounts:** In future modules, `/checkout` will support authenticated checkout with saved addresses.
- **Order Tracking (`/orders/:id`):** Authenticated user portal to look up past kiln batch orders.
- **Admin Studio Dashboard (`/admin`):** Protected route with role-based authentication to upload new ceramic pieces, edit glaze details, and track stock.

---

## 4. Git Commit History

The repository has been initialized with clean, atomic commits reflecting each milestone:

1. `30d257a` — `chore: scaffold Vite + React project with Tailwind CSS & dependencies`
2. `2b85e68` — `style: configure artisanal clay & sand color palette and serif typography`
3. `fef3f47` — `feat: add ceramic catalog mock dataset and reactive CartContext state management`
4. `c144269` — `feat: implement Layout, Navbar with cart badge, Footer and ProductCard`
5. `f4a2f48` — `feat: implement 6 core screens matching mockup (Home, Details, Cart, Checkout, Success, 404)`
6. `4cb947b` — `docs: add comprehensive Capstone Project Brief, Route Map and README documentation`

---

## 5. Next Steps for GitHub Push

Run these commands in PowerShell or Terminal inside `C:/Users/Beza/.gemini/antigravity/scratch/clay-house`:

```powershell
# 1. Create a new repository named "clay-house" on github.com
# 2. Link your local repo and push:
git remote add origin https://github.com/<YOUR_GITHUB_USERNAME>/clay-house.git
git push -u origin main
```
