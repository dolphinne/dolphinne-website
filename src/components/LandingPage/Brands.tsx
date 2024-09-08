import React from "react";
import Slider from "react-slick";

const Brands = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 1024, // For screen widths up to 1024px
        settings: {
          slidesToShow: 3, // Show 2 slides
          slidesToScroll: 1,
          dots: false,
        },
      },
      {
        breakpoint: 767, // For screen widths up to 1024px
        settings: {
          slidesToShow: 2, // Show 2 slides
        },
      },
    ],
  };
  return (
    <div
      className="container-fluid py-lg-5 py-3 wow fadeInUp"
      data-wow-delay="0.1s"
    >
      <div className="container py-lg-5 py-3">
        <div className="bg-white">
          <Slider {...settings}>
            <div className="px-3">
              <img src="img/vendor-1.jpg" alt="" />
            </div>
            <div className="px-3">
              <img src="img/vendor-2.jpg" alt="" />
            </div>
            <div className="px-3">
              <img src="img/vendor-3.jpg" alt="" />
            </div>
            <div className="px-3">
              <img src="img/vendor-4.jpg" alt="" />
            </div>
            <div className="px-3">
              <img src="img/vendor-5.jpg" alt="" />
            </div>
            <div className="px-3">
              <img src="img/vendor-6.jpg" alt="" />
            </div>
            <div className="px-3">
              <img src="img/vendor-7.jpg" alt="" />
            </div>
            <div className="px-3">
              <img src="img/vendor-8.jpg" alt="" />
            </div>
            <div className="px-3">
              <img src="img/vendor-9.jpg" alt="" />
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Brands;
