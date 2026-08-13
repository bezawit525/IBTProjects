export const totalByType = (txns, type) => {
  return txns
    .filter((txn) => txn.type === type)
    .reduce((sum, { amount }) => sum + amount, 0);
};

export const buildReceipts = (txns) => {
  return txns.map(({ id, customer, amount, type }) => {
    const sign = type === "credit" ? "+" : "-";
    return `#${id} - ${customer} - ${sign}${amount} ETB (${type})`;
  });
};

export const correctAmount = (txns, id, newAmount) => {
  return txns.map((txn) =>
    txn.id === id ? { ...txn, amount: newAmount } : txn,
  );
};
