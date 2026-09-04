import PropTypes from "prop-types";
import Card from "../Card/Card.jsx";

function Dish({ name, price, spicy, currency = "ETB", onAdd }) {
  return (
    <Card>
      <div className="dish">
        <h3>{name}</h3>

        <p>
          {price} {currency}
        </p>

        {spicy && <span>🌶️ Spicy</span>}

        <br />

        <button onClick={onAdd}>Add to Cart</button>
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
