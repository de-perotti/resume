import "./cyberpunk-mascot.scss";
import React, { useEffect, useState } from "react";

interface CyberpunkMascotProps {
  isActive: boolean;
}

const CyberpunkMascot: React.FC<CyberpunkMascotProps> = ({ isActive }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isBlinking, setIsBlinking] = useState(false);

  useEffect(() => {
    if (!isActive) return;

    const handleMouseMove = (e: MouseEvent) => {
      // Smooth follow with slight delay
      setTimeout(() => {
        setPosition({ 
          x: e.clientX - 50, // Center the mascot
          y: e.clientY - 50 
        });
      }, 100);
    };

    // Random blinking
    const blinkInterval = setInterval(() => {
      setIsBlinking(true);
      setTimeout(() => setIsBlinking(false), 200);
    }, 2000 + Math.random() * 3000);

    document.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      clearInterval(blinkInterval);
    };
  }, [isActive]);

  if (!isActive) return null;

  return (
    <div 
      className={`cyberpunk-mascot ${isBlinking ? 'blinking' : ''}`}
      style={{ 
        left: position.x + 'px', 
        top: position.y + 'px' 
      }}
    >
      <div className="mascot-body">
        <div className="mascot-head">
          <div className="eye left-eye"></div>
          <div className="eye right-eye"></div>
          <div className="mouth"></div>
        </div>
        <div className="mascot-arms">
          <div className="arm left-arm"></div>
          <div className="arm right-arm"></div>
        </div>
        <div className="mascot-legs">
          <div className="leg left-leg"></div>
          <div className="leg right-leg"></div>
        </div>
      </div>
      <div className="speech-bubble">
        HACKER MODE ACTIVATED! 👾
      </div>
    </div>
  );
};

export default CyberpunkMascot;