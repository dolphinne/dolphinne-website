import React from "react";
import Slider from "react-slick";

const testimonials = [
  {
    name: "Paulo Wilson",
    title: "Project Lead, Roy Sports",
    quote:
      "The team at the dolphinne transformed our outdated website into a modern, user-friendly platform. Our online traffic has increased significantly, and we've received numerous compliments from our clients.",
  },
  {
    name: "Elias Smith",
    title: "Marketing Director, Robert Fine Jewellery",
    quote:
      "Thanks to the dolphinne's SEO services, our search engine rankings have improved dramatically. We've seen a noticeable increase in organic traffic and lead generation.",
  },
  {
    name: "Kevin B",
    title: "CEO, Streamfog",
    quote:
      "Integrating AI solutions into our processes has significantly improved our efficiency and decision-making. The dolphinne provided excellent support throughout the implementation.",
  },
  {
    name: "Zenith S.",
    title: "Founder, The Naz Creations",
    quote:
      "The app development services provided by the dolphinne were exceptional. The app is intuitive, fast, and has received great feedback from our users. Highly recommend their services!",
  },
  {
    name: "Sarah Davis",
    title: "Operations Manager, Retail Experts",
    quote:
      "We were struggling with data management until we partnered with the dolphinne. Their data analytics solutions have streamlined our operations and provided valuable insights into our business.",
  },
  {
    name: "Raj Desai",
    title: "IT Director, Softcode Solutions",
    quote:
      "Cyber security was a major concern for us, but the dolphinne provided robust solutions that have given us peace of mind. Their team is knowledgeable and always available to assist.",
  },
  {
    name: "Hetal Pankaj",
    title: "Owner, Boutique Designs",
    quote:
      "The graphic design services from the dolphinne have been outstanding. Our brand's visual identity has never looked better, and our customers love the new look.",
  },
  {
    name: "Pradeep Garg",
    title: "Project Manager, Pace OS",
    quote:
      "Implementing cloud solutions with the dolphinne has been a game-changer for our business. The transition was smooth, and the benefits have been immense.",
  },
];

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    // autoplay: true,
    // autoplaySpeed: 10000,
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
            {testimonials.map((testimonial) => (
              <div className="px-0 px-md-3">
                <div className="testimonial-item bg-light my-4 item">
                  <div className="d-flex align-items-center border-bottom pt-5 pb-4 px-5">
                    <img
                      className="img-fluid rounded"
                      src="img/user.png"
                      style={{ width: 60, height: 60 }}
                    />
                    <div className="ps-4">
                      <h4 className="text-primary mb-1">{testimonial.name}</h4>
                      <small className="text-uppercase">
                        {testimonial.title}
                      </small>
                    </div>
                  </div>
                  <div className="pt-4 pb-5 px-5">{testimonial.quote}</div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
};

export default Testimonials;
