import React from "react";
import { SiLinkedin, SiGithub } from "@icons-pack/react-simple-icons";
import MHIcon from "../assets/mh_footer_icon_purple.png";

const footerIcons = [
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/matt-haynes-46b6a7292/",
    icon: React.createElement(SiLinkedin, { color: "#c955ff", size: 25 }),
  },
  {
    name: "GitHub",
    url: "https://github.com/iggy-ziggy",
    icon: React.createElement(SiGithub, { color: "#c955ff", size: 25 }),
  },
  {
    name: "MHaynes Artist Portfolio",
    url: "https://mhaynes.netlify.app/",
    icon: React.createElement('img', {
        src: MHIcon,
        alt: 'MHaynes Artist Portfolio',
        width: 25,
        height: 25
    })
  },
];

export default footerIcons;
