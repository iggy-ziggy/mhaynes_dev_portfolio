import React, { useEffect, useState } from "react";
import HeroImage from "../../assets/placeholder_eyes.png";
import "./Hero.css";

const Hero = () => {
  const [screenSize, setScreenSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    function handleResize() {
        setScreenSize({
            width: window.innerWidth,
            height: window.innerHeight
        })
    }
    window.addEventListener('resize', handleResize)

    return () => {
        window.removeEventListener('resize', handleResize)
    }
  });

  if (screenSize.width > 750) {
    return (
      <div className="hero">
        <div className="hero_title">
          <h2>MATT HAYNES</h2>
          <p>Developer | Artist</p>
        </div>
        <div className="hero_image">
          <img src={HeroImage} alt="" />
        </div>
      </div>
    );
  }

  return (
    <div className="hero">
      <div className="hero_image">
        <img src={HeroImage} alt="" />
      </div>
      <div className="hero_title">
        <h2>MATT HAYNES</h2>
        <p>Developer | Artist</p>
      </div>
    </div>
  );
};

export default Hero;
