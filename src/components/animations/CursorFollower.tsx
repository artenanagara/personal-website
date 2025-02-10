import React, { useState } from "react";
import { motion } from "framer-motion";

const CursorFollower: React.FC = () => {
    const [cursorPos, setCursorPos] = useState({ x: -100, y: -100 }); // Posisi awal di luar viewport

    const handleMouseMove = (event: MouseEvent) => {
        setCursorPos({
            x: event.clientX - 50, // Offset untuk pusat teks
            y: event.clientY - 50 // Offset untuk pusat teks
        });
    };

    React.useEffect(() => {
        window.addEventListener("mousemove", handleMouseMove);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);

    return (
        <motion.div
            animate={{ x: cursorPos.x, y: cursorPos.y }}
            transition={{ ease: "linear", duration: 0.1 }}
            style={{
                position: "fixed",
                pointerEvents: "none",
                zIndex: 9999,
                userSelect: "none",
                left: '50%',
                top: '50%',
                translateX: '-50%',
                translateY: '-50%',
                backgroundColor: "#FFEB00",
                padding: "8px 12px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "14px",
                color: "white",
            }}
        >
            View
        </motion.div>
    );
};

export default CursorFollower;
