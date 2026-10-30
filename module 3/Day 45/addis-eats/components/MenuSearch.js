"use client";

import { useEffect, useState } from "react";
import useSWR from "swr";
import Link from "next/link";

const fetcher = async (url) => {
  const response = await fetch(url);
  if (!response.ok) throw new Error("Could not search dishes.");
  return response.json();
};

export default function MenuSearch({ initialDishes }) {
  const [search, setSearch] = useState("");
  const [debounced, setDebounced] = useState("");
  const [page, setPage] = useState(1);

  useEffect(() => {
    const timer = setTimeout(() => setDebounced(search.trim()), 300);
    return () => clearTimeout(timer);
  }, [search]);

  useEffect(() => { setPage(1); }, [debounced]);

  const key = `/api/dishes?q=${encodeURIComponent(debounced)}&page=${page}&limit=6`;
  const { data, error, isLoading } = useSWR(key, fetcher, {
    keepPreviousData: true,
    fallbackData: debounced === "" && page === 1
      ? { dishes: initialDishes.slice(0, 6), total: initialDishes.length, page: 1, totalPages: Math.max(1, Math.ceil(initialDishes.length / 6)) }
      : undefined
  });

  return (
    <section>
      <label>Search menu
        <input value={search} onChange={(event) => setSearch(event.target.value)} placeholder="Try kitfo or shiro…" />
      </label>
      {error && <p role="alert">Could not load search results. Please try again.</p>}
      {isLoading && <p>Loading dishes…</p>}
      <p className="muted">{data?.total ?? 0} dish(es) found</p>
      <div className="grid">
        {(data?.dishes || []).map((dish) => <article className="card" key={dish.id}>
          <p className="eyebrow">{dish.category || "Addis Eats"}</p>
          <h2>{dish.name}</h2><p className="muted">{dish.description}</p>
          <p className="price">{dish.price} ETB</p><Link href={`/menu/${dish.id}`}>View dish →</Link>
        </article>)}
      </div>
      {data?.dishes?.length === 0 && !isLoading && <p>No dishes match your search.</p>}
      <div className="actions">
        <button type="button" disabled={page <= 1} onClick={() => setPage((value) => Math.max(1, value - 1))}>Previous</button>
        <span>Page {data?.page || page} of {data?.totalPages || 1}</span>
        <button type="button" disabled={page >= (data?.totalPages || 1)} onClick={() => setPage((value) => value + 1)}>Next</button>
      </div>
    </section>
  );
}
