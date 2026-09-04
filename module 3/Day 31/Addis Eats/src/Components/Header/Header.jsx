import { useContext } from "react";
import { Link } from "react-router-dom";

import { CartContext } from "../cart/CartProvider.jsx";

function Header() {
  const { items } = useContext(CartContext);

  const cartCount = items.reduce((total, item) => total + item.quantity, 0);

  return (
    <header className="header">
      <h1>
        <Link to="/">Addis Eats</Link>
      </h1>

      <p>Authentic Ethiopian Food</p>

      <Link to="/checkout">🛒 Cart: {cartCount}</Link>
    </header>
  );
}

export default Header;
