import React from "react";
import Card from "./Card";
import CoverManisGrafika from "../assets/images/manisgrafika/mockup.png";
import CoverTheInvestor from "../assets/images/theinvestor/thumbnail.jpg";
import HoverTheInvestor from "../assets/images/theinvestor/mockup.png";
import CoverProbolinggo from "../assets/images/greenprobolinggo/trash.jpg";


const WorkList: React.FC = () => (
    <div className="w-full flex flex-wrap gap-4 md:gap-0 md:py-4">
        <Card 
            id="manis-grafika"
            title="Manis Grafika"
            category="UI/UX Design"
            defaultImage={CoverManisGrafika}
            hoverImage={HoverTheInvestor}
            locked={false} // Atur ini sesuai kebutuhan
            
        />
        <Card 
            id="manis-grafika"
            title="Manis Grafika"
            category="UI/UX Design"
            defaultImage={CoverManisGrafika}
            hoverImage={HoverTheInvestor}
            locked={false} // Atur ini sesuai kebutuhan
        />
        <Card 
            id="the-investor"
            title="The Investor"
            category="UI/UX Design"
            defaultImage={CoverTheInvestor}
            hoverImage={HoverTheInvestor}
            locked={false} // Atur ini sesuai kebutuhan
        />
        <Card 
            id="probolinggo"
            title="Probolinggo"
            category="UI/UX Design"
            defaultImage={CoverProbolinggo}
            hoverImage={HoverTheInvestor}
            locked={true} // Atur ini sesuai kebutuhan
        />
    </div>
);

export default WorkList;
