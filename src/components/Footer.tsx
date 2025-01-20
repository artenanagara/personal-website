import React from 'react';

const Footer: React.FC = () => {
    return (
        <div className='w-full px-4 pt-16 pb-8 flex flex-col gap-10 bg-black text-white'>
            <div className='flex flex-col gap-4'>
                <h1 className='text-5xl font-semibold'>Let's collaborate</h1>
                <a href="mailto:artenanagara22@gmail.com" className='font-medium underline text-xl'>artenanagara22@gmail.com</a>
            </div>
            <div className='flex justify-between'>
                <h6 className='hidden md:visible'>Artena Nagara 2025</h6>
                <div className='flex gap-4'>
                    <a href="http://instagram.com/artenanagara" target="_blank" rel="noopener noreferrer">Instagram</a>
                    <a href="http://dribbble.com/artenanagara" target="_blank" rel="noopener noreferrer">Dribbble</a>
                    <a href="http://linkedin.com/in/artenanagara" target="_blank" rel="noopener noreferrer">Linkedin</a>
                </div>
            </div>
        </div>
    );
}

export default Footer;