import React from "react";
import trivia from "../assets/trivia.png";
import pairsUS from "../assets/pairsUS.png";
import notetaker from "../assets/notetaker.png";
import passwordgen from "../assets/passwordgen.png";
import quiz from "../assets/quiz.png";
import social from "../assets/social.png";

const Work = () => {
  return (
    <div
      name="portfolio"
      className="w-full h-screen bg-slate-900 text-slate-100"
    >
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-blue-600">
            Portfolio
          </p>
          <p className="py-4">Check out some of my recent projects</p>
        </div>

        {/* Projects */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {/* grid item */}
          <div
            style={{ backgroundImage: `url(${pairsUS})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md 
          flex justify-center text-center items-center mx-auto content-div"
          >
            {/* image hover */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                ProPairs
              </span>
              <br />
              <span className="text-lg text-white tracking-wider">
                React | Mongo DB | Mongoose | GraphQL | Node.js
              </span>
              <div className="pt-8 text-center">
                <a href="https://propairs.herokuapp.com/" target="_blank">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-slate-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a
                  href="https://github.com/joshuagoeke/ProPairs"
                  target="_blank"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-slate-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          {/* grid item */}
          <div
            style={{ backgroundImage: `url(${trivia})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md 
          flex justify-center text-center items-center mx-auto content-div"
          >
            {/* image hover */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                Trivia Tracker
              </span>
              <br />
              <span className="text-lg text-white tracking-wider">
                Handlebars | SQL | Sequelize | bcrypt | Express.js | Node.js
              </span>
              <div className="pt-8 text-center">
                <a href="https://trivia-tracker.herokuapp.com/" target="_blank">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-slate-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a
                  href="https://github.com/MZernick/Trivia-Tracker"
                  target="_blank"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-slate-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>

          {/* grid item */}
          <div
            style={{ backgroundImage: `url(${notetaker})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md 
          flex justify-center text-center items-center mx-auto content-div"
          >
            {/* image hover */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                Note Taker
              </span>
              <br />
              <span className="text-lg text-white tracking-wider">
                JavaScript | Express.js
              </span>
              <div className="pt-8 text-center">
                <a
                  href="https://expressjs-notetaker.herokuapp.com/"
                  target="_blank"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-slate-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a
                  href="https://github.com/AnitaBanh/Expressjs-Note-Taker"
                  target="_blank"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-slate-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>

          {/* grid item */}
          <div
            style={{ backgroundImage: `url(${social})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md 
          flex justify-center text-center items-center mx-auto content-div"
          >
            {/* image hover */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                Social Network API
              </span>
              <br />
              <span className="text-lg text-white tracking-wider">
                Express.js | Mongo DB | Mongoose ODM
              </span>
              <div className="pt-8 text-center">
                <a
                  href="https://drive.google.com/file/d/1m2O6ZCEMxdtUvSLwlOZgmlQddCo_-Fpc/view"
                  target="_blank"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-slate-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a
                  href="https://github.com/AnitaBanh/Social-Network-API"
                  target="_blank"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-slate-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>

          {/* grid item */}
          <div
            style={{ backgroundImage: `url(${passwordgen})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md 
          flex justify-center text-center items-center mx-auto content-div"
          >
            {/* image hover */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                Random Password Generator
              </span>
              <br />
              <span className="text-lg text-white tracking-wider">
                JavaScript | HTML
              </span>
              <div className="pt-8 text-center">
                <a
                  href="https://anitabanh.github.io/JavaScript-Password-Generator/"
                  target="_blank"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-slate-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a
                  href="https://github.com/AnitaBanh/JavaScript-Password-Generator"
                  target="_blank"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-slate-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>

          {/* grid item */}
          <div
            style={{ backgroundImage: `url(${quiz})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md 
          flex justify-center text-center items-center mx-auto content-div"
          >
            {/* image hover */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                Timed Quiz
              </span>
              <br />
              <span className="text-lg text-white tracking-wider">
                JavaScript | HTML
              </span>
              <div className="pt-8 text-center">
                <a
                  href="https://anitabanh.github.io/JavaScript-Timed-Quiz/"
                  target="_blank"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-slate-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a
                  href="https://github.com/AnitaBanh/JavaScript-Timed-Quiz"
                  target="_blank"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-slate-700 font-bold text-lg">
                    Code
                  </button>
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
