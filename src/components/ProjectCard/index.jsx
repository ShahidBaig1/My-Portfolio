import React from "react";
import CardProject from "./projectCard";

function Projects() {
  return (
    <div id="projects" className="p-2 md:p-10 text-white mx-5 ">
      <h1 className="text-2xl md:text-4xl md:p-6 text-white font-bold">
        Projects
      </h1>
      <div className="py-6  px-6 flex flex-wrap  gap-5 md:justify-around ">
        <CardProject
          demoLink="https://tinywholesale.netlify.app/"
          title="Silicon Bets"
          desc="this is made by some desc here this is made by some desc here this is made by some desc here this is made by some desc here"
        />
        <CardProject
          demoLink="https://gitsilicon.netlify.app/"
          title="Tiny Whole Sale"
          desc="this is made by some desc here this is made by some desc here this is made by some desc here this is made by some desc here"
        />
        <CardProject
          title="website"
          desc="this is made by some desc here this is made by some desc here this is made by some desc here this is made by some desc here"
        />
        <CardProject
          title="website"
          desc="this is made by some desc here this is made by some desc here this is made by some desc here this is made by some desc here"
        />
      </div>
    </div>
  );
}

export default Projects;
