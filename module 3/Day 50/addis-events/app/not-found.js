import Link from 'next/link';
export const metadata = { title: 'Page not found' };
export default function NotFound() {
  return (
    <div className="page empty">
      <h1>We could not find that page</h1>
      <p>The link may be wrong, or the ticket may belong to a different account.</p>
      <Link className="btn" href="/events">Browse events</Link>
    </div>
  );
}
