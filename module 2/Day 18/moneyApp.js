// 5 Import and use the functions from money.js.

import { addVat, VAT } from "./money.js";

const amount = 850;

console.log(`VAT rate: ${VAT * 100}%`);
console.log(`Original amount: ${amount} ETB`);
console.log(`Amount with VAT: ${addVat(amount).toFixed(2)} ETB`);
