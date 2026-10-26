"use client";

import useSWR from "swr";
import fetcher from "../../lib/fetcher.js";

export default function Cart() {
  const { data: cart, error, isLoading, mutate } = useSWR("/api/cart", fetcher);

  async function addSampleDish() {
    const response = await fetch("/api/dishes");

    if (!response.ok) {
      alert("Could not load menu.");
      return;
    }

    const result = await response.json();
    const dish = result.data[0];

    const addResponse = await fetch("/api/cart", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dish),
    });

    if (!addResponse.ok) {
      alert("Could not add dish to cart.");
      return;
    }

    await mutate();
  }

  async function removeItem(id) {
    const response = await fetch("/api/cart", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id }),
    });

    if (!response.ok) {
      alert("Could not remove item.");
      return;
    }

    await mutate();
  }

  if (isLoading) {
    return <p>Loading cart...</p>;
  }

  if (error) {
    return <p className="error">Could not load cart.</p>;
  }

  const total = (cart || []).reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );

  return (
    <section>
      <h1>Your Cart</h1>

      <button onClick={addSampleDish}>Add a Sample Dish</button>

      {!cart || cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {cart.map((item) => (
            <article className="dish-card" key={item.id}>
              <h2>{item.name}</h2>
              <p>
                {item.price} ETB × {item.quantity}
              </p>
              <button onClick={() => removeItem(item.id)}>Remove</button>
            </article>
          ))}

          <h2>Total: {total} ETB</h2>
        </>
      )}
    </section>
  );
}
