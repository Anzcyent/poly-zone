import React from "react";
import "./Chef.scss";

import { SubHeading } from "../../components";

const Chef = () => {
  return (
    <div className="app__bg app__wrapper section__padding">
      <div className="app__wrapper_img app__wrapper_img-reverse">
        <img src="assets/chef.png" alt="chef" />
      </div>

      <div className="app__wrapper_info">
        <SubHeading title="Chef's Bullet" />

        <h1 className="headtext__main">What we believe in</h1>

        <div className="app__chef-content">
          <div className="app__chef-content_quote">
            <img src="assets/quote.png" alt="quote" />
            <p className="p__opensans">
              At PolyZone, we emphasize the importance of safety and quality in
              firearms handling.
            </p>
          </div>
          <p className="p__opensans">
            Under the leadership of our Chef Çağınalp İnal, we aim to provide
            the highest level of professionalism and experience. Caginalp Inal
            has extensive experience in shooting ranges and we are proud to work
            with him.
          </p>
        </div>

        <div className="app__chef-sign">
          <p>Çağınalp İnal</p>
          <p className="p__opensans">Chef & Master</p>
          <img src="assets/sign.png" alt="sign" />
        </div>
      </div>
    </div>
  );
};

export default Chef;
