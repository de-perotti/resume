import React, { useEffect } from "react";

interface KonamiCodeProps {
  onKonamiCodeActivated: () => void;
}

const KonamiCode: React.FC<KonamiCodeProps> = ({ onKonamiCodeActivated }) => {
  useEffect(() => {
    const konamiCode = [
      'ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown',
      'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight',
      'KeyB', 'KeyA'
    ];
    
    let currentSequence: string[] = [];

    const handleKeyDown = (event: KeyboardEvent) => {
      currentSequence.push(event.code);
      
      // Keep only the last 10 keys
      if (currentSequence.length > 10) {
        currentSequence = currentSequence.slice(-10);
      }
      
      // Check if the sequence matches the Konami code
      if (currentSequence.join(',') === konamiCode.join(',')) {
        currentSequence = []; // Reset
        onKonamiCodeActivated();
        
        // Play activation sound with Web Audio API
        try {
          const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
          const oscillator = audioContext.createOscillator();
          const gainNode = audioContext.createGain();
          
          oscillator.connect(gainNode);
          gainNode.connect(audioContext.destination);
          
          oscillator.frequency.setValueAtTime(440, audioContext.currentTime);
          oscillator.frequency.setValueAtTime(880, audioContext.currentTime + 0.1);
          oscillator.frequency.setValueAtTime(1760, audioContext.currentTime + 0.2);
          
          gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
          gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.3);
          
          oscillator.start(audioContext.currentTime);
          oscillator.stop(audioContext.currentTime + 0.3);
        } catch (error) {
          console.log('Audio context not available');
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [onKonamiCodeActivated]);

  return null;
};

export default KonamiCode;