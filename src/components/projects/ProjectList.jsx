import React from "react";
import Kbid from "../../assets/images/kbid.png";
import github from "../../assets/images/githubb.png";
import { Link } from "react-router-dom";
import Project from "../homepage/Project";
const ProjectList = () => {
  return (
    <div className="">
      <Project />
      <Project />
      <Project />
    </div>
  );
};

export default ProjectList;
