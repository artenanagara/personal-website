/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import Card from "./Card";
import caseStudyRaw from "../data/CaseStudy.json"; 

interface WorkListProps {
  limit?: number; 
}

const WorkList: React.FC<WorkListProps> = ({ limit }) => {
  const caseStudyData = (caseStudyRaw as any).caseStudy;

  // Fungsi bantu untuk bersihkan path
  const normalizeImagePath = (path: string | null) => {
    if (!path) return "/images/fallback.jpg"; // fallback image jika null
    return path.replace("..", ""); 
  };

  return (
    <div className="w-full flex flex-wrap gap-4 md:gap-0 md:py-0">
      {caseStudyData.slice(0, limit || caseStudyData.length).map((item: any, index: number) => (
        <Card
          key={item.id}
          id={item.id}
          title={item.about_project.company}
          category={item.about_project.scope}
          defaultImage={normalizeImagePath(item.thumbnail)}
          hoverImage={normalizeImagePath(item.hover)}
          locked={item.locked === "true"} 
          aosDelay={index * 200}
        />
      ))}
    </div>
  );
};

export default WorkList;
