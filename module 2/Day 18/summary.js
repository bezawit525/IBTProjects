import format, { withVat, total } from "./pricing.js";
import { orders } from "./orders.js";

const withTotals = orders.map((order) => ({
  ...order,
  total: withVat(total(order)),
}));

const bigOrders = withTotals.filter((order) => order.total > 500);

const grandTotal = withTotals.reduce((sum, order) => sum + order.total, 0);

console.log(" Addis Market Order Summary ");

withTotals.forEach((order) => {
  console.log(`#${order.id} ${order.customer}: ${format(order.total)}`);
});

console.log("\n--- Orders over 500 ETB ---");

bigOrders.forEach((order) => {
  console.log(`#${order.id} ${order.customer}: ${format(order.total)}`);
});

console.log(`\nGrand Total: ${format(grandTotal)}`);
