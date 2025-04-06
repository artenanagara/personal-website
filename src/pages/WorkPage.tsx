import React from "react";
import WorkList from "../components/WorkList";

const WorkPage: React.FC = () => {
  return (
    <div className="w-full px-4 py-24 flex flex-col gap-12 md:px-10">
      <HeaderSection />
      <WorkList />
    </div>
  );
};

const HeaderSection = () => (
  <div className="w-full flex flex-col gap-4 border-b border-gray-300 pb-6 md:flex-row">
    <h1 className="text-3xl font-medium md:w-2/4">Works</h1>
    <p className="md:w-2/3">
      This portfolio showcases a selection of my work, representing the range and diversity of projects I've undertaken. While some pieces are not displayed due to client confidentiality, I believe these examples capture the breadth of what I can bring to each project.
    </p>
  </div>
);

export default WorkPage;
