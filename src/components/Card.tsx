import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

interface CardProps {
    id: string;
    title: string;
    category: string;
    defaultImage: string;
    hoverImage: string;
    locked?: boolean; // Prop untuk mengindikasikan card terkunci
}

const Card: React.FC<CardProps> = ({
    id,
    title,
    category,
    defaultImage,
    hoverImage,
    locked = false,
}) => {
    const [cursorPos, setCursorPos] = useState({ x: 0, y: 0, visible: false });

    const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
        if (locked || !locked) {
            setCursorPos({
                x: event.clientX,
                y: event.clientY,
                visible: true
            });
        }
    };

    const handleMouseEnter = () => {
        setCursorPos(prev => ({ ...prev, visible: true }));
    };

    const handleMouseLeave = () => {
        setCursorPos(prev => ({ ...prev, visible: false }));
    };

    const linkTarget = locked ? "#" : `/work/${id}`; 
    const cursorText = locked ? "Soon" : 'View';  

    return (
        <Link to={linkTarget} className={`w-full p-[0px] md:w-1/2 md:p-4 relative`}>
            <div
                className="w-full flex flex-col gap-2 overflow-hidden relative group"
                onMouseMove={handleMouseMove}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
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
                <div className="flex justify-between px-4 py-2 bg-white bg-opacity-80 md:px-0 md:py-0 md:pb-8">
                    <h2 className="text-xl font-medium">{title}</h2>
                    <p className="text-base font-light text-gray-500">{category}</p>
                </div>
                {cursorPos.visible &&(
                    <motion.div
                        style={{
                            position: 'absolute',
                            left: `${cursorPos.x}px`,
                            top: `${cursorPos.y}px`,
                            transform: 'translate(-50%, -50%)',
                            padding: '8px 24px',
                            backgroundColor: '#FFEB00',
                            fontSize: '16px',
                            fontWeight: 600,
                            color: 'white',
                            pointerEvents: 'none'
                        }}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                    >
                        {cursorText}
                    </motion.div>
                )}
            </div>  
        </Link>
    );
};

export default Card;
