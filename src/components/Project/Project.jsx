import React from "react";
import "./Project.css";
import StickyNote from "../StickyNote/StickyNote";

const Project = ({ title, github, deploy }) => {
  return (
    <div className="project">
      <StickyNote
        text={title}
        links={[
          { name: "GitHub", url: github },
          { name: "Deploy", url: deploy },
        ]}
      />
    </div>
  );
};

export default Project;
