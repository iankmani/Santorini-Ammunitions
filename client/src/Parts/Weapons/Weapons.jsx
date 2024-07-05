import React from "react";
import "./Weapons.css";
import handgun from "../../assets/pics/handgun.jpeg";
import shotgun from "../../assets/pics/shotgun.jpeg";
import rifle from "../../assets/pics/rifle.jpeg";
import m416 from "../../assets/pics/m416.jpeg";
import ammunition from "../../assets/pics/ammunition.jpeg";
import accessories from "../../assets/pics/accessories.jpeg";

const Weapons = () => {
  return (
    <div className="weapons">
      <div className="weapon">
        <div className="weapon-image">
          <img src={handgun} alt="picture of a pistol" />
        </div>
        <div className="weapon-name">
          <h3>Handgun</h3>
        </div>
        <div className="weapon-price">
          <h3>price: Ksh 3,500 per day</h3>
          <button>Hire</button>
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
          <h3>price: Ksh 6,000 per day</h3>
          <button>Hire</button>
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
          <h3>price: Ksh 10,000 per day</h3>
          <button>Hire</button>
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
          <h3>price: Ksh 7,000 per day</h3>
          <button>Hire</button>
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
          <h3>price: Ksh 2000 per box</h3>
          <button>Hire</button>
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
          <h3>FREE </h3>
          <button>Hire</button>
        </div>
      </div>
    </div>
  );
};

export default Weapons;
