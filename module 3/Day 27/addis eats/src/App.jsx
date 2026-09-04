import { useState } from "react";
import Header from "./Components/Header/Header.jsx";
import Menu from "./Components/Menu/Menu.jsx";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <Menu category="Main" />
    </>
  );
}

export default App;
