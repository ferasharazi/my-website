import React, { useState, useEffect } from 'react';
import './App.css';
import TopBar from './components/TopBar';
import Window from './components/Window';
import DesktopIcon from './components/DesktopIcon';
import { 
  Folder, FileText, Heart, Monitor, 
  ExternalLink, Github, Mail, MapPin,
  Cpu, Terminal as TerminalIcon, HardDrive
} from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';

const Intro = ({ onComplete }) => {
  const [lines, setLines] = useState([]);
  const fullText = [
    "> FERAS_OS v1.0.4 starting...",
    "> Initializing kernel...",
    "> Checking memory: 640KB OK",
    "> Mounting /dev/sda1...",
    "> Loading assets...",
    "> System ready.",
    "> Welcome, Feras Alharazi."
  ];

  useEffect(() => {
    let currentLine = 0;
    const interval = setInterval(() => {
      if (currentLine < fullText.length) {
        setLines(prev => [...prev, fullText[currentLine]]);
        currentLine++;
      } else {
        clearInterval(interval);
        setTimeout(onComplete, 1000);
      }
    }, 300);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="intro-screen">
      <div className="intro-content">
        {lines.map((line, i) => (
          <div key={i} className="intro-line">{line}</div>
        ))}
        <div className="cursor"></div>
      </div>    </div>
  );
};

function App() {
  const [showIntro, setShowIntro] = useState(true);
  const [openWindows, setOpenWindows] = useState(['about']);
  
  const toggleWindow = (id) => {
    if (openWindows.includes(id)) {
      setOpenWindows(openWindows.filter(win => win !== id));
    } else {
      setOpenWindows([...openWindows, id]);
    }
  };

  const windows = [
    {
      id: 'about',
      title: 'About Me',
      icon: <Monitor size={32} strokeWidth={2.5} />,
      content: (
        <div className="mac-content">
          <h2 className="mac-h2">Feras Alharazi</h2>
          <p className="mac-p">I am a developer living in Taif, Saudi Arabia, passionate about deep learning and neural networks.</p>
          <p className="mac-p">As a co-founder of ProgLab Sync, I focus on building tools that streamline documentation and technical synchronization for teams.</p>
          <div className="mac-divider"></div>
          <h3 className="mac-h3">Education & Certifications</h3>
          <ul className="mac-ul">
            <li>CCNA - Cisco Certified Network Associate</li>
            <li>Passionate Learner in AI & Web Technologies</li>
          </ul>
        </div>
      )
    },
    {
      id: 'projects',
      title: 'Projects',
      icon: <Folder size={32} strokeWidth={2.5} />,
      content: (
        <div className="mac-content">
          <div className="project-card">
            <h3 className="mac-h3">ProgLab Sync</h3>
            <p className="mac-p">A professional platform for managing documentation and team sync.</p>
            <a href="https://proglabsync.com" target="_blank" className="mac-link">Visit Site <ExternalLink size={12} /></a>
          </div>
          <div className="project-card">
            <h3 className="mac-h3">Atheel POS</h3>
            <p className="mac-p">A modern Point of Sale system for retail businesses built with Electron and React.</p>
          </div>
        </div>
      )
    },
    {
      id: 'social',
      title: 'Social Life',
      icon: <Heart size={32} strokeWidth={2.5} />,
      content: (
        <div className="mac-content social-list">
          <a href="https://github.com/ferasharazi" target="_blank" className="mac-social-item">
            <Github size={20} /> github.com/ferasharazi
          </a>
          <div className="mac-social-item">
            <Mail size={20} /> contact@proglabsync.com
          </div>
          <div className="mac-social-item">
            <MapPin size={20} /> Taif, Saudi Arabia
          </div>
        </div>
      )
    }
  ];

  return (
    <div className="desktop">
      <AnimatePresence>
        {showIntro && <Intro onComplete={() => setShowIntro(false)} />}
      </AnimatePresence>

      <div className="vignette"></div>
      <TopBar />
      
      <main className="main-stage">
        <div className="desktop-icons">
          {windows.map(win => (
            <DesktopIcon 
              key={win.id}
              label={win.title.toUpperCase()}
              icon={win.icon}
              onClick={() => toggleWindow(win.id)}
            />
          ))}
        </div>

        <AnimatePresence>
          {!showIntro && windows.map(win => (
            <Window 
              key={win.id}
              id={win.id}
              title={win.title}
              isOpen={openWindows.includes(win.id)}
              onClose={() => toggleWindow(win.id)}
            >
              {win.content}
            </Window>
          ))}
        </AnimatePresence>
      </main>
    </div>
  );
}

export default App;
