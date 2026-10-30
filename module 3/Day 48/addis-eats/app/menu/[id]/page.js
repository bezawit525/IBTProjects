import { notFound } from "next/navigation";
import { getDish, getDishes } from "../../../lib/data";
import AddToCartButton from "../../../components/AddToCartButton";

export async function generateMetadata({ params }) {
  const { id } = await params;
  const dish = await getDish(id);
  if (!dish) return { title: "Dish not found" };
  return {
    title: dish.name,
    description: dish.description,
    openGraph: { title: `${dish.name} | Addis Eats`, description: dish.description }
  };
}

export async function generateStaticParams() {
  const dishes = await getDishes();
  return dishes.map((dish) => ({ id: String(dish.id) }));
}

export default async function DishPage({ params }) {
  const { id } = await params;
  const dish = await getDish(id);
  if (!dish) notFound();

  return (
    <main>
      <p className="eyebrow">{dish.category || "Addis Eats menu"}</p>
      <h1>{dish.name}</h1>
      <p>{dish.description}</p>
      <p className="price">{dish.price} ETB</p>
      <AddToCartButton dish={dish} />
      <p><a href="/menu">← Back to menu</a></p>
    </main>
  );
}
