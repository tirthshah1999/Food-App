import { Link } from "react-router-dom";
import { Logo } from "../utils/constants";

function Header() {
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={Logo} alt="logo" />
      </div>
      <div className="nav-items">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
