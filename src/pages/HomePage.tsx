import React from "react";
import WorkList from "../components/WorkList";
import { SiInstagram } from "react-icons/si";
import { SiLinkedin } from "react-icons/si";
import { SiDribbble } from "react-icons/si";
import ScrollingGallery from "../components/ScrollingGallery";

const Homepage: React.FC = () => {
  
  return (
      <div className="w-full h-max-screen px-4 bg-white md:px-10 ">
      <HeroSection />
      <AboutSection />
      <WorkSection />
      <ScrollingGallery />
    </div>
  );
}

export default Homepage;

const HeroSection = () => {
  return (
    <div className="w-full h-screen pt-24 flex flex-col justify-between md:pt-24">
      <div className="w-full flex flex-col gap-6">
        <div className="flex flex-col">
          <p className="font-medium text-gray-400">Hello, I'm Artena</p>
          <h1 className="w-full font-normal text-6xl leading-tight md:text-[90px]">
          Creates intuitive and engaging  <span className="font-light italic">user experiences</span> through minimalist design
          </h1>
        </div>
        <div className="flex flex-row gap-4 text-xl w-1/3">
          <a href="https://instagram.com/artenanagara" target="_blank" rel="noopener noreferrer" className="p-2 hover:border  hover:bg-[#fa7e1e] hover:text-white transition duration-200 ease-in-out rounded-full">
            <SiInstagram />
          </a>
          <a href="https://dribbble.com/artenanagara" target="_blank" rel="noopener noreferrer" className="p-2 hover:border hover:bg-[#EA4C89] hover:text-white transition duration-200 ease-in-out rounded-full">
            <SiDribbble />
          </a>
          <a href="https://linkedin.com/in/artenanagara" target="_blank" rel="noopener noreferrer" className="p-2 hover:border hover:bg-[#0a66c2] hover:text-white transition duration-200 ease-in-out rounded-full">
            <SiLinkedin />
          </a>
        </div>
      </div>
      <div className="w-full pb-4 flex justify-between text-xs font-medium md:text-base">
        <p>Located in <br /> Surakarta, Indonesia 🇮🇩</p>
        <p>Currently available for <br /> 🌎 freelance worldwide</p>
      </div>
    </div>
  );
}

const AboutSection = () => {
  return (
    <div className="w-full py-20 flex flex-col gap-4 md:py-40">
      <h2 className="text-5xl md:text-6xl">about me</h2>
      <div className="w-full flex flex-col gap-4 md:flex-row md:gap-16">
        <div className="w-full flex flex-col gap-1 md:w-1/3">
          <p className="text-base font-light">
            I'm a freelance web designer and co-founder of Cicle Studio, a studio focused on creating tailor-made websites.
          </p>
          <a href="https://instagram.com/cicle.studio" target="_blank" className="underline font-light hover:italic">
            Discover Cicle Studio
          </a>
        </div>
        <div className="w-full flex flex-col gap-1 font-medium md:text-3xl md:leading-tight md:gap-8">
          <p>
            I prioritize clean and organized layouts, clear and clean typography, and meticulous alignment in all my designs. This focus on user-friendliness stems from my passion for minimalism. I believe in maximizing the impact of a brand's message, story, and visuals through each creation.
          </p>
          <p>
            My background in training and designing presentations for domestic enterprises for many years has instilled in me a deep understanding of layout, content handling, and incorporating motion effects. Now, I leverage this expertise, along with my knowledge of front-end programming, to create beautiful and functional websites.
          </p>
        </div>
      </div>
    </div>
  );
}

const WorkSection = () => {
  return (
    <div className="w-full h-max-screen flex flex-col gap-4 py-10">
      <h2 className="text-5xl md:text-6xl">selected work</h2>
      <WorkList />
    </div>
  );
}
