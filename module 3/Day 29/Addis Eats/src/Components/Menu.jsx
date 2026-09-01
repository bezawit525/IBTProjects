import { useState } from "react";
import PropTypes from "prop-types";
import CategoryBar from "./CategoryBar.jsx";
import DishList from "./DishList.jsx";

function Menu({ dishes }) {
  const [category, setCategory] = useState("All");
  const [orderTotal, setOrderTotal] = useState(0);

  const shown =
    category === "All"
      ? dishes
      : dishes.filter((dish) => dish.category === category);

  function handleAdd(price) {
    setOrderTotal((currentTotal) => currentTotal + price);
  }

  return (
    <section className="menu-section">
      <h2>Our Menu</h2>

      <CategoryBar selected={category} onSelect={setCategory} />

      <DishList dishes={shown} onAdd={handleAdd} />

      <div className="order-total">
        <h3>Order Total: {orderTotal} ETB</h3>
      </div>
    </section>
  );
}

Menu.propTypes = {
  dishes: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      category: PropTypes.string.isRequired,
      spicy: PropTypes.bool,
    }),
  ).isRequired,
};

export default Menu;
