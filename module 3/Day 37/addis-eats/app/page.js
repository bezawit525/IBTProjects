import Link from "next/link";

export default function HomePage() {
  return (
    <main>
      <h2>Welcome to Addis Eats!</h2>
      <p>Discover delicious Ethiopian food and more.</p>

      <Link href="/menu">Explore Our Menu</Link>
    </main>
  );
}
