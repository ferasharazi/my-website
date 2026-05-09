import React, { useState } from 'react';
import { 
  Files, Search, GitBranch, Play, Boxes, Settings, 
  ChevronRight, FileCode, FileText, ImageIcon, Layout 
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const files = [
  { id: 'home', name: 'Home.jsx', icon: <FileCode size={16} color="#58a6ff" />, type: 'code' },
  { id: 'about', name: 'About.md', icon: <FileText size={16} color="#ffa657" />, type: 'markdown' },
  { id: 'projects', name: 'Works.js', icon: <FileCode size={16} color="#d2a8ff" />, type: 'code' },
  { id: 'certs', name: 'Certificates.jsx', icon: <FileCode size={16} color="#27c93f" />, type: 'code' },
  { id: 'contact', name: 'Contact.json', icon: <Boxes size={16} color="#79c0ff" />, type: 'json' },
];

const VSCode = ({ onClose }) => {
  const [activeFile, setActiveFile] = useState(files[0]);
  const [openFiles, setOpenFiles] = useState([files[0]]);

  const handleFileClick = (file) => {
    setActiveFile(file);
    if (!openFiles.find(f => f.id === file.id)) {
      setOpenFiles([...openFiles, file]);
    }
  };

  const closeFile = (e, file) => {
    e.stopPropagation();
    const newOpenFiles = openFiles.filter(f => f.id !== file.id);
    setOpenFiles(newOpenFiles);
    if (activeFile.id === file.id && newOpenFiles.length > 0) {
      setActiveFile(newOpenFiles[newOpenFiles.length - 1]);
    }
  };

  return (
    <motion.div 
      className="vscode-window"
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0.9, opacity: 0 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      {/* Title Bar */}
      <div className="vscode-titlebar">
        <div className="traffic-lights">
          <div className="light close" onClick={onClose}></div>
          <div className="light minimize"></div>
          <div className="light maximize"></div>
        </div>
        <div style={{ flex: 1, textAlign: 'center', fontSize: '13px', color: 'var(--text-muted)' }}>
          Feras Alharazi — {activeFile.name} — Visual Studio Code
        </div>
      </div>

      <div className="vscode-body">
        {/* Activity Bar */}
        <div className="activity-bar">
          <Files size={24} color="var(--text-main)" />
          <Search size={24} color="var(--text-muted)" />
          <GitBranch size={24} color="var(--text-muted)" />
          <Play size={24} color="var(--text-muted)" />
          <div style={{ marginTop: 'auto', marginBottom: '15px', display: 'flex', flexDirection: 'column', gap: '15px' }}>
            <Settings size={24} color="var(--text-muted)" />
          </div>
        </div>

        {/* Explorer Sidebar */}
        <div className="explorer-sidebar">
          <div className="sidebar-header">Explorer</div>
          <div className="file-list">
            <div className="file-item" style={{ fontWeight: 'bold', color: 'var(--text-main)' }}>
              <ChevronRight size={14} /> MY-WEBSITE
            </div>
            <div style={{ paddingLeft: '15px' }}>
              {files.map(file => (
                <div 
                  key={file.id} 
                  className={`file-item ${activeFile.id === file.id ? 'active' : ''}`}
                  onClick={() => handleFileClick(file)}
                >
                  {file.icon}
                  {file.name}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Editor Area */}
        <div className="editor-pane">
          {/* Tabs */}
          <div className="tabs-container">
            {openFiles.map(file => (
              <div 
                key={file.id} 
                className={`tab ${activeFile.id === file.id ? 'active' : ''}`}
                onClick={() => setActiveFile(file)}
              >
                {file.icon}
                {file.name}
                <span onClick={(e) => closeFile(e, file)} style={{ marginLeft: '8px', fontSize: '14px' }}>×</span>
              </div>
            ))}
          </div>

          {/* Content */}
          <div className="editor-content">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeFile.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
              >
                {renderContent(activeFile.id)}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Status Bar */}
      <div className="status-bar">
        <div className="status-item">
          <GitBranch size={12} /> main*
        </div>
        <div className="status-item" style={{ marginLeft: 'auto', gap: '15px' }}>
          <span>Ln 1, Col 1</span>
          <span>Spaces: 2</span>
          <span>UTF-8</span>
          <span>Javascript React</span>
        </div>
      </div>
    </motion.div>
  );
};

const renderContent = (id) => {
  switch (id) {
    case 'home':
      return (
        <div className="code-content">
          <p><span style={{ color: 'var(--syntax-keyword)' }}>const</span> <span style={{ color: 'var(--syntax-function)' }}>FerasAlharazi</span> = () =&gt; &#123;</p>
          <div style={{ paddingLeft: '20px' }}>
            <p style={{ color: 'var(--syntax-comment)' }}>// I am a developer living in Taif, Saudi Arabia</p>
            <p><span style={{ color: 'var(--syntax-keyword)' }}>return</span> (</p>
            <div style={{ paddingLeft: '20px' }}>
              <p>&lt;<span style={{ color: 'var(--syntax-keyword)' }}>Hero</span>&gt;</p>
              <div style={{ paddingLeft: '20px' }}>
                <h1 style={{ fontSize: '3rem', margin: '20px 0', color: 'white' }}>Feras Alharazi</h1>
                <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)' }}>
                  Passionate about Deep Learning and Neural Networks.
                </p>
                <p style={{ fontSize: '1.1rem', marginTop: '10px' }}>
                  Co-founder of <a href="https://proglabsync.com" target="_blank" style={{ color: '#58a6ff' }}>ProgLab Sync</a>.
                </p>
              </div>
              <p>&lt;/<span style={{ color: 'var(--syntax-keyword)' }}>Hero</span>&gt;</p>
            </div>
            <p>);</p>
          </div>
          <p>&#125;;</p>
        </div>
      );
    case 'about':
      return (
        <div className="markdown-content">
          <h1 style={{ borderBottom: '1px solid var(--border-color)', paddingBottom: '10px', marginBottom: '20px' }}># Editorial</h1>
          <p>I am a developer living in **Taif, Saudi Arabia**, passionate about deep learning and neural networks.</p>
          <p style={{ marginTop: '15px' }}>As a co-founder of **ProgLab Sync**, I focus on building tools that streamline documentation and technical synchronization for teams.</p>
          <h2 style={{ marginTop: '30px' }}>## Education & Certifications</h2>
          <ul style={{ paddingLeft: '20px', marginTop: '10px' }}>
            <li>**CCNA** - Cisco Certified Network Associate</li>
            <li>Passionate Learner in AI & Web Technologies</li>
          </ul>
        </div>
      );
    case 'projects':
      return (
        <div className="code-content">
          <p><span style={{ color: 'var(--syntax-keyword)' }}>export const</span> <span style={{ color: 'var(--syntax-constant)' }}>WORKS</span> = [</p>
          <div style={{ paddingLeft: '20px' }}>
            <div style={{ margin: '15px 0', display: 'flex', gap: '20px', alignItems: 'center' }}>
              <img src="/ProgLab-Sync.svg" alt="ProgLab Sync" style={{ width: '60px', height: '60px', borderRadius: '8px', padding: '5px' }} />
              <div>
                <p>&#123;</p>
                <div style={{ paddingLeft: '20px' }}>
                  <p>name: <span style={{ color: 'var(--syntax-string)' }}>'ProgLab Sync'</span>,</p>
                  <p>link: <a href="https://proglabsync.com" target="_blank" style={{ color: 'var(--syntax-string)' }}>'https://proglabsync.com'</a>,</p>
                  <p>description: <span style={{ color: 'var(--syntax-string)' }}>'A professional platform for managing documentation and team sync.'</span></p>
                </div>
                <p>&#125;,</p>
              </div>
            </div>
            <div style={{ margin: '15px 0' }}>
              <p>&#123;</p>
              <div style={{ paddingLeft: '20px' }}>
                <p>name: <span style={{ color: 'var(--syntax-string)' }}>'Atheel POS'</span>,</p>
                <p>description: <span style={{ color: 'var(--syntax-string)' }}>'A modern Point of Sale system for retail businesses.'</span>,</p>
                <p>tech: [<span style={{ color: 'var(--syntax-string)' }}>'Electron'</span>, <span style={{ color: 'var(--syntax-string)' }}>'React'</span>]</p>
              </div>
              <p>&#125;</p>
            </div>
          </div>
          <p>];</p>
        </div>
      );
    case 'certs':
      return (
        <div className="code-content">
          <p><span style={{ color: 'var(--syntax-keyword)' }}>export const</span> <span style={{ color: 'var(--syntax-constant)' }}>CERTIFICATES</span> = [</p>
          <div style={{ paddingLeft: '20px' }}>
            <div style={{ margin: '15px 0' }}>
              <p>&#123;</p>
              <div style={{ paddingLeft: '20px' }}>
                <p>title: <span style={{ color: 'var(--syntax-string)' }}>'CCNA'</span>,</p>
                <p>issuer: <span style={{ color: 'var(--syntax-string)' }}>'Cisco'</span>,</p>
                <p>status: <span style={{ color: 'var(--syntax-constant)' }}>'Certified'</span></p>
              </div>
              <p>&#125;</p>
            </div>
          </div>
          <p>];</p>
        </div>
      );
    case 'contact':
      return (
        <div className="json-content">
          <p>&#123;</p>
          <div style={{ paddingLeft: '20px' }}>
            <p><span style={{ color: 'var(--syntax-keyword)' }}>"email"</span>: <span style={{ color: 'var(--syntax-string)' }}>"contact@proglabsync.com"</span>,</p>
            <p><span style={{ color: 'var(--syntax-keyword)' }}>"location"</span>: <span style={{ color: 'var(--syntax-string)' }}>"Taif, Saudi Arabia"</span>,</p>
            <p><span style={{ color: 'var(--syntax-keyword)' }}>"github"</span>: <span style={{ color: 'var(--syntax-string)' }}>"github.com/ferasharazi"</span></p>
          </div>
          <p>&#125;</p>
        </div>
      );
    default:
      return <div>Select a file to view</div>;
  }
};

export default VSCode;
