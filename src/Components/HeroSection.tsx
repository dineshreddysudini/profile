import React from "react";
import "../Styles/HeroSection.css";
import profilePic from "../Assets/my2.jpg";

const HeroSection: React.FC = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h4>WELCOME TO MY WORLD</h4>
        <h1>
          Hi, I'm <span className="highlight">Dinesh Sudini</span> <br />a{" "}
          <span className="highlight">Developer.</span>
        </h1>
        <p>
          I craft clean, scalable, and user-friendly apps. Passionate about
          frontend, performance, and pixel perfection.
        </p>
      </div>
      <div className="hero-image">
        <img src={profilePic} alt="Dinesh Sudini" />
      </div>
    </section>
  );
};

export default HeroSection;
