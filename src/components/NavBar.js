import "./NavBar.css";
import CartWidget from "./CartWidget";

const NavBar = () => {
  const listMenu = document.getElementById("listMenu");
  console.log(listMenu);

  const showHideMenu = () => listMenu.classList.toggle("hide");

  return (
    <nav className="navbar-main">
      <div className="navlist-container">
        <div onClick={showHideMenu} className="menu-icon">
          <ion-icon name="menu-outline"></ion-icon>
        </div>
        <ul className="navlist hide" id="listMenu">
          <li className="navlist-item">home</li>
          <li className="navlist-item">menú</li>
          <li className="navlist-item">contactanos</li>
        </ul>
      </div>
      <div className="navlogo-container">
        <img
          src="https://res.cloudinary.com/dystdxfua/image/upload/v1669315810/just%20cupcakes/logo_spvrj6.png"
          alt="just-cupcakes-logo"
          className="navbar-logo"
        />
      </div>
      <div className="navcart-container">
        <CartWidget />
      </div>
    </nav>
  );
};

export default NavBar;
