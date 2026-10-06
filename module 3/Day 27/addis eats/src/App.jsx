import Dish from "./components/Dish/Dish.jsx";
import Header from "./components/Header/Header.jsx";
import Card from "./components/Card/Card.jsx";

import "./App.css";

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
    spicy: true,
    category: "Grill",
  },
  {
    id: 3,
    name: "Shiro",
    price: 180,
    spicy: false,
    category: "Vegan",
  },
  {
    id: 4,
    name: "Sambusa",
    price: 80,
    spicy: false,
    category: "Starter",
  },
];

const selectedCategory = "Main";

function App() {
  const filteredDishes = dishes.filter(
    (dish) => dish.category === selectedCategory,
  );
  return (
    <div>
      <Header />
      <main>
        <h2>Our Menu</h2>
        <p>Category: {selectedCategory}</p>
        {filteredDishes.length === 0 ? (
          <p>No dishes found in this category. </p>
        ) : (
          filteredDishes.map((dish) => (
            <Card key={dish.id}>
              <Dish name={dish.name} price={dish.price} spicy={dish.spicy} />
            </Card>
          ))
        )}
      </main>
    </div>
  );
}

export default App;
