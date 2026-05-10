import React from 'react';
import { motion } from 'framer-motion';

const Window = ({ title, children, onClose, isOpen, id }) => {
  if (!isOpen) return null;

  return (
    <motion.div 
      className="classic-window"
      drag
      dragHandleSelector=".window-titlebar"
      dragMomentum={false}
      initial={{ scale: 0.95, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0.95, opacity: 0 }}
    >
      <div className="window-titlebar">
        <div className="window-close-btn" onClick={onClose}></div>
        <div className="window-title-lines-container">
          <div className="window-title-lines"></div>
          <div className="window-title-text">{title}</div>
          <div className="window-title-lines"></div>
        </div>
        <div className="window-close-btn window-spacer"></div>
      </div>
      <div className="window-content">
        {children}
      </div>
    </motion.div>
  );
};

export default Window;
