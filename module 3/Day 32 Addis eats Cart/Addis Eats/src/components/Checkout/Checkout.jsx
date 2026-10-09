import { Link } from "react-router-dom";
import useCartStore from "../../stores/cartStore.js";

function Checkout() {
  const items = useCartStore((state) => state.items);

  const remove = useCartStore((state) => state.remove);

  const clear = useCartStore((state) => state.clear);

  const total = items.reduce((sum, dish) => sum + dish.price, 0);

  return (
    <section className="checkout">
      <h2>Checkout</h2>

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

              <button onClick={() => remove(dish.id)}>Remove</button>
            </div>
          ))}

          <h3>Total: {total} ETB</h3>

          <button onClick={clear}>Clear Cart</button>
        </>
      )}
    </section>
  );
}

export default Checkout;
