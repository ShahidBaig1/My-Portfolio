import React from "react";
import cardBanner from "../../assets/projectCard.jpg";

function CardProject({ title, desc, demoLink }) {
  return (
    <div className="p-3 md:p-6 flex flex-col w-80 bg-[#0c0e19] shadow-xl rounded-2xl">
      <img src={cardBanner} alt="project image" className="p-4 rounded-4xl" />

      <h3 className="px-4 md:text-2xl text-xl font-bold leading-normal">
        {title}
      </h3>
      <p className="px-4 text-sm md:text-md leading-tight py-4">{desc}</p>
      <div className="mt-2 px-4 pb-4 flex gap-2 md:gap-4">
        {/* Demo Button wrapped in <a> */}
        <a href={demoLink} target="_blank" rel="noopener noreferrer">
          <button className="text-white text-sm md:text-lg font-semibold rounded-3xl bg-[#465697] hover:opacity-85 hover:scale-105 duration-300 py-2 px-4 cursor-pointer">
            Demo
          </button>
        </a>
        {/* Source Code Button - for later use */}
        <button
          disabled
          className="text-white text-sm md:text-lg font-semibold rounded-3xl bg-gray-500 cursor-not-allowed opacity-60 py-2 px-4">
          Source Code
        </button>
      </div>
    </div>
  );
}

export default CardProject;
