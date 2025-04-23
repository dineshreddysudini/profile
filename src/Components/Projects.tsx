// import React from "react";

// const Projects: React.FC = () => (
//   <section>
//     <h2>Projects</h2>
//     <p>
//       GitHub:{" "}
//       <a
//         href="https://github.com/dineshsudini"
//         target="_blank"
//         rel="noreferrer"
//       >
//         github.com/dineshsudini
//       </a>
//     </p>
//   </section>
// );

// export default Projects;

import React from "react";
import "../Styles/Section.css";

const Projects: React.FC = () => (
  <section className="section">
    <h2>Projects</h2>
    <ul>
      <li>
        <strong>Customer Management Portal</strong> – SPA built with React and
        Redux to manage onboarding workflows.
      </li>
      <li>
        <strong>Microservices Integration</strong> – Spring Boot + Cloud Foundry
        based services for data flow and auth via OAuth2.
      </li>
      <li>
        <strong>UI Modernization</strong> – Rebuilt legacy AngularJS UI with
        modern React/TypeScript design system.
      </li>
    </ul>
  </section>
);

export default Projects;
