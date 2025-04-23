import React from "react";
import "../Styles/Section.css";

const Experience: React.FC = () => (
  <section className="section">
    <h2>Work Experience</h2>

    <div>
      <h3>Lowe's Companies Inc.</h3>
      <p>
        <strong>Software Engineer</strong> | May 2020 – Present | Charlotte, NC
      </p>
      <ul>
        <li>
          Built and maintained enterprise-grade web apps using React, Redux, and
          TypeScript.
        </li>
        <li>
          Developed reusable components and consumed REST APIs using
          component-based architecture.
        </li>
        <li>Integrated backend services with Cloud Foundry and Spring Boot.</li>
        <li>
          Worked in agile teams using JIRA and wrote unit tests using JUnit and
          Mockito.
        </li>
      </ul>
    </div>

    <div>
      <h3>Vsion Technologies Inc.</h3>
      <p>
        <strong>Software Engineer</strong> | Aug 2017 – May 2020 | Cedar Park,
        TX
      </p>
      <ul>
        <li>
          Developed responsive web pages using HTML5, CSS3, JavaScript, and
          jQuery.
        </li>
        <li>
          Created UI layouts, validation logic, and handled AJAX-driven
          interactivity.
        </li>
        <li>
          Built client-facing designs using Adobe tools and CMS frameworks.
        </li>
      </ul>
    </div>
  </section>
);

export default Experience;
