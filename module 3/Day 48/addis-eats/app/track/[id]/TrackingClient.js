"use client";

import { useEffect, useState } from "react";
import MapPanel from "./MapPanel";
import { downloadCsv } from "../../../lib/csv";
import { formatAddisDate, formatETB, formatRelativeTime } from "../../../lib/format";

const courier = [8.9950, 38.7896];
const destination = [8.9900, 38.7950];

export default function TrackingClient({ order }) {
  const [status, setStatus] = useState(order.status);
  const [connected, setConnected] = useState(false);
  const [history, setHistory] = useState([
    { status: order.status, at: order.createdAt }
  ]);
  const [uploadMessage, setUploadMessage] = useState("");

  useEffect(() => {
    const source = new EventSource(`/api/orders/${encodeURIComponent(order.id)}/stream`);
    source.onopen = () => setConnected(true);
    source.onerror = () => setConnected(false);
    source.onmessage = (event) => {
      try {
        const update = JSON.parse(event.data);
        if (update.status) {
          setStatus(update.status);
          setHistory((old) => {
            if (old.length && old[old.length - 1].status === update.status) return old;
            return [...old, { status: update.status, at: update.at }];
          });
          if (["Completed", "Cancelled"].includes(update.status)) source.close();
        }
      } catch {
        // Ignore malformed demo events.
      }
    };
    return () => source.close();
  }, [order.id]);

  function exportHistory() {
    const rows = [
      ["Order ID", "Customer", "Status", "Total ETB", "Created at"],
      [order.id, order.customerName, status, order.total, formatAddisDate(order.createdAt)],
      [],
      ["Status", "Updated at"],
      ...history.map((entry) => [entry.status, formatAddisDate(entry.at)])
    ];
    downloadCsv(`addis-eats-order-${order.id}.csv`, rows);
  }

  async function handleCsvUpload(event) {
    const file = event.target.files?.[0];
    setUploadMessage("");
    if (!file) return;
    if (!file.name.toLowerCase().endsWith(".csv")) {
      setUploadMessage("Please select a .csv file.");
      event.target.value = "";
      return;
    }
    if (file.size > 2 * 1024 * 1024) {
      setUploadMessage("The file must be smaller than 2 MB.");
      event.target.value = "";
      return;
    }
    const text = await file.text();
    setUploadMessage(`Read ${file.name} (${text.length} characters). This demo does not import or change orders.`);
    event.target.value = "";
  }

  return (
    <div className="tracking-page">
      <div className="tracking-grid">
        <section className="form-card tracking-panel">
          <h2>Order status</h2>
          <p><span className="status">{status}</span></p>
          <p className="muted">Live connection: {connected ? "Connected" : "Connecting / offline"}</p>
          <p>Order placed: {formatAddisDate(order.createdAt)}</p>
          <p>Relative time: {formatRelativeTime(order.createdAt)}</p>
          <p>Total: <strong>{formatETB(order.total)}</strong></p>
          <button type="button" onClick={exportHistory}>Export order history (CSV)</button>
        </section>
        <section className="form-card tracking-panel">
          <h2>Status history</h2>
          <ol className="tracking-history">
            {history.map((entry, index) => (
              <li key={`${entry.status}-${index}`}>
                <strong>{entry.status}</strong>
                <span>{formatAddisDate(entry.at)}</span>
              </li>
            ))}
          </ol>
        </section>
      </div>
      <section className="form-card tracking-panel">
        <h2>Delivery map</h2>
        <p className="muted">Demo map markers only. They do not represent live GPS data.</p>
        <MapPanel courier={courier} destination={destination} />
      </section>
      <section className="form-card tracking-panel">
        <h2>Read a CSV file</h2>
        <label htmlFor="csv-upload">Choose a CSV file (maximum 2 MB)</label>
        <input id="csv-upload" type="file" accept=".csv,text/csv" onChange={handleCsvUpload} />
        <p role="status" aria-live="polite">{uploadMessage}</p>
      </section>
    </div>
  );
}
