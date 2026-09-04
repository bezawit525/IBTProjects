import { useContext } from "react";
import { CartContext } from "../../cart/CartProvider.jsx";

function Header() {
  const { items } = useContext(CartContext);

  const cartCount = items.reduce((total, item) => total + item.quantity, 0);

  return (
    <header className="header">
      <h1>Addis Eats</h1>
      <p>Authentic Ethiopian Food</p>

      <div>🛒 Cart: {cartCount}</div>
    </header>
  );
}

export default Header;
