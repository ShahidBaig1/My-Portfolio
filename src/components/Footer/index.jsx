import React from "react";
import { FaLinkedin, FaGithub, FaArrowUp } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div
      id="footer"
      className="flex justify-around text-white p-10 md:p-12 content-center bg-[#465697] relative">
      <div>
        <h1 className="text-2xl md:text-6xl font-bold">Contact</h1>
        <h3 className="text-sm md:text-2xl font-normal">
          Feel free to contact
        </h3>
      </div>
      <div>
        <ul className="md:text-xl mt-2 space-y-2">
          <li>
            <a
              className="flex gap-2 items-center text-white hover:underline"
              href="https://www.linkedin.com/in/beg-shahid"
              target="_blank"
              rel="noopener noreferrer">
              <FaLinkedin size={30} />
              LinkedIn
            </a>
          </li>

          <li>
            <a
              className="flex gap-2 items-center text-white hover:underline"
              href="https://github.com/YOUR_USERNAME"
              target="_blank"
              rel="noopener noreferrer">
              <FaGithub size={30} />
              GitHub
            </a>
          </li>

          <li>
            <a
              className="flex gap-2 items-center text-white hover:underline"
              href="mailto:your@email.com">
              <MdOutlineEmail size={30} />
              Email
            </a>
          </li>
        </ul>
      </div>

      {/* Scroll to top icon */}
      <button
        onClick={scrollToTop}
        className="absolute bottom-4 right-4 p-2 bg-white text-[#465697] rounded-full hover:bg-gray-200 transition"
        title="Back to top">
        <FaArrowUp size={24} />
      </button>
    </div>
  );
}

export default Footer;
