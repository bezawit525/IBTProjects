import Link from "next/link";
import PaginatedMenu from "./PaginatedMenu";

export default function PaginatedMenuPage() {
  return (
    <>
      <header>
        <h1>Addis Eats</h1>
        <nav>
          <Link href="/">Home</Link>
          <Link href="/menu">Menu Search</Link>
          <Link href="/cart">Cart</Link>
        </nav>
      </header>

      <main>
        <PaginatedMenu />
      </main>
    </>
  );
}
