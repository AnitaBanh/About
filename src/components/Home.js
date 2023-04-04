import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";

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
        <p className="text-slate-200 py-4 max-w-[700px]">MERN | Quality Assurance | Biotech | Houseplant enthusiast</p>
      </div>

      <div>
        <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-blue-600 hover:border-blue-600">
          View Work
          <span className="group-hover:rotate-90 duration-300">
          <HiArrowNarrowRight className="ml-3" />
          </span>
        </button>
      </div>
    </div>
  );
};

export default Home;
