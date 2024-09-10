import React from "react";
import Image from "../../components/Image/Image";
import Title from "../../components/Title/Title";
import TextBlock from "../../components/TextBlock/TextBlock";
import Button from "../../components/Button/Button";
import Placeholder from "../../assets/generic_placeholder_500x500_yellow.png";
import AboutMe from "../../lib/AboutMe";
import "./HomePage.css";
import Hero from "../../components/Hero/Hero";
import IconGrid from "../../components/IconGrid/IconGrid";
import Media from "../../components/Media/Media";
import StickyNote from "../../components/StickyNote/StickyNote";

// const HomePage = () => {
//   const title_style = {
//     color: "var(--yellow)",
//     marginBottom: "2rem",
//   };

//   return (
//     <div className="page_container grid1x1">
//       <div className="intro">
//         <Image src={Placeholder} alt="placeholder" />
//         <Title text={`Hi. I'm Matt.`} style={title_style} />
//       </div>
//       <div className="content">
//         <TextBlock>
//           <AboutMe />
//         </TextBlock>
//         <div className="centered relative_btn">
//           <Button text="Contact Me" />
//         </div>
//       </div>
//     </div>
//   );
// };

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
