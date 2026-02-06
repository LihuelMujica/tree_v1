
import React from 'react';
import { motion } from 'framer-motion';

function RetroSocialSection() {
  const buttons = [
    { label: 'MY STORE', color: 'retroYellow', hex: '#FFD700', link: '#' },
    { label: 'INSPIRATION', color: 'retroCyan', hex: '#00FFFF', link: '#' },
    { label: 'STOCKLIST', color: 'retroMagenta', hex: '#FF00FF', link: '#' },
    { label: 'CONTACT', color: 'retroWhite', hex: '#FFFFFF', link: '#' },
  ];

  return (
    <section className="py-20 px-4 bg-spaceDark relative overflow-hidden">
      {/* Optimized Grid Background */}
      <div 
        className="absolute inset-0 opacity-10 pointer-events-none will-change-transform"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255, 0, 255, 0.2) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 0, 255, 0.2) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
          transform: 'perspective(500px) rotateX(60deg) translateY(-100px) scale(2)'
        }}
      ></div>

      <div className="max-w-3xl mx-auto relative z-10 flex flex-col gap-6">
        {buttons.map((btn, index) => (
          <motion.a
            key={btn.label}
            href={btn.link}
            initial={{ x: index % 2 === 0 ? -30 : 30, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: index * 0.05, type: 'spring', stiffness: 120, damping: 20 }}
            className="group relative block w-full will-change-transform"
          >
            <div 
              className={`
                w-full py-6 px-8 
                border-2 border-${btn.color} 
                bg-black/50 backdrop-blur-sm
                font-orbitron font-bold text-xl md:text-2xl tracking-widest text-center
                text-${btn.color}
                transition-all duration-200
                hover:bg-${btn.color}/10
                hover:shadow-[0_0_20px_${btn.hex}]
                hover:scale-[1.01]
                uppercase
              `}
              style={{
                textShadow: `0 0 5px ${btn.hex}`,
                boxShadow: `inset 0 0 10px ${btn.hex}20`
              }}
            >
              {btn.label}
              
              {/* Optimized Glitch Effect */}
              <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 pointer-events-none h-[2px] w-full animate-accordion-down" />
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
}

export default RetroSocialSection;
