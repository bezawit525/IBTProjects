import Header from "./components/Header/Header";
import Menu from "./components/Menu/Menu";
import Cart from "./components/Cart/Cart";
import { dishes } from "./data/data";

function App() {
  return (
    <>
      <Header />

      <main>
        <Menu dishes={dishes} />
        <Cart />
      </main>
    </>
  );
}

export default App;
