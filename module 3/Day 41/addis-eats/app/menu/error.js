"use client";

export default function Error({ reset }) {
  return (
    <section className="message-page">
      <h1>Something went wrong.</h1>

      <p>We could not load the menu.</p>

      <button className="button" onClick={() => reset()}>
        Try Again
      </button>
    </section>
  );
}
