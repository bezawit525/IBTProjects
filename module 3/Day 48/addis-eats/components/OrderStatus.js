"use client";

import useSWR from "swr";

const fetcher = async (url) => {
  const response = await fetch(url);
  if (!response.ok) throw new Error("Could not refresh order status.");
  return response.json();
};

export default function OrderStatus({ orderId, initialOrder }) {
  const { data, error, isLoading } = useSWR(`/api/orders/${orderId}/status`, fetcher, {
    refreshInterval: 5000,
    fallbackData: initialOrder,
    revalidateOnFocus: true
  });

  return (
    <section className="notice">
      <strong>Order status: </strong><span className="status">{data?.status || initialOrder.status}</span>
      {isLoading && <span> Refreshing…</span>}
      {error && <p className="muted">Status could not refresh. The last known status is shown.</p>}
      <p className="muted">Status refreshes about every 5 seconds while this page is open.</p>
    </section>
  );
}
