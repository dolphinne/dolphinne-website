import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";

const HeroHeader = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isSticky, setSticky] = useState(
    window.innerWidth < 768 ? true : false
  );

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerWidth > 767) {
        if (window.scrollY > 45) {
          setSticky(true);
        } else {
          setSticky(false);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (isVisible) {
        setIsVisible(false);
      }
    }, 1);

    // Cleanup the timer when the component unmounts
    return () => clearTimeout(timer);
  }, [isVisible]);

  return (
    <div>
      <div
        id="spinner"
        className={`bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center ${
          isVisible ? "show" : ""
        }`}
      >
        <div className="spinner"></div>
      </div>

      <div className="container-fluid bg-primary px-lg-5 px-3 d-none d-lg-block">
        <div className="row gx-0">
          <div className="col-lg-8 text-center text-lg-start mb-2 mb-lg-0">
            <div
              className="d-inline-flex align-items-center"
              style={{ height: 45 }}
            >
              <small className="me-3 text-light">
                <i className="fa fa-map-marker-alt me-2"></i>123 Street, New
                York, USA
              </small>
              <small className="me-3 text-light">
                <i className="fa fa-phone-alt me-2"></i>+012 345 6789
              </small>
              <small className="text-light">
                <i className="fa fa-envelope-open me-2"></i>info@example.com
              </small>
            </div>
          </div>
          <div className="col-lg-4 text-center text-lg-end">
            <div
              className="d-inline-flex align-items-center"
              style={{ height: 45 }}
            >
              <a
                className="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2"
                href=""
              >
                <i className="fab fa-twitter fw-normal"></i>
              </a>
              <a
                className="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2"
                href=""
              >
                <i className="fab fa-facebook-f fw-normal"></i>
              </a>
              <a
                className="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2"
                href=""
              >
                <i className="fab fa-linkedin-in fw-normal"></i>
              </a>
              <a
                className="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2"
                href=""
              >
                <i className="fab fa-instagram fw-normal"></i>
              </a>
              <a
                className="btn btn-sm btn-outline-light btn-sm-square rounded-circle"
                href=""
              >
                <i className="fab fa-youtube fw-normal"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Topbar End --> */}

      {/* <!-- Navbar & Carousel Start --> */}
      <div className="container-fluid position-relative p-0">
        <nav
          className={`navbar navbar-expand-lg navbar-dark px-lg-5 px-3 py-3 py-lg-0 ${
            isSticky ? "sticky-top shadow-lg" : ""
          }`}
        >
          <Link to="/" className="navbar-brand p-0">
            <h1 className="m-0">
              dolphinne.
              {isSticky ? (
                <img src="favicon2.png" alt="" style={{ width: 70 }} />
              ) : (
                <img src="favicon.png" alt="" style={{ width: 70 }} />
              )}
            </h1>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse"
          >
            <span className="fa fa-bars"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <div className="navbar-nav ms-auto py-0">
              <NavLink
                to="/"
                className={(a) =>
                  `nav-item nav-link ${a.isActive ? "active" : ""}`
                }
              >
                Home
              </NavLink>
              <NavLink
                to="/about"
                className={(a) =>
                  `nav-item nav-link ${a.isActive ? "active" : ""}`
                }
              >
                About
              </NavLink>
              <NavLink
                to="/services"
                className={(a) =>
                  `nav-item nav-link ${a.isActive ? "active" : ""}`
                }
              >
                Services
              </NavLink>
              <NavLink
                to="/blog"
                className={(a) =>
                  `nav-item nav-link ${a.isActive ? "active" : ""}`
                }
              >
                Blog
              </NavLink>
              <NavLink
                to="/contact"
                className={(a) =>
                  `nav-item nav-link ${a.isActive ? "active" : ""}`
                }
              >
                Contact
              </NavLink>
            </div>
            <a
              href="https://htmlcodex.com/startup-company-website-template"
              className="btn btn-secondary py-2 px-4 ms-3"
            >
              Free Quote
            </a>
          </div>
        </nav>

        <div
          id="header-carousel"
          className="carousel slide carousel-fade"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                className="w-100 h-100"
                src="img/carousel-1.jpg"
                alt="Image"
              />
              <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                <div className="p-3" style={{ maxWidth: 900 }}>
                  <h5 className="text-white text-uppercase mb-3 animate__animated animate__fadeIn">
                    Creative & Innovative
                  </h5>
                  <h1 className="display-1 text-white mb-md-4 animated zoomIn">
                    Creative & Innovative Digital Solution
                  </h1>
                  <a
                    href="quote.html"
                    className="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft"
                  >
                    Free Quote
                  </a>
                  <a
                    href=""
                    className="btn btn-outline-light py-md-3 px-md-5 animated slideInRight"
                  >
                    Contact Us
                  </a>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <img
                className="w-100 h-100"
                src="img/carousel-2.jpg"
                alt="Image"
              />
              <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                <div className="p-3" style={{ maxWidth: 900 }}>
                  <h5 className="text-white text-uppercase mb-3 animated slideInDown">
                    Creative & Innovative
                  </h5>
                  <h1 className="display-1 text-white mb-md-4 animated zoomIn">
                    Creative & Innovative Digital Solution
                  </h1>
                  <a
                    href="quote.html"
                    className="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft"
                  >
                    Free Quote
                  </a>
                  <a
                    href=""
                    className="btn btn-outline-light py-md-3 px-md-5 animated slideInRight"
                  >
                    Contact Us
                  </a>
                </div>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#header-carousel"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#header-carousel"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      {/* <!-- Navbar & Carousel End --> */}
    </div>
  );
};

export default HeroHeader;
