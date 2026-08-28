//vat function uding default parameter then arrow function

function vat(amount, rate = 0.15) {
  return amount + amount * rate;
}

const vatArrow = (amount, rate = 0.15) => amount + amount * rate;

//makeCounter closure

function makeCounter() {
  let count = 0;

  return function () {
    count++;
    return count;
  };
}

//discountBy factory
function dicountBy(rate) {
  return function (price) {
    return price - price * rate;
  };
}

const memberPrice = discountBy(0.1);
const salePrice = discountBy(0.3);

console.log("member price:", memberPrice(1000), "ETB");
console.log("sale price:", salePrice(1000), "ETB");

//apply higher order to all functions
function applyToAll(list, fn) {
  return list.map(fn);
}

const prices = [300, 800, 4000, 7000];

const pricesWithVAT = applyToAll(prices, vat);

console.log(" Prices with VAT:", pricesWithVAT);

// forEach callback

const cities = ["Addis Ababa", "Dire Dawa", "Bahir Dar", "Gondar", "Hawassa"];

console.log("5. Ethiopian cities:");

cities.forEach((city, index) => {
  console.log(`${index + 1}. ${city}`);
});
