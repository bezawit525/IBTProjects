"use client";

import useSWR from "swr";
import fetcher from "../../../lib/fetcher.js";

export default function OrderStatus({ id, initialOrder }) {
  const { data, error, isLoading } = useSWR("/api/orders/" + id, fetcher, {
    fallbackData: initialOrder,
    refreshInterval: 5000,
    revalidateOnFocus: true,
  });

  if (error) {
    return <p className="error">Could not refresh order status.</p>;
  }

  if (isLoading && !data) {
    return <p>Loading order status...</p>;
  }

  return (
    <section className="dish-card">
      <h2>Order #{data.id}</h2>
      <p>
        Status: <strong>{data.status}</strong>
      </p>
      <p>{data.message}</p>
      <p className="muted">
        Updated: {new Date(data.updatedAt).toLocaleTimeString()}
      </p>
      <p className="muted">Status refreshes automatically every 5 seconds.</p>
    </section>
  );
}
