import Link from "next/link";

export default function NotFound() {
  return (
    <main>
      <h1> page not found </h1>
      <p>Sorry,we couldn't find the page.</p>
      <Link href="/">Go Home</Link>
    </main>
  );
}
