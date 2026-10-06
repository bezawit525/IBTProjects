import PropTypes from "prop-types";

function Dish({ name, price, spicy, currency = "ETB" }) {
  return (
    <div>
      <h2>{name}</h2>
      <p>
        {price} {currency}
      </p>
      <p>{spicy && <span>Spicy</span>}</p>
    </div>
  );
}

Dish.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  spicy: PropTypes.bool,
  currency: PropTypes.string,
};
export default Dish;
