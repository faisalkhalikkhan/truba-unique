import React from "react";
import "./cf.css";

const ContactForm = () => {
  return (
    <div className="contact_form">
      <h2
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          textTransform: "uppercase",
        }}
      >
        Get In Touch
      </h2>
      <section>
        <form>
          <div style={{ display: "flex" }}>
            <div className="input_box">
              <input type="text" placeholder="Your Name" />
            </div>
            <div style={{ width: "20px" }}></div>
            <div className="input_box">
              <input type="email" placeholder="Your Email" />
            </div>
          </div>
          <div className="input_box">
            <input type="text" placeholder="Subject" />
          </div>
          <div className="text_area">
            <textarea placeholder="Your Message!" type="text" />
          </div>
          <div className="contact_form_btn">
            <button>Send</button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default ContactForm;
