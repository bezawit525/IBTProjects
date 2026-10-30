"use server";

import { redirect } from "next/navigation";
import { createSession, destroySession, getSession } from "../lib/session";
import { findDemoUser, createOrder, updateOrderStatus as saveOrderStatus, getOrderById } from "../lib/store";
import { revalidatePath } from "next/cache";

function safeNext(value) {
  if (typeof value !== "string" || !value.startsWith("/") || value.startsWith("//") || value.includes("\\\\")) return "/";
  return value;
}

export async function signIn(formData) {
  const phone = String(formData.get("phone") || "").trim();
  const password = String(formData.get("password") || "");
  const next = safeNext(formData.get("next"));
  const user = findDemoUser(phone, password);
  if (!user) redirect(`/signin?error=invalid&next=${encodeURIComponent(next)}`);
  await createSession(user);
  redirect(next);
}

export async function signOut() {
  await destroySession();
  redirect("/");
}

export async function placeOrder(formData) {
  const user = await getSession();
  if (!user) redirect("/signin?next=/checkout");

  let items;
  try {
    items = JSON.parse(String(formData.get("items") || "[]"));
  } catch {
    throw new Error("The cart data is invalid. Please return to your cart.");
  }

  const order = createOrder(user, items);
  revalidatePath("/orders");
  revalidatePath("/kitchen");
  redirect(`/orders/${order.id}`);
}

export async function updateOrderStatus(formData) {
  const user = await getSession();
  if (!user) redirect("/signin?next=/kitchen");
  if (user.role !== "staff") throw new Error("Only staff can update order status.");

  const orderId = String(formData.get("orderId") || "");
  const status = String(formData.get("status") || "");
  const existing = getOrderById(orderId);
  if (!existing) throw new Error("Order not found.");

  saveOrderStatus(orderId, status);
  revalidatePath("/kitchen");
  revalidatePath("/orders");
  revalidatePath(`/orders/${orderId}`);
}
