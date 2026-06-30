import React from 'react';
import { motion } from 'framer-motion';

interface GradientBlobProps {
  className?: string;
  animate?: boolean;
}

const GradientBlob: React.FC<GradientBlobProps> = ({ className = '', animate = true }) => {
  return (
    <motion.div
      className={`absolute rounded-full bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 opacity-20 blur-3xl ${className}`}
      animate={animate ? {
        scale: [1, 1.2, 1],
        rotate: [0, 180, 360],
        borderRadius: ["30%", "50%", "30%"],
      } : {}}
      transition={{
        duration: 20,
        repeat: Infinity,
        ease: "linear"
      }}
    />
  );
};

export default GradientBlob;