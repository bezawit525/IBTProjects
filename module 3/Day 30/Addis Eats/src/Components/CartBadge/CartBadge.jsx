import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

function CartBadge() {
  const { items } = useContext(CartContext);

  return <div className="cart-badge">cart:{items.length}</div>;
}

export default CartBadge;
