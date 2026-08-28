//1 Use map, filter, and reduce with ETB prices.
const prices = [120, 450, 780, 1250, 320, 950];

const pricesWithVat = prices.map((price) => price * 1.15);

const affordablePrices = pricesWithVat.filter((price) => price < 1000);

const grandTotal = affordablePrices.reduce((total, price) => total + price, 0);

console.log("Prices with VAT:", pricesWithVat);
console.log("Prices under 1000 ETB:", affordablePrices);
console.log("Grand Total:", grandTotal.toFixed(2), "ETB");

//2 Create a customer object and use Object.entries with for...of.
const customer = {
  name: "Mimi",
  city: "Addis Ababa",
  balance: 2450,
};

console.log("\nCustomer Information:");

for (const [key, value] of Object.entries(customer)) {
  console.log(`${key}: ${value}`);
}

//3 Use object destructuring and parameter destructuring.
const { name, city } = customer;

console.log(`\n${name} lives in ${city}.`);

function greet({ name }) {
  console.log(`Hello, ${name}! Welcome to our shop.`);
}

greet(customer);

//4 Use spread to create an updated copy without mutating the original.
const updatedCustomer = {
  ...customer,
  city: "Bishoftu",
  phone: "0912345678",
};

console.log("\nOriginal Customer:");
console.log(customer);

console.log("\nUpdated Customer:");
console.log(updatedCustomer);
