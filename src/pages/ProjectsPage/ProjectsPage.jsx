import React, { useEffect, useState } from "react";
import "./ProjectsPage.css";
import StickyNote from "../../assets/post_it.png";
import Title from "../../components/Title/Title";
import Project from "../../components/Project/Project";

const projectArray = [
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
  {
    title: "Project 4",
    github: "https://github.com/",
    deploy: "https://www.google.com/",
  },
  {
    title: "Project 5",
    github: "https://github.com/",
    deploy: "https://www.google.com/",
  },
  {
    title: "Project 6",
    github: "https://github.com/",
    deploy: "https://www.google.com/",
  },
  {
    title: "Project 7",
    github: "https://github.com/",
    deploy: "https://www.google.com/",
  },
  {
    title: "Project 8",
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
// const ProjectsPage = () => {
//   const [rotations, setRotations] = useState([]);
//   const [positions, setPositions] = useState([])

//   useEffect(() => {
//     const initialRotations = projectArray.map(() => 
//       `${Math.random() > 0.5 ? "+" : "-"}${Math.random() * 15}deg`
//     );
//     setRotations(initialRotations);
//   }, []);

//   return (
//     <div>
//       <Title text="The Goods" />
//       <div className="projects_container">
//         {projectArray.map((project, index) => (
//           <div
//             key={index}
//             className="project"
//             style={{
//               transform: `rotate(${rotations[index]})`,
//               margin: ``
//             }}
//           >
//             <Project
//               title={project.title}
//               github={project.github}
//               deploy={project.deploy}
//             />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

export default ProjectsPage;
