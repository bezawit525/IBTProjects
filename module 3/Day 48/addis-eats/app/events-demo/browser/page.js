"use client";
import { useEffect, useState } from "react";
export default function BrowserDemoPage() {
  const [width, setWidth] = useState(null);
  useEffect(() => {
    function updateWidth() { setWidth(window.innerWidth); }
    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);
  return <main><p className="eyebrow">Day 48</p><h1>Browser Width</h1><section className="form-card"><p>{width === null ? "Reading screen width…" : `Window width: ${width}px`}</p><p className="muted">Resize your browser window to see the value change.</p></section></main>;
}
