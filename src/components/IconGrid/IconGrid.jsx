import React from "react";
import PropTypes from "prop-types";
import Placeholder from '../../assets/generic_placeholder_500x500_pink.png'
import "./IconGrid.css";

const IconGrid = ({ children }) => {
  return (
    // <div className="icon_grid_container">
    //   <div className="grid">
    //     {children.map((c, i) => (
    //       <div className="dummy_icon" key={i}>
    //         {c}
    //       </div>
    //     ))}
    //   </div>
    // </div>
    <div className="icon_grid_container">
      <div className="grid">
        {children.map((c, i) => (
          <img className="dummy_icon" key={c} src={Placeholder} />
        ))}
      </div>
    </div>
  );
};

// IconGrid.propTypes = {
//     children: PropTypes.arrayOf(PropTypes.string)
// }

export default IconGrid;
