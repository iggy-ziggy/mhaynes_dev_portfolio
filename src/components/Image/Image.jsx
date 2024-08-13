import React from "react";
import PropTypes from "prop-types";
import "./Image.css";

const Image = ({ src, alt, style }) => {
  return (
    <div className="image_container">
      <img className="image" src={src} alt={alt} style={style}/>
    </div>
  );
};

Image.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  style: PropTypes.object
};

export default Image;
