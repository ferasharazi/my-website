import React, { useState } from 'react';
import './App.css';
import VSCode from './components/VSCode';
import Dock from './components/Dock';
import TopBar from './components/TopBar';

function App() {
  const [activeWindow, setActiveWindow] = useState('vscode');

  return (
    <div className="desktop">
      <div className="desktop-wallpaper" />
      <TopBar />
      
      <main className="main-stage">
        {activeWindow === 'vscode' && (
          <VSCode onClose={() => setActiveWindow(null)} />
        )}
      </main>

      <Dock onOpenWindow={(win) => setActiveWindow(win)} />
    </div>
  );
}

export default App;
