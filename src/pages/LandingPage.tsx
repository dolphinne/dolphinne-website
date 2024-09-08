import React, { useEffect } from "react";
import HeroHeader from "../components/LandingPage/HeroHeader";
import Stats from "../components/LandingPage/Stats";
import AboutUs from "../components/LandingPage/AboutUs";
import WhyChooseUs from "../components/LandingPage/WhyChooseUs";
import OurServices from "../components/LandingPage/OurServices";
import RequestQuote from "../components/LandingPage/RequestQuote";
import Testimonials from "../components/LandingPage/Testimonials";
import Team from "../components/LandingPage/Team";
import LatestBlogs from "../components/LandingPage/LatestBlogs";
import Brands from "../components/LandingPage/Brands";
import WOW from "wow.js";
import ServicesSection from "../components/Services/ServicesSection";

const LandingPage = () => {
  //   new WOW().init();

  return (
    <div>
      <HeroHeader />
      <Stats />
      <AboutUs />
      <WhyChooseUs />
      <ServicesSection />
      <RequestQuote />
      <Testimonials />
      <Team />
      <LatestBlogs />
    </div>
  );
};

export default LandingPage;
