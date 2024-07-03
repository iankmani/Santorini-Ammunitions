import React from "react";
import { CiLocationOn } from "react-icons/ci";
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
          <a
            href="https://www.google.com/maps/place/Muranga+University+Main+Gate/@-0.715113,37.1444763,17z/data=!3m1!4b1!4m6!3m5!1s0x1828996ce41f9c39:0xe9bd5117f20559ee!8m2!3d-0.715113!4d37.1470512!16s%2Fg%2F11jyy_mfhr?entry=ttu"
            target="_blank"
            className="location"
          >
            <CiLocationOn />
          </a>
        </div>
        <div className="gun-shop-location">
          <h5 className="greyyish">GUN SHOP LOCATION</h5>
        </div>
      </div>
    </div>
  );
};

export default Footer;
