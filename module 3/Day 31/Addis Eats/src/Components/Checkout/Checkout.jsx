import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";

function Checkout() {
  const { items, total, dispatch } = useContext(CartContext);

  function handleRemove(id) {
    dispatch({
      type: "remove",
      id,
    });
  }

  function handleClear() {
    dispatch({
      type: "clear",
    });
  }

  return (
    <section className="checkout">
      <h2>Checkout</h2>
      {items.length === 0 ? (
        <>
          <p>Your cart is empty</p>

          <Link to="/menu">Browse Menu</Link>
        </>
      ) : (
        <>
          {items.map((dish, index) => (
            <div className="checkout-item" key={`${dish.id}-${index}`}>
              <span>
                {dish.name}-{dish.price} ETB
              </span>
              <button onClick={() => handleRemove(dish.id)}>Remove</button>
            </div>
          ))}
          <h3>Total: {total} ETB</h3>
          <button onClick={handleClear}>Clear Cart</button>

          <div className="checkout-link">
            <Link to="/checkout">Proceed to Checkout</Link>
          </div>
        </>
      )}
    </section>
  );
}

export default Checkout;
