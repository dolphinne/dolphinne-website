import React from "react";
import { constants } from "../utils/constants";
import { NavLink } from "react-router-dom";

const AboutUs = () => {
  return (
    <>
      {/* <!-- About Start --> */}
      <div
        className="container-fluid py-lg-5 py-3 wow fadeInUp"
        data-wow-delay="0.1s"
      >
        <div className="container py-lg-5 py-3">
          <div className="row g-5">
            <div className="col-lg-7">
              <div className="section-title position-relative pb-3 mb-5">
                <h5 className="fw-bold text-primary text-uppercase">
                  About Us
                </h5>
                <h1 className="mb-0">
                  Your Strategic IT Partner: 5+ Years of Transformative
                  Solutions
                </h1>
              </div>
              <p className="mb-4">
                Welcome to the dolphinne, where innovation meets excellence.
                With a decade of experience in the IT industry, we are committed
                to delivering top-notch solutions tailored to your business
                needs. Our team of experts is dedicated to providing exceptional
                service and support, ensuring your success in the digital world.
              </p>
              <div className="row g-0 mb-3">
                <div className="col-sm-6 wow zoomIn" data-wow-delay="0.2s">
                  <h5 className="mb-3">
                    <i className="fa fa-check text-primary me-3"></i>Award
                    Winning
                  </h5>
                  <h5 className="mb-3">
                    <i className="fa fa-check text-primary me-3"></i>
                    Professional Staff
                  </h5>
                </div>
                <div className="col-sm-6 wow zoomIn" data-wow-delay="0.4s">
                  <h5 className="mb-3">
                    <i className="fa fa-check text-primary me-3"></i>24/7
                    Support
                  </h5>
                  <h5 className="mb-3">
                    <i className="fa fa-check text-primary me-3"></i>Fair Prices
                  </h5>
                </div>
              </div>
              <div
                className="d-flex align-items-center mb-4 wow fadeIn"
                data-wow-delay="0.6s"
              >
                <div
                  className="bg-primary d-flex align-items-center justify-content-center rounded"
                  style={{ width: 60, height: 60 }}
                >
                  <i className="fa fa-phone-alt text-white"></i>
                </div>
                <div className="ps-4">
                  <h5 className="mb-2">Call to ask any question</h5>
                  <h4 className="text-primary mb-0">{constants.telephone}</h4>
                </div>
              </div>
              <NavLink
                to="/contact"
                className="btn btn-primary py-3 px-5 mt-3 wow zoomIn"
                data-wow-delay="0.9s"
              >
                Request A Quote
              </NavLink>
            </div>
            <div className="col-lg-5" style={{ minHeight: 500 }}>
              <div className="position-relative h-100">
                <img
                  className="position-absolute w-100 h-100 rounded wow zoomIn"
                  data-wow-delay="0.9s"
                  src="img/about.jpg"
                  style={{ objectFit: "cover" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- About End --> */}
    </>
  );
};

export default AboutUs;
