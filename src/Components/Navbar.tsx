import React from "react";
import "../Styles/Navbar.css";

type NavbarProps = {
  onSelect: (section: string) => void;
};

const Navbar: React.FC<NavbarProps> = ({ onSelect }) => (
  <nav className="navbar">
    <div className="logo">Dinesh</div>
    <ul className="nav-links">
      <li onClick={() => onSelect("home")}>Home</li>
      <li onClick={() => onSelect("education")}>Education</li>
      <li onClick={() => onSelect("experience")}>Experience</li>
      <li onClick={() => onSelect("projects")}>Projects</li>
      <li onClick={() => onSelect("contact")}>Contact</li>
    </ul>
  </nav>
);

export default Navbar;
