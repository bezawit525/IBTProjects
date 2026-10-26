export const withVat = (amount) => amount * 1.15;

export default function format(amount) {
  return `${amount.toFixed(2)} ETB`;
}

export const total = (order) =>
  order.items.reduce((sum, { price, qty }) => sum + price * qty, 0);
