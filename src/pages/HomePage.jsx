import React from "react";
import Header from "../components/homepage/Header";
import Skills from "../components/homepage/Skills";
import Project from "../components/homepage/Project";
import Education from "../components/homepage/Education";
import ProjectTitle from "../components/homepage/ProjectTitle";

import github from "../assets/images/github-gray.png";
import twitter from "../assets/images/twitter.png";
import behance from "../assets/images/behance.png";


const HomePage = () => {
  return (
    <div className="  mx-auto px-14  md:mx-72 pb-32">
      <div
        className=" flex-col items-center 
"
      >
        <Header />
        <Skills />
        <ProjectTitle />
        <Project />
        <Education />
        <footer className="flex flex-col items-center mt-16 space-y-4  md:hidden">
          <div className=" flex space-x-4">
            <a href="https://github.com/h4m41">
              {" "}
              <img src={github} className="w-6" />
            </a>
            <a href="https://www.behance.net/muhammedgd">
              {" "}
              <img src={behance} className="w-6" />
            </a>

            <a href="https://twitter.com/H4M4I">
              {" "}
              <img src={twitter} className="w-6" />
            </a>
          </div>
          <p className=" text-mine-shaft-300 ">muhammedahmedcs@gmail.com</p>
        </footer>
      </div>
      <p className="hidden md:block fixed bottom-52 right-0 text-sm  text-mine-shaft-300 z-50 transform rotate-90">
        muhammedahmedcs@gmail.com
      </p>
      <p className="hidden md:block fixed bottom-8  right-12  text-base  text-mine-shaft-300 z-50 transform rotate-90">
        ______________
      </p>
      <div className="hidden md:flex flex-col fixed bottom-28 space-y-3 left-20">
        <a href="https://github.com/h4m41">
          {" "}
          <img src={github} className="w-6" />
        </a>
        <a href="https://www.behance.net/muhammedgd">
          {" "}
          <img src={behance} className="w-6" />
        </a>

        <a href="https://twitter.com/H4M4I">
          {" "}
          <img src={twitter} className="w-6" />
        </a>
      </div>
      <p className="hidden md:block fixed bottom-8  left-14  text-base  text-mine-shaft-300 z-50 transform rotate-90">
        ______________
      </p>
    </div>
  );
};

export default HomePage;
