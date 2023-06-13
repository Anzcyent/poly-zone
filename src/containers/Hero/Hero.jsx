import React from "react";
import "./Hero.scss";
import { SubHeading } from "../../components";

const Hero = () => {
  return (
    <div className="app__hero app__wrapper section__padding" id="home">
      <div className="app__wrapper_info">
        <SubHeading title="Chase the new bullets" />
        <h1 className="app__hero-h1">The Key to Shooting Good</h1>
        <p className="p__opensans">
          Welcome to the ultimate shooting range experience at our
          state-of-the-art shooting polygon. Step into a world where precision
          meets exhilaration, where marksmanship is honed, and where your
          shooting skills are put to the test. Whether you're a seasoned shooter
          or a beginner looking to learn, our facility offers a safe and dynamic
          environment for all.
        </p>
        <button type="button" className="custom__button">
          Explore Pricing
        </button>
      </div>
      <div className="app__wrapper_img">
        <img src="assets/hero-image.png" alt="hero-image" />
      </div>
    </div>
  );
};

export default Hero;
