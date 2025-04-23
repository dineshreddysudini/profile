import React from "react";
import "../Styles/Section.css";

const Footer: React.FC = () => (
  <footer className="section">
    <h2>Contact</h2>
    <p>
      <strong>Phone:</strong> (657) 272-9499
    </p>
    <p>
      <strong>Email:</strong>{" "}
      <a
        href="mailto:dineshreddysudini5@gmail.com"
        style={{ color: "#ff4a57" }}
      >
        dineshreddysudini5@gmail.com
      </a>
    </p>
    <p>
      <strong>GitHub:</strong>{" "}
      <a
        href="https://github.com/dineshsudini"
        target="_blank"
        rel="noreferrer"
        style={{ color: "#ff4a57" }}
      >
        github.com/dineshsudini
      </a>
    </p>
  </footer>
);

export default Footer;
