"use client";

import { useState } from "react";

const initialCart = [
  {
    id: 1,
    name: "Kitfo",
    price: 350,
    quantity: 1,
  },
];

export default function CartClient() {
  const [cart, setCart] = useState(initialCart);

  function changeQuantity(id, amount) {
    setCart((currentCart) =>
      currentCart
        .map((item) =>
          item.id === id ? { ...item, quantity: item.quantity + amount } : item,
        )
        .filter((item) => item.quantity > 0),
    );
  }

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        cart.map((item) => (
          <article className="cart-item" key={item.id}>
            <div>
              <h2>{item.name}</h2>
              <p>
                {item.quantity} × {item.price} ETB
              </p>
            </div>

            <div className="quantity-controls">
              <button
                className="quantity-button"
                onClick={() => changeQuantity(item.id, -1)}
                aria-label={`Remove one ${item.name}`}
              >
                −
              </button>

              <span>{item.quantity}</span>

              <button
                className="quantity-button"
                onClick={() => changeQuantity(item.id, 1)}
                aria-label={`Add one ${item.name}`}
              >
                +
              </button>
            </div>
          </article>
        ))
      )}

      <h2>Total: {total} ETB</h2>
    </div>
  );
}
