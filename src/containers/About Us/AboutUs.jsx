import React from "react";
import "./AboutUs.scss";

const AboutUs = () => {
  return (
    <div className="app__about-us app__bg flex__center section__padding">
      <div className="app__about-us-overlay flex__center">
        <img src="assets/p.png" alt="p letter" />
      </div>

      <div className="app__about-us-content flex__center">
        <div className="app__about-us-content_about">
          <h1 className="headtext__main">About Us</h1>
          <img src="assets/bullet.png" alt="bullet__image" />
          <p className="p__opensans">
            Welcome to PolyZone, a leading name in the world of shooting
            polygons. We are passionate about providing an exceptional shooting
            experience that combines precision, safety, and enjoyment. With a
            dedication to excellence, we have created a state-of-the-art
            facility that caters to shooters of all levels.
          </p>
          <button type="button" className="custom__button">
            Know More
          </button>
        </div>

        <div className="app__about-us-content_knife flex__center">
          <img src="assets/knife.png" alt="knife" />
        </div>

        <div className="app__about-us-content_history">
          <h1 className="headtext__main">Our History</h1>
          <img src="assets/bullet.png" alt="bullet__image" />
          <p className="p__opensans">
            PolyZone was founded with a passion for bringing the world of
            polygons to life and creating a vibrant community of shooting
            enthusiasts. Our journey began in 1923, when a group of avid
            shooters came together with a shared vision: to establish a
            cutting-edge shooting polygon that would revolutionize the shooting
            experience.
          </p>
          <button type="button" className="custom__button">
            Know More
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
