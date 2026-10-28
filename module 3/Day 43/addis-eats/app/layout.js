import "./globals.css";
import { Inter } from "next/font/google";
import Providers from "./providers.js";

export const metadata = {
  title: "Addis Eats",
  description: "Ethiopian food ordering application",
};

const inter = Inter({
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <body className={inter.className}>{children}</body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
