import React from "react";
import AboutUs from "../components/LandingPage/AboutUs";
import Team from "../components/LandingPage/Team";
import Brands from "../components/LandingPage/Brands";
import Header from "../components/shared/Header";

const About = () => {
  return (
    <div>
      <Header pageRoute="about" pageTitle="About Us" key="" />
      <AboutUs />
      <Team />
    </div>
  );
};

export default About;
