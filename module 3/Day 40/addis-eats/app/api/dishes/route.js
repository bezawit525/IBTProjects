import { getDishes } from "../../../lib/dishes";

export async function GET() {
  const dishes = await getDishes();

  return Response.json({
    success: true,
    count: dishes.length,
    dishes,
  });
}
