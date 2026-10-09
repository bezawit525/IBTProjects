import Checkout from "./components/Checkout/Checkout.jsx";
import useCartStore from "./store/cartStore.jsx";
import Header from "./components/Header/Header.jsx";
import Menu from "./components/Menu/Menu.jsx";
import Cart from "./components/Cart/Cart.jsx";
import { dishes } from "./data/data.jsx";

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
