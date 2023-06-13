import React from "react";
import "./PricingItem.scss";

const PricingItem = ({ name, description, price }) => {
  return (
    <div className="app__pricing_item">
      <div className="app__pricing_item-head">
        <div className="app__pricing_item-name">
          <p className="p__main-font" style={{ color: "#DCCA87" }}>
            {name}
          </p>
        </div>

        <div className="app__pricing_item-dash" />

        <div className="app__pricing_item-price">
          <p className="p__main-font">${price}</p>
        </div>
      </div>

      <div className="app__pricing_item-sub">
        <p className="p__opensans" style={{ color: "#AAA" }}>
          {description}
        </p>
      </div>
    </div>
  );
};

export default PricingItem;
