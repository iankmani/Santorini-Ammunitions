import React from "react";
import "./Sbshop.css";
import handgun from "../../assets/pics/handgun.jpeg";
import shotgun from "../../assets/pics/shotgun.jpeg";
import rifle from "../../assets/pics/rifle.jpeg";
import m416 from "../../assets/pics/m416.jpeg";
import ammunition from "../../assets/pics/ammunition.jpeg";
import accessories from "../../assets/pics/accessories.jpeg";

const Sbshop = () => {
  return (
    <div className="gun-shop">
      <div className="gun-shop-title">
        <h1>SB Shop</h1>
      </div>
      <div className="gun-shop-description">
        <p>
          Discover Kenya Bunduki's physical store, your premier destination for
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
      <div className="weapons">
        <div className="weapon">
          <div className="weapon-image">
            <img src={handgun} alt="picture of a pistol"/>
          </div>
          <div className="weapon-name">
            <h3>Handgun</h3>
          </div>
          <div className="weapon-price">
            <h3>price: XXX</h3>
          </div>
        </div>
        <div className="weapon">
          <div className="weapon-image">
            <img src={shotgun} alt="picture of a shotgun" />
          </div>
          <div className="weapon-name">
            <h3>Shotgun</h3>
          </div>
          <div className="weapon-price">
            <h3>price: XXX</h3>
          </div>
        </div>
        <div className="weapon">
          <div className="weapon-image">
            <img src={rifle} alt="picture of a sniper" />
          </div>
          <div className="weapon-name">
            <h3>Air Rifle</h3>
          </div>
          <div className="weapon-price">
            <h3>price: XXX</h3>
          </div>
        </div>
        <div className="weapon">
          <div className="weapon-image">
            <img src={m416} alt="picture of a rifle" />
          </div>
          <div className="weapon-name">
            <h3>Rifle</h3>
          </div>
          <div className="weapon-price">
            <h3>price: XXX</h3>
          </div>
        </div>
        <div className="weapon">
          <div className="weapon-image">
            <img src={ammunition} alt="picture of bullets" />
          </div>
          <div className="weapon-name">
            <h3>Ammunition</h3>
          </div>
          <div className="weapon-price">
            <h3>price: XXX</h3>
          </div>
        </div>
        <div className="weapon">
          <div className="weapon-image">
            <img src={accessories} alt="picture of gear" />
          </div>
          <div className="weapon-name">
            <h3>Gear</h3>
          </div>
          <div className="weapon-price">
            <h3>price: XXX</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sbshop;
