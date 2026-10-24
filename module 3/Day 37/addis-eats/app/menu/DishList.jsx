import Link from "next/link";
import { cacheLife, cacheTag } from "next/cache";
import { dishes } from "../../lib/dishes.js";

async function getDishes() {
  "use cache";

  cacheLife("hours");
  cacheTag("dishes");

  return dishes;
}

export default async function DishList() {
  // Demo delay so you can see the loading UI.
  await new Promise((resolve) => setTimeout(resolve, 2000));

  const menuDishes = await getDishes();

  return (
    <div>
      {menuDishes.map((dish) => (
        <article key={dish.id}>
          <h3>{dish.name}</h3>
          <p>{dish.description}</p>
          <p>Price: {dish.price} ETB</p>
          <Link href={`/menu/${dish.id}`}>View Dish</Link>
          <hr />
        </article>
      ))}
    </div>
  );
}
