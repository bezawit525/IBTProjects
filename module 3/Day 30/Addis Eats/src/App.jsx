import Header from "./Components/Header/Header.jsx";
import Menu from "./Components/Menu/Menu.jsx";
import Checkout from "./Components/Checkout/Checkout.jsx";
import CartProvider from "./Components/cart/CartProvider.jsx";

import "./App.css";

function App() {
  return (
    <CartProvider>
      <Header />
      <Menu />
      <Checkout />
    </CartProvider>
  );
}

export default App;