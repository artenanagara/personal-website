import React from 'react';


const Footer: React.FC = () => {
  return (
    <div className="w-full h-screen px-4 pt-16 pb-8 flex flex-col gap-10 bg-black text-white justify-end">
      <div className="flex flex-col gap-4">
        <h1 className="text-5xl font-semibold md:text-8xl">Let's collaborate</h1>
        <a href="mailto:artenanagara22@gmail.com" className="font-medium underline text-xl md:text-3xl hover:text-[#FFEB00] hover:scale-75 transition duration-700 ease-in-out">
          artenanagara22@gmail.com
        </a>
      </div>
      <div className="flex justify-between">
        <h6 className="hidden md:contents md:text-white">©Artena Nagara 2025</h6>
        <div className="flex gap-4">
          <a href="http://instagram.com/artenanagara" target="_blank" rel="noopener noreferrer" className='hover:text-[#FFEB00] hover:-translate-x-2  hover:scale-110 transition duration-700 ease-in-out'>Instagram</a>
          <a href="http://dribbble.com/artenanagara" target="_blank" rel="noopener noreferrer" className='hover:text-[#FFEB00] hover:-translate-y-2  hover:scale-110 transition duration-700 ease-in-out'>Dribbble</a>
          <a href="http://linkedin.com/in/artenanagara" target="_blank" rel="noopener noreferrer" className='hover:text-[#FFEB00] hover:translate-x-2  hover:scale-110 transition duration-700 ease-in-out'>LinkedIn</a>
        </div>
      </div>
    </div>
  );
}

export default Footer;