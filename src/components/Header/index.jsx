import { RiCloseLine, RiMenu2Line } from "@remixicon/react";
import React, { useState } from "react";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="relative bg-gray-500">
      <div className="flex justify-between items-center px-6 py-4 md:px-20">
        {/* Centered name */}
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-xl font-bold tracking-wide">Portfolio</h2>
        </div>

        {/* Menu toggle icon (mobile only) */}
        <div className="md:hidden absolute right-6 top-4">
          {menuOpen ? (
            <RiCloseLine
              size={30}
              className="cursor-pointer"
              onClick={() => setMenuOpen(false)}
            />
          ) : (
            <RiMenu2Line
              size={30}
              className="cursor-pointer"
              onClick={() => setMenuOpen(true)}
            />
          )}
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 font-bold">
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#experience">Experience</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#footer">Contact</a>
          </li>
        </ul>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <ul className="md:hidden flex flex-col items-center bg-white w-full gap-6 py-6 text-lg font-semibold shadow-lg z-10">
          <li>
            <a href="#about" onClick={() => setMenuOpen(false)}>
              About
            </a>
          </li>
          <li>
            <a href="#experience" onClick={() => setMenuOpen(false)}>
              Experience
            </a>
          </li>
          <li>
            <a href="#projects" onClick={() => setMenuOpen(false)}>
              Projects
            </a>
          </li>
          <li>
            <a href="#footer" onClick={() => setMenuOpen(false)}>
              Contact
            </a>
          </li>
        </ul>
      )}
    </div>
  );
}

export default Header;
