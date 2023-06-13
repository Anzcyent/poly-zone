import React from "react";
import "./Pricing.scss";

import { SubHeading, PricingItem } from "../../components";

import { menu } from "../../api/dummy.json";

const Pricing = () => {
  return (
    <div className="app__pricing flex__center section__padding" id="pricing">
      <div className="app__pricing-title">
        <SubHeading title="Choose Your Gun" />
        <h1 className="headtext__main">Today's Special</h1>
      </div>

      <div className="app__pricing-menu">
        <div className="app__pricing-menu-9mm flex__center">
          <p className="app__pricing-menu-heading">9mm</p>

          <div className="app__pricing-menu-items">
            {menu.pistols.map((pistol, i) => (
              <PricingItem
                key={pistol.name + i}
                price={pistol.price}
                description={pistol.description}
                name={pistol.name}
              />
            ))}
          </div>
        </div>

        <div className="app__pricing-menu-img">
          <img src="assets/big-bullet.png" alt="menu image" />
        </div>

        <div className="app__pricing-menu-7-62mm flex__center">
          <p className="app__pricing-menu-heading">7.62mm</p>

          <div className="app__pricing-menu-items">
            {menu.rifles.map((rifle, i) => (
              <PricingItem
                key={rifle.name + i}
                price={rifle.price}
                description={rifle.description}
                name={rifle.name}
              />
            ))}
          </div>
        </div>
      </div>

      <div style={{ marginTop: "15px" }}>
        <button type="button" className="custom__button">
          View More
        </button>
      </div>
    </div>
  );
};

export default Pricing;
