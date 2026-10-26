"use client";

import { useState } from "react";
import useSWR from "swr";
import fetcher from "../../lib/fetcher";
import useDebounce from "./useDebounce";

export default function SearchBox() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const debouncedSearch = useDebounce(search);

  const query = new URLSearchParams({
    q: debouncedSearch,
    category,
  });

  const { data, error, isLoading } = useSWR(
    "/api/dishes?" + query.toString(),
    fetcher,
    {
      keepPreviousData: true,
    },
  );

  return (
    <section>
      <h1>Search the Menu</h1>
      <p className="muted">Search updates after you stop typing.</p>

      <input
        type="text"
        placeholder="Search dishes..."
        value={search}
        onChange={(event) => setSearch(event.target.value)}
      />

      <select
        value={category}
        onChange={(event) => setCategory(event.target.value)}
      >
        <option value="All">All categories</option>
        <option value="Meat">Meat</option>
        <option value="Vegetarian">Vegetarian</option>
      </select>

      {isLoading && <p>Loading menu...</p>}

      {error && (
        <p className="error">
          Could not load the menu. Please refresh the page.
        </p>
      )}

      {data && (
        <>
          <p className="muted">Found {data.total} dish(es).</p>

          {data.data.length === 0 ? (
            <p>No dishes found. Try another search.</p>
          ) : (
            <div className="dish-grid">
              {data.data.map((dish) => (
                <article className="dish-card" key={dish.id}>
                  <h2>{dish.name}</h2>
                  <p>{dish.description}</p>
                  <p>Category: {dish.category}</p>
                  <p>
                    <strong>{dish.price} ETB</strong>
                  </p>
                </article>
              ))}
            </div>
          )}
        </>
      )}
    </section>
  );
}
