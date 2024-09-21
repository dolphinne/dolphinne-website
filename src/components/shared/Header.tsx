import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Topbar from "./Topbar";

const Header = ({ pageTitle, pageRoute }) => {
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

      {/* <!-- Navbar Start --> */}
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
                <img src="/favicon2.png" alt="" style={{ width: 70 }} />
              ) : (
                <img src="/favicon.png" alt="" style={{ width: 70 }} />
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
              <NavLink
                to="/portfolio"
                className={(a) =>
                  `nav-item nav-link ${a.isActive ? "active" : ""}`
                }
                onClick={handleScrollTop}
              >
                Portfolio
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
          className="container-fluid bg-primary py-5 bg-header"
          // style={{ marginBottom: 90 }}
        >
          <div className="row py-5">
            <div className="col-12 pt-lg-5 mt-lg-5 text-center">
              <h1 className="display-4 text-white animated zoomIn">
                {pageTitle}
              </h1>
              <Link to="/" className="h5 text-white">
                Home
              </Link>
              {pageRoute.split("/").map((one, index) => (
                <>
                  <i className="far fa-circle text-white px-2"></i>
                  <Link
                    to={
                      index === pageRoute.split("/").length - 1 ? "" : `/${one}`
                    }
                    className="h5 text-white"
                  >
                    {one}
                  </Link>
                </>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
