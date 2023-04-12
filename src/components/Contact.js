import React from "react";

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full h-screen bg-slate-900  text-slate-100 flex justify-center items-center p-4"
    >
      <form
        method="post"
        action="https://getform.io/f/2787b0df-46e9-4bd9-a556-26ed39a43c0c"
        className="flex flex-col max-w-[600px] w-full"
      >
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-blue-600">
            Contact
          </p>
          <p className="py-4">Send me a message</p>
        </div>
        <input
          className="text-slate-900 p-2 bg-slate-300"
          type="text"
          placeholder="Name"
          name="name"
          required
        ></input>
        <input
          className="text-slate-900 my-4 p-2 bg-slate-300 invalid:border-red-500 invalid:text-red-600
          focus:invalid:border-red-500 focus:invalid:ring-red-500"
          type="email"
          placeholder="Email"
          name="email"
          required
        ></input>
        <textarea
          className="text-slate-900 my-1 p-2 bg-slate-300"
          rows="6"
          placeholder="Message"
          name="message"
          required
        ></textarea>
        <button className="text-white text-bold border-2 border-[#87BBA2] hover:bg-[#7F6A93] hover:border-[#7F6A93] px-4 py-3 my-4 mx-auto flex items-center">
          Let's connect!
        </button>
      </form>
    </div>
  );
};

export default Contact;
