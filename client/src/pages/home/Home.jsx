import React from "react";

import { Link } from "react-router-dom";
import "./Home.css";
import Form from "../../Parts/Form/Form.jsx";

function Home() {
  return (
    <div className="home">
      <div className="hero-section">
        <div className="hero-section-title">
          <h2>SANTORINI AMMUNITIONS</h2>
        </div>
        <div className="hero-section-description">
          <p>
            At SA, we're your trusted source for top-quality firearms,
            accessories, secure storage solutions, maintenance, and professional
            firearm training in Kenya. Our products and services cater to both
            seasoned marksmen and first-time buyers, ensuring you have the
            product reach and training available. Explore our wide range of
            offerings, including our Karen range for training. We take pride in
            our unwavering commitment to quality and industry standards.
          </p>
        </div>
        <div className="two-buttons">
          <button className="btn1">
            {" "}
            <Link to="/About">About Us</Link>
          </button>
          <button className="btn2">
            <Link to="/Sbshop">OUR PRODUCTS</Link>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
