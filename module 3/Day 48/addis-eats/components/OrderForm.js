"use client";
import { useState } from "react";
function saveDemoOrder(phone) {
  return new Promise((resolve) => setTimeout(() => resolve({ phone, status: "received" }), 1500));
}
export default function OrderForm() {
  const [phone, setPhone] = useState("");
  const [pending, setPending] = useState(false);
  const [message, setMessage] = useState("");
  async function handleSubmit(event) {
    event.preventDefault();
    if (pending) return;
    setPending(true);
    setMessage("");
    try {
      const result = await saveDemoOrder(phone);
      setMessage(`Demo order received for ${result.phone}.`);
    } catch {
      setMessage("Unable to place the order. Try again.");
    } finally {
      setPending(false);
    }
  }
  return <form className="form-card" onSubmit={handleSubmit}><label htmlFor="demo-phone">TeleBirr phone number</label><input id="demo-phone" type="tel" inputMode="numeric" autoComplete="tel" value={phone} onChange={(event) => setPhone(event.target.value)} required disabled={pending} placeholder="Enter your phone number" /><button type="submit" disabled={pending}>{pending ? "Placing order…" : "Place order"}</button><p role="status" aria-live="polite">{message}</p><p className="muted">This is a simulated request. It does not create an actual order or payment.</p></form>;
}
