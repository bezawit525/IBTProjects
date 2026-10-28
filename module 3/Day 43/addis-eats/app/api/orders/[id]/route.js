import { NextResponse } from "next/server";

export async function GET(request, { params }) {
  const { id } = await params;

  const order = {
    id,
    status: "Preparing",
    message: "Your food is being prepared.",
    updatedAt: new Date().toISOString(),
  };

  return NextResponse.json(order);
}
