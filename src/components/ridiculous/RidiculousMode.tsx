import "./ridiculous-mode.scss";
import React, { useState, useEffect } from "react";
import MatrixRain from "./MatrixRain";
import KonamiCode from "./KonamiCode";
import CyberpunkMascot from "./CyberpunkMascot";
import HackerConsole from "./HackerConsole";

const RidiculousMode: React.FC = () => {
  const [isHackerMode, setIsHackerMode] = useState(false);
  const [showNotification, setShowNotification] = useState(false);

  const activateHackerMode = () => {
    setIsHackerMode(true);
    setShowNotification(true);
    
    // Add cyberpunk class to body
    document.body.classList.add('cyberpunk-mode');
    
    // Hide notification after 3 seconds
    setTimeout(() => {
      setShowNotification(false);
    }, 3000);

    // Play celebration effect
    createFireworks();
  };

  const createFireworks = () => {
    for (let i = 0; i < 50; i++) {
      setTimeout(() => {
        const firework = document.createElement('div');
        firework.className = 'firework';
        firework.style.left = Math.random() * window.innerWidth + 'px';
        firework.style.top = Math.random() * window.innerHeight + 'px';
        firework.style.background = `hsl(${Math.random() * 360}, 100%, 50%)`;
        document.body.appendChild(firework);
        
        setTimeout(() => {
          firework.remove();
        }, 1000);
      }, i * 100);
    }
  };

  // Double-click anywhere to toggle hacker mode (secret feature)
  useEffect(() => {
    let clickCount = 0;
    let clickTimer: NodeJS.Timeout;

    const handleDoubleClick = () => {
      clickCount++;
      if (clickCount === 1) {
        clickTimer = setTimeout(() => {
          clickCount = 0;
        }, 400);
      } else if (clickCount === 2) {
        clearTimeout(clickTimer);
        clickCount = 0;
        setIsHackerMode(!isHackerMode);
        if (!isHackerMode) {
          activateHackerMode();
        } else {
          document.body.classList.remove('cyberpunk-mode');
        }
      }
    };

    document.addEventListener('click', handleDoubleClick);
    return () => {
      document.removeEventListener('click', handleDoubleClick);
      if (clickTimer) clearTimeout(clickTimer);
    };
  }, [isHackerMode]);

  return (
    <>
      <KonamiCode onKonamiCodeActivated={activateHackerMode} />
      
      {isHackerMode && (
        <>
          <MatrixRain isActive={isHackerMode} />
          <CyberpunkMascot isActive={isHackerMode} />
          <HackerConsole isActive={isHackerMode} />
        </>
      )}

      {showNotification && (
        <div className="hacker-notification">
          <div className="notification-content">
            <h2>🚨 HACKER MODE ACTIVATED! 🚨</h2>
            <p>Welcome to the Matrix, Neo... 😎</p>
            <div className="notification-effects">
              <span className="glitch" data-text="SYSTEM COMPROMISED">SYSTEM COMPROMISED</span>
            </div>
          </div>
        </div>
      )}

      {/* Easter egg hint */}
      <div className="easter-egg-hint">
        <span>🎮 Try the Konami Code: ↑↑↓↓←→←→BA</span>
      </div>
    </>
  );
};

export default RidiculousMode;