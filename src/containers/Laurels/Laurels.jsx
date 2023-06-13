import React from "react";
import "./Laurels.scss";

import { SubHeading } from "../../components";

import { awards } from "../../api/dummy.json";

import { AwardCard } from "../../components";

const Laurels = () => {
  return (
    <div className="app__laurels app__bg app__wrapper section__padding">
      <div className="app__wrapper-info">
        <SubHeading title="Awards & Recognition" />
        <h1 className="headtext__main">Our Laurels</h1>

        <div className="app__laurels_awards">
          {awards.map((award, i) => (
            <AwardCard
              image={award.image}
              key={award.title + i}
              title={award.title}
              subtitle={award.subtitle}
            />
          ))}
        </div>
      </div>

      <div className="app__wrapper_img">
        <img src="assets/laurels.png" alt="laurels" />
      </div>
    </div>
  );
};

export default Laurels;
