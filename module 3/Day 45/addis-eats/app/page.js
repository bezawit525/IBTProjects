import Link from "next/link";
import { getDishes } from "../lib/data";

export const metadata = {
  title: "Home",
  description: "Discover Ethiopian favorites and order from Addis Eats."
};

export default async function HomePage() {
  const dishes = (await getDishes()).slice(0, 3);
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    name: "Addis Eats",
    servesCuisine: "Ethiopian",
    url: process.env.SITE_URL || "http://localhost:3000"
  };

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }} />
      <section className="hero">
        <p className="eyebrow">A taste of Ethiopia</p>
        <h1>Your Ethiopian favorites, made easy.</h1>
        <p>Explore familiar dishes, add your favorites to the cart, and follow your order.</p>
        <div className="actions"><Link className="button" href="/menu">Explore the menu</Link><Link href="/signin">Sign in to order</Link></div>
      </section>
      <section>
        <div className="row"><h2>Popular dishes</h2><Link href="/menu">View all dishes →</Link></div>
        <div className="grid">
          {dishes.map((dish) => (
            <article className="card" key={dish.id}>
              <p className="eyebrow">{dish.category || "Made fresh"}</p>
              <h3>{dish.name}</h3><p className="muted">{dish.description}</p>
              <p className="price">{dish.price} ETB</p>
              <Link href={`/menu/${dish.id}`}>View dish →</Link>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
