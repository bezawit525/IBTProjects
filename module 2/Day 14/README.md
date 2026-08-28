# Day 14

## Overview

This folder contains the Day 14 exercises and mini-project. The main topics covered are Flexbox, CSS Grid, responsive layouts, positioning, and media queries.

## Exercises

### 1 — Flexbox Navbar

Built a responsive navbar with:

- Logo on the left
- Three navigation links
- A button on the right
- Vertical alignment using `align-items: center`
- Space between the logo and navigation using `justify-content: space-between`

### 2 — Flex Cards

Created four cards using Flexbox.

The cards use:

- `display: flex`
- `flex: 1`
- `flex-wrap: wrap`
- `gap`

The cards share the available width and wrap onto new lines on smaller screens.

### 3 — CSS Grid Photo Gallery

Created a responsive photo gallery using:

```css
grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
```

The number of columns changes automatically when the browser window is resized.

### 4 — Grid Page Layout

Created a page layout containing:

- Header
- Sidebar
- Main content
- Footer

The layout uses `grid-template-areas`.

On screens smaller than 700px, the layout changes to a single column.

### 5 — Product Sale Badge

Created a product card with an `ETB Sale` circular badge.

The product card uses:

```css
position: relative;
```

The badge uses:

```css
position: absolute;
```

This positions the badge at the top-right corner of the product card.

## Mini-Project — EthioConnect Dashboard

The mini-project recreates the structure of an Ethiopian telecom-style account dashboard.

The project uses placeholder content and focuses on layout rather than real functionality.

### Page Structure

The dashboard contains:

- Header
- Navigation bar
- Sidebar
- Main content
- Statistics cards
- Service cards
- Recent transactions
- Footer

## CSS Grid

Grid is used for the main page skeleton:

```css
grid-template-areas:
  "header header"
  "sidebar main"
  "footer footer";
```

Grid is also used for the responsive service cards:

```css
grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
```

## Flexbox

Flexbox is used for:

- Navbar
- Navigation links
- Statistics cards
- Welcome section
- Transaction rows

For example:

```css
display: flex;
justify-content: space-between;
align-items: center;
```

## Sticky Elements

The header uses:

```css
position: sticky;
top: 0;
```

The sidebar also uses sticky positioning on larger screens.

## Absolute Positioning

The `Popular` badge is positioned inside the service card.

The card uses:

```css
position: relative;
```

The badge uses:

```css
position: absolute;
top: 15px;
right: 15px;
```

## Responsive Design

A media query is used at 700px:

```css
@media (max-width: 700px);
```

On smaller screens:

- The page changes to one column
- The navbar becomes vertical
- The sidebar becomes part of the normal page flow
- Statistics cards wrap
- Navigation links wrap

## Technologies

- HTML5
- CSS3
- Flexbox
- CSS Grid
- Responsive Design
- Media Queries
- CSS Positioning

## Folder Structure

```text
Day-14/
│
            exercises
│   ├── exercise.html
│   └── exercise.css
│
            mini-project
    ├── index.html
    ├── styles.css

```

## Author

Bezawit Hayalu
