import React from "react";
import AboutUs from "../components/LandingPage/AboutUs";
import Team from "../components/LandingPage/Team";
import Brands from "../components/LandingPage/Brands";
import Header from "../components/shared/Header";
import Testimonials from "../components/LandingPage/Testimonials";
import ServicesSection from "../components/Services/ServicesSection";

const Services = () => {
  return (
    <div>
      <Header pageRoute="services" pageTitle="Services" key="" />
      <ServicesSection />
      <Testimonials />
    </div>
  );
};

export default Services;
