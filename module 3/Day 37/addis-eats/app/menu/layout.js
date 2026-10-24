import Link from "next/link";

export default function MenuLayout({ children }) {
  return (
    <div>
      <aside>
        <h2>Categories</h2>

        <ul>
          <li>Ethiopian</li>
          <li>Pizza</li>
          <li>Burgers</li>
        </ul>

        <Link href="/menu">All Dishes</Link>
      </aside>

      <section>{children}</section>
    </div>
  );
}
