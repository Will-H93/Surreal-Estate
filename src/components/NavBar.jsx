import PropTypes from "prop-types";
import React from "react";
import FacebookLogin from "react-facebook-login";
import { Link } from "react-router-dom";
import "../styles/navbar.css";

const NavBar = ({ onLogin, userID, onLogout }) => {
  return (
    <div className="navbar">
      <img
        className="navbar__logo"
        src="https://mcrcodes.s3.eu-west-2.amazonaws.com/course/surreal-estate/logo.png"
        alt="siteLogo"
      />
      <ul className="navbar-links">
        <li className="navbar-links-item">
          <Link className="item" to="/">
            View Properties
          </Link>
        </li>
        <li className="navbar-links-item">
          <Link className="item" to="add-property">
            Add a Property
          </Link>
        </li>
      </ul>
      <div className="facebook-login">
        {!userID ? (
          <FacebookLogin
            appId="1485792895238619"
            fields="name,email,picture"
            callback={onLogin}
            icon="fa-facebook"
          />
        ) : (
          <button type="submit" onClick={onLogout}>
            Sign Out
          </button>
        )}
      </div>
    </div>
  );
};

NavBar.propTypes = {
  onLogin: PropTypes.string.isRequired,
  onLogout: PropTypes.string.isRequired,
  userID: PropTypes.string.isRequired,
};

export default NavBar;
