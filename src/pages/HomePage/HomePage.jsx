import React from "react";
import Image from "../../components/Image/Image";
import Title from "../../components/Title/Title";
import TextBlock from "../../components/TextBlock/TextBlock";
import Button from "../../components/Button/Button";
import Placeholder from "../../assets/generic_placeholder_500x500.png";
import AboutMe from "../../lib/AboutMe";
import "./HomePage.css";

const HomePage = () => {
  return (
    <>
      <Image src={Placeholder} alt="placeholder" />
      <Title text={`Hi. I'm Matt.`} />
      <TextBlock>
        <AboutMe />
      </TextBlock>
      <div className="centered relative_btn">
        <Button text="Contact Me" />
      </div>
    </>
  );
};

export default HomePage;
