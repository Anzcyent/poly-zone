import React from "react";
import "./App.scss";

import {
  AboutUs,
  Chef,
  FindUs,
  Footer,
  Gallery,
  Hero,
  Intro,
  Laurels,
  Pricing,
} from "./containers";

import { Navbar } from "./components";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <AboutUs />
      <Pricing />
      <Chef />
      <Intro />
      <Laurels />
      <Gallery />
      <FindUs />
      <Footer />
    </div>
  );
};

export default App;
