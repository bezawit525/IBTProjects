import Link from "next/link";

export default function NotFound() {
  return (
    <main>
      <h1>404 - Page Not Found</h1>
      <p>Sorry, we could not find that page or dish.</p>

      <Link href="/menu">Return to Menu</Link>
    </main>
  );
}
