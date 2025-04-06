import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface LoadingScreenProps {
  onFinish: () => void;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ onFinish }) => {
  const [percentage, setPercentage] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setPercentage((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setLoading(false);
            onFinish(); // Notifikasi ke Homepage bahwa loading selesai
          }, 800);
          return 100;
        }
        return prev + Math.floor(Math.random() * 3 + 1);
      });
    }, 50);

    return () => clearInterval(interval);
  }, [onFinish]);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1, y: 0 }}
          exit={{
            opacity: 0,
            y: "-100%",
            transition: { duration: 1, ease: [0.87, 0, 0.13, 1] },
          }}
          className="w-full fixed inset-0 bg-black z-50 flex justify-center items-center"
          style={{ pointerEvents: "auto" }}
        >
          <motion.span
            className="text-white text-5xl font-bold md:text-7xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {percentage < 100 ? `${percentage}%` : "Welcome"}
          </motion.span>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;
