# Day 12 HTML Projects

This repository contains my Day 12 HTML work, including the Habesha Eatery mini-site and HTML accessibility exercises.

## Files

### `index.html`

Habesha Eatery reservation page.

It includes:

- Reservation form
- Name, email, telephone, date, and party-size fields
- Special requests textarea
- Ethiopian food menu table
- Prices in ETB
- Accessible media
- Semantic HTML structure

### `contact.html`

Habesha Eatery contact page.

It includes:

- Contact form
- Name and email fields
- Message textarea
- Opening-hours table
- Accessible form controls
- Semantic HTML structure

### `exercises.html`

Day 12 HTML exercises covering forms, tables, media, and accessibility.

#### 1. Ethio Telecom Registration Form

- Full name
- Email
- Telephone number
- `+251` and 9-digit phone validation
- Branch selection: Bole, Kazanchis,Piassa

* Labels for all controls
* POST submission method with an explanatory comment

#### 2. Ethiopian Airlines Flight Table

A five-row flight schedule containing: Flight, From ,To, Departs, Price ETB

The table uses a caption, `<thead>`, `<tbody>`, and column-scope headers.

#### 3. Media Block

The page includes:

- An Ethiopian food or landmark image
- Meaningful `alt` text
- `<figure>`
- `<figcaption>`
- Addis Ababa map
- Descriptive iframe `title`

#### 4. Accessibility Improvements

Three inaccessible examples were corrected:

- A `<div>` used as a button was replaced with a `<button>`
- An unlabelled input was given a connected `<label>`
- An image without `alt` text was given meaningful alternative text

Comments explain how each fix helps keyboard and screen-reader users.

#### 5. Page Metadata and Validation

The page includes:

- Character encoding
- Viewport
- Unique title
- Meta description
- Semantic HTML

## Project Structure

```text
Day12/
├── index.html
├── contact.html
├── exercises.html
├── README.md
```

## Author

Bezawit Hayalu
