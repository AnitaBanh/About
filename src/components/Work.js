import React from "react";
import trivia from "../assets/trivia.png";
import pairsUS from "../assets/pairsUS.png";

const Work = () => {
  return (
    <div name="work" className="w-full md:h-screen text-slate-100 bg-slate-900">
      <div className="max-w-[1000px] mx-auto p-4 flex fles-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 text-slate-300 border-blue-600">
            Work
          </p>
          <p>// Check out some of my recent work</p>
        </div>

{/* Projects */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
     {/* grid item */}
          <div 
          style={{ backgroundImage: `url(${pairsUS})` }} 
          className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div">
{/* image hover */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                React & Mongo DB Application
              </span>
              <div className="pt-8 text-center">
                <a href="https://propairs.herokuapp.com/" target="_blank">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-slate-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/joshuagoeke/ProPairs" target="_blank">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-slate-700 font-bold text-lg">Code</button>
                </a>
              </div>
            </div>
          </div>
               {/* grid item */}
               <div 
          style={{ backgroundImage: `url(${trivia})` }} 
          className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div">
{/* image hover */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                Handlebars & SQL Application
              </span>
              <div className="pt-8 text-center">
                <a href="https://trivia-tracker.herokuapp.com/" target="_blank">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-slate-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/MZernick/Trivia-Tracker" target="_blank">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-slate-700 font-bold text-lg">Code</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
