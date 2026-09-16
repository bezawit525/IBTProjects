import useCartStore from "../../store/cartStore";

function Cart() {
  const items = useCartStore((state) => state.items);
  const removeItem = useCartStore((state) => state.removeItem);
  const clearCart = useCartStore((state) => state.clearCart);

  return (
    <section className="cart">
      <h2>Your Cart</h2>

      {items.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {items.map((item) => (
            <article key={item.id} className="cart-item">
              <div>
                <h3>{item.name}</h3>
                <p>{item.price} ETB</p>
              </div>

              <button onClick={() => removeItem(item.id)}>Remove</button>
            </article>
          ))}

          <button onClick={clearCart}>Clear Cart</button>
        </>
      )}
    </section>
  );
}

export default Cart;
