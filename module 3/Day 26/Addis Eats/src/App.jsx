import { useState } from "react";
import Dish from "./Components/Dish/Dish.jsx";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Dish name="Doro wat" price="240" />
    </>
  );
}

export default App;
