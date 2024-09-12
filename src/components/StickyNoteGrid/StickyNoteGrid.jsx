import React from "react";
import "./StickyNoteGrid.css";
import StickyNotePNG from "../../assets/post_it.png";

const StickyNoteGrid = ({ notes }) => {
  return (
    <div className="note_grid">
      {notes.map((note, index) => (
        <div key={index} className="sticky_note_container">
          <h4>{note}</h4>
          <img src={StickyNotePNG} alt="sticky note" />
        </div>
      ))}
    </div>
  );
};

export default StickyNoteGrid;
