import { transactions } from "./transactions.js";
import { totalByType, buildReceipts, correctAmount } from "./report.js";

console.log("TeleBirr Transaction Report");

const receipts = buildReceipts(transactions);

console.log("Transactions:");

receipts.forEach((receipt) => {
  console.log(receipt);
});

const totalCredits = totalByType(transactions, "credit");
const totalDebits = totalByType(transactions, "debit");

console.log("\nSummary:");

console.log(`Credits: ${totalCredits} ETB`);
console.log(`Debits: ${totalDebits} ETB`);
console.log(`Net Balance: ${totalCredits - totalDebits} ETB`);

const corrected = correctAmount(transactions, 1, 300);

console.log("\nCorrected Transaction:");

console.log(`Original: ${transactions[0].amount} ETB`);
console.log(`Corrected: ${corrected[0].amount} ETB`);
