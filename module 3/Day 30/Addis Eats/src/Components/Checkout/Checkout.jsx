import { useContext } from "react";
import { CartContext } from "../../cart/CartProvider.jsx";

function Checkout() {
  const { items, dispatch, total } = useContext(CartContext);

  return (
    <div className="checkout">
      <h2>Your Cart</h2>

      {items.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {items.map((item) => (
            <div key={item.id}>
              <p>
                {item.name} × {item.quantity}
              </p>

              <button
                onClick={() =>
                  dispatch({
                    type: "remove",
                    payload: item.id,
                  })
                }
              >
                Remove
              </button>
            </div>
          ))}

          <h3>Total: {total} ETB</h3>

          <button onClick={() => dispatch({ type: "clear" })}>
            Clear Cart
          </button>
        </>
      )}
    </div>
  );
}

export default Checkout;
