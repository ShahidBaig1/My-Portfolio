import React from "react";
import { FaCss3, FaHtml5, FaJs, FaReact, FaGit } from "react-icons/fa";
import { SiMui } from "react-icons/si";
import { FaGithub, FaNodeJs, FaDatabase } from "react-icons/fa6"; // Added new icons

function Experience() {
  return (
    <div id="experience" className="p-6 sm:p-10 md:p-16 lg:p-20">
      <h1 className="text-2xl md:text-4xl text-white font-bold mb-8">
        Experience
      </h1>

      {/* Container */}
      <div className="flex flex-col lg:flex-row lg:items-start gap-10">
        {/* Icons Section */}
        <div className="flex flex-wrap justify-center md:justify-start gap-6 lg:w-2.5/5">
          {[
            FaReact,
            FaCss3,
            FaHtml5,
            FaJs,
            SiMui,
            FaGithub,
            SiMui,
            FaGit,
            FaReact,
          ].map((Icon, id) => (
            <span
              key={id}
              className="p-4 bg-zinc-950 rounded-2xl flex items-center justify-center">
              <Icon size={50} color="#E34F26" />
            </span>
          ))}
        </div>

        {/* Experience Cards */}
        <div className="flex flex-col gap-6 w-full">
          {/* React Developer */}
          <div className="flex flex-col sm:flex-row gap-6 bg-slate-950 bg-opacity-45 p-4 rounded-lg items-center">
            <FaReact size={80} color="white" className="shrink-0" />
            <div className="text-white text-center sm:text-left">
              <h2 className="text-lg md:text-xl font-semibold leading-tight">
                React JS Developer
              </h2>
              <p className="text-sm text-gray-300">Feb 2025 - Present</p>
              <p className="text-sm mt-2">
                Designing and developing user-facing features using React.js.
              </p>
              <p className="text-sm mt-1">
                Building reusable components and front-end libraries for future
                use.
              </p>
            </div>
          </div>

          {/* Backend Developer */}
          <div className="flex flex-col sm:flex-row gap-6 bg-slate-950 bg-opacity-45 p-4 rounded-lg items-center">
            <FaNodeJs size={80} color="white" className="shrink-0" />
            <div className="text-white text-center sm:text-left">
              <h2 className="text-lg md:text-xl font-semibold leading-tight">
                Backend Developer
              </h2>
              <p className="text-sm text-gray-300">Jan 2024 - Feb 2025</p>
              <p className="text-sm mt-2">
                Built RESTful APIs and managed server-side logic using Node.js.
              </p>
              <p className="text-sm mt-1">
                Integrated databases and maintained backend performance.
              </p>
            </div>
          </div>

          {/* Database Developer */}
          <div className="flex flex-col sm:flex-row gap-6 bg-slate-950 bg-opacity-45 p-4 rounded-lg items-center">
            <FaDatabase size={80} color="white" className="shrink-0" />
            <div className="text-white text-center sm:text-left">
              <h2 className="text-lg md:text-xl font-semibold leading-tight">
                Database Engineer
              </h2>
              <p className="text-sm text-gray-300">June 2023 - Jan 2024</p>
              <p className="text-sm mt-2">
                Designed and maintained relational databases (MySQL, MongoDB).
              </p>
              <p className="text-sm mt-1">
                Wrote optimized queries and stored procedures.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;
