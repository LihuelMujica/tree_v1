
import React from 'react';

// Optimized CSS-in-JS styles for neon effects
// Reduced shadow layers for better performance
export const neonStyles = {
  textGlow: {
    cian: {
      textShadow: '0 0 10px #00D9FF, 0 0 30px #00D9FF',
      color: '#00D9FF'
    },
    magenta: {
      textShadow: '0 0 10px #FF006E, 0 0 30px #FF006E',
      color: '#FF006E'
    },
    verde: {
      textShadow: '0 0 10px #39FF14, 0 0 30px #39FF14',
      color: '#39FF14'
    },
    yellow: {
      textShadow: '0 0 10px #FFD700, 0 0 30px #FFD700',
      color: '#FFD700'
    }
  },
  
  boxGlow: {
    cian: {
      boxShadow: '0 0 15px #00D9FF, inset 0 0 10px rgba(0, 217, 255, 0.2)'
    },
    magenta: {
      boxShadow: '0 0 15px #FF006E, inset 0 0 10px rgba(255, 0, 110, 0.2)'
    },
    verde: {
      boxShadow: '0 0 15px #39FF14, inset 0 0 10px rgba(57, 255, 20, 0.2)'
    }
  },
  
  border: {
    cian: {
      border: '2px solid #00D9FF',
      boxShadow: '0 0 10px #00D9FF'
    },
    magenta: {
      border: '2px solid #FF006E',
      boxShadow: '0 0 10px #FF006E'
    },
    verde: {
      border: '2px solid #39FF14',
      boxShadow: '0 0 10px #39FF14'
    }
  },
  
  borderHover: {
    cian: {
      border: '2px solid #00D9FF',
      boxShadow: '0 0 25px #00D9FF, inset 0 0 15px rgba(0, 217, 255, 0.3)'
    },
    magenta: {
      border: '2px solid #FF006E',
      boxShadow: '0 0 25px #FF006E, inset 0 0 15px rgba(255, 0, 110, 0.3)'
    },
    verde: {
      border: '2px solid #39FF14',
      boxShadow: '0 0 25px #39FF14, inset 0 0 15px rgba(57, 255, 20, 0.3)'
    }
  },

  laser: {
    green: {
      background: 'linear-gradient(90deg, rgba(57,255,20,0) 0%, rgba(57,255,20,1) 50%, rgba(57,255,20,0) 100%)',
      boxShadow: '0 0 15px #39FF14',
      filter: 'brightness(1.5)'
    },
    cyan: {
      background: 'linear-gradient(90deg, rgba(0,217,255,0) 0%, rgba(0,217,255,1) 50%, rgba(0,217,255,0) 100%)',
      boxShadow: '0 0 15px #00D9FF',
      filter: 'brightness(1.5)'
    }
  }
};

export const getNeonStyle = (type, color, hover = false) => {
  if (type === 'text') return neonStyles.textGlow[color];
  if (type === 'box') return neonStyles.boxGlow[color];
  if (type === 'border') return hover ? neonStyles.borderHover[color] : neonStyles.border[color];
  if (type === 'laser') return neonStyles.laser[color];
  return {};
};

export default neonStyles;
