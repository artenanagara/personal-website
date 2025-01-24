import React from 'react';
import { Link } from "react-router-dom";

interface WaveLinkProps {
  to: string;
  children: React.ReactNode;
}

const WaveLink: React.FC<WaveLinkProps> = ({ to, children }) => {
  const wrappedChildren = typeof children === 'string' 
    ? children.split('').map((char, index) => (
        <span key={index} className="letter" style={{ transitionDelay: `${index * 0.1}s` }}>{char}</span>
      ))
    : children;

  return (
    <>
      <Link to={to} className="wave-link">
        {wrappedChildren}
      </Link>
    </>
  );
};

export default WaveLink;
