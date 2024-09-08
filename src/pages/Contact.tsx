import React from "react";
import AboutUs from "../components/LandingPage/AboutUs";
import Team from "../components/LandingPage/Team";
import Brands from "../components/LandingPage/Brands";
import Header from "../components/shared/Header";
import ContactUs from "../components/Contact/ContactUs";

const Contact = () => {
  return (
    <div>
      <Header pageRoute="contact" pageTitle="Contact Us" key="" />
      <ContactUs />
    </div>
  );
};

export default Contact;
