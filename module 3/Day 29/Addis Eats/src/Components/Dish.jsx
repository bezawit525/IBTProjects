import { useState } from "react";
import PropTypes from "prop-types";
import Card from "./Card.jsx";

function Dish({ name, price, spicy, currency = "ETB", onAdd }) {
  const [count, setCount] = useState(0);

  function handleAdd() {
    setCount((currentCount) => currentCount + 1);
    onAdd(price);
  }

  return (
    <Card>
      <div className="dish">
        <h3>{name}</h3>

        <p>
          {price} {currency}
        </p>

        {spicy === true && <span className="spicy-badge">Spicy</span>}

        <div className="dish-actions">
          <button type="button" onClick={handleAdd}>
            Add
          </button>

          {count > 0 && <span className="count">Added: {count}</span>}
        </div>
      </div>
    </Card>
  );
}

Dish.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  spicy: PropTypes.bool,
  currency: PropTypes.string,
  onAdd: PropTypes.func.isRequired,
};

export default Dish;
