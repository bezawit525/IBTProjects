import { useState } from "react";
import CategoryBar from "../CategoryBar/CategoryBar.jsx";
import DishList from "../Dish/DishList.jsx";

const categories = ["All", "Main", "Vegan", "Grill", "Starter"];

const dishes = [
  {
    id: 1,
    name: "Doro Wot",
    price: 250,
    category: "Main",
    spicy: true,
  },
  {
    id: 2,
    name: "Tibs",
    price: 300,
    category: "Grill",
    spicy: true,
  },
  {
    id: 3,
    name: "Shiro",
    price: 180,
    category: "Vegan",
    spicy: false,
  },
  {
    id: 4,
    name: "Sambusa",
    price: 80,
    category: "Starter",
    spicy: false,
  },
];

function Menu() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [order, setOrder] = useState([]);
  const filteredDishes =
    selectedCategory === "All"
      ? dishes
      : dishes.filter((dish) => dish.category === selectedCategory);

  function handleAdd(dish) {
    setOrder([...order, dish]);
  }
  const total = order.reduce((sum, dish) => sum + dish.price, 0.0);
  return (
    <section>
      <h2>Our Menu</h2>
      <CategoryBar
        categories={categories}
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
      />
      <DishList dishes={filteredDishes} onAdd={handleAdd} />
      <div className="order-total">
        <h2> Order Total:{total} ETB</h2>
      </div>
    </section>
  );
}

export default Menu;
