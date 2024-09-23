import React, { useEffect, useRef, useState } from "react";
import MenuIcon from "../../assets/MenuIcon.svg?react";
import "./Nav.css";

const Nav = () => {
  const [isVisible, setIsVisible] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsVisible(!isVisible);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    if (isVisible) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  });

  return (
    <div className="menu_icon_container">
      <div className="logo">MH</div>
      <div className="dropdown" onClick={toggleDropdown} ref={dropdownRef}>
        <MenuIcon className={`menu_icon ${isVisible ? "open" : ""}`} />
        <ul className={`dropdown_list ${isVisible ? "visible" : ""}`}>
          <li>
            <a href="#skills_page">Skills</a>
          </li>
          <li>
            <a href="#projects_page">Projects</a>
          </li>
          <li>
            <a href="#contact_page">Contact</a>
          </li>
          <li>
            <a href="#home_page">Home</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Nav;
