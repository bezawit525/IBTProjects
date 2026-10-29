"use server";

import { getSession } from "@/lib/session";

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

export async function cancelOrder(formData) {
  const session = await getSession();

  if (!session) {
    throw new Error("Not signed in");
  }

  const orderId = formData.get("orderId");

  if (typeof orderId !== "string") {
    throw new Error("Invalid order ID");
  }

  const order = orders.find((item) => item.id === orderId);

  if (!order) {
    throw new Error("Order not found");
  }

  if (order.userId !== session.userId) {
    throw new Error("You are not allowed to cancel this order");
  }

  if (order.status !== "Preparing") {
    throw new Error("This order cannot be cancelled");
  }

  // In a real application, update the database here.
  return { success: true };
}
