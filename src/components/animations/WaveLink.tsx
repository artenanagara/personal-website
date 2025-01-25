import React from 'react';
import { Link } from "react-router-dom";

interface WaveLinkProps {
  to: string;
  children: React.ReactNode;
}

const WaveLink: React.FC<WaveLinkProps> = ({ to, children }) => {
  const handleClick = () => {
    const navbar = document.querySelector('.navbar');
    if (navbar) {
      navbar.classList.add('navbar-up');
    }
  };

  const wrappedChildren = typeof children === 'string' 
    ? children.split('').map((char, index) => (
        <span key={index} className="letter" style={{ transitionDelay: `${index * 0.1}s` }}>{char}</span>
      ))
    : children;

  return (
    <>
      <Link to={to} className="wave-link" onClick={handleClick}>
        {wrappedChildren}
      </Link>
    </>
  );
};

export default WaveLink;
