import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const LoadingScreen: React.FC = () => {
  const [percentage, setPercentage] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setPercentage((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setLoading(false);
          }, 800); // Wait for 3 seconds to transition out
          return 100;
        }
        return prev + Math.floor(Math.random() * 3 + 1); // Increment random amount, simulate jerkiness
      });
    }, 50); // Update every 50ms

    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1, y: 0 }}
          exit={{ opacity: 1, y: '-100%', transition: { duration: 5, ease: [0.87, 0, 0.13, 1] } }} // Jerky transition
          className="w-full fixed inset-0 bg-black z-50 flex justify-end items-end p-4"
          style={{ pointerEvents: 'auto' }}
        >
          <motion.span
            className="text-white text-5xl font-bold md:text-7xl"
            initial={{ opacity: 1 }}
            animate={{ opacity: [1], transition: { repeat: Infinity, duration: 0.5 } }} // Blink effect
          >
            {percentage < 100 ? `${percentage}%` : 'Welcome'}
          </motion.span>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;
