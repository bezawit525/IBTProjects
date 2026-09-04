import Dish from "../Dish/Dish.jsx";
import dishes from "../Data/Data.jsx";

const Menu = ({ category }) => {
  const filteredDishes = dishes.filter((dish) => dish.category === category);
  if (filteredDishes.length === 0) {
    return <p> NO dishes available in this category</p>;
  }
  return (
    <div className="menu">
      {filteredDishes.map((dish) => (
        <Dish
          key={dish.id}
          name={dish.name}
          price={dish.price}
          spicy={dish.spicy}
        />
      ))}
    </div>
  );
};

export default Menu;
