import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Topbar from "../shared/Topbar";
import { constants } from "../utils/constants";

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

  const handleScrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

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

      <Topbar />
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
                onClick={handleScrollTop}
              >
                Home
              </NavLink>
              <NavLink
                to="/about"
                className={(a) =>
                  `nav-item nav-link ${a.isActive ? "active" : ""}`
                }
                onClick={handleScrollTop}
              >
                About
              </NavLink>
              <NavLink
                to="/services"
                className={(a) =>
                  `nav-item nav-link ${a.isActive ? "active" : ""}`
                }
                onClick={handleScrollTop}
              >
                Services
              </NavLink>
              {/* <NavLink
                to="/blog"
                className={(a) =>
                  `nav-item nav-link ${a.isActive ? "active" : ""}`
                }
                  onClick={handleScrollTop}
              >
                Blog
              </NavLink> */}
              <NavLink
                to="/contact"
                className={(a) =>
                  `nav-item nav-link ${a.isActive ? "active" : ""}`
                }
                onClick={handleScrollTop}
              >
                Contact
              </NavLink>
            </div>
            <NavLink
              to="/contact"
              onClick={handleScrollTop}
              className="btn btn-secondary py-2 px-4 ms-3"
            >
              Free Quote
            </NavLink>
          </div>
        </nav>

        <div
          id="header-carousel"
          className="carousel slide carousel-fade"
          data-bs-ride="carousel"
          data-bs-pause="false"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                className="w-100 hero-carousel-img"
                src="img/carousal-1.jpg"
                alt="Image"
              />
              <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                <div className="p-3" style={{ maxWidth: 1000 }}>
                  <h5 className="text-white text-uppercase mb-1 animate__animated animate__fadeIn">
                    Empowering you to achieve what once seemed impossible.
                  </h5>
                  <h1 className="display-2 text-white mb-md-4 animated zoomIn">
                    Turning the Impossible into Possible.
                  </h1>
                  <NavLink
                    to="/contact"
                    className="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft"
                  >
                    Free Quote
                  </NavLink>
                  <a
                    href={`mailto:${constants.email}`}
                    className="btn btn-outline-light py-md-3 px-md-5 animated slideInRight"
                  >
                    Contact Us
                  </a>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <img
                className="w-100 hero-carousel-img"
                src="img/carousal-2.png"
                alt="Image"
              />
              <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                <div className="p-3" style={{ maxWidth: 1000 }}>
                  <h5 className="text-white text-uppercase mb-1 animated slideInDown">
                    Leading the way with cutting-edge technology solutions.
                  </h5>
                  <h1 className="display-2 text-white mb-md-4 animated zoomIn">
                    Innovate, Integrate, Elevate.
                  </h1>
                  <NavLink
                    to="/contact"
                    className="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft"
                  >
                    Free Quote
                  </NavLink>
                  <a
                    href={`mailto:${constants.email}`}
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
