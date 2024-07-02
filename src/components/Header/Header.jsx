import React from "react";
import HeaderLogo from "../../assets/pics/logologo.jpeg";
import "./Header.css";
// import {Link} from 'react-router-dom'

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
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">SB Shop</a>
            </li>
            <li>
              <a href="#">Services</a>
            </li>
            <li>
              <a href="#">Contact Us</a>
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default Header;
