"use client";

import { useState } from "react";
import useSWR from "swr";
import fetcher from "../../../lib/fetcher.js";

export default function PaginatedMenu() {
  const [page, setPage] = useState(1);

  const { data, error, isLoading } = useSWR(
    "/api/dishes?page=" + page + "&limit=3",
    fetcher,
    {
      keepPreviousData: true,
    },
  );

  if (isLoading && !data) {
    return <p>Loading dishes...</p>;
  }

  if (error) {
    return <p className="error">Could not load dishes.</p>;
  }

  return (
    <section>
      <h1>Paginated Menu</h1>

      <div className="dish-grid">
        {data?.data.map((dish) => (
          <article className="dish-card" key={dish.id}>
            <h2>{dish.name}</h2>
            <p>{dish.description}</p>
            <p>
              <strong>{dish.price} ETB</strong>
            </p>
          </article>
        ))}
      </div>

      <p>
        Page {data?.page} of {data?.totalPages}
      </p>

      <button
        disabled={page <= 1}
        onClick={() => setPage((current) => current - 1)}
      >
        Previous
      </button>

      <button
        disabled={page >= (data?.totalPages || 1)}
        onClick={() => setPage((current) => current + 1)}
      >
        Next
      </button>
    </section>
  );
}
