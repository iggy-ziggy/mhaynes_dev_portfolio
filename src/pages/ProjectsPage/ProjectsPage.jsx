import React, { useEffect, useState } from "react";
import "./ProjectsPage.css";
import StickyNote from "../../assets/post_it.png";
import Title from "../../components/Title/Title";
import Project from "../../components/Project/Project";
import projects from '../../lib/projectsData'

const ProjectsPage = () => {
  return (
    <div id="projects_page" className="page_container">
      <Title text="The Goods" />
      <div className="projects_container">
        {projects.map((project, index) => (
          <div
            key={index}
            className={`project${index + 1}`}
          >
            <Project
              title={project.title}
              github={project.github}
              deploy={project.deploy}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;
