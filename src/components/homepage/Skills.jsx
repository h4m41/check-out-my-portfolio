import React from "react";
import developer from "../../assets/images/developer-icon.png";
import designer from "../../assets/images/designer-icon.png";
import { useSelector } from "react-redux";

const Skills = () => {
 const isDark = useSelector((state) => state.theme.isDark);

  return (
    <div className=" text-2xl md:mt-16 md:text-3xl flex flex-col items-center mb-16 ">
      <p className=" text-center ">Front-End Web Developer and Designer</p>
      <p className=" md:w-landscape font-light mt-4 md:mt-8 text-xl md:text-2xl text-center leading-8 md:leading-loose	">
        I create responsive and fast Websites and Mobile Apps with a keen eye
        for UI/UX design. My goal is to ensure that every website I design and
        develop meets the highest standards of{" "}
        <span className="font-bold text-green-700">Quality</span>,
        <span className="font-bold text-sky-600"> Usability</span> , and{" "}
        <span className="font-bold text-yellow-700 ">Performance</span>.
      </p>

      <div className=" mt-12 md:mt-24 flex flex-col md:flex-row space-y-6 md:space-y-0 justify-center md:gap-x-0.5">
        {/* develop section */}
        <div
          className={`${
            isDark ? " bg-stone-600" : "bg-pattens-blue-200"
          } w-80 md:w-96  h-128 rounded-lg md:rounded-none md:rounded-l-lg flex flex-col items-center`}
        >
          <div>
            {" "}
            <img src={developer} className="w-16 mt-6" />
          </div>
          <p className="mt-4 text-xl font-bold">I Develop with</p>
          <p className="mt-6 text-base font-bold">Languages:</p>
          <p className="mt-2 text-base">Javascript, Dart, SQL, Java</p>
          <p className="mt-4 text-base font-bold">Tools:</p>
          <p className="mt-2 text-base">React</p>
          <p className="mt-2 text-base">Flutter</p>
          <p className="mt-2 text-base">Tailwindcss</p>
          <p className="mt-2 text-base">Firebase</p>
          <p className="mt-2 text-base">MongoDB</p>
          <p className="mt-2 text-base">AWS</p>
          <p className="mt-2 text-base">MERN stack</p>
        </div>
        {/* design section */}
        <div
          className={`${
            isDark ? " bg-stone-600" : "bg-pattens-blue-200"
          } w-80 md:w-96  h:96 md:h-128 rounded-lg md:rounded-none md:rounded-r-lg flex flex-col items-center`}
        >
          <div>
            {" "}
            <img src={designer} className="w-16 mt-6 " />
          </div>
          <p className="mt-4 text-xl font-bold">and Design with</p>
          <p className="mt-6 text-base font-bold">Tools:</p>
          <p className="mt-2 text-base">Figma</p>
          <p className="mt-2 text-base">Adobe XD</p>
          <p className="mt-2 text-base">Adobe Photoshop</p>
          <p className="mt-2 text-base">Adobe Illustrator</p>
          <p className="mt-16 text-base"></p>
        </div>
      </div>
    </div>
  );
};

export default Skills;
