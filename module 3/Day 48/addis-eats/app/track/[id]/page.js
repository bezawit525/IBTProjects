import { notFound, redirect } from "next/navigation";
import { getSession } from "../../../lib/session";
import { getOrderById } from "../../../lib/store";
import TrackingClient from "./TrackingClient";

export const metadata = {
  title: "Track order",
  robots: { index: false, follow: false }
};

export default async function TrackOrderPage({ params }) {
  const user = await getSession();
  const { id } = await params;
  if (!user) redirect(`/signin?next=${encodeURIComponent(`/track/${id}`)}`);
  const order = getOrderById(id);
  if (!order || (order.userId !== user.id && user.role !== "staff")) notFound();

  return (
    <main>
      <p className="eyebrow">Addis Eats delivery updates</p>
      <h1>Track order #{order.id}</h1>
      <TrackingClient order={order} />
    </main>
  );
}
