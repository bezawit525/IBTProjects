"use server";

import { revalidatePath } from "next/cache";
import { orderSchema } from "../lib/schema";
import { dishes } from "../lib/dishes";
import { orders } from "../lib/orders";

// Demo identity for this lesson only.
// Replace with your real authentication system in production.
const DEMO_USER_ID = "demo-user";

export async function placeOrder(previousState, formData) {
  const result = orderSchema.safeParse({
    name: formData.get("name"),
    phone: formData.get("phone"),
    dishId: formData.get("dishId"),
  });

  if (!result.success) {
    return {
      success: false,
      error: "Validation failed",
      fieldErrors: result.error.flatten().fieldErrors,
    };
  }

  const dish = dishes.find((item) => item.id === result.data.dishId);

  if (!dish) {
    return {
      success: false,
      error: "Dish not found",
      fieldErrors: {},
    };
  }

  const order = {
    id: `ord-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
    userId: DEMO_USER_ID,
    name: result.data.name,
    phone: result.data.phone,
    dishId: dish.id,
    dishName: dish.name,
    total: dish.price,
    currency: "ETB",
    status: "Placed",
  };

  orders.push(order);

  revalidatePath("/orders");

  return {
    success: true,
    orderId: order.id,
    error: "",
    fieldErrors: {},
  };
}

export async function cancelOrder(formData) {
  const orderId = formData.get("orderId");

  if (typeof orderId !== "string" || !orderId) {
    return { success: false, error: "Invalid order ID" };
  }

  // In a real app, obtain this user from the authentication system.
  const currentUserId = DEMO_USER_ID;

  const order = orders.find((item) => item.id === orderId);

  if (!order) {
    return { success: false, error: "Order not found" };
  }

  if (order.userId !== currentUserId) {
    return {
      success: false,
      error: "You are not allowed to cancel this order",
    };
  }

  if (order.status === "Cancelled") {
    return { success: false, error: "Order already cancelled" };
  }

  order.status = "Cancelled";

  revalidatePath("/orders");

  return { success: true, error: "" };
}
