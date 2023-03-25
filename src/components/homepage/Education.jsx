import React from 'react'
import hat from "../../assets/images/graduate.png"
import bit from "../../assets/images/bit.png";


const Education = () => {
  return (
    <div className="flex flex-col items-center mt-12 md:mt-24   ">
      <p className="text-xl md:text-3xl  font-bold">Education</p>

      <div className=" flex flex-col  md:flex-row items-center mt-4 md:mt- md:w-160  ">
        <img src={hat} className="w-20 md:mr-10" />
        <p className="md:text-xl">Bachelors of Science, Computer Science</p>
      </div>
      <div className=" flex flex-col  md:flex-row items-center mt-8  md:w-160  ">
        <img src={bit} className="mb-4 w-20 md:mr-10" />
        <p className="md:text-xl text-center">
          Bit Program Participant{" "}
          <span className=" text-mine-shaft-400">
            (Full-stack web development bootcamp)
          </span>
        </p>
      </div>
    </div>
  );
}

export default Education