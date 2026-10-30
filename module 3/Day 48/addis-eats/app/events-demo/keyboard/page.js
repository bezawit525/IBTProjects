"use client";
import { useState } from "react";
export default function KeyboardDemo() {
  const [message, setMessage] = useState("Press a key.");
  function handleKeyDown(event) {
    if (["Escape", "Enter", "ArrowDown"].includes(event.key)) setMessage(`${event.key} was pressed.`);
  }
  return <main><p className="eyebrow">Day 48</p><h1>Keyboard Event Demo</h1><section className="form-card"><label htmlFor="keyboard-input">Focus this field and press Enter, Escape, or Arrow Down</label><input id="keyboard-input" onKeyDown={handleKeyDown} placeholder="Press a key" /><p role="status" aria-live="polite">{message}</p></section></main>;
}
