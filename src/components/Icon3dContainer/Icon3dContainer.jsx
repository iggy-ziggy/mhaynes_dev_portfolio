import React, { useState } from "react";
import Icon3dCanvas from "../Icon/Icon3d";
import iconsData from "../../lib/iconsData";
import "./Icon3dContainer.css";

const Icon3dContainer = () => {
  const [clicked, setClicked] = useState(null);

  const handleClick = (index) => {
    setClicked(clicked === index ? null : index);
  };

  return (
    <>
      <div className="icon_container">
        {iconsData.map((icon, index) => (
          <div
            key={icon.name}
            onClick={() => handleClick(index)}
            className="icon"
          >
            <h2 className={`icon_title ${clicked === index ? "in" : "out"}`}>
              {icon.name}
            </h2>
            <Icon3dCanvas image={icon.image} />
          </div>
        ))}
      </div>
    </>
  );
};

export default Icon3dContainer;
