import React from "react";
import PropTypes from "prop-types";
import "./Button.css";

const Button = ({ text, onClick, style }) => {
  return (
    <div className="btn" onClick={onClick} style={style}>
      {text}
    </div>
  );
};

Button.propTypes = {
  text: PropTypes.string,
  onClick: PropTypes.func,
  style: PropTypes.object
};

export default Button;
