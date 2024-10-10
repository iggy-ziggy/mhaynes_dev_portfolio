import React from "react";
import Title from "../../components/Title/Title";
import Icon3dContainer from "../../components/Icon3dContainer/Icon3dContainer";
import TextBlock from "../../components/TextBlock/TextBlock";
import Skills from "../../lib/Skills";
import ResumeDownload from "../../components/ResumeDownload/ResumeDownload";
import BagOfTricks from "../../assets/bag_of_tricks_icon_only.png";
import "./SkillsPage.css";
import StickyNote from "../../components/StickyNote/StickyNote";

const SkillsPage = () => {
  return (
    <div id="skills_page" className="page_container">
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
          {/* <Button text="My Resume" /> */}
          <ResumeDownload />
        </div>
      </div>
    </div>
  );
};

export default SkillsPage;
