import React from "react";
import footerIcons from "../../lib/footerData";
import "./Footer.css";

const Footer = () => {
  
  return (
    <div className="footer">
      <p className="copyright">&copy; 2024 Matthew Haynes</p>
      <div className="footer_icons">
        {footerIcons.map((item, index) => (
          <div className="footer_icon" key={index}>
            <a
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              title={item.name}
            >
              {item.icon}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Footer;
