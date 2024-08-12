import React from "react";
import PropTypes from "prop-types";
import "./Image.css";

const Image = ({ src, alt }) => {
  return (
    <div className="image_container">
      <img className="image" src={src} alt={alt} />
    </div>
  );
};

Image.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

export default Image;
