import { NextResponse } from "next/server";

let cart = [];

export async function GET() {
  return NextResponse.json(cart);
}

export async function POST(request) {
  const dish = await request.json();

  if (!dish.id || !dish.name || !Number.isFinite(Number(dish.price))) {
    return NextResponse.json({ error: "Invalid dish." }, { status: 400 });
  }

  const existingItem = cart.find((item) => item.id === dish.id);

  if (existingItem) {
    cart = cart.map((item) =>
      item.id === dish.id ? { ...item, quantity: item.quantity + 1 } : item,
    );
  } else {
    cart = [
      ...cart,
      {
        id: dish.id,
        name: dish.name,
        price: Number(dish.price),
        quantity: 1,
      },
    ];
  }

  return NextResponse.json(cart, { status: 201 });
}

export async function DELETE(request) {
  const { id } = await request.json();

  cart = cart.filter((item) => item.id !== id);

  return NextResponse.json(cart);
}
