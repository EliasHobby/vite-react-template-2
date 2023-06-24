import { Link } from "react-router-dom";
import logo from "../../assets/react.svg";
import "./header.css";

export const Header = () => {
  return (
    <div className="header-container">
      <div>
        <img src={logo} alt="Logo" style={{ height: "3rem" }} />
      </div>
      <div style={{ display: "flex", alignItems: "center" }}>
        <Link to="/" style={{ margin: "0 1rem" }}>
          Home
        </Link>
        <Link to="/about" style={{ margin: "0 1rem" }}>
          About
        </Link>
        <Link to="/contact" style={{ margin: "0 1rem" }}>
          Contact
        </Link>
      </div>
      <div>
        <button style={{ marginRight: "1rem" }}>Settings</button>
        <button>Logout</button>
      </div>
    </div>
  );
};
