import format, { withVat, total } from "./pricing.js";
import orders from "./orders.js";

const withTotals = orders.map((order) => ({
  ...order,
  total: withVat(total(order)),
}));

const bogOrdders = withTotals.filter(({ total }) => total > 500);

const grandTotal;
