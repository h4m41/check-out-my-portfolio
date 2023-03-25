import React from 'react'
import Navbar from '../navbar/Navbar';

const Header = () => {

  return (
    <div className="flex flex-col items-center pt-10  ">
      
<Navbar />
      <p className="text-xl md:mt-16 md:text-3xl font-bold">
        Projects I have worked on
      </p>
    </div>
  );
}

export default Header