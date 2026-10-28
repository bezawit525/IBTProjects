import Link from "next/link";
import { dishes } from "../lib/dishes.js";

export default function HomePage() {
  return (
    <>
      <header>
        <h1>Addis Eats</h1>
        <p>Discover Ethiopian food.</p>

        <nav>
          <Link href="/">Home</Link>
          <Link href="/menu">Menu Search</Link>
          <Link href="/menu/paginated">Paginated Menu</Link>
          <Link href="/cart">Cart</Link>
          <Link href="/orders/1001">Track Order</Link>
          <Link href="/tanstack">TanStack Query</Link>
        </nav>
      </header>

      <main>
        <h1>Welcome to Addis Eats!</h1>
        <p>Explore traditional Ethiopian dishes and find your favorite meal.</p>

        <h2>Our Menu</h2>

        <div className="dish-grid">
          {dishes.slice(0, 4).map((dish) => (
            <article className="dish-card" key={dish.id}>
              <h2>{dish.name}</h2>
              <p>{dish.description}</p>
              <p>
                <strong>{dish.price} ETB</strong>
              </p>
            </article>
          ))}
        </div>

        <section>
          <h2>Explore the menu</h2>
          <p>
            Search dishes, filter categories, browse pages, and learn how
            client-side data fetching works.
          </p>
          <Link href="/menu">Open Menu Search →</Link>
        </section>
      </main>
    </>
  );
}
