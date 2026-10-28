import Link from "next/link";

export default function MenuLayout({ children }) {
  return (
    <section>
      <aside className="category-bar">
        <strong>Categories:</strong>

        <Link href="/menu">All Dishes</Link>
        <Link href="/menu?category=traditional">Traditional</Link>
        <Link href="/menu?category=fast-food">Fast Food</Link>
        <Link href="/menu?category=vegetarian">Vegetarian</Link>
      </aside>

      {children}
    </section>
  );
}
