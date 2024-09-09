import Title from "./components/Title/Title";
import Button from "./components/Button/Button";
import TextBlock from "./components/TextBlock/TextBlock";
import Card from "./components/Card/Card";
import Image from "./components/Image/Image";
import IconGrid from "./components/IconGrid/IconGrid";
import Nav from "./components/Nav/Nav";
import Footer from "./components/Footer/Footer";
import Placeholder from "./assets/generic_placeholder_500x500.png";
import HomePage from "./pages/HomePage/HomePage";
import SkillsPage from "./pages/SkillsPage/SkillsPage";
import icon1 from "./assets/generic_placeholder_500x500_purple.png";
import icon2 from "./assets/generic_placeholder_500x500_purple.png";
import icon3 from "./assets/generic_placeholder_500x500_purple.png";
import AboutMe from "./lib/AboutMe";
import "./App.css";
import React from "react";
import Hero from "./components/Hero/Hero";

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
  return (
    <>
      {/* <Nav />
      <div className="container">
        <HomePage />
        <SkillsPage />
        <Footer>
          {icons}
        </Footer>
      </div> */}
      <h1>REDUX</h1>
      <Hero />
    </>
  );
}

export default App;
