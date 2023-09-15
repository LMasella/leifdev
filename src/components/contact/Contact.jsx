import React from "react";
import "./contact.css";
import gmail from "../../img/gmail.svg";
import linkedIn from "../../img/linkedin.svg";
import gitHub from "../../img/github.svg";

const Contact = () => {
  return (
    <div className="contact section" id="contact">
      <div className="contact-content">
        <h1>Thanks for stopping by!</h1>
        <p>I am looking forward to hearing from you.</p>
        <div className="contact-icons">
          <a href="mailto:Leif.Masella@gmail.com">
            <div className="contact-icon">
              <img
                src={gmail}
                alt="Gmail"
                style={{ backgroundColor: "white", borderRadius: "20%" }}
              />
              <p>Gmail</p>
            </div>
          </a>
          <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/leif-masella/">
            <div className="contact-icon">
              <img src={linkedIn} alt="LinkedIn" />
              <p>LinkedIn</p>
            </div>
          </a>
          <a target="_blank" rel="noreferrer" href="https://github.com/LMasella">
            <div className="contact-icon">
              <img src={gitHub} alt="GitHub" />
              <p>GitHub</p>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
