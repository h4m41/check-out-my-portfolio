import React from "react";
import Kbid from "../../assets/images/kbid.png";
import github from "../../assets/images/githubb.png"
import { useSelector } from "react-redux";

const Project = () => {
    const isDark = useSelector((state) => state.theme.isDark);

  return (
    <div className="flex flex-col items-center  ">
      <div
        className={`flex flex-col md:flex-row items-center w-80 md:w-landscape mt-4 md:mt-6 rounded-lg h-96 md:h-64 ${
          isDark ? " bg-stone-600" : "bg-pattens-blue-200"
        }`}
      >
        <div className=" md:ml-10">
          <img src={Kbid} className="w-60 " />
        </div>
        <div className=" md:ml-8 flex flex-col h-full  justify-around w-64 md:w-96">
          <p>KBID: a bidding based e-commerce website</p>
          <div className="flex items-center self-end">
            <img src={github} className="w-6 mr-2" />
            <a href="https://www.behance.net/muhammedgd"> view on github</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
