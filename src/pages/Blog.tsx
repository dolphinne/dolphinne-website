import React from "react";
import AboutUs from "../components/LandingPage/AboutUs";
import Team from "../components/LandingPage/Team";
import Brands from "../components/LandingPage/Brands";
import Header from "../components/shared/Header";
import Testimonials from "../components/LandingPage/Testimonials";
import ServicesSection from "../components/Services/ServicesSection";
import BlogsSection from "../components/Blog/BlogsSection";

const Blog = () => {
  return (
    <div>
      <Header pageRoute="blog" pageTitle="Blog Spot" key="" />
      <BlogsSection />
    </div>
  );
};

export default Blog;
