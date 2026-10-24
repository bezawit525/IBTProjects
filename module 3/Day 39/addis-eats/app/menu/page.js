import { Suspense } from "react";
import Link from "next/link";
import { getDishes } from "./data.js";
import { refreshDishes } from "./actions.js";

async function DishList() {
  const dishes = await getDishes();

  return (
    <div>
      {dishes.map((dish) => (
        <article key={dish.id}>
          <h3>{dish.name}</h3>
          <p>{dish.description}</p>
          <p>Price: {dish.price} ETB</p>

          <Link href={`/menu/${dish.id}`}>View dish</Link>

          <hr />
        </article>
      ))}
    </div>
  );
}

export default function MenuPage() {
  return (
    <main>
      <h1>Today's Menu</h1>
      <p>Choose your favorite Ethiopian food.</p>

      <form action={refreshDishes}>
        <button type="submit">Revalidate Menu Cache</button>
      </form>

      <Suspense fallback={<p>Loading dishes...</p>}>
        <DishList />
      </Suspense>
    </main>
  );
}
