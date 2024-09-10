import React from "react";
import TextBlock from "../TextBlock/TextBlock";
import IconGrid from "../IconGrid/IconGrid";
import './Media.css'
import StickyNoteGrid from "../StickyNoteGrid/StickyNoteGrid";

const Media = ({ text, images }) => {
  return (
    <div className="media_container">
      <TextBlock>{text}</TextBlock>
      <StickyNoteGrid notes={images} />
      {/* <IconGrid>{images}</IconGrid> */}
    </div>
  );
};

export default Media;
