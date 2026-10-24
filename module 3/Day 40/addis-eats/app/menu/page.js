import Link from "next/link";
import { getDishes } from "../../lib/dishes.js";

export default async function MenuPage({ searchParams }) {
  const dishes = await getDishes();
  const params = await searchParams;
  const category = params?.category;

  const filteredDishes = category
    ? dishes.filter((dish) => dish.category === category)
    : dishes;

  return (
    <section>
      <h1>Our Menu</h1>
      <p>Choose your favorite dish from our menu.</p>

      {filteredDishes.length === 0 ? (
        <p>No dishes found in this category.</p>
      ) : (
        <div className="dish-grid">
          {filteredDishes.map((dish) => (
            <article className="dish-card" key={dish.id}>
              <span className="dish-category">{dish.category}</span>

              <h2>{dish.name}</h2>
              <p>{dish.description}</p>

              <p className="price">{dish.price} ETB</p>

              <Link href={`/menu/${dish.id}`} className="button">
                View Dish
              </Link>
            </article>
          ))}
        </div>
      )}
    </section>
  );
}
