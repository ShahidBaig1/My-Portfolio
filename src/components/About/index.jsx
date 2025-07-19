import React from "react";
import about from "../../assets/about.jpg";
import { FaArrowRight } from "react-icons/fa";

function About() {
  return (
    <div
      id="about"
      className="text-white bg-black bg-opacity-30  shadow-xl  rounded-lg mx-4 md:mx-10 lg:mx-20 p-4 md:p-8">
      <div className="flex flex-col md:flex-row items-center justify-around gap-10">
        <div className="flex flex-col md:flex-wrap  ">
          {/* Heading aligned with arrow text */}
          <h2 className="text-2xl md:text-4xl font-bold pl-2 md:pl-4 mb-4">
            About
          </h2>
          {/* Image Section */}
          <div className="w-full ">
            <img
              src={about}
              alt="about"
              className="h-60 md:h-80 w-full object-cover rounded-lg"
            />
          </div>
        </div>
        {/* Arrow Info Section */}
        <div className="w-full md:w-1/2 space-y-6">
          {[
            {
              title: "Frontend Developer",
              desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry...",
            },
            {
              title: "Backend Developer",
              desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry...",
            },
            {
              title: "Database Developer",
              desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry...",
            },
          ].map((item, id) => (
            <div key={id} className="flex gap-4 items-start">
              <FaArrowRight size={20} className="text-gray-400 mt-1" />
              <div>
                <h3 className="text-xl md:text-2xl font-semibold">
                  {item.title}
                </h3>
                <p className="text-sm md:text-base text-gray-300">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default About;
