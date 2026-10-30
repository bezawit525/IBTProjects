import { NextResponse } from "next/server";
import { getDishes } from "../../../lib/data";

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const q = (searchParams.get("q") || "").trim().toLowerCase();
    const page = Math.max(1, Number.parseInt(searchParams.get("page") || "1", 10) || 1);
    const limit = Math.min(20, Math.max(1, Number.parseInt(searchParams.get("limit") || "6", 10) || 6));
    const all = await getDishes();
    const filtered = all.filter((dish) => `${dish.name} ${dish.description} ${dish.category || ""}`.toLowerCase().includes(q));
    const total = filtered.length;
    const totalPages = Math.max(1, Math.ceil(total / limit));
    const safePage = Math.min(page, totalPages);
    const dishes = filtered.slice((safePage - 1) * limit, safePage * limit);
    return NextResponse.json({ dishes, total, page: safePage, totalPages }, {
      headers: { "Cache-Control": "no-store" }
    });
  } catch {
    return NextResponse.json({ error: "Could not load dishes." }, { status: 500 });
  }
}
