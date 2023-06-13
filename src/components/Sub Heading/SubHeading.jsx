import React from "react";
import "./SubHeading.scss";

const SubHeading = ({title}) => {
  return <div className="app__subheading">
    <p className="p__main-font">{title}</p>
    <img src="assets/bullet.png" alt="bullet-image" />
  </div>;
};

export default SubHeading;
