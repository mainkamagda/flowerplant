import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header className="header">
      <div className="container header-inner">
        <h1 className="logo">FlowerPlant</h1>


        <nav className="nav">
          <NavLink to="/" end className="nav-link">
            Home
          </NavLink>

          <NavLink to="/my-plants" className="nav-link">
            My Plants
          </NavLink>

          <NavLink to="/about" className="nav-link">
            About
          </NavLink>


        </nav>
      </div>
    </header>
  )
}