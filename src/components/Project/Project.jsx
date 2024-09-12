import React from "react";
import "./Project.css";
import StickyNote from "../StickyNote/StickyNote";

const Project = ({ title, github, deploy }) => {
  return (
      <StickyNote
        text={title}
        links={[
          { name: "GitHub", url: github },
          { name: "Deploy", url: deploy },
        ]}
      />
  );
};

export default Project;
