import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Variants for motion animations
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
    <nav className="fixed top-0 left-0 w-full">
      <div className="flex items-center justify-between px-4 py-4">
        {/* Logo */}
        <h1 className={`text-xl font-bold z-50 ${isOpen ? "text-white" : "text-black"}`}>
          <Link to="/">Artena.</Link>
        </h1>

        {/* Hamburger Icon - Changes to 'X' when open */}
        <div
          className="md:hidden cursor-pointer z-50"
          onClick={toggleMenu}
        >
          <div className={`w-6 h-[2px] ${isOpen ? "bg-white" : "bg-black"} mb-1 transition-transform duration-500 ${isOpen ? "rotate-45 translate-y-1.5" : ""}`} />
          <div className={`w-6 h-[2px] ${isOpen ? "bg-white" : "bg-black"} transition-opacity duration-300 ${isOpen ? "opacity-0" : "opacity-100"}`} />
          <div className={`w-6 h-[2px] ${isOpen ? "bg-white" : "bg-black"} mt-1 transition-transform duration-500 ${isOpen ? "-rotate-45 -translate-y-1.5" : ""}`} />
        </div>

        {/* Desktop Links */}
        <ul className="hidden md:flex space-x-6">
          <li>
            <Link to="/work" className="hover:text-blue-500 transition">
              Work
            </Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-blue-500 transition">
              About
            </Link>
          </li>
        </ul>
      </div>

      {/* Mobile Menu */}
      <motion.div
        className="absolute top-0 left-0 w-full h-screen bg-black flex flex-col items-center justify-center md:hidden"
        initial="closed"
        animate={isOpen ? "open" : "closed"}
        variants={menuVariants}
      >
        {/* Mobile Links */}
        <ul className="space-y-8 text-xl font-medium text-white text-center">
          <li>
            <Link
              to="/work"
              className="hover:text-blue-500 transition"
              onClick={toggleMenu}
            >
              Work
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="hover:text-blue-500 transition"
              onClick={toggleMenu}
            >
              About
            </Link>
          </li>
        </ul>
      </motion.div>
    </nav>
  );
};

export default Navbar;
