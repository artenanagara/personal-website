import React from "react";
import { useParams} from "react-router-dom";
import caseStudies from "../data/CaseStudy.json";
// import { div } from "framer-motion/client";
// import ZoomImage from "../components/animations/ZoomImage";

interface CaseStudy {
  id: string;
  title: string;
  about_project:{
    company: string;
    description: string;
    timeline: string;
    scope: string;
    url: string;
    cover: string;
    role: string;
  }
  about_company: string;
  challenge: string;
  solution: string;
  goals: string;
}

const CaseStudyPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const caseStudy = (Object.values(caseStudies).flat() as unknown as CaseStudy[]).find((study) => study.id === id);

  if (!caseStudy) {
    return (
      <div className="w-full h-screen flex items-center justify-center">
        <h1 className="text-3xl font-bold">Case Study Not Found</h1>
      </div>
    );
  }

  return (
    <div className="w-full pt-24 relative">
      <Header caseStudy={caseStudy} />
      <AboutCompany caseStudy={caseStudy} />
      <Content caseStudy={caseStudy} />
    </div>
  );
};

const Header: React.FC<{ caseStudy: CaseStudy }> = ({ caseStudy }) => (
  <div className="w-full flex flex-col gap-4 md:gap-10">
    <div className="w-full flex flex-col px-4 md:flex-row md:justify-between md:px-10">
        <h1 className="w-full text-2xl font-bold md:text-5xl md:w-1/2">{caseStudy.title}</h1>
        <div className="w-full flex flex-col font-normal gap-2 text-sm md:w-1/2 md:text-end">
          <InfoItem label="Timeline" value={caseStudy.about_project.timeline} />
          <InfoItem label="Scope" value={caseStudy.about_project.scope} />
          <InfoItem label="Role" value={caseStudy.about_project.role}  />
        </div>
    </div>
    <img
      src={caseStudy.about_project.cover}
      alt={caseStudy.title}
      className="w-full h-[350px] object-cover object-center md:h-[550px] md:pb-8"
    />
  </div>
);

const InfoItem: React.FC<{ label: string, value: React.ReactNode }> = ({ label, value }) => (
  <div className="w-full flex flex-col">
    <p className="text-gray-400 font-medium">{label}</p>
    <p>{value}</p>
  </div>
);

const AboutCompany: React.FC<{ caseStudy: CaseStudy }> = ({ caseStudy }) => (
    <div className="w-full flex flex-col gap-4 px-4 md:gap-10 md:pr-40 md:px-10 md:flex-row md:justify-between">
        <h2 className="text-base">About {caseStudy.about_project.company}</h2>
        <div className="w-full flex flex-col gap-2 md:gap-10 md:w-1/2 ">
          <p className="text-3xl font-bold md:text-4xl">{caseStudy.about_company}</p>
          <a href={caseStudy.about_project.url} target="_blank" rel="noopener noreferrer">
            <button className="bg-yellow-500 text-white px-8 py-4 rounded-full hover:bg-black">Visit Website</button>
          </a>
        </div>
    </div>
);

const Content: React.FC<{ caseStudy: CaseStudy }> = ({ caseStudy }) => (
  <div className="w-full flex flex-col gap-4 px-4 pb-10 md:gap-10 md:pr-40 md:px-10 md:flex-row md:justify-between md:pt-20">
    <h1>Overview</h1>
    <div className="w-full flex flex-col gap-2 md:gap-10 md:w-1/2 ">
    <div className="w-full h-[1px] bg-gray-300 my-4 md:my-4" />
      <div className="w-full flex flex-col gap-2">
        <h2 className="text-2xl font-bold">The Challenge</h2>
        <p className="w-full flex flex-col gap-2 md:gap-10">{caseStudy.challenge}</p>
      </div>
      <div className="w-full h-[1px] bg-gray-300 my-4 md:my-4" />
      <div className="w-full flex flex-col gap-2">
        <h2 className="text-2xl font-bold">Goals</h2>
        <p className="w-full flex flex-col gap-2 md:gap-10">{caseStudy.goals}</p></div>
      <div className="w-full h-[1px] bg-gray-300 my-4 md:my-4" />
      <div className="w-full flex flex-col gap-2">
        <h2 className="text-2xl font-bold">Solution</h2>
        <p className="w-full flex flex-col gap-2 md:gap-10">{caseStudy.solution}</p>
      </div>
    </div>
  </div>
);


export default CaseStudyPage;
