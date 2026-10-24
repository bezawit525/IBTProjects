"use client";

export default function MenuError({ error, reset }) {
  return (
    <main>
      <h2>Something went wrong!</h2>
      <p>We could not load the menu.</p>

      <button onClick={() => reset()}>Try Again</button>
    </main>
  );
}
