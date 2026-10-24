import Header from "../components/Header.js";

export const metadata = {
  title: "Addis Eats",
  description: "Discover delicious food with Addis Eats.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />

        {children}

        <footer>
          <p>© 2026 Addis Eats</p>
        </footer>
      </body>
    </html>
  );
}
