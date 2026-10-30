"use client";
import { useState } from "react";
export default function CounterPage() {
  const [count, setCount] = useState(0);
  return <main><p className="eyebrow">Day 48</p><h1>Click Counter</h1><section className="form-card"><h2>Count: {count}</h2><div className="actions"><button type="button" onClick={() => setCount((previous) => previous + 1)}>Increase</button><button type="button" onClick={() => setCount((previous) => Math.max(0, previous - 1))}>Decrease</button><button type="button" onClick={() => setCount(0)}>Reset</button></div></section></main>;
}
