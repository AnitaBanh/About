import React from "react";
import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import react from "../assets/react.png";
import github from "../assets/github.png";
import mongo from "../assets/mongo.png";
import node from "../assets/node.png";
import tailwind from "../assets/tailwind.png";

const Skills = () => {
  return (
    <div name="skills" className="w-full h-screen bg-slate-900 text-slate-100">
      {/* skills container */}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-blue-600 ">
            Skills
          </p>
          <p className="py-4">Technologies I've worked with</p>
        </div>
        {/* icons container */}
        <div className="w-full grid grid-cols-2 sm:grid-cols-4 text-center py-8">
          <div className="shadow-md shaddow-[040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={html} alt="HTML icon" />
            <p className="my-4">HTML</p>
          </div>
          <div className="shadow-md shaddow-[040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={css} alt="CSS icon" />
            <p className="my-4">CSS</p>
          </div>
          <div className="shadow-md shaddow-[040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={javascript} alt="JavaScript icon" />
            <p className="my-4">JavaScript</p>
          </div>
          <div className="shadow-md shaddow-[040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={react} alt="React icon" />
            <p className="my-4">React</p>
          </div>
          <div className="shadow-md shaddow-[040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={github} alt="GitHub icon" />
            <p className="my-4">GitHub</p>
          </div>
          <div className="shadow-md shaddow-[040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={node} alt="Node.js icon" />
            <p className="my-4">Node.js</p>
          </div>
          <div className="shadow-md shaddow-[040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={mongo} alt="Mongo DB icon" />
            <p className="my-4">Mongo DB</p>
          </div>
          <div className="shadow-md shaddow-[040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={tailwind} alt="Tailwind icon" />
            <p className="my-4">Tailwind</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
