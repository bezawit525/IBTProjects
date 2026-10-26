"use client";

import { useQuery } from "@tanstack/react-query";

async function getDishes() {
  const response = await fetch("/api/dishes");

  if (!response.ok) {
    throw new Error("Failed to fetch dishes");
  }

  const result = await response.json();
  return result.data;
}

export default function TanStackMenu() {
  const { data, error, isPending, refetch } = useQuery({
    queryKey: ["dishes"],
    queryFn: getDishes,
    staleTime: 30 * 1000,
  });

  if (isPending) {
    return <p>Loading menu...</p>;
  }

  if (error) {
    return (
      <section>
        <p className="error">Could not load the menu.</p>
        <button onClick={() => refetch()}>Try Again</button>
      </section>
    );
  }

  return (
    <section>
      <h1>TanStack Query Menu</h1>
      <p className="muted">
        This page demonstrates caching with TanStack Query.
      </p>

      <button onClick={() => refetch()}>Refresh Menu</button>

      <div className="dish-grid">
        {data.map((dish) => (
          <article className="dish-card" key={dish.id}>
            <h2>{dish.name}</h2>
            <p>{dish.description}</p>
            <p>
              <strong>{dish.price} ETB</strong>
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
