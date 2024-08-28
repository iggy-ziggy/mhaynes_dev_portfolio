import {
  SiBootstrap,
  SiCss3,
  SiExpress,
  SiGraphql,
  SiHtml5,
  SiJavascript,
  SiMongodb,
  SiMysql,
  SiReact,
  SiSequelize,
} from "@icons-pack/react-simple-icons";
import React from "react";

const iconsData = [
  {
    name: "HTML",
    image: React.createElement(SiHtml5, { color: "white", size: 100 }),
  },
  {
    name: "CSS",
    image: React.createElement(SiCss3, { color: "white", size: 100 }),
  },
  {
    name: "JavaScript",
    image: React.createElement(SiJavascript, { color: "white", size: 100 }),
  },
  {
    name: "React",
    image: React.createElement(SiReact, { color: "white", size: 100 }),
  },
  {
    name: "Bootstrap",
    image: React.createElement(SiBootstrap, { color: "white", size: 100 }),
  },
  {
    name: "MySQL",
    image: React.createElement(SiMysql, { color: "white", size: 100 }),
  },
  {
    name: "MongoDB",
    image: React.createElement(SiMongodb, { color: "white", size: 100 }),
  },
  {
    name: "Express",
    image: React.createElement(SiExpress, { color: "white", size: 100 }),
  },
  {
    name: "Sequelize",
    image: React.createElement(SiSequelize, { color: "white", size: 100 }),
  },
  {
    name: "GraphQL",
    image: React.createElement(SiGraphql, { color: "white", size: 100 }),
  },
];

export default iconsData;
