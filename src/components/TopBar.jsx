import React, { useState, useEffect } from 'react';
import { Apple, Wifi, Battery, Search } from 'lucide-react';

const TopBar = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="top-bar">
      <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
        <Apple size={16} color="white" />
        <span style={{ fontWeight: 'bold' }}>Feras Alharazi</span>
        <span>File</span>
        <span>Edit</span>
        <span>View</span>
        <span>Go</span>
        <span>Window</span>
        <span>Help</span>
      </div>
      <div style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
        <Wifi size={16} />
        <Battery size={16} />
        <Search size={16} />
        <span>
          {time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
        </span>
      </div>
    </div>
  );
};

export default TopBar;
