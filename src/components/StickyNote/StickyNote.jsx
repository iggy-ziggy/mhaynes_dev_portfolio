import React from "react";
import StickyNotePNG from "../../assets/post_it.png";
import "./StickyNote.css";

const StickyNote = ({ text = null, image = null }) => {
  return (
    <div className="single_sticky_note_container">
      {text && <h4>{text}</h4>}
      {image && <img className="sticky_icon" src={image} />}
      <img className="sticky_note_base" src={StickyNotePNG} alt="sticky note" />
    </div>
  );
};

export default StickyNote;
