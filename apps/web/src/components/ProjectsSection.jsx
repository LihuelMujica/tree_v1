
import React from 'react';
import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';
import { neonStyles } from './NeonGlow';

function ProjectsSection() {
  const projects = [
    {
      title: 'NeonOS',
      description: 'A futuristic operating system interface built with React and Three.js. Features real-time 3D visualizations and cyberpunk aesthetics.',
      techStack: ['React', 'Three.js', 'WebGL', 'Tailwind CSS'],
      link: '#',
      accentColor: 'cian'
    },
    {
      title: 'CyberChat',
      description: 'Real-time messaging platform with end-to-end encryption. Built for privacy-conscious users in the digital age.',
      techStack: ['Node.js', 'Socket.io', 'MongoDB', 'Express'],
      link: '#',
      accentColor: 'magenta'
    },
    {
      title: 'Matrix Dashboard',
      description: 'Analytics dashboard with live data visualization. Monitor your digital empire with style and precision.',
      techStack: ['React', 'D3.js', 'Firebase', 'Material-UI'],
      link: '#',
      accentColor: 'verde'
    },
    {
      title: 'Neon Arcade',
      description: 'Retro-futuristic gaming platform featuring classic games with modern twists. Built with pure JavaScript and Canvas API.',
      techStack: ['JavaScript', 'Canvas API', 'Web Audio API', 'CSS3'],
      link: '#',
      accentColor: 'cian'
    }
  ];

  return (
    <section className="py-20 px-4 relative">
      {/* Grid Background - Static to reduce repaint */}
      <div 
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255, 0, 110, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 0, 110, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}
      ></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 
            className="text-5xl md:text-6xl font-bold font-mono mb-4"
            style={neonStyles.textGlow.magenta}
          >
            Featured Projects
          </h2>
          <div 
            className="w-32 h-1 mx-auto rounded-full"
            style={neonStyles.boxGlow.magenta}
          ></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              techStack={project.techStack}
              link={project.link}
              accentColor={project.accentColor}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProjectsSection;
