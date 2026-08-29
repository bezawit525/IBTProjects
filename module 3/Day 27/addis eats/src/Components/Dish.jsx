import Card from "./Card.jsx";

function Dish({ name, price, spicy, currency = "ETB" }) {
  return (
    <Card>
      <div className="dish">
        <h3>{name}</h3>
        <p>
          {price} {currency}
        </p>

        {spicy === true && <span className="spicy-badge">Spicy</span>}
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
