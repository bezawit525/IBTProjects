import Link from "next/link";
import SearchBox from "./SearchBox.js";

export const metadata = {
  title: "Menu",
  description: "Explore Ethiopian dishes available on the Addis Eats menu.",
  alternates: {
    canonical: "/menu",
  },
};

export default function MenuPage() {
  return (
    <>
      <header>
        <h1>Addis Eats</h1>
        <nav>
          <Link href="/">Home</Link>
          <Link href="/menu/paginated">Paginated Menu</Link>
          <Link href="/cart">Cart</Link>
        </nav>
      </header>

      <main>
        <SearchBox />
      </main>
    </>
  );
}
