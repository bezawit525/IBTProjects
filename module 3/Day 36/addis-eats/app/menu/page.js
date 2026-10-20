import Link from "next/link";

export default function MenuPage() {
  return (
    <main>
      <h1>Our Menu</h1>

      <p>
        <Link href="/menu/kitfo">Kitfo</Link>
      </p>
      <p>
        <Link href="/menu/shiro">Shiro</Link>
      </p>
      <p>
        <Link href="/menu/doro-wot">Doro Wot</Link>
      </p>
    </main>
  );
}
