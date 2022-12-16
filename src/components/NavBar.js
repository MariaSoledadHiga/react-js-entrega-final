import "./NavBar.css";
import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navbar-main">
      <div className="navlist-container">
        <ul className="navlist">
          <Link to="/category/chocolate">
            <li className="navlist-item">chocolate</li>
          </Link>
          <Link to="/category/frutal">
            <li className="navlist-item">frutal</li>
          </Link>
          <Link to="/category/especial">
            <li className="navlist-item">especial</li>
          </Link>
        </ul>
      </div>
      <div className="navlogo-container">
        <Link to="/">
          <img
            src="https://res.cloudinary.com/dystdxfua/image/upload/v1669315810/just%20cupcakes/logo_spvrj6.png"
            alt="just-cupcakes-logo"
            className="navbar-logo"
          />
        </Link>
      </div>
      <div className="navcart-container">
        <CartWidget />
      </div>
    </nav>
  );
};

export default NavBar;
