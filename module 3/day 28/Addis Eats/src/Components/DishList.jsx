import PropTypes from "prop-types";
import Dish from "./Dish.jsx";

function DishList({ dishes, onAdd }) {
  if (dishes.length === 0) {
    return <p className="empty-state">No dishes in this category yet.</p>;
  }

  return (
    <div className="menu">
      {dishes.map((dish) => (
        <Dish
          key={dish.id}
          name={dish.name}
          price={dish.price}
          spicy={dish.spicy}
          onAdd={onAdd}
        />
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
      category: PropTypes.string.isRequired,
      spicy: PropTypes.bool,
    }),
  ).isRequired,
  onAdd: PropTypes.func.isRequired,
};

export default DishList;
