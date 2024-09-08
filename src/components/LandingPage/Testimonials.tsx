import React from "react";
import Slider from "react-slick";

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 1024, // For screen widths up to 1024px
        settings: {
          slidesToShow: 2, // Show 2 slides
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 767, // For screen widths up to 600px
        settings: {
          slidesToShow: 1, // Show 1 slide
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480, // For screen widths up to 480px
        settings: {
          slidesToShow: 1, // Show 1 slide
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <div
        className="container-fluid py-lg-5 py-3 wow fadeInUp"
        data-wow-delay="0.1s"
      >
        <div className="container py-lg-5 py-3">
          <div
            className="section-title text-center position-relative pb-3 mb-4 mx-auto"
            style={{ maxWidth: 600 }}
          >
            <h5 className="fw-bold text-primary text-uppercase">Testimonial</h5>
            <h1 className="mb-0">
              What Our Clients Say About Our Digital Services
            </h1>
          </div>
          <Slider {...settings}>
            <div className="px-0 px-md-3">
              <div className="testimonial-item bg-light my-4 item">
                <div className="d-flex align-items-center border-bottom pt-5 pb-4 px-5">
                  <img
                    className="img-fluid rounded"
                    src="img/testimonial-1.jpg"
                    style={{ width: 60, height: 60 }}
                  />
                  <div className="ps-4">
                    <h4 className="text-primary mb-1">Client Name</h4>
                    <small className="text-uppercase">Profession</small>
                  </div>
                </div>
                <div className="pt-4 pb-5 px-5">
                  Dolor et eos labore, stet justo sed est sed. Diam sed sed
                  dolor stet amet eirmod eos labore diam
                </div>
              </div>
            </div>
            <div className="px-0 px-md-3">
              <div className="testimonial-item bg-light my-4 item">
                <div className="d-flex align-items-center border-bottom pt-5 pb-4 px-5">
                  <img
                    className="img-fluid rounded"
                    src="img/testimonial-2.jpg"
                    style={{ width: 60, height: 60 }}
                  />
                  <div className="ps-4">
                    <h4 className="text-primary mb-1">Client Name</h4>
                    <small className="text-uppercase">Profession</small>
                  </div>
                </div>
                <div className="pt-4 pb-5 px-5">
                  Dolor et eos labore, stet justo sed est sed. Diam sed sed
                  dolor stet amet eirmod eos labore diam
                </div>
              </div>
            </div>
            <div className="px-0 px-md-3">
              <div className="testimonial-item bg-light my-4 item">
                <div className="d-flex align-items-center border-bottom pt-5 pb-4 px-5">
                  <img
                    className="img-fluid rounded"
                    src="img/testimonial-3.jpg"
                    style={{ width: 60, height: 60 }}
                  />
                  <div className="ps-4">
                    <h4 className="text-primary mb-1">Client Name</h4>
                    <small className="text-uppercase">Profession</small>
                  </div>
                </div>
                <div className="pt-4 pb-5 px-5">
                  Dolor et eos labore, stet justo sed est sed. Diam sed sed
                  dolor stet amet eirmod eos labore diam
                </div>
              </div>
            </div>
            <div className="px-0 px-md-3">
              <div className="testimonial-item bg-light my-4 item">
                <div className="d-flex align-items-center border-bottom pt-5 pb-4 px-5">
                  <img
                    className="img-fluid rounded"
                    src="img/testimonial-4.jpg"
                    style={{ width: 60, height: 60 }}
                  />
                  <div className="ps-4">
                    <h4 className="text-primary mb-1">Client Name</h4>
                    <small className="text-uppercase">Profession</small>
                  </div>
                </div>
                <div className="pt-4 pb-5 px-5">
                  Dolor et eos labore, stet justo sed est sed. Diam sed sed
                  dolor stet amet eirmod eos labore diam
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </>
  );
};

export default Testimonials;
