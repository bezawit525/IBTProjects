import { redirect } from "next/navigation";
import { getSession } from "../../lib/session";
import { getAllOrders } from "../../lib/store";
import { updateOrderStatus } from "../actions";

export const metadata = { title: "Kitchen", robots: { index: false, follow: false } };

export default async function KitchenPage() {
  const user = await getSession();
  if (!user) redirect("/signin?next=/kitchen");
  if (user.role !== "staff") return <main><h1>Not allowed</h1><p>This page is for staff members only.</p></main>;
  const orders = getAllOrders();
  return (
    <main>
      <h1>Kitchen orders</h1>
      <p>Signed in as staff. Change an order status using the form.</p>
      {orders.length === 0 ? <p>No orders have been placed yet. Sign in as a customer and place a demo order first.</p> : (
        <div className="grid">
          {orders.map((order) => <article className="card" key={order.id}>
            <h2>Order #{order.id}</h2><p>{order.customerName}</p>
            <p>{order.items.map((item) => `${item.name} × ${item.quantity}`).join(", ")}</p>
            <p>Total: {order.total} ETB</p><p>Status: <span className="status">{order.status}</span></p>
            <form action={updateOrderStatus}>
              <input type="hidden" name="orderId" value={order.id} />
              <label>Update status
                <select name="status" defaultValue={order.status}>
                  <option>Received</option><option>Preparing</option><option>Ready</option><option>Completed</option><option>Cancelled</option>
                </select>
              </label>
              <button type="submit">Save status</button>
            </form>
          </article>)}
        </div>
      )}
    </main>
  );
}
