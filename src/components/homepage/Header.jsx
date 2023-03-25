import React from "react";
import { Link } from "react-router-dom";
import { useSelector,useDispatch } from "react-redux";
import { changeTheme } from "../../redux/ThemeSlice";


import Me from "../../assets/images/me.jpg";
import Navbar from "../navbar/Navbar";

const Header = () => {

    const isDark = useSelector((state) => state.theme.isDark);
    const dispatch = useDispatch();
  return (
    <div className="flex flex-col ">
      <div className="    flex flex-col items-center justify-between md:flex-row    md:h-48 mt-16   ">
        <div className="flex flex-col items-center md:items-start">
          <p className="  text-3xl md:text-5xl font-thin ">
            {" "}
            <span className=" text-mine-shaft-400">&lt;&gt;</span>HEY!
            <span className=" text-mine-shaft-400">&lt;/&gt;</span>
          </p>
          <p className="text-2xl md:text-3xl mt-10 font-bold text-center">
            I'M MOHAMMED AHMED
          </p>
        </div>
        <div className="pt-8 h-48  md:pt-0 ">
          <img
            className={`h-32 md:h-48 rounded-lg border-l-8 border-b-8 overflow-hidden  ${
              isDark ? " border-stone-600" : "border-pattens-blue-200"
            }`}
            src={Me}
            alt=""
          />
        </div>
      </div>{" "}
      <div className="flex items-end justify-center space-x-2">
       <Navbar/>
      </div>
    </div>
  );
};

export default Header;
 