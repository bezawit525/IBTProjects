import Link from "next/link";

export default function HomePage() {
  return (
    <main>
      <h1>Addis Eats</h1>
      <p>Welcome to Addis Eats!</p>

      <Link href="/menu">View Menu</Link>
      {" | "}
      <Link href="/cart">Cart</Link>
      {" | "}
      <Link href="/checkout">Checkout</Link>
    </main>
  );
}
