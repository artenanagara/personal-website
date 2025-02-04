import React, { useState } from "react";

interface ZoomImageProps {
    src?: string;
    alt: string;
    width?: string;
    height?: string;
    className?: string;
}

const ZoomImage: React.FC<ZoomImageProps> = ({ src, alt, width = "auto", height = "auto", className }) => {
    const [isZoomed, setIsZoomed] = useState(false);

    const handleZoom = () => setIsZoomed(true);
    const handleClose = () => setIsZoomed(false);

    if (!src) return null;

    return (
        <>
            <img
                src={src}
                alt={alt}
                className={` ${className} relative overflow-hidden cursor-zoom-in transition-transform duration-500 w-full ${
                    isZoomed ? "scale-150" : "hover:scale-105"
                }`}
                onClick={handleZoom}
                style={{ width, height }}
            />

            {isZoomed && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
                    onClick={handleClose}
                >
                    <img
                        src={src}
                        alt={alt}
                        className="max-w-full max-h-full md:max-w-3xl md:max-h-screen rounded-lg shadow-lg transform scale-100 transition-transform"
                    />
                    <button
                        onClick={handleClose}
                        className="absolute top-4 right-4 text-white text-2xl font-bold"
                    >
                        ✕
                    </button>
                </div>
            )}
        </>
    );
};

export default ZoomImage;
