import Header from "./components/Header/Header.jsx";
import Menu from "./components/Menu/Menu.jsx";
import Checkout from "./components/Checkout/Checkout.jsx";
import CartProvider from "./components/CartProvider/CartProvider.jsx";

function App() {
  return (
    <CartProvider>
      <Header />
      <main>
        <Menu />
        <Checkout />
      </main>
    </CartProvider>
  );
}

export default App;
