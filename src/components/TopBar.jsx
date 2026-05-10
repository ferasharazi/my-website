import React, { useState, useEffect } from 'react';
import { Volume2, Mail, Battery } from 'lucide-react';

const TopBar = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="classic-topbar">
      <div className="topbar-left">
        <span className="brand-name">Feras Alharazi</span>
        <div className="topbar-lines"></div>
      </div>
      
      <div className="topbar-right">
        <span className="topbar-email">contact@proglabsync.com</span>
        <div className="topbar-icons">
          <Volume2 size={16} strokeWidth={2.5} />
          <Mail size={16} strokeWidth={2.5} />
          <Battery size={16} strokeWidth={2.5} style={{ transform: 'rotate(-90deg)' }} />
        </div>
        <span className="topbar-time">
          {time.toLocaleTimeString([], { hour: 'numeric', minute: '2-digit', hour12: true })}
        </span>
      </div>
    </div>
  );
};

export default TopBar;
