import "./globals.css";
import Providers from "./providers";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

export const metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    template: "%s · Addis Eats",
    default: "Addis Eats — Ethiopian Food Delivery",
  },

  description: "Discover Ethiopian dishes available from Addis Eats.",

  openGraph: {
    title: "Addis Eats — Ethiopian Food Delivery",
    description: "Discover Ethiopian dishes available from Addis Eats.",
    url: "/",
    siteName: "Addis Eats",
    type: "website",
    images: ["/opengraph-image.png"],
  },

  twitter: {
    card: "summary_large_image",
    title: "Addis Eats — Ethiopian Food Delivery",
    description: "Discover Ethiopian dishes available from Addis Eats.",
    images: ["/opengraph-image.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
