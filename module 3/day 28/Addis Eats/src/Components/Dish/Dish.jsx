import PropTypes from "prop-types";

function Dish({ name, price, spicy, currency = "ETB", onAdd }) {
  function handleAdd() {
    setCount(count + 1);
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
      <button onClick={onAdd}>Add</button>
    </div>
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
