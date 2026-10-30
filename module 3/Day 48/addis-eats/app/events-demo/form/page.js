"use client";
import { useState } from "react";
export default function FormEventDemo() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  function handleSubmit(event) {
    event.preventDefault();
    setMessage(`Welcome, ${name}!`);
  }
  return <main><p className="eyebrow">Day 48</p><h1>Form Event Demo</h1><section className="form-card"><form onSubmit={handleSubmit}><label htmlFor="event-name">Your name</label><input id="event-name" value={name} onChange={(event) => setName(event.target.value)} required placeholder="Enter your name" /><button type="submit">Submit</button></form><p role="status" aria-live="polite">{message}</p></section></main>;
}
