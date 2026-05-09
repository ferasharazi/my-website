import React from 'react';
import { Terminal, Code, User, Briefcase, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

const Dock = ({ onOpenWindow }) => {
  const icons = [
    { id: 'vscode', icon: <Code size={30} color="#007acc" />, label: 'VS Code' },
    { id: 'terminal', icon: <Terminal size={30} color="#333" />, label: 'Terminal' },
    { id: 'about', icon: <User size={30} color="#ff5f56" />, label: 'About' },
    { id: 'projects', icon: <Briefcase size={30} color="#ffbd2e" />, label: 'Work' },
    { id: 'contact', icon: <Mail size={30} color="#27c93f" />, label: 'Contact' },
  ];

  return (
    <div className="dock-container">
      {icons.map((item) => (
        <motion.div
          key={item.id}
          className="dock-icon"
          whileHover={{ scale: 1.4, y: -10 }}
          transition={{ type: "spring", stiffness: 300, damping: 10 }}
          onClick={() => onOpenWindow(item.id)}
          title={item.label}
        >
          {item.icon}
        </motion.div>
      ))}
    </div>
  );
};

export default Dock;
