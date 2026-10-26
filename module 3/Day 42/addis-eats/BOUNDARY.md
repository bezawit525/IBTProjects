# Addis Eats — Server and Client Boundary

## Server Components

### app/layout.js

Provides the shared header, navigation, footer, and metadata.

### app/page.js

Displays the home page.

### app/menu/page.js

Reads dish data and renders the menu.

### app/menu/[id]/page.js

Reads the asynchronous route parameters and retrieves a dish.

### app/cart/page.js

Renders the interactive cart component.

### app/checkout/page.js

Renders the checkout form component.

## Client Components

### app/menu/error.js

Uses an interactive retry button.

### components/CartClient.jsx

Uses useState to change item quantities.

### components/CheckoutForm.jsx

Uses useActionState to submit the checkout form and
display server validation results.

## Server Action

### app/actions.js

Validates checkout fields and processes the demonstration submission.

## Route Handlers

### app/api/dishes/route.js

Returns menu data through GET.

### app/api/orders/route.js

Validates order data through POST.

## Main Principle

Server Components are the default.
Use "use client" only when browser-side interaction or React client
hooks are needed.
