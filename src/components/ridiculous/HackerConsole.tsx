import "./hacker-console.scss";
import React, { useEffect, useState } from "react";

interface HackerConsoleProps {
  isActive: boolean;
}

const HackerConsole: React.FC<HackerConsoleProps> = ({ isActive }) => {
  const [lines, setLines] = useState<string[]>([]);
  const [currentLine, setCurrentLine] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const asciiArt = `
    ██╗  ██╗ █████╗  ██████╗██╗  ██╗███████╗██████╗ 
    ██║  ██║██╔══██╗██╔════╝██║ ██╔╝██╔════╝██╔══██╗
    ███████║███████║██║     █████╔╝ █████╗  ██████╔╝
    ██╔══██║██╔══██║██║     ██╔═██╗ ██╔══╝  ██╔══██╗
    ██║  ██║██║  ██║╚██████╗██║  ██╗███████╗██║  ██║
    ╚═╝  ╚═╝╚═╝  ╚═╝ ╚═════╝╚═╝  ╚═╝╚══════╝╚═╝  ╚═╝
                                                   
    ███╗   ███╗ ██████╗ ██████╗ ███████╗
    ████╗ ████║██╔═══██╗██╔══██╗██╔════╝
    ██╔████╔██║██║   ██║██║  ██║█████╗  
    ██║╚██╔╝██║██║   ██║██║  ██║██╔══╝  
    ██║ ╚═╝ ██║╚██████╔╝██████╔╝███████╗
    ╚═╝     ╚═╝ ╚═════╝ ╚═════╝ ╚══════╝
  `;

  const hackerMessages = [
    "> INITIALIZING HACKER MODE...",
    "> BYPASSING MAINFRAME...",
    "> ACCESSING NEURAL NETWORK...",
    "> DOWNLOADING MORE RAM...",
    "> ENHANCING PIXELS...",
    "> DECRYPTING THE MATRIX...",
    "> CONNECTING TO GIBSON...",
    "> HACK THE PLANET! 🌍",
    "> WELCOME TO THE FUTURE! 🚀",
    "> TYPE 'HELP' FOR COMMANDS",
    "> RESUME.EXE LOADED SUCCESSFULLY ✅"
  ];

  useEffect(() => {
    if (!isActive) return;

    let messageIndex = 0;
    let charIndex = 0;
    
    const typeMessage = () => {
      if (messageIndex >= hackerMessages.length) return;
      
      setIsTyping(true);
      const message = hackerMessages[messageIndex];
      
      const typeChar = () => {
        if (charIndex <= message.length) {
          setCurrentLine(message.substring(0, charIndex));
          charIndex++;
          setTimeout(typeChar, 50 + Math.random() * 50);
        } else {
          setLines(prev => [...prev, message]);
          setCurrentLine("");
          charIndex = 0;
          messageIndex++;
          setIsTyping(false);
          setTimeout(typeMessage, 500);
        }
      };
      
      typeChar();
    };

    // Start with ASCII art
    setLines(asciiArt.split('\n'));
    setTimeout(typeMessage, 1000);

  }, [isActive]);

  if (!isActive) return null;

  return (
    <div className="hacker-console">
      <div className="console-header">
        <span className="console-title">HACKER_TERMINAL_v2.0</span>
        <div className="console-controls">
          <span className="minimize">_</span>
          <span className="maximize">□</span>
          <span className="close">×</span>
        </div>
      </div>
      <div className="console-body">
        {lines.map((line, index) => (
          <div key={index} className="console-line">
            {line}
          </div>
        ))}
        {isTyping && (
          <div className="console-line current">
            {currentLine}<span className="cursor">█</span>
          </div>
        )}
        <div className="glitch-overlay"></div>
      </div>
    </div>
  );
};

export default HackerConsole;