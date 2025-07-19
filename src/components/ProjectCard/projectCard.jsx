import React from "react";
import cardBanner from "../../assets/projectCard.jpg";
function CardProject({ title, desc }) {
  return (
    <div className="p-3 md:p-6 flex flex-col w-80 bg-[#0c0e19] shadow-xl rounded-2xl">
      <img src={cardBanner} alt="project image" className="p-4 rounded-4xl" />
      <h3 className="px-4 md:text-2xl text-xl font-bold leading-normal">
        {title}
      </h3>
      <p className="px-4 text-sm md:text-md leading-tight py-4">{desc}</p>
      <div className="mt-2 p-2 md:p-4 flex gap-2 md:gap-4">
        <button
          className="text-white py-2 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85 duration-300 
  hover:scale-105 font-semibold rounded-3xl bg-[#465697] cursor-pointer">
          Demo
        </button>
        <button
          className="text-white py-2 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85 duration-300 
  hover:scale-105 font-semibold rounded-3xl bg-[#465697] cursor-pointer">
          Source Code
        </button>
      </div>
    </div>
  );
}

export default CardProject;
