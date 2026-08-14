# Day 20 — Asynchronous JavaScript & APIs

## Overview

This project contains the Day 20 JavaScript exercises and the Country Facts mini-project.

The work focuses on:

- Promises
- `fetch()`
- `async` and `await`
- `try` and `catch`
- HTTP errors and `res.ok`
- `Promise.all()`
- Loading, success and error states
- Fetching live API data
- Rendering API data with the DOM

## Folder Structure

```text
Day20/
├── exercise.html
├── exercise.css
├── exercise.js
├── index.html
├── styles.css
├── app.js
└── README.md
```

## Exercises

### Exercise 1

Fetches the USD to ETB exchange rate from a public exchange-rate API.

The function:

- Uses `async`
- Uses `fetch()`
- Checks `res.ok`
- Parses the JSON response
- Returns the ETB exchange rate

API:

```text
https://open.er-api.com/v6/latest/USD
```

### Exercise 2

Rewrites the fetch, JSON and render `.then()` chain using:

- `async`
- `await`
- `try`
- `catch`

### Exercise 3

Tests two different types of errors:

1. A deliberately invalid URL to demonstrate a network failure.
2. A real URL that returns HTTP 404.

The exercise checks `res.ok` because `fetch()` does not automatically reject when the server returns an HTTP error such as 404.

### Exercise 4

Uses JSONPlaceholder to:

1. Fetch a list of posts.
2. Select the first two posts.
3. Fetch their details using `Promise.all()`.
4. Render both results after the parallel requests finish.

API:

```text
https://jsonplaceholder.typicode.com/posts
```

### Exercise 5

Shows the three important request states:

1. Loading
2. Success
3. Error

The error state can be tested by opening the browser developer tools and changing the Network connection to Offline before making the request.

## Mini-Project — Country Facts

The Country Facts page allows the user to enter a country name and retrieve information from the REST Countries API.

The default country is Ethiopia.

The page displays:

- Country name
- Flag
- Capital
- Population
- Region
- Currencies

API endpoint:

```text
https://restcountries.com/v3.1/name/{country}
```

For example:

```text
https://restcountries.com/v3.1/name/ethiopia
```

## Requirements Implemented

The project:

- Uses `fetch()`.
- Uses `async/await`.
- Uses `try/catch`.
- Checks `res.ok`.
- Shows a loading message while the request is running.
- Shows a friendly error when the country cannot be found.
- Handles network errors.
- Renders successful API data with `createElement()`.
- Formats population with commas.
- Displays the country flag.
- Defaults to Ethiopia on the first page load.
- Shows Addis Ababa as Ethiopia's capital.
- Uses a search form to request another country.
- Uses no JavaScript framework.

## How to Run

No installation or npm packages are required.

Open the project folder in Visual Studio Code.

Open `index.html` with Live Server, or open the file directly in a browser.

For the exercises, open:

```text
exercise.html
```

For the mini-project, open:

```text
index.html
```

## APIs Used

### ExchangeRate-API

Used for Exercise 1.

```text
https://open.er-api.com/v6/latest/USD
```

### JSONPlaceholder

Used for Exercises 2, 4 and 5.

```text
https://jsonplaceholder.typicode.com/posts
```

### REST Countries

Used for the Country Facts mini-project.

```text
https://restcountries.com/v3.1/name/{country}
```

## Day 20 Concepts Demonstrated

The project demonstrates the main concepts from the Day 20 lesson:

```text
fetch()
↓
Response
↓
res.ok
↓
res.json()
↓
API data
↓
DOM rendering
```

It also demonstrates that network failures and HTTP errors are different and that `res.ok` must be checked when using `fetch()`.

## Submission

The files to push to GitHub are:

```text
exercise.html
exercise.css
exercise.js
index.html
styles.css
app.js
README.md
```
