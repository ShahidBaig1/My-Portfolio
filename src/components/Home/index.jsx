import React from "react";
import banner from "../../assets/side-banner.jpg";

function Home() {
  return (
    <div className="flex flex-col-reverse md:flex-row items-center justify-between w-full px-6 py-10 md:px-20 md:py-20 text-white gap-5">
      {/* Left Section - Text */}
      <div className="w-full md:w-1/2 mt-10 md:mt-0 text-center md:text-left">
        <h1 className="text-3xl md:text-6xl font-bold leading-tight tracking-tighter">
          Hello
        </h1>
        <p className="mt-4 text-sm md:text-xl text-white">
          This is Shahid Ullah — a passionate developer and designer focused on
          building beautiful and functional web experiences.
        </p>
        <a
          href="https://www.linkedin.com/in/beg-shahid"
          target="_blank"
          rel="noopener noreferrer">
          <button className="mt-6 py-2 px-5 text-sm md:text-lg font-semibold rounded-3xl cursor-pointer bg-[#465697] text-white hover:opacity-90 hover:scale-105 transition duration-300">
            Contact Me
          </button>
        </a>
      </div>

      {/* Right Section - Image */}
      <div className="w-full md:w-1/2 flex justify-center">
        <img
          src={banner}
          alt="Banner"
          className="w-full max-w-[400px] md:max-w-full h-auto object-cover rounded-lg shadow-lg"
        />
      </div>
    </div>
  );
}

export default Home;
