import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import AvailabilityBadge from "./AvailibilityBadge";
import WaveLink from "./animations/WaveLink";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };


  const menuVariants = {
    open: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 20, duration: 0.3 }
    },
    closed: {
      opacity: 1,
      y: "-100%",
      transition: { type: "spring", stiffness: 20, duration: 0.3 }
    }
  };

  return (
    <nav className="absolute z-10 top-0 left-0 w-full">
      <div className="flex items-center justify-between px-4 py-4 md:px-10">
        {/* Brand */}
        <h1 className={`text-xl font-bold z-50 hover-wave ${isOpen ? "text-white" : "text-black"}`}>
          <WaveLink to="/">artena.</WaveLink>
        </h1>

        {/* Burger Menu */}
        <div className="md:hidden cursor-pointer z-50" onClick={toggleMenu}>
          <div
            className={`w-6 h-[2px] ${isOpen ? "bg-white" : "bg-black"} mb-1 transition-transform duration-500 ${
              isOpen ? "rotate-45 translate-y-1.5" : ""
            }`}
          />
          <div
            className={`w-6 h-[2px] ${isOpen ? "bg-white" : "bg-black"} transition-opacity duration-300 ${
              isOpen ? "opacity-0" : "opacity-100"
            }`}
          />
          <div
            className={`w-6 h-[2px] ${isOpen ? "bg-white" : "bg-black"} mt-1 transition-transform duration-500 ${
              isOpen ? "-rotate-45 -translate-y-1.5" : ""
            }`}
          />
        </div>

        {/* Navbar Links & Badge */}
        <div className="hidden md:flex items-center space-x-6">
          {/* Availability Badge */}
          <AvailabilityBadge location="Surakarta, Indonesia" />
          <ul className="flex space-x-6">
            <li className="hover-wave">
              <WaveLink to="/">
                home
              </WaveLink>
            </li>
            <li className="hover-wave">
              <WaveLink to="/work">
                work
              </WaveLink>
            </li>
            <li className="hover-wave">
              <WaveLink to="/about">
                about
              </WaveLink>
            </li>
          </ul>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        className="absolute top-0 left-0 w-full h-screen pt-60 bg-black flex flex-col items-start justify-between md:hidden"
        initial="closed"
        animate={isOpen ? "open" : "closed"}
        variants={menuVariants}
      >
        <ul className="space-y-8 text-3xl font-medium text-white px-4">
          <li>
            <Link to="/" className="hover:text-[#FFEB00] transition" onClick={toggleMenu}>
              home
            </Link>
          </li>
          <li>
            <Link to="/work" className="hover:text-[#FFEB00] transition" onClick={toggleMenu}>
              work
            </Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-[#FFEB00] transition" onClick={toggleMenu}>
              about
            </Link>
          </li>
        </ul>
        <div className="w-full flex flex-row gap-4 justify-between text-white border-t-2 border-gray-800 px-4 py-4">
          <a href="http://instagram.com/artenanagara" target="_blank" rel="noopener noreferrer">
            Instagram
          </a>
          <a href="http://dribbble.com/artenanagara" target="_blank" rel="noopener noreferrer">
            Dribbble
          </a>
          <a href="http://linkedin.com/in/artenanagara" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
        </div>
      </motion.div>
    </nav>
  );
};

export default Navbar;
