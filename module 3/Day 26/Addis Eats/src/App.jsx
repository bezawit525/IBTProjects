import { useState } from "react";
import Header from "./Components/Header/Header.jsx";
import Dish from "./Components/Dish/Dish.jsx";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const Dishes = [
    { id: 1, name: "Doro Wat", price: 250 },
    { id: 2, name: "Tibs", price: 300 },
    { id: 3, name: "Shiro", price: 180 },
  ];

  return (
    <>
      <Header />
      <div className="menu">
        {Dishes.map((dish) => (
          <Dish key={dish.id} name={dish.name} price={dish.price} />
        ))}
      </div>
    </>
  );
}

export default App;
