import React from "react";
import "./FindUs.scss";

import { SubHeading } from "../../components";

const FindUs = () => {
  return (
    <div className="app__bg app__wrapper section__padding" id="contact">
      <div className="app__wrapper_info">
        <SubHeading title="Contact" />
        <h1 className="headtext__main" style={{marginBottom: '3rem'}}>Find Us</h1>
        <div className="app__wrapper-content">
          <p className="p__opensans">Adressiz Mahallesi, Olmayan Sokak, CW9 75G</p>
          <p className="p__main-font" style={{color: "#DCCA87", margin: "2rem 0"}}>Adressiz Mahallesi, Olmayan Sokak, CW9 75G</p>
          <p className="p__opensans">Mon - Fri: 10:00 am - 02:00 am</p>
          <p className="p__opensans">Sat - Sun: 10:00 am - 03:00 am</p>
        </div>
        <button className="custom__button" style={{marginTop: "2rem"}}>Visit Us</button>
      </div>

      <div className="app__wrapper_img">
        <img src="assets/find-us.png" alt="findus" />
      </div>
    </div>
  );
};

export default FindUs;
