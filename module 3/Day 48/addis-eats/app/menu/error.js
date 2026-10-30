"use client";

export default function MenuError({ reset }) {
  return <main><h1>Menu could not load</h1><p>Please try again.</p><button onClick={() => reset()}>Try again</button></main>;
}
