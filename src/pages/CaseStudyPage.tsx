import React from "react";
import { useParams} from "react-router-dom";
import caseStudies from "../data/CaseStudy.json";
import { Link } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
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
  visual:{
    image1: string;
    image2: string;
    image3: string;
    image4: string;
    image5: string;
    image6: string;
  }
}

const CaseStudyPage: React.FC = () => {
  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);
  const { id } = useParams<{ id: string }>();
  const caseStudy = (Object.values(caseStudies).flat() as unknown as CaseStudy[]).find((study) => study.id === id);

  if (!caseStudy) {
    return (
      <div className="w-full h-screen flex items-center justify-center flex-col gap-4">
        <h1 className="text-3xl font-bold">Case Study Not Found</h1>
        <Link to='/work'  className='py-2 px-4 border'>See another work</Link>
      </div>
    );
  }

  return (
    <div className="w-full pt-24 relative">
      <Header caseStudy={caseStudy} />
      <AboutCompany caseStudy={caseStudy} />
      <Content caseStudy={caseStudy} />
      <Visual caseStudy={caseStudy} />
    </div>
  );
};

const Header: React.FC<{ caseStudy: CaseStudy }> = ({ caseStudy }) => (
  <div className="w-full flex flex-col gap-4 md:gap-10">
    <div className="w-full flex flex-col px-4 gap-4 md:flex-row md:justify-between md:px-10">
        <h1 className="w-full text-2xl font-bold md:text-5xl" data-aos='fade-up' data-aos-delay='200'>{caseStudy.title}</h1>
        <div className="w-full flex flex-col font-normal gap-2 text-sm md:w-1/2 md:text-end" data-aos='fade-up' data-aos-delay='400'>
          <InfoItem label="Timeline" value={caseStudy.about_project.timeline} />
          <InfoItem label="Scope" value={caseStudy.about_project.scope} />
          <InfoItem label="Role" value={caseStudy.about_project.role}  />
        </div>
    </div>
    <img
      src={caseStudy.about_project.cover}
      alt={caseStudy.title}
      className="w-full h-[350px] object-cover object-center md:h-[550px] md:pb-8"
      data-aos='zoom-in' data-aos-delay='500' data-aos-duration='2000'
    />
  </div>
);

const InfoItem: React.FC<{ label: string, value: React.ReactNode }> = ({ label, value }) => (
  <div className="w-full flex flex-col">
    <p className="text-gray-400 font-medium" data-aos='fade-up' data-aos-delay='200'>{label}</p>
    <p>{value}</p>
  </div>
);

const AboutCompany: React.FC<{ caseStudy: CaseStudy }> = ({ caseStudy }) => (
    <div className="w-full flex flex-col gap-4 p-4 md:gap-10 md:pr-40 md:px-10 md:flex-row md:justify-between">
        <h2 className="text-base" data-aos='fade-up'>About {caseStudy.about_project.company}</h2>
        <div className="w-full flex flex-col gap-10 md:w-1/2 ">
          <p className="text-3xl font-bold md:text-4xl" data-aos='fade-up' data-aos-delay='300'>{caseStudy.about_company}</p>
          <a href={caseStudy.about_project.url} target="_blank" rel="noopener noreferrer" data-aos='fade-up'>
            <button className="bg-black text-white px-8 py-4 rounded-full hover:bg-white hover:text-black hover:border-2 hover:border-black">Visit Website</button>
          </a>
        </div>
    </div>
);

const Content: React.FC<{ caseStudy: CaseStudy }> = ({ caseStudy }) => (
  <div className="w-full flex flex-col gap-8 p-4 md:pr-40 md:py-10 md:pl-10">
    <div className="w-full flex flex-col gap-2 md:flex-row md:justify-between">
      <p data-aos='fade-up'>Overview</p>
      <div className="w-full flex flex-col gap-8 md:w-1/2" data-aos='fade-up' data-aos-delay='200'>
        <div className="w-full bg-gray-300 h-[1px]" />
        <div className="flex flex-col gap-2">
          <h2 className="text-2xl md:text-4xl font-semibold" data-aos='fade-up'>The Challenge</h2>
          <p data-aos='fade-up'>{caseStudy.challenge}</p>
        </div>
        <div className="w-full bg-gray-300 h-[1px]" data-aos='fade-up'/>
        <div className="flex flex-col gap-2">
          <h2 className="text-2xl md:text-4xl font-semibold" data-aos='fade-up'>Goals</h2>
          <ul className="list-decimal list-inside flex flex-col gap-2" data-aos='fade-up'>
              {Array.isArray(caseStudy.goals)
                ? caseStudy.goals.map((goal, i) => (
                    <li key={i} className="text-base leading-relaxed">{goal}</li>
                  ))
                : String(caseStudy.goals)
                    .split(/(?=\d+\.)/)
                    .map((goal, i) => (
                      <li key={i} className="text-base leading-relaxed">{goal.trim()}</li>
                    ))}
          </ul>
        </div>
        <div className="w-full bg-gray-300 h-[1px]" data-aos='fade-up'/>
        <div className="flex flex-col gap-2" data-aos="fade-up">
          <h2 className="text-2xl md:text-4xl font-semibold">Solution</h2>
          {String(caseStudy.solution)
            .split("\n")
            .map((line, i) => (
              <p key={i} className="mb-2 leading-relaxed">{line.trim()}</p>
            ))}
        </div>
      </div>
    </div>
  </div>
);

const Visual: React.FC<{ caseStudy: CaseStudy }> = ({ caseStudy }) => (
  <div className="w-full flex flex-col gap-8 px-4 pb-20 md:px-10" data-aos="fade-up">
  <div className="flex flex-col gap-4">
    {Object.values(caseStudy.visual)
      .filter(Boolean)
      .reduce<string[][]>((acc, curr: string, i) => {
        const groupIndex = Math.floor(i / 3);
        if (!acc[groupIndex]) acc[groupIndex] = [];
        acc[groupIndex].push(curr);
        return acc;
      }, [])
      .map((group, i) => (
        <div key={i} className="flex flex-col gap-8">
          {/* Gambar full */}
          {group[0] && (
            <img
              src={group[0]}
              alt={`Visual ${i * 3 + 1}`}
              className="w-full object-cover"
              style={{
                aspectRatio: "16 / 9",
                objectFit: "cover"
              }}
              data-aos="zoom-in"
            />
          )}

          {/* 2 gambar samping (jika ada) */}
          <div className="flex gap-8 flex-col md:flex-row overflow-hidden">
            {group[1] && (
              <img
                src={group[1]}
                alt={`Visual ${i * 3 + 2}`}
                className="w-full object-cover md:w-1/2"
                style={{
                  aspectRatio: "4 / 3",
                  objectFit: "cover"
                }}
                data-aos="zoom-in"
                data-aos-delay="100"
              />
            )}
            {group[2] && (
              <img
                src={group[2]}
                loading="lazy"
                alt={`Visual ${i * 3 + 3}`}
                className="w-full object-cover md:w-1/2"
                style={{
                  aspectRatio: "4 / 3",
                  objectFit: "cover"
                }}
                data-aos="zoom-in"
                data-aos-delay="200"
              />
            )}
          </div>
        </div>
      ))}
  </div>
</div>
);


export default CaseStudyPage;
