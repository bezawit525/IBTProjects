import useCartStore from "../../stores/cartStore.js";

function CartBadge() {
  const items = useCartStore((state) => state.items);

  return <div className="cart-badge">Cart: {items.length}</div>;
}

export default CartBadge;
