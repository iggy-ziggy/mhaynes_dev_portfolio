import React from "react";
import PropTypes from "prop-types";
import Image from "../Image/Image";
import Title from "../Title/Title";
import Button from "../Button/Button";
import "./Card.css";

const Card = ({ children, title, src, alt, btnName }) => {
  const btn_style = {
    position: "relative",
    top: "-1rem",
  };
  return (
    <div>
      <Image src={src} alt={alt} />
      <Title text={title} />
      {children}
      {btnName && (
        <div className="centered relative">
          <Button text={btnName} style={btn_style} />
        </div>
      )}
    </div>
  );
};

Card.propTypes = {
  children: PropTypes.element,
  title: PropTypes.string,
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  btnName: PropTypes.string,
};

export default Card;
