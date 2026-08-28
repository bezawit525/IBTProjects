# Tip Calculator

## Description

This JavaScript program calculates a restaurant bill based on the bill amount and party size. It adds a tiered tip and a service fee depending on the payment method.

## How It Works

1. Reads the bill amount and party size from the command line using `process.argv`.
2. Converts the bill amount to a number using `Number()`.
3. Adds:
   - **10% tip** when the bill is over 300 ETB.
   - **5% tip** when the bill is 300 ETB or less.

4. Uses the party size to calculate how much each person pays.
5. Uses a `switch` statement to add a service fee for:
   - TeleBirr
   - CBE Birr

6. Prints the bill, tip, service fee, total, and amount per person using template literals.

## Author

Bezawit Hayalu
