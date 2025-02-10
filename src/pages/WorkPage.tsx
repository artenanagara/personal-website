import React from "react";
import Card from "../components/Card";
import CoverManisGrafika from "../assets/images/manisgrafika/mockup.png"
import CoverTheInvestor from "../assets/images/theinvestor/thumbnail.jpg"
import HoverTheInvestor from "../assets/images/theinvestor/mockup.png"
import CoverProbolinggo from "../assets/images/greenprobolinggo/trash.jpg"

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
    <h1 className="text-3xl font-medium md:w-2/4">Works</h1>
    <p className="md:w-2/3">
      This portfolio showcases a selection of my work, representing the range and diversity of projects I've undertaken. While some pieces are not displayed due to client confidentiality, I believe these examples capture the breadth of what I can bring to each project.
    </p>
  </div>
);

const CardSection = () => (
  <div className="w-full flex flex-wrap gap-4 md:gap-0 md:py-4">
    <Card 
          id="manisgrafika"
          title="Manis Grafika"
          category="UI/UX Design, Wordpress"
          defaultImage="https://manisgrafika.id/wp-content/uploads/2024/10/DSC06248_CONVERT-scaled.webp"
          hoverImage={CoverManisGrafika}
        />
        <Card 
          id="theinvestor"
          title="The Investor"
          category="UI/UX Design"
          defaultImage={CoverTheInvestor}
          hoverImage={HoverTheInvestor}
          locked={true}
        />
         <Card 
          id="greenprobolinggo"
          title="Green Probolinggo"
          category="UI/UX Design"
          defaultImage={CoverProbolinggo}
          hoverImage={HoverTheInvestor}
          locked={true}
        />
  </div>
);

export default WorkPage;
