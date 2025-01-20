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
        <Link to={`/work/${id}`} className="block w-full">
            <div
                className="w-full flex flex-col overflow-hidden relative group"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                <img
                    src={defaultImage}
                    alt={title}
                    className="w-full h-[300px] object-cover"                
                />
                <img
                    src={hoverImage}
                    alt={title}
                    className="absolute top-0 left-0 w-full h-[300px] object-cover transition-transform duration-700 ease-out transform translate-x-full group-hover:translate-x-0"
                />
                <div className="flex justify-between mt-4">
                    <h2 className="text-xl font-normal">{title}</h2>
                    <p className="text-base font-light text-gray-500">{category}</p>
                </div>
            </div>  
        </Link>
    )
}

export default Card;