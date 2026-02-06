
import React from 'react';
import { motion } from 'framer-motion';
import buttonLinks from '../data/buttonLinks.json';

function RetroButtonsSection() {
  const { retroButtons } = buttonLinks;

  return (
    <div className="w-full max-w-md mx-auto flex flex-col gap-4 z-10">
      {retroButtons.map((btn, index) => (
        <motion.a
          key={btn.label}
          href={btn.link}
          initial={{ x: -30, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ delay: index * 0.05, type: 'spring', stiffness: 120, damping: 20 }}
          className="group relative block w-full will-change-transform"
        >
          <div 
            className={`
              w-full py-4 px-6
              border-2 border-retroCyan
              bg-black/60 backdrop-blur-sm
              font-orbitron font-bold text-lg tracking-widest text-center
              text-retroCyan
              transition-all duration-200
              hover:bg-retroCyan/20
              hover:shadow-[0_0_15px_#00FFFF]
              hover:scale-[1.01]
              uppercase
              relative overflow-hidden
            `}
            style={{
              textShadow: `0 0 5px #00FFFF`,
              boxShadow: `inset 0 0 10px rgba(0, 255, 255, 0.2)`
            }}
          >
            {btn.label}
            
            {/* Optimized Hover Effect - CSS only animation */}
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:animate-[shimmer_0.8s_infinite]" />
          </div>
        </motion.a>
      ))}
    </div>
  );
}

export default RetroButtonsSection;
