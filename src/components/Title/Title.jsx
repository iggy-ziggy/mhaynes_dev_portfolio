import React from "react";
import PropTypes from "prop-types";
import "./Title.css";

const Title = ({ text, style }) => {
  return (
    <h1 className="page_title" style={style}>
      {text}
    </h1>
  );
};

Title.propTypes = {
  text: PropTypes.string.isRequired,
  style: PropTypes.object,
};

export default Title;
