'use client';
export default function Error({ reset }) {
  return (
    <div className="page empty">
      <h1>Something went wrong</h1>
      <p>The page could not load. Try again; if it keeps failing, come back in a few minutes.</p>
      <button className="btn" onClick={reset}>Try again</button>
    </div>
  );
}
