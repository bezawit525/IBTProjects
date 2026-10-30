import Link from "next/link";
import { redirect } from "next/navigation";
import { getSession } from "../../lib/session";
import { getOrdersForUser } from "../../lib/store";

export const metadata = { title: "My Orders", robots: { index: false, follow: false } };

export default async function OrdersPage() {
  const user = await getSession();
  if (!user) redirect("/signin?next=/orders");
  const orders = getOrdersForUser(user.id);
  return (
    <main>
      <h1>My Orders</h1>
      {orders.length === 0 ? <p>You have no orders yet. <Link href="/menu">Browse the menu</Link>.</p> : (
        <div className="grid">
          {orders.map((order) => <article className="card" key={order.id}>
            <h2>Order #{order.id}</h2><p>Status: <span className="status">{order.status}</span></p>
            <p>{order.items.length} item type(s) · {order.total} ETB</p>
            <Link href={`/orders/${order.id}`}>View order →</Link>
          </article>)}
        </div>
      )}
    </main>
  );
}
