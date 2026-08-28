import { useState } from "react";
import Header from "./components/Header/Header.jsx";
import "./App.css";
import React from "react";
import MainContent from "./components/MainContent/MainContent.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header
        title="welcome to IBT college"
        description="this is sample description"
      />
      <MainContent />
    </>
  );
}

export default App;
