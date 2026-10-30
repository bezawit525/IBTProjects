"use client";

import { useState } from "react";
import Link from "next/link";

const exercises = [
  ["Form events", "/events-demo/form", "Practice onSubmit, onChange, and preventDefault."],
  ["Event propagation", "/events-demo/propagation", "Understand stopPropagation and bubbling."],
  ["Counter", "/events-demo/counter", "Practice functional state updates."],
  ["Keyboard events", "/events-demo/keyboard", "Handle Enter, Escape, and arrow keys."],
  ["Browser events", "/events-demo/browser", "Read browser width and handle resizing."],
  ["Configuration", "/events-demo/config", "Read the public site URL environment variable."],
  ["Checkout loading", "/events-demo/checkout", "Practice pending and disabled button states."]
];

export default function EventsDemoPage() {
  const [message, setMessage] = useState("Click the button to test an event.");
  return (
    <main>
      <p className="eyebrow">Day 48 practical work</p>
      <h1>React Event Handling</h1>
      <section className="form-card">
        <h2>Button click event</h2>
        <p role="status" aria-live="polite">{message}</p>
        <button type="button" onClick={() => setMessage("Welcome to Addis Eats!")}>Welcome</button>
      </section>
      <h2 className="day48-heading">Event handling exercises</h2>
      <div className="grid">
        {exercises.map(([title, href, description]) => (
          <article className="card" key={href}>
            <h3>{title}</h3>
            <p className="muted">{description}</p>
            <Link href={href}>Open demo →</Link>
          </article>
        ))}
      </div>
    </main>
  );
}
