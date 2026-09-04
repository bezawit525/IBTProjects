import { Link, Outlet } from "react-router-dom";
import Header from "../Header/Header.jsx";

function Layout() {
  return (
    <>
      <Header />

      <nav>
        <Link to="/">Home</Link> <Link to="/menu">Menu</Link>{" "}
        <Link to="/checkout">Checkout</Link> <Link to="/signin">Sign In</Link>
      </nav>

      <main>
        <Outlet />
      </main>

      <footer>
        <p>© 2026 Addis Eats</p>
      </footer>
    </>
  );
}

export default Layout;
