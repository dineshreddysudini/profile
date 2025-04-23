import React from "react";
import "../Styles/Section.css";

const Education: React.FC = () => (
  <section className="section">
    <h2>Education</h2>

    <div>
      <h3>Northwestern Polytechnic University, Fremont, CA</h3>
      <p>
        <strong>Master of Science in Electronic Engineering</strong>
      </p>
      <p>Aug 2016 – Dec 2017</p>
    </div>

    <div style={{ marginTop: "2rem" }}>
      <h3>St. Mary’s Engineering College, Hyderabad, India</h3>
      <p>
        <strong>
          Bachelor of Technology in Electronics and Communication Engineering
        </strong>
      </p>
      <p>2009 – 2013 | Affiliated to JNTU Hyderabad (JNTUH)</p>
    </div>
  </section>
);

export default Education;
