
import React from 'react';
import HeroSection from '@/components/HeroSection';
import RetroButtonsSection from '@/components/RetroButtonsSection';
import SocialLinks from '@/components/SocialLinks';
import Footer from '@/components/Footer';

function HomePage() {
  return (
    <div className="h-screen w-full overflow-y-scroll snap-y snap-mandatory scroll-smooth">
      {/* Section 1: Hero */}
      <HeroSection />

      {/* Section 2: Buttons & Socials */}
      <section className="relative h-screen w-full flex flex-col items-center justify-center bg-spaceDark snap-start shrink-0 px-4">
        {/* Background Grid Effect for Section 2 - Optimized with will-change */}
        <div 
          className="absolute inset-0 opacity-10 pointer-events-none will-change-transform"
          style={{
            backgroundImage: `
              linear-gradient(rgba(0, 255, 255, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0, 255, 255, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px',
            transform: 'perspective(500px) rotateX(60deg) translateY(-100px) scale(2)'
          }}
        ></div>

        <div className="relative z-10 w-full max-w-4xl flex flex-col items-center gap-8 md:gap-12">
          <RetroButtonsSection />
          <SocialLinks />
        </div>

        <div className="absolute bottom-0 w-full">
          <Footer />
        </div>
      </section>
    </div>
  );
}

export default HomePage;
