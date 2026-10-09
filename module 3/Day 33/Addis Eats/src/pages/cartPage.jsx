import { Link } from "react-router-dom";
import useCartStore from "../stores/cartStore";

function CartPage() {
  const items = useCartStore((state) => state.items);

  const remove = useCartStore((state) => state.remove);

  const clear = useCartStore((state) => state.clear);

  const total = items.reduce((sum, dish) => sum + dish.price, 0);

  function handleRemove(id) {
    remove(id);
  }

  return (
    <section className="checkout">
      <h2>Your Cart</h2>

      {items.length === 0 ? (
        <>
          <p>Your cart is empty.</p>

          <Link to="/menu">Browse Menu</Link>
        </>
      ) : (
        <>
          {items.map((dish, index) => (
            <div className="checkout-item" key={`${dish.id}-${index}`}>
              <span>
                {dish.name} - {dish.price} ETB
              </span>

              <button onClick={() => handleRemove(dish.id)}>Remove</button>
            </div>
          ))}

          <h3>Total: {total} ETB</h3>

          <button onClick={clear}>Clear Cart</button>

          <div className="checkout-link">
            <Link to="/checkout">Proceed to Checkout</Link>
          </div>
        </>
      )}
    </section>
  );
}

export default CartPage;
