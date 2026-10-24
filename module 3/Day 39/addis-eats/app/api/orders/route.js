import { dishes } from "../../../lib/dishes";

import { orderSchema } from "../../../lib/schema";

export async function POST(request) {
  let body;

  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "Invalid JSON request" }, { status: 400 });
  }

  const result = orderSchema.safeParse(body);

  if (!result.success) {
    return Response.json(
      {
        error: "Validation failed",
        fieldErrors: result.error.flatten().fieldErrors,
      },
      { status: 422 },
    );
  }

  const dish = dishes.find((item) => item.id === result.data.dishId);

  if (!dish) {
    return Response.json({ error: "Dish not found" }, { status: 404 });
  }

  const order = {
    id: `ord-${Date.now()}`,
    name: result.data.name,
    phone: result.data.phone,
    dishId: dish.id,
    total: dish.price,
    currency: "ETB",
  };

  return Response.json(order, { status: 201 });
}
