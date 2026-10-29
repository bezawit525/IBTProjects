import { redirect } from "next/navigation";
import Link from "next/link";
import { getSession } from "@/lib/session";
import { cancelOrder } from "./actions.js";

const orders = [
  {
    id: "ord-1",
    userId: "demo-user-1",
    item: "Doro Wot",
    status: "Preparing",
  },
  {
    id: "ord-2",
    userId: "demo-user-2",
    item: "Tibs",
    status: "Delivered",
  },
];

function getOrdersFor(userId) {
  return orders.filter((order) => order.userId === userId);
}

export default async function OrdersPage() {
  const session = await getSession();

  if (!session) {
    redirect("/signin?next=/orders");
  }

  const userOrders = getOrdersFor(session.userId);

  return (
    <main>
      <h1>My Orders</h1>

      <p>Signed in as: {session.userId}</p>

      <nav>
        <Link href="/">Home</Link>
        {" | "}
        <Link href="/menu">Menu</Link>
      </nav>

      <form action="/api/signout" method="post">
        <button type="submit">Sign out</button>
      </form>

      {userOrders.length === 0 ? (
        <p>No orders found.</p>
      ) : (
        userOrders.map((order) => (
          <article key={order.id}>
            <h2>{order.item}</h2>
            <p>Order ID: {order.id}</p>
            <p>Status: {order.status}</p>

            {order.status === "Preparing" && (
              <form action={cancelOrder}>
                <input type="hidden" name="orderId" value={order.id} />
                <button type="submit">Cancel order</button>
              </form>
            )}
          </article>
        ))
      )}
    </main>
  );
}
