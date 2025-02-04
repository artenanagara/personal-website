import React from "react";
import { useParams} from "react-router-dom";
import caseStudies from "../data/CaseStudy.json";
import ZoomImage from "../components/animations/ZoomImage";

interface CaseStudy {
  id: string;
  title: string;
  image: string;
  timeline: string;
  scope: string;
  about_company: {
    company_name: string;
    description: string;
    website: string;
    url: string;
  };
  overview: {
    about_project: {
      description: string;
      image: string | null;
    };
    problem?: {
      description: string;
      image: string | null;
    };
    goal?: {
      description: string;
      image: string | null;
    };
    challenge: {
      description: string;
      image: null;
    };
    solution: {
      description: string;
      image: null;
    };
  }
  process: {
    requirements?: string;
    site_map: {
      description: string;
      image: string;
    };
    wireframe: {
      description: string;
      image: null;
    };
    gathering_requirements: string;
  };
  result: {
    description: string;
    mockup: string | null;
    images: string[];
  };
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
      <Content caseStudy={caseStudy} />
    </div>
  );
};

const Header: React.FC<{ caseStudy: CaseStudy }> = ({ caseStudy }) => (
  <div className="w-full flex flex-col gap-4 md:gap-20">
    <div className="w-full flex flex-col gap-4 px-4 md:flex-row md:px-10 md:gap-36">
      <div className="w-full flex flex-col md:w-1/3">
        <h2>{caseStudy.about_company.company_name}</h2>
        <h1 className="text-2xl font-bold">{caseStudy.title}</h1>
      </div>
      <div className="w-full flex flex-col gap-4 md:flex-row md:gap-10">
        <p className="w-full text-gray-500 md:pl-20">{caseStudy.about_company.description}</p>
        <div className="w-full flex flex-col font-normal gap-4 text-sm md:w-2/3 md:text-end">
          <InfoItem label="Timeline" value={caseStudy.timeline} />
          <InfoItem label="Scope" value={caseStudy.scope} />
          <InfoItem label="Website" value={<a href={caseStudy.about_company.url} target="_blank" className="underline">{caseStudy.about_company.website}</a>} />
        </div>
      </div>
    </div>
    <img
      src={caseStudy.image}
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

const Content: React.FC<{ caseStudy: CaseStudy }> = ({ caseStudy }) => (
  <div className="w-full flex flex-col gap-16">
    <Overview overview={caseStudy.overview} />
    <DesignProcess process={caseStudy.process} />
    <Result result={caseStudy.result} />
  </div>
);


const Overview: React.FC<{ overview: CaseStudy["overview"] }> = ({ overview }) => (
  <div className="w-full flex flex-col gap-8">
  {Object.entries(overview).map(([key, value], index) => (
    <div key={index} className="w-full flex flex-col gap-2">
      <div className="w-full flex flex-col gap-1 px-4 md:px-10 md:flex-row md:gap-12">
        <h2 className="w-full text-xl font-semibold capitalize md:w-1/3">{key.replace("_", " ")}</h2>
        <p className="w-full text-base text-gray-500 md:w-1/3">{value.description}</p>
      </div>
      <div className="w-full px-4 md:px-10">
        {value.image && (
          <img src={value.image} alt={value.image} className="w-full h-auto object-cover object-center "/>
        )}
      </div>
    </div>
  ))}
</div>
);

const DesignProcess: React.FC<{ process: CaseStudy["process"] }> = ({ process }) => (
  <div className="w-full flex flex-col gap-4 px-4 md:px-10">
    <h2 className="w-full text-xl font-semibold md:sticky md:top-0 md:bg-white md:py-2">Design Process</h2>
    <div className="w-full flex flex-col gap-8 md:gap-16">
      {Object.entries(process).map(([key, value], index) => (
        <div key={index} className="w-full flex flex-col gap-1 md:flex-row md:gap-12">
          <h2 className="w-full text-xl font-semibold capitalize md:w-1/3">{key.replace("_", " ")}</h2>
          <div className="w-full flex flex-col gap-4 md:w-1/3">
            {typeof value === "string" ? (
              <p className="text-base text-gray-500">{value}</p>
            ) : (
              <>
                <p className="text-base text-gray-500">{value.description}</p>
                {value.image && <ZoomImage src={value.image} alt={key} />}
              </>
            )}
          </div>
        </div>
      ))}
    </div>
  </div>
);

const Result: React.FC<{ result: CaseStudy["result"] }> = ({ result }) => (
  <div className="w-full flex flex-col gap-10">
    <div className="w-full flex flex-col gap-1 px-4 md:px-10 md:flex-row md:gap-12">
      <h2 className="w-full text-xl font-semibold md:w-1/3 md:sticky md:top-0 md:bg-white md:py-2">Result</h2>
      <p className="w-full text-base text-gray-500 md:w-1/3">{result.description}</p>
    </div>
    <div className="w-full">
    {result.mockup && <img src={result.mockup} alt="" className="w-full flex justify-center px-4 md:px-40"/>}
    </div>
    <div className="flex flex-wrap pb-8 md:pb-16">
      {result.images.map((image, index) => (
        <div key={index} className="w-full p-4 md:w-1/3 flex">
          <ZoomImage src={image} alt={`Result ${index + 1}`} />
        </div>
      ))}
    </div>
  </div>
);

export default CaseStudyPage;
