import React, { useEffect, useState } from "react";
import "animate.css";

const Stats = () => {
  return (
    <>
      {/* <!-- Facts Start --> */}
      <div className="container-fluid facts py-lg-5 py-3 pt-lg-0 animate__animated animate__fadeInUp">
        <div className="container py-lg-5 py-3 pt-lg-0">
          <div className="row gx-0">
            <div className="col-lg-4 wow zoomIn" data-wow-delay="0.1s">
              <div
                className="bg-primary shadow d-flex align-items-center justify-content-center p-4"
                style={{ height: 150 }}
              >
                <div
                  className="bg-white d-flex align-items-center justify-content-center rounded mb-2"
                  style={{ width: 60, height: 60 }}
                >
                  <i
                    className="fa fa-award text-primary"
                    style={{ fontSize: 24 }}
                  ></i>
                </div>
                <div className="ps-4">
                  <h5 className="text-white mb-0">Served Clients</h5>
                  <h1 className="text-white mb-0" data-toggle="counter-up">
                    20+
                  </h1>
                </div>
              </div>
            </div>
            <div className="col-lg-4 wow zoomIn" data-wow-delay="0.3s">
              <div
                className="bg-light shadow d-flex align-items-center justify-content-center p-4"
                style={{ height: 150 }}
              >
                <div
                  className="bg-primary d-flex align-items-center justify-content-center rounded mb-2"
                  style={{ width: 60, height: 60 }}
                >
                  <i
                    className="fa fa-check text-white"
                    style={{ fontSize: 24 }}
                  ></i>
                </div>
                <div className="ps-4">
                  <h5 className="text-primary mb-0">Projects Done</h5>
                  <h1 className="mb-0" data-toggle="counter-up">
                    50+
                  </h1>
                </div>
              </div>
            </div>
            <div className="col-lg-4 wow zoomIn" data-wow-delay="0.6s">
              <div
                className="bg-primary shadow d-flex align-items-center justify-content-center p-4"
                style={{ height: 150 }}
              >
                <div
                  className="bg-white d-flex align-items-center justify-content-center rounded mb-2"
                  style={{ width: 60, height: 60 }}
                >
                  <i
                    className="fa fa-coffee text-primary"
                    style={{ fontSize: 24 }}
                  ></i>
                </div>
                <div className="ps-4">
                  <h5 className="text-white mb-0">Coffee to Code</h5>
                  <h1 className="text-white mb-0" data-toggle="counter-up">
                    ∞
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Facts Start --> */}
    </>
  );
};

export default Stats;
