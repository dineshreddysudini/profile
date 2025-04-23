import React, { useState } from "react";
import Navbar from "./Components/Navbar";
import HeroSection from "./Components/HeroSection";
import Education from "./Components/Education";
import Experience from "./Components/Experience";
import Projects from "./Components/Projects";
import Footer from "./Components/Footer";
import "./Styles/App.css";

const App: React.FC = () => {
  const [section, setSection] = useState<string>("home");

  const renderSection = () => {
    switch (section) {
      case "home":
        return <HeroSection />;
      case "education":
        return <Education />;
      case "experience":
        return <Experience />;
      case "projects":
        return <Projects />;
      case "contact":
        return <Footer />;
      default:
        return <HeroSection />;
    }
  };

  return (
    <>
      <Navbar onSelect={setSection} />
      <div className="content">{renderSection()}</div>
    </>
  );
};

export default App;
