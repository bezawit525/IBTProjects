import { orders } from "../../lib/orders";
import { cancelOrder } from "../app/actions";

export const dynamic = "force-dynamic";

export default function OrdersPage() {
  return (
    <main>
      <h1>My Orders</h1>

      {orders.length === 0 && (
        <p>No orders yet. Place an order from Checkout.</p>
      )}

      {orders.map((order) => (
        <article
          key={order.id}
          style={{
            border: "1px solid #ddd",
            padding: "16px",
            marginBottom: "16px",
            borderRadius: "8px",
          }}
        >
          <h2>{order.dishName}</h2>
          <p>Order ID: {order.id}</p>
          <p>Name: {order.name}</p>
          <p>Phone: {order.phone}</p>
          <p>
            Total: {order.total} {order.currency}
          </p>
          <p>Status: {order.status}</p>

          {order.status !== "Cancelled" && (
            <form action={cancelOrder}>
              <input type="hidden" name="orderId" value={order.id} />
              <button type="submit">Cancel Order</button>
            </form>
          )}
        </article>
      ))}
    </main>
  );
}
