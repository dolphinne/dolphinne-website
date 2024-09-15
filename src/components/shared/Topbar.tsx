import React from "react";
import { constants } from "../utils/constants";

const Topbar = () => {
  return (
    <div className="container-fluid bg-primary px-lg-5 px-3 d-none d-lg-block">
      <div className="row gx-0">
        <div className="col-lg-8 text-center text-lg-start mb-2 mb-lg-0">
          <div
            className="d-inline-flex align-items-center"
            style={{ height: 45 }}
          >
            <small className="me-3 text-light">
              <i className="fa fa-map-marker-alt me-2"></i>
              {constants.address}
            </small>
            <small className="me-3 text-light">
              <a href="tel:+919904918167" className="text-white">
                <i className="fa fa-phone-alt me-2"></i>
                {constants.telephone}
              </a>
            </small>
            <small className="text-light">
              <a href="mailto:info@dolphinne.com" className="text-white">
                <i className="fa fa-envelope-open me-2"></i>
                {constants.email}
              </a>
            </small>
          </div>
        </div>
        <div className="col-lg-4 text-center text-lg-end">
          <div
            className="d-inline-flex align-items-center"
            style={{ height: 45 }}
          >
            {/* <a
              className="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2"
              href=""
            >
              <i className="fab fa-twitter fw-normal"></i>
            </a> */}
            <a
              className="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2"
              href="https://www.facebook.com/people/The-Dolphinne-Technologies/61565989406413"
            >
              <i className="fab fa-facebook-f fw-normal"></i>
            </a>
            <a
              className="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2"
              href="https://www.linkedin.com/company/dolphinne"
            >
              <i className="fab fa-linkedin-in fw-normal"></i>
            </a>
            <a
              className="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2"
              href="https://www.instagram.com/the.dolphinne.tech"
            >
              <i className="fab fa-instagram fw-normal"></i>
            </a>
            {/* <a
              className="btn btn-sm btn-outline-light btn-sm-square rounded-circle"
              href=""
            >
              <i className="fab fa-youtube fw-normal"></i>
            </a> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
