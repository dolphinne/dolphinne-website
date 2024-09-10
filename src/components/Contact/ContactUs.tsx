import React from "react";
import { constants } from "../utils/constants";

const ContactUs = () => {
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
          <h5 className="fw-bold text-primary text-uppercase">Contact Us</h5>
          <h1 className="mb-0">
            If You Have Any Query, Feel Free To Contact Us
          </h1>
        </div>
        <div className="row g-5 mb-5">
          <div className="col-lg-4">
            <div
              className="d-flex align-items-center wow fadeIn"
              data-wow-delay="0.1s"
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
          <div className="col-lg-4">
            <div
              className="d-flex align-items-center wow fadeIn"
              data-wow-delay="0.4s"
            >
              <div
                className="bg-primary d-flex align-items-center justify-content-center rounded"
                style={{ width: 60, height: 60 }}
              >
                <i className="fa fa-envelope-open text-white"></i>
              </div>
              <div className="ps-4">
                <h5 className="mb-2">Email to get free quote</h5>
                <h4 className="text-primary mb-0">{constants.email}</h4>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div
              className="d-flex align-items-center wow fadeIn"
              data-wow-delay="0.8s"
            >
              <div
                className="bg-primary d-flex align-items-center justify-content-center rounded"
                style={{ width: 60, height: 60 }}
              >
                <i className="fa fa-map-marker-alt text-white"></i>
              </div>
              <div className="ps-4">
                <h5 className="mb-2">Visit our office</h5>
                <h4 className="text-primary mb-0">Ahmedabad, India</h4>
              </div>
            </div>
          </div>
        </div>
        <div className="row g-5">
          <div className="col-lg-6 wow slideInUp" data-wow-delay="0.3s">
            <form>
              <div className="row g-3">
                <div className="col-md-6">
                  <input
                    type="text"
                    className="form-control border-0 bg-light px-4"
                    placeholder="Your Name"
                    style={{ height: 55 }}
                  />
                </div>
                <div className="col-md-6">
                  <input
                    type="email"
                    className="form-control border-0 bg-light px-4"
                    placeholder="Your Email"
                    style={{ height: 55 }}
                  />
                </div>
                <div className="col-12">
                  <input
                    type="text"
                    className="form-control border-0 bg-light px-4"
                    placeholder="Subject"
                    style={{ height: 55 }}
                  />
                </div>
                <div className="col-12">
                  <textarea
                    className="form-control border-0 bg-light px-4 py-3"
                    rows={4}
                    placeholder="Message"
                  ></textarea>
                </div>
                <div className="col-12">
                  <button className="btn btn-primary w-100 py-3" type="submit">
                    Send Message
                  </button>
                </div>
              </div>
            </form>
          </div>
          <div className="col-lg-6 wow slideInUp" data-wow-delay="0.6s">
            <iframe
              className="position-relative rounded w-100 h-100"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.34233033887!2d72.53073257588198!3d23.047907915381177!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e84a543cb6d77%3A0xf91c9778ae9ae269!2sSurya%20Complex%2C%20Gurukul%20Rd%2C%20Nilmani%20Society%2C%20Memnagar%2C%20Ahmedabad%2C%20Gujarat%20380052!5e0!3m2!1sen!2sin!4v1725988938823!5m2!1sen!2sin"
              frameBorder="0"
              style={{ minHeight: 350, border: 0 }}
              aria-hidden="false"
              tabIndex={0}
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
