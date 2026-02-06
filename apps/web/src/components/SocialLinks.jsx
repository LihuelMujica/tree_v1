
import React from 'react';
import { Github, Linkedin, Music, Instagram } from 'lucide-react';
import { motion } from 'framer-motion';

function SocialLinks() {
  const links = [
    { name: 'GitHub', icon: Github, url: 'https://github.com', color: 'text-retroCyan', border: 'border-retroCyan', shadow: 'shadow-[0_0_15px_#00FFFF]' },
    { name: 'LinkedIn', icon: Linkedin, url: 'https://linkedin.com', color: 'text-retroMagenta', border: 'border-retroMagenta', shadow: 'shadow-[0_0_15px_#FF00FF]' },
    { name: 'Spotify', icon: Music, url: 'https://spotify.com', color: 'text-retroYellow', border: 'border-retroYellow', shadow: 'shadow-[0_0_15px_#FFD700]' },
    { name: 'Instagram', icon: Instagram, url: 'https://instagram.com', color: 'text-retroWhite', border: 'border-retroWhite', shadow: 'shadow-[0_0_15px_#FFFFFF]' },
  ];

  return (
    <div className="w-full py-8">
      <div className="flex flex-wrap justify-center gap-6">
        {links.map((link, index) => {
          const Icon = link.icon;
          return (
            <motion.a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`
                group relative flex items-center justify-center w-14 h-14
                border-2 ${link.border} rounded-full bg-black/50 backdrop-blur-sm
                transition-all duration-300 ease-out
                hover:${link.shadow} hover:scale-110
                will-change-transform
              `}
              whileHover={{ y: -5 }}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.05, type: 'spring', stiffness: 200 }}
            >
              <Icon className={`w-6 h-6 ${link.color} transition-transform group-hover:rotate-12`} />
              <span className="sr-only">{link.name}</span>
            </motion.a>
          );
        })}
      </div>
    </div>
  );
}

export default SocialLinks;
