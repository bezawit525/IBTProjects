import { notFound } from "next/navigation";
import { demoOrder } from "../../../../lib/orders.js";
import TrackingClient from "./TrackingClient.js";

export default async function TrackingPage({ params }) {
  const { id } = await params;

  if (id !== demoOrder.id) {
    notFound();
  }

  return <TrackingClient order={demoOrder} />;
}
