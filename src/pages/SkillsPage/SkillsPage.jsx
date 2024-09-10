import React from "react";
import Image from "../../components/Image/Image";
import Title from "../../components/Title/Title";
import IconGrid from "../../components/IconGrid/IconGrid";
import Icon3dContainer from "../../components/Icon3dContainer/Icon3dContainer";
import TextBlock from "../../components/TextBlock/TextBlock";
import Skills from "../../lib/Skills";
import Button from "../../components/Button/Button";
// import Placeholder from "../../assets/generic_placeholder_500x500_yellow.png";
import BagOfTricks from "../../assets/bag_of_tricks_icon_only.png";
import "./SkillsPage.css";
import StickyNote from "../../components/StickyNote/StickyNote";

const SkillsPage = () => {
  const icons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  return (
    <div className="page_container">
      <Title text={`The Bag of Tricks`} />
      <div className="skills_content grid1x1">
        <StickyNote image={BagOfTricks} />
        <Icon3dContainer />
      </div>
      <div className="page_text">
        <TextBlock>
          <Skills />
        </TextBlock>
        <div className="centered relative_btn">
          <Button text="My Resume" />
        </div>
      </div>
    </div>
  );
};

export default SkillsPage;
