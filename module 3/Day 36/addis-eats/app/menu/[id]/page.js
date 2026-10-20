import Link from "next/link";
import { notFound } from "next/navigation";

const dishes = {
  kitfo: "Kitfo - 350 ETB",
  shiro: "Shiro - 180 ETB",
  "doro-wot": "Doro Wot - 250 ETB",
};

export default async function DishPage({ params }) {
  const { id } = await params;
  const dish = dishes[id];

  if (!dish) {
    notFound();
  }

  return (
    <main>
      <h1>{dish}</h1>
      <Link href="/menu">Back to Menu</Link>
    </main>
  );
}
