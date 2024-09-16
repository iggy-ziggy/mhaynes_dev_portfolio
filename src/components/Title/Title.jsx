import React, { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import "./Title.css";

const Title = ({ text, style }) => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);

  const handleScroll = () => {
    if (elementRef.current) {
      const rect = elementRef.current.getBoundingClientRect();
      const windowHeight =
        window.innerHeight || document.documentElement.clientHeight;

      if (rect.top >= 0 && rect.top <= windowHeight * 0.9) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <h1
      ref={elementRef}
      className={`page_title ${isVisible ? "enlarge_title" : ""}`}
      style={style}
    >
      {text}
    </h1>
  );
};

Title.propTypes = {
  text: PropTypes.string.isRequired,
  style: PropTypes.object,
};

export default Title;
