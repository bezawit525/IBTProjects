import { notFound, redirect } from "next/navigation";
import { getSession } from "../../../lib/session";
import { getOrderById } from "../../../lib/store";
import OrderStatus from "../../../components/OrderStatus";

export const metadata = { title: "Order details", robots: { index: false, follow: false } };

export default async function OrderDetailsPage({ params }) {
  const user = await getSession();
  if (!user) redirect("/signin?next=/orders");
  const { id } = await params;
  const order = getOrderById(id);
  if (!order || (order.userId !== user.id && user.role !== "staff")) notFound();

  return (
    <main>
      <h1>Order #{order.id}</h1>
      <p>Placed {new Date(order.createdAt).toLocaleString()}</p>
      <OrderStatus orderId={order.id} initialOrder={{ id: order.id, status: order.status }} />
      <h2>Items</h2>
      {order.items.map((item) => <div className="row" key={item.id}><span>{item.name} × {item.quantity}</span><strong>{item.price * item.quantity} ETB</strong></div>)}
      <hr /><div className="row"><strong>Total</strong><strong>{order.total} ETB</strong></div>
      <p><a href="/orders">← Back to my orders</a></p>
    </main>
  );
}
