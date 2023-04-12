import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
// import { Link } from "react-scroll";
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-slate-900">
      {/*Container  */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-slate-100">Hi, my name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">
          Anita Banh
        </h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-[#87BBA2]">
          I am a Full Stack Developer.
        </h2>
        <p className="text-slate-200 py-4 max-w-[700px]">
          MERN | Quality Assurance | Biotech | Houseplant enthusiast
        </p>

        <div>
          <button className="text-white group border-2 px-6 py-3 my-2 flex items-center text-bold border-[#87BBA2] hover:bg-[#7F6A93] hover:border-[#7F6A93]">
            {/* <Link to="portfolio" smooth={true} duration={500}> */}
            <Link to="/portfolio">
              View Projects
              </Link>
              <span className="group-hover:rotate-90 duration-300">
                <HiArrowNarrowRight className="ml-3"/>
                
              </span>
              
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
