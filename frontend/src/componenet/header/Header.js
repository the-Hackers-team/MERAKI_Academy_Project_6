import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import logo from "./youtube-logo.png";
import Categories from "../Categories/Categories";
import { useLocation } from "react-router-dom";

const Header = ({ setSideClick, sideClick }) => {
  const location = useLocation();

  return (
    // <div classNameName="main-header">
    <div className={location.pathname == "/video" ? "header-border" : "header"}>
      <div className="header__left">
        <i
          id="menu"
          className={
            location.pathname == "/video" ? "display-none" : "material-icons"
          }
          onClick={() => {
            setSideClick(!sideClick);
          }}
        >
          menu
        </i>
        <Link to="/">
          {" "}
          <img src={logo} />
        </Link>
      </div>

      <div className="header__search">
        <form action="">
          <input type="text" placeholder="Search" />

          <i className="material-icons">search</i>
        </form>
      </div>

      <div className="header__icons">
        {/* <i className="material-icons display-this">search</i> */}
        <Link to="/create">
          <i className="material-icons">video_call</i>
        </Link>
        <Link to="">
          {" "}
          <i className="material-icons">apps</i>
        </Link>
        <i className="material-icons">notifications</i>{" "}
        <div className="dropdown text-end">
          {" "}
          <Link
            to="#"
            className="d-block link-dark text-decoration-none dropdown-toggle"
            id="dropdownUser1"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <i className="material-icons account">account_circle</i>{" "}
          </Link>{" "}
          <ul
            className="dropdown-menu text-small"
            aria-labelledby="dropdownUser1"
          >
            {" "}
            <li>
              <Link className="dropdown-item" to="#">
                New project...
              </Link>
            </li>{" "}
            <li>
              <Link className="dropdown-item" to="#">
                Settings
              </Link>
            </li>{" "}
            <li>
              <Link className="dropdown-item" to="#">
                Profile
              </Link>
            </li>{" "}
            <li>
              <hr className="dropdown-divider" />
            </li>{" "}
            <li>
              <Link className="dropdown-item" to="#">
                Sign out
              </Link>
            </li>{" "}
          </ul>{" "}
        </div>{" "}
      </div>
    </div>
    //  <Categories/>
    // </div>
  );
};

export default Header;
