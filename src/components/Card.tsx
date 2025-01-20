import React from "react";
import { Link } from "react-router-dom";

interface CardProps {
    id: string;
    title: string;
    category: string;
    defaultImage: string;
    hoverImage: string;
}

const Card: React.FC<CardProps> = ({
    id,
    title,
    category,
    defaultImage,
    hoverImage,
}) => {
    const [, setIsHovered] = React.useState(false);

    return(
        <Link to={`/work/${id}`} className="w-full p-[0px] md:w-1/2 md:p-4">
            <div
                className="w-full flex flex-col gap-2 overflow-hidden relative group "
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                <img
                    src={defaultImage}
                    alt={title}
                    className="w-full h-[300px] object-cover md:h-[400px]"                
                />
                <img
                    src={hoverImage}
                    alt={title}
                    className="absolute top-0 left-0 w-full h-[300px] object-cover transition-transform duration-700 ease-out transform translate-x-full group-hover:translate-x-0 md:h-[400px]"
                />
                <div className="flex justify-between">
                    <h2 className="text-xl font-medium">{title}</h2>
                    <p className="text-base font-light text-gray-500">{category}</p>
                </div>
            </div>  
        </Link>
    )
}

export default Card;