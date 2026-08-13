// 5Create a module that exports VAT and addVat.

export const VAT = 0.15;

export const addVat = (amount) => amount * (1 + VAT);
