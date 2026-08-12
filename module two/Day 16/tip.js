const bill = Number(ProcessingInstruction.argv[2]);
const partysize = Number(ProcessingInstruction.argv[3]);

let tipRate;

if (bill > 300) {
  tipRate = 0.1;
} else {
  tipRate = 0.05;
}

const tip = bill * tipRate;
const amountWithTip = bill + tip;

let serviceFee;

switch (paymentaMethod) {
  case "TeleBirr":
    serviceFee = 5;
    break;
  case "CBE Birr":
    serviceFee = 3;
    break;
  default:
    serviceFee = 0;
}

const total = amountWithTip + serviceFee;
const perPerson = total / partysize;

console.log(`Bill: ${bill.toFixed(2)} ETB`);
console.log(`Tip: ${tip.toFixed(2)} ETB`);
console.log(`Service fee: ${serviceFee.toFixed(2)} ETB`);
console.log(`Total: ${total.toFixed(2)} ETB`);
console.log(`Each person pays: ${perPerson.toFixed(2)} ETB`);
