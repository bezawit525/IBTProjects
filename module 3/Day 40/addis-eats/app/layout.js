import Link from "next/link";
import "./globals.css";

export const metadata = {
  title: "Addis Eats",
  description: "Discover and order delicious Ethiopian food.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header className="site-header">
          <Link href="/" className="logo">
            Addis Eats
          </Link>

          <nav className="main-nav">
            <Link href="/">Home</Link>
            <Link href="/menu">Menu</Link>
            <Link href="/cart">Cart</Link>
            <Link href="/checkout">Checkout</Link>
          </nav>
        </header>

        <main className="container">{children}</main>

        <footer className="site-footer">
          <p>© 2026 Addis Eats | Ethiopian Food, Delivered Simply</p>
        </footer>
      </body>
    </html>
  );
}
