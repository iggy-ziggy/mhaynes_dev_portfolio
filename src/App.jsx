import Nav from "./components/Nav/Nav";
import Footer from "./components/Footer/Footer";
import HomePage from "./pages/HomePage/HomePage";
import SkillsPage from "./pages/SkillsPage/SkillsPage";
import icon1 from "./assets/generic_placeholder_500x500_purple.png";
import icon2 from "./assets/generic_placeholder_500x500_purple.png";
import icon3 from "./assets/generic_placeholder_500x500_purple.png";
import "./App.css";
import React from "react";
import ProjectsPage from "./pages/ProjectsPage/ProjectsPage";
import Project from "./components/Project/Project";
import StickyNote from "./components/StickyNote/StickyNote";

function App() {
  const test_array = [
    {
      name: "item 0",
      place: 0,
    },
    {
      name: "item 1",
      place: 1,
    },
    {
      name: "item 2",
      place: 2,
    },
    {
      name: "item 3",
      place: 3,
    },
    {
      name: "item 4",
      place: 4,
    },
    {
      name: "item 5",
      place: 5,
    },
    {
      name: "item 6",
      place: 6,
    },
    {
      name: "item 7",
      place: 7,
    },
    {
      name: "item 8",
      place: 8,
    },
    {
      name: "item 9",
      place: 9,
    },
    {
      name: "item 10",
      place: 10,
    },
    {
      name: "item 11",
      place: 11,
    },
  ];

  const icons = [icon1, icon2, icon3];

  const iconsText = [
    `here's some text`,
    `and a little more text`,
    `and look! MORE TEXT!`,
  ];

  const projectInfo = [
    {
      title: "Project 1",
      github: "https://github.com/",
      deploy: "https://www.google.com/",
    },
    {
      title: "Project 2",
      github: "https://github.com/",
      deploy: "https://www.google.com/",
    },
    {
      title: "Project 3",
      github: "https://github.com/",
      deploy: "https://www.google.com/",
    },
  ];

  return (
    <>
      {/* <Nav />
        <HomePage />
        <SkillsPage />
      <Footer>{icons}</Footer> */}
      {/* <ProjectsPage /> */}
      {/* <StickyNote text="Project 1" /> */}
      {projectInfo.map((project, index) => (
        <Project
          key={index}
          title={project.title}
          github={project.github}
          deploy={project.deploy}
        />
      ))}
    </>
  );
}

export default App;
