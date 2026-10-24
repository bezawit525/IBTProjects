"use client";

import { useState } from "react";
import { refreshDishes, refreshDishesImmediately } from "./actions";

export default function CacheControls() {
  const [message, setMessage] = useState("");

  async function handleRefresh() {
    await refreshDishes();
    setMessage("Menu cache marked for revalidation.");
  }

  async function handleImmediateRefresh() {
    await refreshDishesImmediately();
    setMessage("Menu cache expired for immediate refresh.");
  }

  return (
    <section>
      <h3>Cache Demonstration</h3>
      <button onClick={handleRefresh}>Revalidate Menu Cache</button>{" "}
      <button onClick={handleImmediateRefresh}>Expire Menu Cache</button>
      <p>{message}</p>
    </section>
  );
}
