//React Router
import { Link, NavLink } from "react-router"

export default function NavBar() {
  return (
    <nav className="top-nav">
      <div className="nav-text-large">
        <Link to="/">Home</Link>
      </div>
      <ul className="nav-list">
        <li>
          <NavLink to="/comparison">Comparison</NavLink>
        </li>
        <li>
          <NavLink to="/landlord-comparison">Landlord Comparison</NavLink>
        </li>
        <li>
          <NavLink to="/product">Product</NavLink>
        </li>
      </ul>
    </nav>
  )
}
