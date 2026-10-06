import Dish from "./components/Dish/Dish.jsx";
import Header from "./components/Header/Header.jsx";
import "./App.css";

const dishes = [
  {
    id: 1,
    name: "Doro Wot",
    price: 250,
  },
  {
    id: 2,
    name: "Tibs",
    price: 300,
  },
  {
    id: 3,
    name: "Shiro",
    price: 180,
  },
  {
    id: 4,
    name: "Sambusa",
    price: 80,
  },
];

function App() {
  return (
    <div>
      <Header />
      <main>
        <h2>Our Menu</h2>
        {dishes.map((dish) => (
          <Dish key={dish.id} name={dish.name} price={dish.price} />
        ))}
      </main>
    </div>
  );
}

export default App;
