import Link from "next/link";
import { notFound } from "next/navigation";
import { dishes } from "../../../lib/dishes.js";

export function generateStaticParams() {
  return dishes.map((dish) => ({
    id: dish.id,
  }));
}

export default async function DishPage({ params }) {
  const { id } = await params;

  const dish = dishes.find((item) => item.id === id);

  if (!dish) {
    notFound();
  }

  return (
    <main>
      <h2>{dish.name}</h2>
      <p>{dish.description}</p>
      <p>Price: {dish.price} ETB</p>
      <p>Category: {dish.category}</p>

      <Link href="/menu">Back to Menu</Link>
    </main>
  );
}
