import React from "react";
import { Link } from "react-router-dom";
import "../styles/sidebar.css";

const SideBar = () => {
  return (
    <div className="sidebar">
      <h2>Filter By City</h2>
      <Link to={`/?query={"city": "Liverpool"}`}>Liverpool</Link>
      <Link to={`/?query={"city": "Manchester"}`}>Manchester</Link>
      <Link to={`/?query={"city": "Leeds"}`}>Leeds</Link>
      <Link to={`/?query={"city": "Sheffield"}`}>Sheffield</Link>
    </div>
  );
};

export default SideBar;
