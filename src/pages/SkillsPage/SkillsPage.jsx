import React from "react";
import Image from "../../components/Image/Image";
import Title from "../../components/Title/Title";
import IconGrid from "../../components/IconGrid/IconGrid";
import TextBlock from "../../components/TextBlock/TextBlock";
import Skills from "../../lib/Skills";
import Button from "../../components/Button/Button";
import Placeholder from "../../assets/generic_placeholder_500x500_yellow.png";
import './SkillsPage.css'

const SkillsPage = () => {
  const icons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  return (
    <div className="page_container grid1x1">
      <div>
        <Image src={Placeholder} alt="placeholder" />
        <Title text={`The Bag of Tricks`} />
      </div>
        <IconGrid>{icons}</IconGrid>
      <div className="skills_content">
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
