"use client";

import { useEffect, useState } from "react";
import { placeOrder } from "../app/actions";
import Link from "next/link";

export default function CheckoutClient() {
  const [items, setItems] = useState([]);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    try {
      const value = JSON.parse(localStorage.getItem("cart") || "[]");
      setItems(Array.isArray(value) ? value : []);
    } catch { setItems([]); }
    setReady(true);
  }, []);

  if (!ready) return <p>Loading your cart…</p>;
  if (!items.length) return <div><p>Your cart is empty.</p><Link className="button" href="/menu">Browse menu</Link></div>;

  const total = items.reduce((sum, item) => sum + Number(item.price || 0) * Number(item.quantity || 1), 0);
  async function submitOrder() {
    localStorage.removeItem("cart");
  }

  return (
    <section className="form-card">
      <h2>Order summary</h2>
      {items.map((item) => <div className="row" key={item.id}><span>{item.name} × {item.quantity}</span><span>{item.price * item.quantity} ETB</span></div>)}
      <hr /><div className="row"><strong>Total</strong><strong>{total} ETB</strong></div>
      <form action={placeOrder} onSubmit={submitOrder}>
        <input type="hidden" name="items" value={JSON.stringify(items.map((item) => ({ id: item.id, quantity: item.quantity })))} />
        <p className="muted">This is a course demo. No real payment is taken.</p>
        <button type="submit">Place order</button>
      </form>
    </section>
  );
}
