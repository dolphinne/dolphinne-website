import React from "react";
import { constants } from "../utils/constants";

const ServicesSection = () => {
  return (
    <div
      className="container-fluid py-lg-5 py-3 wow fadeInUp"
      data-wow-delay="0.1s"
    >
      <div className="container py-lg-5 py-3">
        <div
          className="section-title text-center position-relative pb-3 mb-5 mx-auto"
          style={{ maxWidth: 600 }}
        >
          <h5 className="fw-bold text-primary text-uppercase">Our Services</h5>
          <h1 className="mb-0">
            Custom IT Solutions for Your Successful Business
          </h1>
        </div>
        <div className="row g-5">
          <div className="col-lg-4 col-md-6 wow zoomIn" data-wow-delay="0.9s">
            <div className="service-item bg-light rounded d-flex flex-column align-items-center justify-content-center text-center">
              <div className="service-icon">
                <i className="fa fa-code text-white"></i>
              </div>
              <h4 className="mb-3">Web Development</h4>
              <p className="m-0">
                Create a strong online presence with our expert web development
                services.
              </p>
              <a className="btn btn-lg btn-primary rounded" href="">
                <i className="bi bi-arrow-right"></i>
              </a>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 wow zoomIn" data-wow-delay="0.3s">
            <div className="service-item bg-light rounded d-flex flex-column align-items-center justify-content-center text-center">
              <div className="service-icon">
                <i className="fab fa-android text-white"></i>
              </div>
              <h4 className="mb-3">Android Development</h4>
              <p className="m-0">
                Develop robust and user-friendly Android applications to enhance
                your business operations.
              </p>
              <a className="btn btn-lg btn-primary rounded" href="">
                <i className="bi bi-arrow-right"></i>
              </a>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 wow zoomIn" data-wow-delay="0.3s">
            <div className="service-item bg-light rounded d-flex flex-column align-items-center justify-content-center text-center">
              <div className="service-icon">
                <i className="fab fa-apple text-white"></i>
              </div>
              <h4 className="mb-3">iOS Development</h4>
              <p className="m-0">
                Build innovative iOS applications that provide seamless user
                experiences.
              </p>
              <a className="btn btn-lg btn-primary rounded" href="">
                <i className="bi bi-arrow-right"></i>
              </a>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 wow zoomIn" data-wow-delay="0.6s">
            <div className="service-item bg-light rounded d-flex flex-column align-items-center justify-content-center text-center">
              <div className="service-icon">
                <i className="fa fa-magic text-white"></i>
              </div>
              <h4 className="mb-3">Artificial Intelligence</h4>
              <p className="m-0">
                Integrate AI solutions to automate processes, enhance
                decision-making, and drive innovation.
              </p>
              <a className="btn btn-lg btn-primary rounded" href="">
                <i className="bi bi-arrow-right"></i>
              </a>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 wow zoomIn" data-wow-delay="0.6s">
            <div className="service-item bg-light rounded d-flex flex-column align-items-center justify-content-center text-center">
              <div className="service-icon">
                <i className="fa fa-search text-white"></i>
              </div>
              <h4 className="mb-3">SEO Optimization</h4>
              <p className="m-0">
                Improve your search engine rankings and attract more customers.
              </p>
              <a className="btn btn-lg btn-primary rounded" href="">
                <i className="bi bi-arrow-right"></i>
              </a>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 wow zoomIn" data-wow-delay="0.6s">
            <div className="service-item bg-light rounded d-flex flex-column align-items-center justify-content-center text-center">
              <div className="service-icon">
                <i className="fa fa-chart-pie text-white"></i>
              </div>
              <h4 className="mb-3">Data Analytics</h4>
              <p className="m-0">
                Leverage data to make informed decisions and drive growth.
              </p>
              <a className="btn btn-lg btn-primary rounded" href="">
                <i className="bi bi-arrow-right"></i>
              </a>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 wow zoomIn" data-wow-delay="0.6s">
            <div className="service-item bg-light rounded d-flex flex-column align-items-center justify-content-center text-center">
              <div className="service-icon">
                <i className="fa fa-pen-nib text-white"></i>
              </div>
              <h4 className="mb-3">Graphic Design</h4>
              <p className="m-0">
                Create visually stunning graphics that capture your brand’s
                essence and engage your audience.
              </p>
              <a className="btn btn-lg btn-primary rounded" href="">
                <i className="bi bi-arrow-right"></i>
              </a>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 wow zoomIn" data-wow-delay="0.6s">
            <div className="service-item bg-light rounded d-flex flex-column align-items-center justify-content-center text-center">
              <div className="service-icon">
                <i className="fa fa-cloud text-white"></i>
              </div>
              <h4 className="mb-3">Cloud Solutions</h4>
              <p className="m-0">
                Implement secure and scalable cloud services to enhance your
                business operations and data management.
              </p>
              <a className="btn btn-lg btn-primary rounded" href="">
                <i className="bi bi-arrow-right"></i>
              </a>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 wow zoomIn" data-wow-delay="0.9s">
            <div className="position-relative bg-primary rounded h-100 d-flex flex-column align-items-center justify-content-center text-center p-5">
              <h3 className="text-white mb-3">Call Us For Quote</h3>
              <p className="text-white mb-3">
                Clita ipsum magna kasd rebum at ipsum amet dolor justo dolor est
                magna stet eirmod
              </p>
              <h2 className="text-white mb-0">{constants.telephone}</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
