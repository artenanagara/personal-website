import React from "react";
import Card from "../components/Card";
import { SiInstagram } from "react-icons/si";
import { SiLinkedin } from "react-icons/si";
import { SiDribbble } from "react-icons/si";

const Homepage: React.FC = () => {
  
  return (
      <div className="w-full px-4 bg-white md:px-10 ">
      <HeroSection />
      <AboutSection />
      <WorkSection />
    </div>
  );
}

export default Homepage;

const HeroSection = () => {
  return (
    <div className="w-full h-screen pt-20 flex flex-col justify-between md:pt-40">
      <div className="w-full flex flex-col gap-6">
        <div className="flex flex-col">
          <p className="font-medium text-gray-400">Hello, I'm Artena</p>
          <h1 className="font-bold text-6xl leading-tight md:text-[90px]">
            Helping Brands Achieve <br />
            <span className="font-light italic">Digital Excellence</span>
          </h1>
        </div>
        <div className="flex flex-row gap-4 text-xl ">
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <SiInstagram />
          </a>
          <a href="https://dribbble.com" target="_blank" rel="noopener noreferrer">
            <SiDribbble />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
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
    <div className="w-full py-10 flex flex-col gap-4 md:py-40">
      <h2 className="text-3xl md:text-5xl">about me</h2>
      <div className="w-full flex flex-col gap-4 md:flex-row md:gap-4">
        <div className="w-full flex flex-col gap-1 md:w-1/3">
          <p className="text-base font-light">
            I'm a freelance web designer and co-founder of Cicle Studio, a studio focused on creating tailor-made websites.
          </p>
          <a href="https://instagram.com" target="_blank" className="underline font-light hover:italic">
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
    <div className="w-full flex flex-col gap-4 py-10 ">
      <h2 className="text-3xl">selected work</h2>
      <div className="w-full flex flex-wrap gap-10 sm:flex-wrap md:gap-0">
        <Card 
          id="manisgrafika"
          title="Manis Grafika"
          category="Web Design"
          defaultImage="https://manisgrafika.id/wp-content/uploads/2024/10/DSC06248_CONVERT-scaled.webp"
          hoverImage="https://cdn.dribbble.com/userupload/18452082/file/original-26b222473c0067fe137daf3806cf5356.jpg?resize=1024x768&vertical=center"
        />
        <Card 
          id="greenprobo"
          title="Greenprobolinggo"
          category="Web Design"
          defaultImage="https://manisgrafika.id/wp-content/uploads/2024/10/DSC06248_CONVERT-scaled.webp"
          hoverImage="https://cdn.dribbble.com/userupload/18452082/file/original-26b222473c0067fe137daf3806cf5356.jpg?resize=1024x768&vertical=center"
        />
        <Card 
          id="manisgrafika"
          title="The Investor"
          category="Web Design"
          defaultImage="https://manisgrafika.id/wp-content/uploads/2024/10/DSC06248_CONVERT-scaled.webp"
          hoverImage="https://cdn.dribbble.com/userupload/18452082/file/original-26b222473c0067fe137daf3806cf5356.jpg?resize=1024x768&vertical=center"
        />
      </div>
    </div>
  );
}
