import React from "react";
import "./Services.css";
import training from "../../assets/pics/training.jpeg";
import WeaponStorage from "../../assets/pics/WeaponsStorage.jpeg";
import gunRepair from "../../assets/pics/gunRepair.jpeg";
import sales from "../../assets/pics/firearmSales.jpeg";

const Services = () => {
  return (
    <div className="services">
      <div className="services-title">
        <h1>Our Services</h1>
      </div>
      <div className="services-content">
        <p>
          At SA, we take pride in providing a range of professional services
          designed to meet your firearm and shooting needs. Our dedicated team
          offers expert technical support and assistance, with access to our
          in-house gunsmith and accredited trainers.
        </p>
      </div>
      <div className="service-box">
        <div className="service-container">
          <div className="service-image">
            <img src={training} alt="" className="service-image-img" />
          </div>
          <div className="service-name">
            <h2>Firearm Training</h2>
          </div>
          <div className="service-description">
            <p>
              Safety is paramount at SA. Our dedicated team provides
              professional firearm training at our Karen range for all skill
              levels, catering to beginners and advanced marksmen. Our certified
              and experienced instructors guide you in developing essential
              skills and responsible firearm handling, ensuring your safety and
              proficiency in weapon maintenance.
            </p>
          </div>
        </div>
        <div className="service-container">
          <div className="service-image">
            <img src={WeaponStorage} alt="" className="service-image-img" />
          </div>
          <div className="service-name">
            <h2>Storage</h2>
          </div>
          <div className="service-description">
            <p>
              We understand the importance of secure firearm and ammunition
              storage. All Firearm License Holders must adhere to legal
              requirements related to storage. For those times when you need to
              store your firearms and ammunition off-site, we offer a safe and
              controlled storage facility. It accommodates legally possessed
              handguns, rifles, shotguns, airsoft rifles, paintball guns, and
              ammunition.
            </p>
          </div>
        </div>
        <div className="service-container">
          <div className="service-image">
            <img src={gunRepair} alt="" className="service-image-img" />
          </div>
          <div className="service-name">
            <h2>Maintenance and Repair</h2>
          </div>
          <div className="service-description">
            <p>
              Count on our in-house services for routine maintenance,
              identification of defective parts, and expert repair.
              Additionally, our team can visit corporate sites to review and
              audit firearms for maintenance. When it comes to firearms under
              the manufacturer's warranty, we handle all interactions with the
              Original Equipment Manufacturer and manage the shipping process
              for in-warranty repairs.
            </p>
          </div>
        </div>
        <div className="service-container">
          <div className="service-image">
            <img src={sales} alt="" className="service-image-img" />
          </div>
          <div className="service-name">
            <h2>Firearm Sales</h2>
          </div>
          <div className="service-description">
            <p>
              Our knowledgeable staff is committed to assisting you in every
              step of your firearm purchase. We ensure strict adherence to all
              local, national, and international regulations, with background
              checks conducted for every sale.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
