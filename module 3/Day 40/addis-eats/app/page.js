import Link from "next/link";

export default function HomePage() {
  return (
    <section className="hero">
      <p className="eyebrow">WELCOME TO ADDIS EATS</p>

      <h1>Your favorite Ethiopian food, all in one place.</h1>

      <p>
        Explore traditional Ethiopian dishes, discover new favorites, and
        prepare your order with ease.
      </p>

      <div className="button-row">
        <Link href="/menu" className="button">
          Explore Our Menu
        </Link>

        <Link href="/cart" className="button button-secondary">
          View Cart
        </Link>
      </div>
    </section>
  );
}
