import { NavLink, Outlet } from "react-router-dom";
import CartBadge from "../CartBadge/CartBadge.jsx";
import useTheme from "../../hooks/useTheme.js";

function Layout() {
  const { theme, toggleTheme } = useTheme();

  return (
    <>
      <header>
        <h1>Addis Eats</h1>

        <p>Delicious Ethiopian food</p>

        <CartBadge />
      </header>

      <nav className="navbar">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/menu">Menu</NavLink>
        <NavLink to="/cart">Cart</NavLink>

        <button onClick={toggleTheme}>Theme: {theme}</button>
      </nav>

      <main>
        <Outlet />
      </main>
    </>
  );
}

export default Layout;
