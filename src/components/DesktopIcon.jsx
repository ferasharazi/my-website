import React from 'react';
import { motion } from 'framer-motion';

const DesktopIcon = ({ icon, label, onClick }) => {
  return (
    <motion.div 
      className="icon-item"
      whileTap={{ scale: 0.95 }}
      onDoubleClick={onClick}
      onClick={(e) => {
        // For mobile or single click
        if (e.detail === 2) onClick();
      }}
    >
      <div className="icon-visual">
        {icon}
      </div>
      <div className="icon-label">
        {label}
      </div>
    </motion.div>
  );
};

export default DesktopIcon;
