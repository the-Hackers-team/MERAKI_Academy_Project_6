import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Header.css";
import logo from "./youtube-logo.png";
import Categories from "../Categories/Categories";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
const Header = ({ setSideClick, sideClick, setSearch, search }) => {
  const state = useSelector((state) => {
    return {
      isLoggedIn: state.loginReducer.isLoggedIn,
      token: state.loginReducer.token,
    };
  });
  const location = useLocation();
  const navigate = useNavigate();
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

      {state.token ? (
        <div className="header__search">
          <form action="" onSubmit={(e) => e.preventDefault()}>
            <input
              type="text"
              placeholder="Search"
              onChange={(e) => {
                setSearch(e.target.value);
              }}
            />

            <i
              className="material-icons"
              onClick={() => navigate(`/search/${search}`)}
            >
              search
            </i>
          </form>
        </div>
      ) : null}

      {state.token ? (
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
                <Link className="dropdown-item" to="/profile">
                  New Video...
                </Link>
              </li>{" "}
              <li>
                <Link className="dropdown-item" to="#">
                  Settings
                </Link>
              </li>{" "}
              <li>
                <Link className="dropdown-item" to="/profile">
                  Profile
                </Link>
              </li>{" "}
              <li>
                <hr className="dropdown-divider" />
              </li>{" "}
              <li
                className="dropdown-item"
                to="#"
                onClick={() => {
                  window.localStorage.clear();
                  navigate("/login");
                }}
              >
                Sign out
              </li>{" "}
            </ul>{" "}
          </div>{" "}
        </div>
      ) : null}
    </div>
    //  <Categories/>
    // </div>
  );
};

export default Header;
