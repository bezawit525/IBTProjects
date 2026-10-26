import Link from "next/link";
import SearchBox from "./SearchBox.js";

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
