import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="left">
        <div className="contact-us">
          <h1 className="reddish">CONTACT US</h1>
        </div>
        <div className="phone-information">
          <h5 className="greyyish">PHONE</h5>
          <p>(+254) 708 4566555</p>
        </div>
        <div className="opening-hours-information">
          <h5 className="greyyish">OPENING HOURS</h5>
          <p>
            Monday - Friday: <p className="reddish">8:00am - 5:00pm</p>
          </p>
          <p>
            Saturday: <p className="reddish">Closed</p>
          </p>
          <p>
            Sunday & public Holidays: <p className="reddish">Closed</p>
          </p>
        </div>
      </div>
      <div className="right">
        <div className="email-information">
          <h5 className="greyyish">EMAIL</h5>
          <p>info@santoriniammunition.ac.ke</p>
        </div>
        <div className="address-information">
          <h5 className="greyyish">ADDRESS</h5>

          <p>Santorini Ammunition, Kuwait, Amsterdam</p>
        </div>
        <div className="location-logo-icon">
          <img src="#" alt="location" className="location"></img>
        </div>
        <div className="gun-shop-location">
          <h5 className="greyyish">GUN SHOP LOCATION</h5>
        </div>
      </div>
    </div>
  );
};

export default Footer;
