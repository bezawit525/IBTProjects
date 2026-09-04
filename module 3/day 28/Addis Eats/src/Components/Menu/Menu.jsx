import { useState } from "react";
import Dish from "../Dish/Dish.jsx";
import dishes from "../Data/Data.jsx";
import CategoryBar from "../CategoryBar/CategoryBar.jsx";
import OrderForm from "../OrderForm/OrderForm.jsx";

function Menu() {
  const [category, setCategory] = useState("Main");
  const [total, setTotal] = useState(0);

  const categories = [...new Set(dishes.map((dish) => dish.category))];

  const filteredDishes = dishes.filter((dish) => dish.category === category);

  const handleAdd = (price) => {
    setTotal(total + price);
  };

  console.log("Category:", category);
  console.log("Total:", total);

  return (
    <>
      <CategoryBar
        categories={categories}
        selectedCategory={category}
        onSelect={setCategory}
      />

      <div className="menu">
        {filteredDishes.length === 0 ? (
          <p>No dishes available in this category.</p>
        ) : (
          filteredDishes.map((dish) => (
            <Dish
              key={dish.id}
              name={dish.name}
              price={dish.price}
              spicy={dish.spicy}
              onAdd={handleAdd}
            />
          ))
        )}
      </div>

      <h2>Order Total: {total} ETB</h2>

      <OrderForm total={total} />
    </>
  );
}

export default Menu;
