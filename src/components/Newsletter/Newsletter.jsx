import React from "react";
import "./Newsletter.scss";

import SubHeading from "../Sub Heading/SubHeading";

const Newsletter = () => {
  return (
    <div className="app__newsletter">
      <div className="app__newsletter-heading">
        <SubHeading title="Newsletter" />
        <h1 className="headtext__cormorant" style={{color: "#aaa"}}>Subscribe To Our Newsletter</h1>
        <p className="p__opensans">And never miss latest Updates!</p>
      </div>
      <div className="app__newsletter-input flex__center">
        <input type="email" placeholder="Enter your email address" />
        <button type="button" className="custom__button">
          Subscribe
        </button>
      </div>
    </div>
  );
};

export default Newsletter;
