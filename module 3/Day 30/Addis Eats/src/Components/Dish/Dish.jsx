import PropTypes from "prop-types";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext.js";

function Dish({ name, price, spicy, currency = "ETB", dish }) {
  const { dispatch } = useContext(CartContext);
  function handleAdd() {
    dispatch({
      type: "add",
      dish,
    });
  }
  return (
    <div className="dish">
      <div>
        <h2>{name}</h2>
        <p>
          {price} {currency}
        </p>
        <p>{spicy && <span>Spicy</span>}</p>
      </div>
      <button onClick={handleAdd}>Add</button>
    </div>
  );
}

Dish.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  spicy: PropTypes.bool,
  currency: PropTypes.string,
  dish: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    category: PropTypes.string.isRequired,
    spicy: PropTypes.bool,
  }).isRequired,
};
export default Dish;
