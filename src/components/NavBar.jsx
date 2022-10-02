import React from "react";
import "../styles/navbar.css";

const NavBar = () => {
  return (
    <div className="navbar">
      <img
        className="navbar__logo"
        src="https://mcrcodes.s3.eu-west-2.amazonaws.com/course/surreal-estate/logo.png"
        alt="siteLogo"
      />
      <ul className="navbar-links">
        <li className="navbar-links-item">View Properties</li>
        <li className="navbar-links-item">Add a Property</li>
      </ul>
    </div>
  );
};

export default NavBar;
