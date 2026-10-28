import Link from "next/link";
import { notFound } from "next/navigation";
import { getDishById, getDishes } from "../../../lib/dishes.js";

export async function generateStaticParams() {
  const dishes = await getDishes();

  return dishes.map((dish) => ({
    id: String(dish.id),
  }));
}

export default async function DishPage({ params }) {
  const { id } = await params;
  const dish = await getDishById(id);

  if (!dish) {
    notFound();
  }

  return (
    <article className="dish-detail">
      <span className="dish-category">{dish.category}</span>

      <h1>{dish.name}</h1>
      <p>{dish.description}</p>

      <h2>{dish.price} ETB</h2>

      <Link href="/menu" className="button">
        Back to Menu
      </Link>
    </article>
  );
}
