import React from 'react'
import './Accessories.css'
import Bipod from '../../assets/pics/bipod.jpeg'
import CleaningSet from '../../assets/pics/cleaningSet.jpeg'
import binoculars from '../../assets/pics/binoculars.jpeg'
import target from '../../assets/pics/target.jpeg'
import sight from '../../assets/pics/optics.jpeg'
import Armour from '../../assets/pics/armour.jpeg'

const Accessories = () => {
  return (
    <div className="accessories">
    <div className="accessory">
        <div className="accessory-image">
            <img src={Bipod} alt="" />
        </div>
        <div className="accessory-name">
            <h3>Bipod</h3>
        </div>
        <div className="accessory-price">
            <h3>price</h3>
            <button>Hire</button>
            
        </div>

    </div>
    <div className="accessory">
        <div className="accessory-image">
            <img src={binoculars} alt="" />
        </div>
        <div className="accessory-name">
            <h3>Binoculars</h3>
        </div>
        <div className="accessory-price">
            <h3>price</h3>
            <button>Hire</button>
            
        </div>

    </div>
    <div className="accessory">
        <div className="accessory-image">
            <img src={target} alt="" />
        </div>
        <div className="accessory-name">
            <h3>Target</h3>
        </div>
        <div className="accessory-price">
            <h3>price</h3>
            <button>Hire</button>
            
        </div>

    </div>
    <div className="accessory">
        <div className="accessory-image">
            <img src={CleaningSet} alt="" />
        </div>
        <div className="accessory-name">
            <h3>cleaning Set</h3>
        </div>
        <div className="accessory-price">
            <h3>price</h3>
            <button>Hire</button>
            
        </div>

    </div>
    <div className="accessory">
        <div className="accessory-image">
            <img src={sight} alt="" />
        </div>
        <div className="accessory-name">
            <h3>Optical Sights</h3>
        </div>
        <div className="accessory-price">
            <h3>price</h3>
            <button>Hire</button>
            
        </div>

    </div>
    <div className="accessory">
        <div className="accessory-image">
            <img src={Armour} alt="" />
        </div>
        <div className="accessory-name">
            <h3>Armour Gear</h3>
        </div>
        <div className="accessory-price">
            <h3>price</h3>
            <button>Hire</button>
            
        </div>

    </div>

  </div>
  )
}

export default Accessories