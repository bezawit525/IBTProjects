function LoadingSkeleton() {
  return (
    <section className="loading-skeleton" aria-busy="true" aria-live="polite">
      <h2>Loading page...</h2>
      <p>Please wait while the page loads.</p>
      <div className="skeleton" />
      <div className="skeleton" />
      <div className="skeleton" />
    </section>
  );
}

export default LoadingSkeleton;
