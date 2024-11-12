import React, { useState } from "react";
import image from "../assets/fonts/images/logo.svg";
import icon from "../assets/fonts/images/icon-menu.svg";
import closeIcon from "../assets/fonts/images/icon-menu-close.svg";

function Navbar({ navItems }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="flex flex-wrap items-center justify-between w-full max-w-6xl mx-auto px-4 py-4">
      {/* Logo */}
      <div>
        <img className="w-12 h-12 mr-10" src={image} alt="logo" />
      </div>

      {/* Menu Button for Mobile */}
      <button
        className="block md:hidden"
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        <img src={isMenuOpen ? closeIcon : icon} className="w-6 h-6" />
      </button>

      {/* Nav Items (Desktop and Mobile) */}
      <ul
        className={`${
          isMenuOpen ? "flex" : "hidden"
        } flex-col md:flex-row gap-4 md:gap-12 text-lg mt-4 md:mt-0 absolute md:static top-16 left-0 w-full bg-white md:bg-transparent md:w-auto md:flex items-center justify-center`}
      >
        {navItems.map((item, index) => (
          <li
            key={index}
            className="cursor-pointer hover:text-orange-600 text-gray-500 text-base font-light"
          >
            <a href={item.url}>{item.name}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
