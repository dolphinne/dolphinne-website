import React from "react";
import Brands from "../LandingPage/Brands";
import { constants } from "../utils/constants";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      {/* <Brands /> */}
      <div
        className="container-fluid bg-dark text-light mt-5 wow fadeInUp"
        data-wow-delay="0.1s"
      >
        <div className="container">
          <div className="row gx-5">
            <div className="col-lg-4 col-md-6 footer-about">
              <div className="d-flex flex-column justify-content-center h-100 bg-primary p-4">
                <Link to="/" className="navbar-brand">
                  <h1 className="m-0 text-white">
                    Dolphinne.
                    <img src="favicon.png" alt="" style={{ width: 70 }} />
                  </h1>
                </Link>
                <p className="my-4">
                  Supercharge your business with the dolphinne technologies. We
                  specialize in cutting-edge web development using the latest
                  technologies, mobile development and seamless AI integration,
                  delivering tailored solutions to fuel your growth and
                  innovation.
                </p>
                <div className="d-flex mt-4">
                  {/* <a
                    className="btn btn-primary me-3"
                    style={{ borderRadius: 6, fontSize: 20 }}
                    href="#"
                  >
                    <i className="fab fa-twitter fw-normal"></i>
                  </a> */}
                  <a
                    className="btn btn-primary me-3"
                    href="https://www.facebook.com/profile.php?id=61565989406413"
                    style={{ borderRadius: 6, fontSize: 20 }}
                  >
                    <i className="fab fa-facebook-f fw-normal"></i>
                  </a>
                  <a
                    className="btn btn-primary me-3"
                    href="https://www.linkedin.com/company/dolphinne"
                    style={{ borderRadius: 6, fontSize: 20 }}
                  >
                    <i className="fab fa-linkedin-in fw-normal"></i>
                  </a>
                  <a
                    className="btn btn-primary"
                    href="https://www.instagram.com/the.dolphinne.tech"
                    style={{ borderRadius: 6, fontSize: 20 }}
                  >
                    <i className="fab fa-instagram fw-normal"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-8 col-md-6">
              <div className="row gx-5">
                <div className="col-lg-6 col-md-12 pt-5 mb-5">
                  <div className="section-title section-title-sm position-relative pb-3 mb-4">
                    <h3 className="text-light mb-0">Get In Touch</h3>
                  </div>
                  <div className="d-flex mb-2">
                    <i className="bi bi-geo-alt text-primary me-2"></i>
                    <p className="mb-0">{constants.address}</p>
                  </div>
                  <div className="d-flex mb-2">
                    <i className="bi bi-envelope-open text-primary me-2"></i>
                    <p className="mb-0">{constants.email}</p>
                  </div>
                  <div className="d-flex mb-2">
                    <i className="bi bi-telephone text-primary me-2"></i>
                    <p className="mb-0">{constants.telephone}</p>
                  </div>
                </div>
                <div className="col-lg-6 col-md-12 pt-0 pt-lg-5 mb-5">
                  <div className="section-title section-title-sm position-relative pb-3 mb-4">
                    <h3 className="text-light mb-0">Quick Links</h3>
                  </div>
                  <div className="link-animated d-flex flex-column justify-content-start">
                    <Link className="text-light mb-2" to="/">
                      <i className="bi bi-arrow-right text-primary me-2"></i>
                      Home
                    </Link>
                    <Link className="text-light mb-2" to="/about">
                      <i className="bi bi-arrow-right text-primary me-2"></i>
                      About Us
                    </Link>
                    <Link className="text-light mb-2" to="/services">
                      <i className="bi bi-arrow-right text-primary me-2"></i>Our
                      Services
                    </Link>
                    <Link className="text-light mb-2" to="/about">
                      <i className="bi bi-arrow-right text-primary me-2"></i>
                      Meet The Team
                    </Link>
                    {/* <a className="text-light mb-2" href="#">
                      <i className="bi bi-arrow-right text-primary me-2"></i>
                      Latest Blog
                    </a> */}
                    <Link className="text-light" to="/contact">
                      <i className="bi bi-arrow-right text-primary me-2"></i>
                      Contact Us
                    </Link>
                  </div>
                </div>
                {/* <div className="col-lg-4 col-md-12 pt-0 pt-lg-5 mb-5">
                  <div className="section-title section-title-sm position-relative pb-3 mb-4">
                    <h3 className="text-light mb-0">Popular Links</h3>
                  </div>
                  <div className="link-animated d-flex flex-column justify-content-start">
                    <a className="text-light mb-2" href="#">
                      <i className="bi bi-arrow-right text-primary me-2"></i>
                      Home
                    </a>
                    <a className="text-light mb-2" href="#">
                      <i className="bi bi-arrow-right text-primary me-2"></i>
                      About Us
                    </a>
                    <a className="text-light mb-2" href="#">
                      <i className="bi bi-arrow-right text-primary me-2"></i>Our
                      Services
                    </a>
                    <a className="text-light mb-2" href="#">
                      <i className="bi bi-arrow-right text-primary me-2"></i>
                      Meet The Team
                    </a>
                    <a className="text-light mb-2" href="#">
                      <i className="bi bi-arrow-right text-primary me-2"></i>
                      Latest Blog
                    </a>
                    <a className="text-light" href="#">
                      <i className="bi bi-arrow-right text-primary me-2"></i>
                      Contact Us
                    </a>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="container-fluid text-white"
        style={{ background: "#061429" }}
      >
        <div className="container text-center">
          <div className="row justify-content-end">
            <div className="col-lg-8 col-md-6">
              <div
                className="d-flex align-items-center justify-content-center"
                style={{ height: 75 }}
              >
                <p className="mb-0">
                  &copy;
                  <a className="text-white border-bottom" href="#">
                    Dolphinne
                  </a>{" "}
                  - All Rights Reserved - {new Date().getFullYear()}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
