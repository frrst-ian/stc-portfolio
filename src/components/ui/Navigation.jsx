import { NavLink } from "react-router-dom";

export const Navigation = () => {
  return (
    <nav className="main-nav">
      <h1> STC PortFolio</h1>
      <ul>
        <li>
          <NavLink
            to="/"
            end
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            end
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/certificates"
            end
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Certificates
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
