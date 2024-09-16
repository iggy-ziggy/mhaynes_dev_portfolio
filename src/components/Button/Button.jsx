import React from "react";
import PropTypes from "prop-types";
import "./Button.css";

const Button = ({ text, type, onClick, style }) => {
  return (
    <button className="btn" type={type} onClick={onClick} style={style}>
      {text}
    </button>
  );
};

Button.propTypes = {
  text: PropTypes.string,
  onClick: PropTypes.func,
  style: PropTypes.object
};

export default Button;
