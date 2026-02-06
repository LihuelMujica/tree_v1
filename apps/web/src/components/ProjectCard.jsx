
import React, { useState } from 'react';
import { ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';
import { neonStyles } from './NeonGlow';

function ProjectCard({ title, description, techStack, link, accentColor = 'cian' }) {
  const [isHovered, setIsHovered] = useState(false);

  // Pre-calculate styles to avoid re-calculation on render
  const baseStyle = neonStyles.border[accentColor];
  const hoverStyle = neonStyles.borderHover[accentColor];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="relative bg-black/80 backdrop-blur-sm rounded-lg p-6 transition-all duration-300 will-change-transform"
      style={isHovered ? hoverStyle : baseStyle}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="space-y-4">
        <h3 
          className="text-2xl font-bold font-mono"
          style={neonStyles.textGlow[accentColor]}
        >
          {title}
        </h3>
        
        <p className="text-gray-300 leading-relaxed">
          {description}
        </p>
        
        <div className="flex flex-wrap gap-2">
          {techStack.map((tech, index) => (
            <span
              key={index}
              className="px-3 py-1 text-xs font-mono bg-black/50 rounded-full border"
              style={{ 
                borderColor: accentColor === 'cian' ? '#00D9FF' : accentColor === 'magenta' ? '#FF006E' : '#39FF14',
                color: accentColor === 'cian' ? '#00D9FF' : accentColor === 'magenta' ? '#FF006E' : '#39FF14'
              }}
            >
              {tech}
            </span>
          ))}
        </div>
        
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2 font-mono text-sm transition-all duration-300 rounded hover:bg-white/5"
          style={isHovered ? neonStyles.borderHover[accentColor] : neonStyles.border[accentColor]}
        >
          <span style={{ color: accentColor === 'cian' ? '#00D9FF' : accentColor === 'magenta' ? '#FF006E' : '#39FF14' }}>
            View Project
          </span>
          <ExternalLink size={16} />
        </a>
      </div>
    </motion.div>
  );
}

export default ProjectCard;
