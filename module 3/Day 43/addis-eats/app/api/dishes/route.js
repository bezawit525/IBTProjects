import { NextResponse } from "next/server";
import { dishes } from "../../../lib/dishes.js";

export async function GET(request) {
  const { searchParams } = new URL(request.url);

  const search = (searchParams.get("q") || "").toLowerCase();
  const category = searchParams.get("category") || "All";
  const page = Math.max(1, Number(searchParams.get("page")) || 1);
  const limit = Math.max(
    1,
    Math.min(20, Number(searchParams.get("limit")) || 4),
  );

  let filteredDishes = dishes.filter((dish) => {
    const matchesSearch =
      dish.name.toLowerCase().includes(search) ||
      dish.description.toLowerCase().includes(search);

    const matchesCategory = category === "All" || dish.category === category;

    return matchesSearch && matchesCategory;
  });

  const total = filteredDishes.length;
  const totalPages = Math.max(1, Math.ceil(total / limit));
  const safePage = Math.min(page, totalPages);
  const start = (safePage - 1) * limit;

  return NextResponse.json({
    data: filteredDishes.slice(start, start + limit),
    page: safePage,
    limit,
    total,
    totalPages,
  });
}
