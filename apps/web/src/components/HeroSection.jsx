
import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { neonStyles } from './NeonGlow';

function HeroSection() {
  const { scrollY } = useScroll();
  // Optimized parallax - reduced range and complexity
  const y1 = useTransform(scrollY, [0, 500], [0, 100]);
  const y2 = useTransform(scrollY, [0, 500], [0, -80]);

  // Generate random stars - reduced count for performance
  const stars = Array.from({ length: 30 }).map((_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 100}%`,
    size: `${Math.random() * 2 + 1}px`,
    duration: `${Math.random() * 3 + 2}s`,
    delay: `${Math.random() * 2}s`
  }));

  return (
    <>
      <Helmet>
        <title>Lihuel Mujica | Software Developer</title>
        <meta name="description" content="Portfolio of Lihuel Mujica, a Software Developer building systems by day and gaming by night." />
      </Helmet>

      <section className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-spaceDark snap-start shrink-0">
        {/* Background Image with Overlay - Eager load LCP image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1580824026089-8b429c3834f0)',
          }}
        >
          <div className="absolute inset-0 bg-black/60 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-spaceDark/50 to-spaceDark"></div>
        </div>

        {/* Twinkling Stars - CSS Animation */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          {stars.map((star) => (
            <div
              key={star.id}
              className="star"
              style={{
                left: star.left,
                top: star.top,
                width: star.size,
                height: star.size,
                '--duration': star.duration,
                '--delay': star.delay
              }}
            />
          ))}
        </div>

        {/* Floating Spaceship (Parallax Decoration) */}
        <motion.div 
          style={{ y: y2 }}
          className="absolute top-20 right-[10%] md:right-[20%] z-10 opacity-80 animate-float hidden md:block will-change-transform"
        >
          <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="#00FFFF" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
          </svg>
        </motion.div>

        {/* Main Content */}
        <div className="relative z-20 text-center px-4 max-w-4xl mx-auto flex flex-col items-center gap-6">
          
          {/* Profile Image with Color Cycle */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="relative group"
          >
            <div className="w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-retroMagenta shadow-[0_0_20px_#FF00FF] overflow-hidden bg-black animate-hue-cycle will-change-filter">
              <img 
                src="https://horizons-cdn.hostinger.com/32282765-b170-4908-8857-da1bc7ececcf/1151ef2d4bc123262bab08859e5bc1c7.png" 
                alt="Lihuel Mujica" 
                className="w-full h-full object-cover"
                loading="eager"
              />
            </div>
          </motion.div>

          {/* Name & Subtitle */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="space-y-2"
          >
            <h1 className="font-orbitron font-black text-4xl md:text-6xl lg:text-7xl text-white tracking-wider uppercase text-glow-cyan">
              Lihuel Mujica
            </h1>
            <h2 
              className="font-orbitron font-bold text-xl md:text-2xl tracking-widest uppercase"
              style={neonStyles.textGlow.magenta}
            >
              Software Developer
            </h2>
          </motion.div>

          {/* Description - 3 Lines */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="max-w-2xl"
          >
            <p className="font-retro text-xs md:text-sm leading-loose text-retroYellow tracking-wide">
              Building software by day,<br/>
              playing games by night,<br/>
              breaking systems, in between.
            </p>
          </motion.div>

          {/* Pixel Art X-Wing Image - Lazy Loaded */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="mt-6 will-change-transform"
          >
            <img 
              src="https://horizons-cdn.hostinger.com/32282765-b170-4908-8857-da1bc7ececcf/554c0f5827d3ad171f0cbd8efbad2f74.png"
              alt="Retro Pixel Art X-Wing"
              className="w-48 md:w-64 h-auto drop-shadow-[0_0_10px_rgba(255,0,0,0.5)] animate-float"
              loading="lazy"
              width="256"
              height="128"
            />
          </motion.div>
        </div>
      </section>
    </>
  );
}

export default HeroSection;
