import { dishes } from "../../../lib/dishes";

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const category = searchParams.get("category");

  const filteredDishes = category
    ? dishes.filter(
        (dish) => dish.category.toLowerCase() === category.toLowerCase(),
      )
    : dishes;

  return Response.json(filteredDishes);
}
