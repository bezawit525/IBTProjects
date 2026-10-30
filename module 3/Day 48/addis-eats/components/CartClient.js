"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function CartClient() {
  const [cart, setCart] = useState([]);
  const [ready, setReady] = useState(false);

  function loadCart() {
    try {
      const saved = JSON.parse(localStorage.getItem("cart") || "[]");
      setCart(Array.isArray(saved) ? saved : []);
    } catch { setCart([]); }
    setReady(true);
  }

  useEffect(() => {
    loadCart();
    window.addEventListener("cart-updated", loadCart);
    window.addEventListener("storage", loadCart);
    return () => {
      window.removeEventListener("cart-updated", loadCart);
      window.removeEventListener("storage", loadCart);
    };
  }, []);

  function save(next) {
    setCart(next);
    localStorage.setItem("cart", JSON.stringify(next));
    window.dispatchEvent(new Event("cart-updated"));
  }

  if (!ready) return <p>Loading cart…</p>;
  if (cart.length === 0) return <div><p>Your cart is empty.</p><Link className="button" href="/menu">Browse menu</Link></div>;

  const total = cart.reduce((sum, item) => sum + Number(item.price || 0) * Number(item.quantity || 1), 0);
  return (
    <section>
      {cart.map((item) => <article className="card" key={item.id}>
        <div className="row"><div><h2>{item.name}</h2><p>{item.price} ETB each</p></div>
          <label>Quantity<input type="number" min="1" max="20" value={item.quantity} onChange={(event) => {
            const quantity = Math.max(1, Math.min(20, Number(event.target.value || 1)));
            save(cart.map((current) => current.id === item.id ? { ...current, quantity } : current));
          }} /></label>
        </div>
        <button type="button" onClick={() => save(cart.filter((current) => current.id !== item.id))}>Remove</button>
      </article>)}
      <h2>Total: {total} ETB</h2>
      <div className="actions"><Link className="button" href="/checkout">Continue to checkout</Link><Link href="/menu">Continue shopping</Link></div>
    </section>
  );
}
