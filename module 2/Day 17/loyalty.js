const normalEarnRule = (etb) => Math.floor(etb / 10);

const holidayEarnRule = (etb) => Math.floor(etb / 10) * 2;

function createLoyalty(earnRule = normalEarnRule) {
  let points = 0; // Private state

  return {
    earn(etb) {
      points += earnRule(etb);
    },

    redeem(amount) {
      points = Math.max(0, points - amount);
    },

    balance() {
      return points;
    },
  };
}

const card = createLoyalty();

card.earn(250);
card.redeem(10);

console.log("Normal balance:", card.balance());

const holidayCard = createLoyalty(holidayEarnRule);

holidayCard.earn(250);

console.log("Holiday balance:", holidayCard.balance());
