import { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const listOfServices = [
  "Web Development",
  "Mobile Development",
  "AI Integration",
  "SEO",
  "Data Analytics",
  "Graphics Design",
  "Cloud Services",
  "Other",
];

export const RequestAQouteForm = () => {
  const form = useRef<HTMLFormElement>();
  const [success, setSuccess] = useState({
    isTrue: false,
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const validateForm = () => {
    if (form.current) {
      const formElements: any = form.current.elements;
      const name = formElements.from_name.value.trim();
      const email = formElements.from_email.value.trim();
      const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      const service = formElements.from_service.value.trim();

      let valid = true;

      if (!name) {
        valid = false;
      }

      if (!email || !validEmail.test(email)) {
        valid = false;
      }

      if (!email || !validEmail.test(email)) {
        valid = false;
      }

      if (!service) {
        valid = false;
      }

      return valid;
    }
  };

  const sendEmail = (e) => {
    e.preventDefault();

    if (!validateForm()) {
      setSuccess({
        isTrue: false,
        message: "Please fill the required fields.",
      });
      return;
    }
    setLoading(true);
    emailjs
      .sendForm(
        import.meta.env.VITE_SI,
        import.meta.env.VITE_TI,
        form.current,
        {
          publicKey: import.meta.env.VITE_PK,
        }
      )
      .then(
        () => {
          setLoading(false);
          setSuccess({
            isTrue: true,
            message:
              "Your request is submitted. We will get back to you within few hours.",
          });
          form.current.reset();
        },
        (error) => {
          setLoading(false);
          setSuccess({
            isTrue: false,
            message:
              "Your request couldn't send due to server issue. Please try again or email us on info@dolphinne.com.",
          });
        }
      );
  };

  return (
    <>
      <div
        className="bg-primary rounded d-flex align-items-center p-5 wow zoomIn"
        data-wow-delay="0.9s"
      >
        <form ref={form}>
          <div className="row g-3">
            <div className="col-xl-12">
              <input
                name="from_name"
                type="text"
                className="form-control bg-light border-0"
                placeholder="Your Name"
                style={{ height: 55 }}
                onChange={() => setSuccess({ isTrue: false, message: "" })}
              />
            </div>
            <div className="col-12">
              <input
                type="email"
                name="from_email"
                className="form-control bg-light border-0"
                placeholder="Your Email"
                style={{ height: 55 }}
                onChange={() => setSuccess({ isTrue: false, message: "" })}
              />
            </div>
            <div className="col-12">
              <select
                className="form-select bg-light border-0"
                style={{ height: 55 }}
                name="from_service"
                onChange={() => setSuccess({ isTrue: false, message: "" })}
              >
                <option selected>Select A Service</option>
                {listOfServices.map((service, index) => (
                  <option key={index} value={service}>
                    {service}
                  </option>
                ))}
              </select>
            </div>
            <div className="col-12">
              <textarea
                onChange={() => setSuccess({ isTrue: false, message: "" })}
                name="message"
                className="form-control bg-light border-0"
                rows={3}
                placeholder="Write a Message"
              ></textarea>
            </div>
            <div className="col-12">
              <button className="btn btn-dark w-100 py-3" onClick={sendEmail}>
                {loading ? "Requesting A Quote..." : "Request A Quote"}
                {loading ? <span className="loader-global ms-2"></span> : ""}
              </button>
            </div>
          </div>
        </form>
      </div>
      {success.message && (
        <div
          className={
            success.isTrue
              ? "contact-form-message success"
              : "contact-form-message fail"
          }
        >
          {success.isTrue ? (
            <i className="fa fa-check"></i>
          ) : (
            <i className="fa fa-exclamation-triangle"></i>
          )}
          <p className="mb-0">{success.message}</p>
        </div>
      )}
    </>
  );
};
