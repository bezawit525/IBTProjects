# Day 19 - The DOM & Events

🎥 Loom Video:

🌐 Live Application: https://cosmic-piroshki-b5782f.netlify.app/

## Description

This folder contains the Day 19 DOM and Events work from IBT College Canada CodeOps Module 2. It includes the core DOM/Events exercises plus the **Addis Market Shopping List** mini-project, built in two stages as the exercise evolved.

The work practices selecting and changing DOM elements, creating elements with JavaScript, handling events, understanding event bubbling, using event delegation, and handling form submission.

## Folder Structure

```text
day19/
│
         # Day 19 core DOM & Events exercises
├── exercise.css
├── exercise.js
│
          # Addis Market - first version (in-class exercise)
│   ├── index.html
│   ├── style.css
│   └── app.js
│
    # Addis Market - project 2 version (with prices in ETB)
│   ├── market.html
│   ├── market.css
│   └── market.js
│
└── README.md
```

## Part 1: Core DOM & Events Exercises

### DOM Manipulation

An `<h1>` is selected and its text is changed using `textContent`. A CSS class is added or removed using `classList.toggle`.

### Ethiopian Cities

An array containing three Ethiopian city names is used. Each city is created as an `<li>` using `createElement` and added to a `<ul>` using `append`.

### Events and Bubbling

A click listener is attached to a button and logs `event.target` to the console. The button is wrapped inside a `<div>` with its own click listener, demonstrating event bubbling.

### Delete Items

The list contains items with delete buttons. A single delegated click listener is attached to the parent list. The clicked delete button is identified using `event.target`, and its closest `<li>` is removed.

### Form Submission

The form contains one text input. On submit:

1. `preventDefault()` prevents the page from reloading.
2. The input value is read using `.value`.
3. Empty input is ignored.
4. A new `<li>` is created and appended to the list.
5. The input field is cleared.

## Addis Market Shopping List

### Version 1 project — In-Class Exercise (`addis-market/`)

A simple single-page shopping list app using the **state-then-render loop**.

**Features**

- Add grocery items using a form
- Validate the input before adding an item
- Display all shopping items in a list
- Mark an item as bought / undo a bought item
- Remove an item
- Display the number of items remaining
- Update the list automatically after every change
- Use `data-id` to identify each item
- Use event delegation for list button clicks
- Use a CSS class for the bought state

### Version 2 Project (`addis-market-project/`)

An extended version of Addis Market that adds item prices in ETB and a running total.

**Features**

- Add a shopping item with its name and price
- Validate the item name and price before adding
- Mark an item as bought
- Remove an item from the list
- Display the total price in ETB, updated automatically
- Show the current number of items
- Show a message when the shopping list is empty
- Use event delegation for the shopping list
- Responsive design for smaller screens

**How It Works**

The form takes the item name and its ETB price. On submit, JavaScript prevents the page from refreshing and validates the input. Each shopping item is created using DOM methods such as `createElement()` and `append()`. The shopping list has a single click listener that handles both removing items and marking them as bought, using event delegation so newly added items work without extra listeners. The total price is recalculated whenever an item is added or removed.

## Technologies Used

- HTML5
- CSS3
- JavaScript
- DOM Manipulation
- JavaScript Events
- Event Bubbling
- Event Delegation

## How to Run

1. Open the `day19` folder in VS Code.
2. Open `exercise.html` for the core exercises, or `index.html` / `market.html` for the respective Addis Market versions.
3. Use the Live Server extension in VS Code for the best experience.
4. Open the browser console to observe the event output for Exercise 3.

### Author

Bezawit Hayalu
