function subtotal(...prices) {
  return prices.reduce((total, price) => total + price, 0);
}

function discountBy(rate) {
  return (amount) => amount * (1 - rate);
}

function withVat(amount) {
  return amount * 1.15;
}

function toETB(amount) {
  return amount.toFixed(2) + " ETB";
}

function makeReceiptMaker() {
  let orderNumber = 0;
  return (...prices) => {
    orderNumber++;
    const total = subtotal(...prices);
    const discountedTotal = discountBy(0.1)(total);
    const finalTotal = withVat(discountedTotal);

    return `#${orderNumber}: ${toETB(finalTotal)}`;
  };
}

module.exports = {
  subtotal,
  discountBy,
  withVat,
  toETB,
  makeReceiptMaker,
};
