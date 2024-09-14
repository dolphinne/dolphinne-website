import React from "react";
import { constants } from "../utils/constants";
import { RequestAQouteForm } from "../Contact/RequestAQouteForm";

const RequestQuote = () => {
  return (
    <>
      <div
        className="container-fluid py-lg-5 py-3 wow fadeInUp"
        data-wow-delay="0.1s"
      >
        <div className="container py-lg-5 py-3">
          <div className="row g-5">
            <div className="col-lg-7">
              <div className="section-title position-relative pb-3 mb-5">
                <h5 className="fw-bold text-primary text-uppercase">
                  Request A Quote
                </h5>
                <h1 className="mb-0">
                  Need A Free Quote? Please Feel Free to Contact Us
                </h1>
              </div>
              <div className="row gx-3">
                <div className="col-sm-6 wow zoomIn" data-wow-delay="0.2s">
                  <h5 className="mb-4">
                    <i className="fa fa-reply text-primary me-3"></i>Reply
                    within 8 hours
                  </h5>
                </div>
                <div className="col-sm-6 wow zoomIn" data-wow-delay="0.4s">
                  <h5 className="mb-4">
                    <i className="fa fa-phone-alt text-primary me-3"></i>24 hrs
                    telephone support
                  </h5>
                </div>
              </div>
              <p className="mb-4">
                We understand the importance of timely communication. Our team
                ensures that all inquiries are addressed within 8 hours, so you
                can get the information you need without delay. Our customer
                support team is available around the clock to assist you with
                any questions or concerns. Whether it’s day or night, we’re here
                to help.
              </p>
              <div
                className="d-flex align-items-center mt-2 wow zoomIn"
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
            </div>
            <div className="col-lg-5">
              <RequestAQouteForm />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RequestQuote;
