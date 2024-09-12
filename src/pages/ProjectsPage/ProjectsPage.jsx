import React from "react";
import "./ProjectsPage.css";
import StickyNote from "../../assets/post_it.png";
import Title from "../../components/Title/Title";
import Project from "../../components/Project/Project";

const projectArray = [
  {
    title: "Project1",
    github: "https://github.com/",
    deploy: "https://www.google.com/",
  },
  {
    title: "Project2",
    github: "https://github.com/",
    deploy: "https://www.google.com/",
  },
  {
    title: "Project3",
    github: "https://github.com/",
    deploy: "https://www.google.com/",
  },
  {
    title: "Project4",
    github: "https://github.com/",
    deploy: "https://www.google.com/",
  },
  {
    title: "Project5",
    github: "https://github.com/",
    deploy: "https://www.google.com/",
  },
  {
    title: "Project6",
    github: "https://github.com/",
    deploy: "https://www.google.com/",
  },
  {
    title: "Project7",
    github: "https://github.com/",
    deploy: "https://www.google.com/",
  },
  {
    title: "Project8",
    github: "https://github.com/",
    deploy: "https://www.google.com/",
  },
  {
    title: "Project9",
    github: "https://github.com/",
    deploy: "https://www.google.com/",
  },
  {
    title: "Project10",
    github: "https://github.com/",
    deploy: "https://www.google.com/",
  },
];

const ProjectsPage = () => {
  return (
    <div>
      <Title text="The Goods" />
      <div className="projects_container">
        {projectArray.map((project, index) => (
          <Project
            key={index}
            title={project.title}
            github={project.github}
            deploy={project.deploy}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;
