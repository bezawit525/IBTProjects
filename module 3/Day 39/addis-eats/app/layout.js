import Link from "next/link";

export const metadata = {
  title: "Addis Eats",
  description: "Discover delicious Ethiopian food.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header>
          <nav>
            <Link href="/">Home</Link>
            {" | "}
            <Link href="/menu">Menu</Link>
            {" | "}
            <Link href="/cart">Cart</Link>
            {" | "}
            <Link href="/checkout">Checkout</Link>
          </nav>
        </header>

        {children}

        <footer>
          <hr />
          <p>© 2026 Addis Eats</p>
        </footer>
      </body>
    </html>
  );
}
