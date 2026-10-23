"use client";

export default function MenuError({ error, reset }) {
  return (
    <main>
      <h1>something went wrong!</h1>
      <button onClick={() => reset()}> try again </button>
    </main>
  );
}
