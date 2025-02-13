import React from 'react';


const Footer: React.FC = () => {
  return (
    <div className="relative z-1 w-full h-screen px-4 pt-16 pb-4 flex flex-col gap-10 bg-black text-white justify-end md:px-10">
      <div className="flex flex-col gap-4">
        <h1 className="text-5xl font-semibold md:text-9xl">Let's create something cool</h1>
        <a href="mailto:artenanagara22@gmail.com" className="w-1/3 font-medium underline text-xl md:text-3xl hover:text-[#FFEB00] hover:scale-75 transition duration-700 ease-in-out">
          artenanagara22@gmail.com
        </a>
      </div>
      <div className="flex justify-between">
        <h6 className="hidden md:contents md:text-white">©Artena Nagara 2025</h6>
        <div className="flex gap-4">
          <a href="http://instagram.com/artenanagara" target="_blank" rel="noopener noreferrer" className='hover:text-[#FFEB00] hover:-translate-x-2  hover:scale-110 transition duration-700 ease-in-out'>Instagram</a>
          <a href="http://dribbble.com/artenanagara" target="_blank" rel="noopener noreferrer" className='hover:text-[#FFEB00] hover:-translate-x-2  hover:scale-110 transition duration-700 ease-in-out'>Dribbble</a>
          <a href="http://linkedin.com/in/artenanagara" target="_blank" rel="noopener noreferrer" className='hover:text-[#FFEB00] hover:translate-x-2  hover:scale-110 transition duration-700 ease-in-out'>LinkedIn</a>
        </div>
        <button 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} 
          className="hover:text-[#FFEB00] hover:scale-110 transition duration-700 ease-in-out"
        >
          Scroll to Top
        </button>
      </div>
    </div>
  );
}

export default Footer;