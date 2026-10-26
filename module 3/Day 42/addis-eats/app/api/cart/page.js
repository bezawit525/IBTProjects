import Link from "next/link";
import Cart from "./Cart.js";

export default function CartPage() {
  return (
    <>
      <header>
        <h1>Addis Eats</h1>
        <nav>
          <Link href="/">Home</Link>
          <Link href="/menu">Menu Search</Link>
          <Link href="/menu/paginated">Paginated Menu</Link>
        </nav>
      </header>

      <main>
        <Cart />
      </main>
    </>
  );
}
