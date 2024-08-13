import React from "react";
import Image from "../../components/Image/Image";
import Title from "../../components/Title/Title";
import TextBlock from "../../components/TextBlock/TextBlock";
import Button from "../../components/Button/Button";
import Placeholder from "../../assets/generic_placeholder_500x500_yellow.png";
import AboutMe from "../../lib/AboutMe";
import "./HomePage.css";

const HomePage = () => {
  const title_style = {
    color: "var(--yellow)",
    marginBottom: "2rem",
  };
  
  return (
    <div className="page_container grid1x1">
      <div className="intro">
        <Image src={Placeholder} alt="placeholder" />
        <Title text={`Hi. I'm Matt.`} style={title_style} />
      </div>
      <div className="content">
        <TextBlock>
          <AboutMe />
        </TextBlock>
        <div className="centered relative_btn">
          <Button text="Contact Me" />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
