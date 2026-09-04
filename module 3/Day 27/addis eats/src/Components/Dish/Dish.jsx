import PropTypes from "prop-types";
import Card from "../Card/Card.jsx";
function Dish({ name, price, spicy, currency = "ETB" }) {
  return (
    <Card>
      <div className="dish">
        <h3> {name}</h3>
        <p>
          {price}
          {currency}
        </p>
        <p>{spicy && <span> . Spicy</span>}</p>
      </div>
    </Card>
  );

  Dish.propTypes = {
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    spicy: PropTypes.bool,
    currency: PropTypes.string,
  };
}
export default Dish;
