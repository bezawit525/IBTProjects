import "./globals.css";
import "./day47-day48.css";
import "leaflet/dist/leaflet.css";
import { Geist } from "next/font/google";

const geist = Geist({ subsets: ["latin"] });

export const metadata = {
  metadataBase: new URL(process.env.SITE_URL || "http://localhost:3000"),
  title: {
    default: "Addis Eats",
    template: "%s | Addis Eats"
  },
  description: "Explore Ethiopian dishes and place your Addis Eats order.",
  openGraph: {
    title: "Addis Eats",
    description: "Explore Ethiopian dishes and place your Addis Eats order.",
    siteName: "Addis Eats",
    type: "website"
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={geist.className}>
        <header className="site-header">
          <a className="brand" href="/">Addis Eats</a>
          <nav aria-label="Main navigation">
            <a href="/menu">Menu</a>
            <a href="/cart">Cart</a>
            <a href="/orders">My Orders</a>
            <a href="/signin">Sign in</a>
          </nav>
        </header>
        {children}
        <footer className="site-footer">Addis Eats · Course project demo</footer>
      </body>
    </html>
  );
}
