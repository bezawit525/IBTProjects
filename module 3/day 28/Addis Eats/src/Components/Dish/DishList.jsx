import PropTypes from "prop-types";
import Dish from "../Dish/Dish.jsx";
import Card from "../Card/Card.jsx";
function DishList({ dishes, onAdd }) {
  if (dishes.lengt === 0) {
    return <p>No dishes found in this category.</p>;
  }
  return (
    <div>
      {dishes.map((dish) => (
        <Card key={dish.id}>
          <Dish
            name={dish.name}
            price={dish.price}
            spicy={dish.spicy}
            onAdd={() => onAdd(dish)}
          ></Dish>
        </Card>
      ))}
    </div>
  );
}

DishList.propTypes = {
  dishes: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      spicy: PropTypes.bool,
    }).isRequired,
  ),
};

export default DishList;
