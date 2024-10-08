import React from "react";

const Team = () => {
  return (
    <div
      className="container-fluid py-lg-5 py-3 wow fadeInUp"
      data-wow-delay="0.1s"
      id="team"
    >
      <div className="container py-lg-5 py-3">
        <div
          className="section-title text-center position-relative pb-3 mb-5 mx-auto"
          style={{ maxWidth: 600 }}
        >
          <h5 className="fw-bold text-primary text-uppercase">Team Members</h5>
          <h1 className="mb-0">
            Our Professional Staff Ready to Help You Anytime
          </h1>
        </div>
        <div className="row g-5">
          <div className="col-lg-4 wow slideInUp" data-wow-delay="0.9s">
            <div className="team-item bg-light rounded overflow-hidden">
              <div className="team-img position-relative overflow-hidden">
                <img className="img-fluid w-100" src="img/team-3.png" alt="" />
                {/* <div className="team-social">
                  <a
                    className="btn btn-lg btn-primary btn-lg-square rounded"
                    href=""
                  >
                    <i className="fab fa-twitter fw-normal"></i>
                  </a>
                  <a
                    className="btn btn-lg btn-primary btn-lg-square rounded"
                    href=""
                  >
                    <i className="fab fa-facebook-f fw-normal"></i>
                  </a>
                  <a
                    className="btn btn-lg btn-primary btn-lg-square rounded"
                    href=""
                  >
                    <i className="fab fa-instagram fw-normal"></i>
                  </a>
                  <a
                    className="btn btn-lg btn-primary btn-lg-square rounded"
                    href=""
                  >
                    <i className="fab fa-linkedin-in fw-normal"></i>
                  </a>
                </div> */}
              </div>
              <div className="text-center py-4">
                <h4 className="text-primary">Pankaj Choksi</h4>
                <p className="text-uppercase m-0">Co-founder | CEO</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 wow slideInUp" data-wow-delay="0.3s">
            <div className="team-item bg-light rounded overflow-hidden">
              <div className="team-img position-relative overflow-hidden">
                <img className="img-fluid w-100" src="img/team-1.png" alt="" />
                {/* <div className="team-social">
                  <a
                    className="btn btn-lg btn-primary btn-lg-square rounded"
                    href=""
                  >
                    <i className="fab fa-twitter fw-normal"></i>
                  </a>
                  <a
                    className="btn btn-lg btn-primary btn-lg-square rounded"
                    href=""
                  >
                    <i className="fab fa-facebook-f fw-normal"></i>
                  </a>
                  <a
                    className="btn btn-lg btn-primary btn-lg-square rounded"
                    href=""
                  >
                    <i className="fab fa-instagram fw-normal"></i>
                  </a>
                  <a
                    className="btn btn-lg btn-primary btn-lg-square rounded"
                    href=""
                  >
                    <i className="fab fa-linkedin-in fw-normal"></i>
                  </a>
                </div> */}
              </div>
              <div className="text-center py-4">
                <h4 className="text-primary">Abhimanyu Soni</h4>
                <p className="text-uppercase m-0">Co-founder | CTO</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 wow slideInUp" data-wow-delay="0.6s">
            <div className="team-item bg-light rounded overflow-hidden">
              <div className="team-img position-relative overflow-hidden">
                <img className="img-fluid w-100" src="img/team-2.png" alt="" />
                {/* <div className="team-social">
                  <a
                    className="btn btn-lg btn-primary btn-lg-square rounded"
                    href=""
                  >
                    <i className="fab fa-twitter fw-normal"></i>
                  </a>
                  <a
                    className="btn btn-lg btn-primary btn-lg-square rounded"
                    href=""
                  >
                    <i className="fab fa-facebook-f fw-normal"></i>
                  </a>
                  <a
                    className="btn btn-lg btn-primary btn-lg-square rounded"
                    href=""
                  >
                    <i className="fab fa-instagram fw-normal"></i>
                  </a>
                  <a
                    className="btn btn-lg btn-primary btn-lg-square rounded"
                    href=""
                  >
                    <i className="fab fa-linkedin-in fw-normal"></i>
                  </a>
                </div> */}
              </div>
              <div className="text-center py-4">
                <h4 className="text-primary">Kavita Purohit</h4>
                <p className="text-uppercase m-0">Delivery Head</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
