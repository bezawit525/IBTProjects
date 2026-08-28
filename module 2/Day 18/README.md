# Day 18 JavaScript Projects

This folder contains the JavaScript exercises and mini-projects completed for Day 18 of the IBT College Canada CodeOps Module 2.

The projects practice modern JavaScript features including arrays, objects, `map()`, `filter()`, `reduce()`, destructuring, spread, and ES modules.

## Projects

### 1. Addis Market — Order Pricing and Summary

This project processes a list of Addis Market orders.

It:

- Calculates the total price of each order.
- Adds 15% VAT.
- Uses `map()` to add totals to orders.
- Uses `filter()` to find orders over 500 ETB.
- Uses `reduce()` to calculate the grand total.
- Uses destructuring to access object properties.
- Uses spread to create updated copies without changing the original data.
- Uses ES modules to separate data and pricing logic.

#### Project Structure

```text
addis-market/
├── orders.js
├── pricing.js
├── summary.js
└── README.md
```

#### Main Concepts

```text
orders
   ↓
map()
   ↓
reduce()
   ↓
spread
   ↓
filter()
   ↓
reduce()
   ↓
formatted summary
```

---

### 2. TeleBirr Transaction Report

This mini-project creates a transaction report for an Addis shop using TeleBirr transaction data.

Each transaction contains:

- `id`
- `customer`
- `amount`
- `type`

The `type` can be either `credit` or `debit`.

The project:

1. Builds formatted transaction receipts.
2. Calculates total credits.
3. Calculates total debits.
4. Calculates the net balance.
5. Demonstrates how to update a transaction without changing the original object.

#### Project Structure

```text
telebirr-report/
├── transactions.js
├── report.js
├── app.js
└── README.md
```

#### Main Concepts

**`filter()`**

Separates transactions by type.

```js
txns.filter((txn) => txn.type === type);
```

**`reduce()`**

Calculates transaction totals.

```js
.reduce((sum, { amount }) => sum + amount, 0);
```

**`map()`**

Creates formatted receipt strings.

```js
txns.map(({ id, customer, amount, type }) => {
  return `#${id} - ${customer} - ${amount} ETB`;
});
```

**Destructuring**

Extracts values directly from transaction objects.

```js
({ id, customer, amount, type });
```

**Spread**

Creates an updated copy without changing the original transaction.

```js
{
  ...txn,
  amount: newAmount
}
```

### 3. Day 18 JavaScript Exercises

This project contains the five required Day 18 exercises.

#### Requirement 1 — ETB Prices

An array of ETB prices is processed using array methods.

- `map()` adds 15% VAT.
- `filter()` keeps prices under 1000 ETB.
- `reduce()` calculates the grand total.

#### Requirement 2 — Customer Object

A customer object is created with:

- `name`
- `city`
- `balance`

`Object.entries()` and a `for...of` loop are used to display each key and value.

#### Requirement 3 — Destructuring

The `name` and `city` properties are extracted using object destructuring.

The `greet()` function uses parameter destructuring to receive the customer's name.

#### Requirement 4 — Spread

The spread operator creates an updated copy of the customer object.

The new object changes the city and adds a phone field while leaving the original object unchanged.

#### Requirement 5 — Modules

The module exercise is divided into two files.

**`money.js`**

Exports:

- `VAT`
- `addVat()`

**`moneyApp.js`**

Imports `VAT` and `addVat()` from `money.js` and calculates the VAT-inclusive price.

`moneyApp.js` is used instead of `app.js` because another `app.js` already exists in the TeleBirr project.

#### Project Structure

```text
Day18/
├── exercise.js
├── money.js
├── moneyApp.js
└── README.md
```

---

## JavaScript Concepts Practiced

The Day 18 projects practice:

- Arrays
- Objects
- `map()`
- `filter()`
- `reduce()`
- `for...of`
- `Object.entries()`
- Object destructuring
- Function parameter destructuring
- Spread operator
- ES modules
- `export`
- `import`
- VAT calculations
- Formatting ETB values
- Data transformation
- Avoiding mutation of original objects

## ES Modules

Because the projects use ES modules, the `package.json` file should contain:

```json
{
  "type": "module"
}
```

The projects can then be run with Node.js.

For the Addis Market project:

```bash
node summary.js
```

For the TeleBirr project:

```bash
node app.js
```

For the exercises:

```bash
node exercise.js
```

For the modules exercise:

```bash
node moneyApp.js
```

## Author

Bezawit Hayal
