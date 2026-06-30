import React from 'react';
import { motion } from 'framer-motion';
import { Code, Palette, Bot, Zap, Globe, Shield } from 'lucide-react';

const FloatingElements: React.FC = () => {
  const elements = [
    { icon: Code, delay: 0, x: '10%', y: '20%' },
    { icon: Palette, delay: 0.5, x: '80%', y: '30%' },
    { icon: Bot, delay: 1, x: '15%', y: '70%' },
    { icon: Zap, delay: 1.5, x: '85%', y: '80%' },
    { icon: Globe, delay: 2, x: '50%', y: '15%' },
    { icon: Shield, delay: 2.5, x: '70%', y: '60%' },
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {elements.map((element, index) => (
        <motion.div
          key={index}
          className="absolute"
          style={{ left: element.x, top: element.y }}
          initial={{ opacity: 0, scale: 0, rotate: -180 }}
          animate={{ 
            opacity: [0, 0.6, 0.3, 0.6, 0.3],
            scale: [0, 1.2, 1, 1.2, 1],
            rotate: [0, 360],
            y: [0, -20, 0, -15, 0]
          }}
          transition={{
            duration: 8,
            delay: element.delay,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <div className="bg-gradient-to-r from-blue-500/20 to-purple-600/20 backdrop-blur-sm p-4 rounded-full border border-white/10">
            <element.icon className="h-8 w-8 text-white/70" />
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default FloatingElements;