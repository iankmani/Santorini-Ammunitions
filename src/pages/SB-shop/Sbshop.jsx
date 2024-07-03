import React from "react";
import "./Sbshop.css";
import Weapons from "../../Parts/Weapons/Weapons.jsx";
import Accessories from "../../Parts/Accessories/Accessories.jsx";

const Sbshop = () => {
  return (
    <div className="gun-shop">
      <div className="gun-shop-title">
        <h1>SA Shop</h1>
      </div>
      <div className="gun-shop-description">
        <p>
          Discover Santorini Ammunition's physical store, your premier destination for
          firearms, ammunition, and accessories. Located in Kenya, our shop
          provides a wide range of top-quality products to meet your shooting
          needs. We invite you to visit our store, where our expert team is
          available to assist you in selecting the ideal firearms and
          accessories for your requirements. We look forward to offering you a
          tailored service, where you can touch, feel, and explore the items
          you're considering, with our knowledgeable team by your side to ensure
          you make the right choices.
        </p>
      </div>
      <Weapons/>
      <div className="accessories-introductory-description">
        <p>SA can also support any request for accessories to include, but not limited to:</p>
      </div>
     <Accessories/>
    </div>
  );
};

export default Sbshop;
