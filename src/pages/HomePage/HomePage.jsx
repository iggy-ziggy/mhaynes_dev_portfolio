import React from "react";
import TextBlock from "../../components/TextBlock/TextBlock";
import AboutMe from "../../lib/AboutMe";
import "./HomePage.css";
import Hero from "../../components/Hero/Hero";
import StickyNote from "../../components/StickyNote/StickyNote";

const icons = ["avid learner", "curious", "etc!"];

const HomePage = () => {
  return (
    <>
      <Hero />
      <div className="home_page_content">
        <div className="home_text">
          <TextBlock>
            <AboutMe />
          </TextBlock>
        </div>
        <div className="home_notes">
          {icons.map((icon, index) => (
            <div key={index} className={`home_note` + (index + 1)}>
              <StickyNote text={icon} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default HomePage;
