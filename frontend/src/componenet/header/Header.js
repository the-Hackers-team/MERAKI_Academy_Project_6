import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import logo from "./youtube-logo.png";
import Categories from "../Categories/Categories";

const Header = ({ setSideClick, sideClick }) => {
  return (
    // <div classNameName="main-header">
    <div className="header">
      <div className="header__left">
        <i
          id="menu"
          className="material-icons"
          onClick={() => {
            setSideClick(!sideClick);
          }}
        >
          menu
        </i>
        <img src={logo} />
      </div>

      <div className="header__search">
        <form action="">
          <input type="text" placeholder="Search" />

          <i className="material-icons">search</i>
        </form>
      </div>

      <div className="header__icons">
        {/* <i className="material-icons display-this">search</i> */}
        <i className="material-icons">video_call</i>
        <i className="material-icons">apps</i>
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
