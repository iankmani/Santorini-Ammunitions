import React from "react";
// import { Link } from 'react-router-dom'
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <div className="hero-section">
        <div className="hero-section-title">
          <h2>SANTORINI AMMUNITIONS</h2>
        </div>
        <div className="hero-section-description">
          <p>
            At KB, we're your trusted source for top-quality firearms,
            accessories, secure storage solutions, maintenance, and professional
            firearm training in Kenya. Our products and services cater to both
            seasoned marksmen and first-time buyers, ensuring you have the
            product reach and training available. Explore our wide range of
            offerings, including our Karen range for training. We take pride in
            our unwavering commitment to quality and industry standards.
          </p>
        </div>
        <div className="two-buttons">
          <button className="btn1">ABOUT US</button>
          <button className="btn2">OUR PRODUCTS</button>
        </div>
      </div>
    </div>
  );
}

export default Home;
