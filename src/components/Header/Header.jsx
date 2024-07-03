import React from "react";
import HeaderLogo from "../../assets/pics/logologo.jpeg";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <div className="header">
        <div className="header-logo">
          <img src={HeaderLogo} alt="logo" className="header-logo-img" />
        </div>
        <div className="header-links">
          <ol className="list">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/About">About Us</Link>
            </li>
            <li>
              <Link to="/SBshop">SB Shop</Link>
            </li>
            <li>
              <Link to="/Services">Services</Link>
            </li>
            <li>
              <Link to="/Contact">Contact Us</Link>
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default Header;
