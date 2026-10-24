# Addis Eats 🍽️

Addis Eats is a food ordering web application built with **Next.js**. Users can explore Ethiopian dishes, filter the menu by category, view dish details, manage their cart, and submit checkout forms.

## Features

- 🏠 Home page introducing Addis Eats
- 🍲 Menu displaying Ethiopian dishes
- 🔍 Filter dishes by category
- 📄 Dynamic dish detail pages
- 🛒 Shopping cart with quantity controls
- 🧾 Checkout form with input validation
- ⚡ Loading and error pages
- 🔌 API endpoint for retrieving dishes
- 📦 API endpoint for submitting orders
- 📱 Responsive user interface

## Technologies Used

- Next.js
- React
- JavaScript
- CSS
- Node.js
- REST API
- Next.js Server Components and Client Components
- Server Actions

## Project Structure

```text
addis-eats/
├── app/
│   ├── actions.js
│   ├── api/
│   │   ├── dishes/
│   │   │   └── route.js
│   │   └── orders/
│   │       └── route.js
│   ├── cart/
│   │   └── page.js
│   ├── checkout/
│   │   └── page.js
│   ├── menu/
│   │   ├── [id]/
│   │   │   └── page.js
│   │   ├── error.js
│   │   ├── layout.js
│   │   ├── loading.js
│   │   └── page.js
│   ├── globals.css
│   ├── layout.js
│   ├── not-found.js
│   └── page.js
├── components/
│   ├── CartClient.jsx
│   └── CheckoutForm.jsx
├── lib/
│   └── dishes.js
├── package.json
├── STRATEGY.md
├── BOUNDARY.md
└── README.md
```

## Installation and Setup

### 1. Install dependencies

```bash
npm install
```

### 2. Start the development server

```bash
npm run dev
```

### 3. Open the application

Visit:

http://localhost:3000

## Available Pages

| Route                       | Description                     |
| --------------------------- | ------------------------------- |
| `/`                         | Home page                       |
| `/menu`                     | View all dishes                 |
| `/menu?category=vegetarian` | Filter vegetarian dishes        |
| `/menu/1`                   | View a dish's details           |
| `/cart`                     | View the shopping cart          |
| `/checkout`                 | Complete the checkout form      |
| `/api/dishes`               | Retrieve dishes through the API |
| `/api/orders`               | Submit orders through the API   |

## API Endpoints

### Get all dishes

**GET** `/api/dishes`

Returns the available dishes in JSON format.

### Submit an order

**POST** `/api/orders`

Accepts order information in JSON format and validates the request before returning a response.

## Next.js Concepts Practiced

- App Router and file-based routing
- Dynamic routes using `[id]`
- Layouts and nested layouts
- Server Components and Client Components
- Data fetching
- Loading UI and error handling
- Custom not-found pages
- Route Handlers
- Server Actions
- Form validation
- Static generation with `generateStaticParams`

## Run a Production Build

```bash
npm run build
```

To run the production version locally:

```bash
npm run start
```

## Project Purpose

This project was developed as part of **Module 3: Frontend — React & Next.js, Day 40**. Its purpose is to combine the Next.js concepts learned throughout the module into one complete application.

---

**Project:** Addis Eats  
**Status:** Learning project  
**Developer:** Bezawit Hayalu
