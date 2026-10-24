import Link from 'next/link';
import './globals.css';
import { SITE_NAME, SITE_URL } from '@/lib/site';

// metadataBase makes og:image absolute, so share previews keep their picture.
export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: `${SITE_NAME}: events and workshops in Addis Ababa`, template: `%s | ${SITE_NAME}` },
  description: 'Browse events and workshops in Addis Ababa, reserve your seat and manage your tickets in one place.',
  openGraph: { siteName: SITE_NAME, type: 'website', locale: 'en_ET' }
};

export default function RootLayout({ children }) {
  // Header is static on purpose: reading cookies here would make every route dynamic.
  return (
    <html lang="en">
      <body>
        <a href="#main" className="skip">Skip to content</a>
        <header className="site-header">
          <Link href="/" className="brand">Addis Events</Link>
          <nav aria-label="Main">
            <Link href="/events">Events</Link>
            <Link href="/dashboard">My tickets</Link>
            <Link href="/signin" className="btn small">Sign in</Link>
          </nav>
        </header>
        <main id="main">{children}</main>
        <footer className="site-footer"><p>Addis Events · A capstone project. Data resets when the server restarts.</p></footer>
      </body>
    </html>
  );
}
