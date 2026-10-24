# Addis Eats — Rendering Strategy

## /

The home page is a Server Component with mostly static content.

## /menu

The menu is a Server Component. It retrieves dishes directly
from the shared data module and filters them by category.

## /menu/[id]

This is a dynamic route. It retrieves a dish using its ID.
generateStaticParams() lists known dish IDs for pre-rendering.

## /cart

The page is a Server Component that renders CartClient.
CartClient uses React state for quantity changes.

## /checkout

The page is a Server Component. CheckoutForm uses useActionState
to call the Server Action and display validation results.

## /api/dishes

A GET Route Handler returns the available dishes as JSON.

## /api/orders

A POST Route Handler validates incoming JSON and returns
appropriate HTTP status codes.

## Loading, Errors, and Missing Resources

menu/loading.js provides loading UI.
menu/error.js provides retry UI.
not-found.js handles missing dishes.

## Current Limitations

The sample dishes are stored in memory.
Orders are not saved in a database.
The demonstration cart is not persistent.
No payment or delivery service is connected.
