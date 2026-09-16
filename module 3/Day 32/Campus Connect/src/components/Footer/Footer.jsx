import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <NavLink to="/" className="logo">
          CampusConnect
        </NavLink>

        <div className="nav-links">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/clubs">Clubs</NavLink>
          <NavLink to="/events">Events</NavLink>
          <NavLink to="/resources">Resources</NavLink>
          <NavLink to="/about">About</NavLink>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
