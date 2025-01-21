import React from "react";
import Card from "../components/Card";

const WorkPage: React.FC = () => {
  return (
    <div className="w-full px-4 py-24 flex flex-col gap-12 md:px-10">
      <HeaderSection />
      <CardSection />
    </div>
  );
};

const HeaderSection = () => (
  <div className="w-full flex flex-col gap-4 border-b border-gray-300 pb-6 md:flex-row">
    <h1 className="w-full text-3xl font-medium md:w-2/4">works</h1>
    <p className="w-full md:w-1/3">
      This portfolio showcases a selection of my work, representing the range and diversity of projects I've undertaken. While some pieces are not displayed due to client confidentiality, I believe these examples capture the breadth of what I can bring to each project.
    </p>
  </div>
);

const CardSection = () => (
  <div className="w-full flex flex-wrap gap-10 sm:flex-wrap md:gap-0">
    {Array(3).fill(null).map((_, index) => (
      <Card
        key={index}
        id="manisgrafika"
        title="Manis Grafika"
        category="Web Design"
        defaultImage="https://manisgrafika.id/wp-content/uploads/2024/10/DSC06248_CONVERT-scaled.webp"
        hoverImage="https://cdn.dribbble.com/userupload/18452082/file/original-26b222473c0067fe137daf3806cf5356.jpg?resize=1024x768&vertical=center"
      />
    ))}
  </div>
);

export default WorkPage;