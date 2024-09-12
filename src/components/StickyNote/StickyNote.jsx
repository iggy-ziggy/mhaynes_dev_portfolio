import React from "react";
import StickyNotePNG from "../../assets/post_it.png";
import "./StickyNote.css";

const StickyNote = ({ text = null, image = null, links = [] }) => {
  return (
    <div className="sticky_note_container">
      {text && <h4>{text}</h4>}
      {image && <img className="sticky_icon" src={image} />}
      {links && (
        <div className="links_container">
          {links.map((link, index) => (
            <a key={index} href={link.url} target="blank" rel="noopener noreferrer">
              {link.name}
            </a>
          ))}
        </div>
      )}
      <img className="sticky_note_base" src={StickyNotePNG} alt="sticky note" />
    </div>
  );
};

export default StickyNote;
