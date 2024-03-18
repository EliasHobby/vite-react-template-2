import { Link } from "react-router-dom";
import logo from "../../assets/react.svg";
import "./header.css";

export const Header = () => {
  return (
    <div className="header-container">
      <div className="navbar-col-1">
        <img src={logo} alt="Logo" id="header-logo" />
      </div>
      <div className="nav-links-wrapper navbar-col-2">
        <Link className="nav-link" to="/">
          HOME
        </Link>
        <Link className="nav-link" to="/about">
          ABOUT
        </Link>
        <Link className="nav-link" to="/contact">
          CONTACT
        </Link>
      </div>
      <div className="navbar-col-3">
        <button id="settings-button">Settings</button>
        <button id="logout-button">Logout</button>
      </div>
    </div>
  );
};
