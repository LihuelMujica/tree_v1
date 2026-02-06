
import React from 'react';
import { motion } from 'framer-motion';

function XWingAnimation() {
  const laserBursts = [
    { top: '30px', delay: 0 },
    { top: '30px', delay: 0.2 },
    { top: '46px', delay: 0.1 },
    { top: '46px', delay: 0.3 }
  ];

  const laserStyle = {
    background: 'linear-gradient(90deg, rgba(255,0,0,0) 0%, rgba(255,58,58,1) 45%, rgba(255,0,0,0) 100%)',
    boxShadow: '0 0 10px #FF3B3B, 0 0 18px rgba(255,59,59,0.8)',
    filter: 'brightness(1.6)'
  };

  return (
    <div className="relative w-64 h-40 flex items-center justify-center">
      {/* Floating Container */}
      <motion.div
        animate={{
          y: [-8, 8, -8],
          rotate: [-1, 1, -1]
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="relative z-10 will-change-transform"
      >
        {/* Retro Pixel Art X-Wing SVG */}
        <svg 
          width="120" 
          height="80" 
          viewBox="0 0 60 40" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          shapeRendering="crispEdges"
        >
          {/* Main Body */}
          <rect x="20" y="15" width="30" height="10" fill="#E0E0E0" />
          <rect x="50" y="17" width="10" height="6" fill="#A0A0A0" />
          
          {/* Cockpit */}
          <rect x="30" y="12" width="10" height="3" fill="#333" />
          
          {/* Wings (Top) */}
          <rect x="10" y="5" width="20" height="10" fill="#E0E0E0" />
          <rect x="5" y="5" width="5" height="20" fill="#C0C0C0" />
          <rect x="5" y="5" width="25" height="2" fill="#FF0000" />
          
          {/* Wings (Bottom) */}
          <rect x="10" y="25" width="20" height="10" fill="#E0E0E0" />
          <rect x="5" y="15" width="5" height="20" fill="#C0C0C0" />
          <rect x="5" y="33" width="25" height="2" fill="#FF0000" />
          
          {/* Engines */}
          <rect x="5" y="8" width="5" height="4" fill="#444" />
          <rect x="5" y="28" width="5" height="4" fill="#444" />
          
          {/* Engine Glow */}
          <rect x="0" y="9" width="5" height="2" fill="#00FFFF" className="animate-pulse" />
          <rect x="0" y="29" width="5" height="2" fill="#00FFFF" className="animate-pulse" />
        </svg>

        {/* Laser Bursts from the Cannons */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
          {laserBursts.map((laser, index) => (
            <motion.div
              key={`laser-${index}`}
              className="absolute left-[92px] h-[4px] rounded-full"
              style={{ ...laserStyle, top: laser.top }}
              animate={{
                width: ['0px', '120px', '160px', '0px'],
                opacity: [0, 1, 1, 0],
                x: [0, 20, 140, 200]
              }}
              transition={{
                duration: 0.8,
                repeat: Infinity,
                ease: "linear",
                delay: laser.delay,
                repeatDelay: 0.25
              }}
            />
          ))}
        </div>
      </motion.div>
    </div>
  );
}

export default XWingAnimation;
