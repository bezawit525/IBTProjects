import Link from "next/link";

export default function NotFound() {
  return <main><h1>Page not found</h1><p>The page or item you requested could not be found.</p><Link className="button" href="/menu">Return to menu</Link></main>;
}
