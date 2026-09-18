import Checkout from "./components/Checkout/Checkout";
import useCartStore from "./store/cartStore";
import Header from "./components/Header/Header";
import Menu from "./components/Menu/Menu";
import Cart from "./components/Cart/Cart";
import { dishes } from "./data/data";

function App() {
  const items = useCartStore((state) => state.items);
  const total = items.reduce((sum, item) => sum + item.price, 0);

  return (
    <>
      <Header />

      <main>
        <Menu dishes={dishes} />

        <Cart />
        <Checkout total={total} />
      </main>
    </>
  );
}

export default App;
