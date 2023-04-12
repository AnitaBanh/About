import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-slate-900 text-slate-100">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-blue-600">About</p>
          </div>
          <div>
          </div>
          </div>
          <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4 ">
           <div className="sm:text-right text-[#87BBA2] text-4xl font-bold">
            <p>Hi, I'm Anita. Nice to meet you. Please take a look around.
                </p>
                </div> 
                <div>
                    <p>
                    I'm a MERN stack developer with an extensive background in quality assurance and biotechnology. I recently graduated from the University of Texas at Austin with a full stack coding certificate. I'm effective at cross-functional communication and known for strong attention to detail and clear documentation.
                    </p>
                </div>
          </div>
        </div>
      </div>
  );
};

export default About;
