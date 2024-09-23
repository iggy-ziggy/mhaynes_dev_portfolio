import React, { useState } from "react";
import MenuIcon from "../../assets/MenuIcon.svg?react";
import "./Nav.css";

const Nav = () => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className="menu_icon_container">
      <div className="logo">MH</div>
      <div className="dropdown" onClick={() => setIsVisible(!isVisible)}>
        <MenuIcon className="menu_icon" />
        <div className={`dropdown_list ${isVisible ? "visible" : ""}`}>
          <a href="#skills_page">Skills</a>
          <a href="#projects_page">Projects</a>
          <a href="#contact_page">Contact</a>
          <a href="#home_page">Home</a>
        </div>
      </div>
    </div>
  );
};

export default Nav;
