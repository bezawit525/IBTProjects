"use server";

import { revalidateTag, updateTag } from "next/cache";

export async function refreshDishes() {
  revalidateTag("dishes", "max");
}

export async function refreshDishesImmediately() {
  updateTag("dishes");
}
