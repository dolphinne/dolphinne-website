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

export const ContactUsForm = () => {
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
      const subject = formElements.from_subject.value.trim();

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

      if (!subject) {
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
              "Thank you for reaching us. We will get back to you within few hours.",
          });
          form.current.reset();
        },
        (error) => {
          setLoading(false);
          setSuccess({
            isTrue: false,
            message:
              "Server error. Please try again or email us on info@dolphinne.com.",
          });
        }
      );
  };

  return (
    <>
      <form ref={form}>
        <div className="row g-3">
          <div className="col-md-6">
            <input
              name="from_name"
              type="text"
              className="form-control border-0 bg-light px-4"
              placeholder="Your Name"
              style={{ height: 55 }}
              onChange={() => setSuccess({ isTrue: false, message: "" })}
            />
          </div>
          <div className="col-md-6">
            <input
              name="from_email"
              type="email"
              className="form-control border-0 bg-light px-4"
              placeholder="Your Email"
              style={{ height: 55 }}
              onChange={() => setSuccess({ isTrue: false, message: "" })}
            />
          </div>
          <div className="col-12">
            <input
              name="from_subject"
              type="text"
              className="form-control border-0 bg-light px-4"
              placeholder="Subject"
              style={{ height: 55 }}
              onChange={() => setSuccess({ isTrue: false, message: "" })}
            />
          </div>
          <div className="col-12">
            <textarea
              name="message"
              className="form-control border-0 bg-light px-4 py-3"
              rows={4}
              placeholder="Message"
              onChange={() => setSuccess({ isTrue: false, message: "" })}
            ></textarea>
          </div>
          <div className="col-12">
            <button className="btn btn-primary w-100 py-3" onClick={sendEmail}>
              {loading ? "Sending Message..." : "Send Message"}
              {loading ? <span className="loader-global ms-2"></span> : ""}
            </button>
          </div>
        </div>
      </form>
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
