import React from 'react';
import { motion } from 'framer-motion';
import WhatsAppIcon from './WhatsAppIcon';

const FloatingQuoteButton = () => {
  const whatsappMessage = encodeURIComponent("Hi Skybolt Labs! I'd like to discuss a project with you. Can we chat?");
  const whatsappUrl = `https://wa.me/27816172049?text=${whatsappMessage}`;

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-8 right-8 z-40 bg-gradient-to-r from-green-500 to-green-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group"
      title="Chat with us on WhatsApp"
    >
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-green-600 rounded-full animate-pulse opacity-75"></div>
        <div className="relative">
          <WhatsAppIcon size={28} />
        </div>
      </div>
      
      {/* Tooltip */}
      <div className="absolute bottom-full right-0 mb-2 px-3 py-2 bg-gray-900 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
        Chat on WhatsApp
        <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"></div>
      </div>
    </motion.a>
  );
};

export default FloatingQuoteButton;