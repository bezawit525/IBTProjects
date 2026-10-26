import Link from "next/link";
import TanStackMenu from "./TanStackMenu.js";

export default function TanStackPage() {
  return (
    <>
      <header>
        <h1>Addis Eats</h1>
        <nav>
          <Link href="/">Home</Link>
          <Link href="/menu">SWR Menu</Link>
          <Link href="/cart">Cart</Link>
        </nav>
      </header>

      <main>
        <TanStackMenu />
      </main>
    </>
  );
}
