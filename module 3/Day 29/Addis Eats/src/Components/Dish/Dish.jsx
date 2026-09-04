import { useState } from "react";
import PropTypes from "prop-types";
import Card from "../Card/Card.jsx";

function Dish({ name, price, spicy, currency = "ETB" }) {
  const [count, setCount] = useState(0);

  return (
    <Card>
      <div className="dish">
        <h3>{name}</h3>

        <p>
          {price} {currency}
        </p>

        {spicy && <span>Spicy</span>}

        <p>Quantity: {count}</p>

        <button onClick={() => setCount(count + 1)}>Add</button>
      </div>
    </Card>
  );
}

Dish.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  spicy: PropTypes.bool,
  currency: PropTypes.string,
};

export default Dish;
