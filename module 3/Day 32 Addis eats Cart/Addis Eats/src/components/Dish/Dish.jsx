import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import useCartStore from "../../stores/cartStore.js";

function Dish({ name, price, spicy, currency = "ETB", dish }) {
  const addItem = useCartStore((state) => state.addItem);

  function handleAdd() {
    addItem(dish);
  }

  return (
    <div className="dish">
      <div>
        <Link to={`/menu/${dish.id}`}>
          <h3>{name}</h3>
        </Link>

        <p>
          {price} {currency}
        </p>

        {Boolean(spicy) && <span>Spicy</span>}
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
