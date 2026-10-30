"use client";
import { useState } from "react";
export default function PropagationDemo() {
  const [message, setMessage] = useState("Choose an action.");
  return <main><p className="eyebrow">Day 48</p><h1>Event Propagation</h1><p>This teaching card demonstrates event bubbling.</p><div className="card propagation-card" onClick={() => setMessage("Dish details opened.")}><h2>Doro Wat</h2><p>Price: 400 ETB</p><button type="button" onClick={(event) => { event.stopPropagation(); setMessage("Add button clicked. The card event did not run."); }}>Add to cart demo</button></div><p className="event-message" role="status" aria-live="polite">{message}</p></main>;
}
