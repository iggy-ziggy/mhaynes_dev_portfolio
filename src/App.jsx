import React from "react";
import Nav from "./components/Nav/Nav";
import Footer from "./components/Footer/Footer";
import HomePage from "./pages/HomePage/HomePage";
import SkillsPage from "./pages/SkillsPage/SkillsPage";
import ProjectsPage from "./pages/ProjectsPage/ProjectsPage";
import ContactPage from "./pages/ContactPage/ContactPage";
import "./App.css";

function App() {
  return (
    <>
      <Nav />
      <HomePage />
      <SkillsPage />
      <ProjectsPage />
      <ContactPage />
      <Footer />
    </>
  );
}

export default App;
