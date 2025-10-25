
import React from 'react';
import { ArrowRight, ExternalLink, Layers, Github, Play, Eye } from 'lucide-react';
import { PortfolioCard } from './PortfolioCard';



const PortfolioSection = ({ projects }) => {
  return (
    <section className="relative py-24 bg-gray-50 dark:bg-[#0e0e12] overflow-hidden transition-colors duration-300">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(#F8810D 1px, transparent 1px), linear-gradient(90deg, #F8810D 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }} />
      </div>

      {/* Gradient Orbs */}
      <div className="absolute top-1/4 right-1/3 w-96 h-96 bg-primary rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-[128px] opacity-20 dark:opacity-10 animate-pulse" />
      <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-secondary rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-[128px] opacity-20 dark:opacity-10 animate-pulse" style={{ animationDelay: '1.5s' }} />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-6">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white dark:bg-[#1c1b26] border border-gray-200 dark:border-[#2a2a36] shadow-sm opacity-0 animate-fade-in" style={{ animationFillMode: 'forwards' }}>
            <Layers className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-gray-600 dark:text-gray-300">Featured Work</span>
          </div>

          {/* Main Heading */}
          <div className="opacity-0 animate-fade-up" style={{ animationDelay: '100ms', animationFillMode: 'forwards' }}>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4">
              Our{" "}
              <span className="relative inline-block">
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  Portfolio
                </span>
                <svg className="absolute -bottom-2 left-0 w-full" height="8" viewBox="0 0 200 8" fill="none">
                  <path d="M0 4C50 4 50 8 100 4C150 0 150 4 200 4" stroke="url(#gradient)" strokeWidth="2" />
                  <defs>
                    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#F8810D" />
                      <stop offset="100%" stopColor="#4C2E91" />
                    </linearGradient>
                  </defs>
                </svg>
              </span>
            </h2>
            
            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Explore a collection of websites we've built for different industries — from interior design to healthcare
            </p>
          </div>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-16">
          {projects?.map((project, index) => (
            <PortfolioCard key={index} project={project} index={index} />
          ))}
        </div>

        {/* View All Button */}
        {/* <div 
          className="text-center opacity-0 animate-fade-up"
          style={{ 
            animationDelay: `${projects?.length * 100}ms`,
            animationFillMode: 'forwards'
          }}
        >
          <button className="group relative inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-primary to-secondary text-white font-semibold rounded-full overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-primary/30 hover:scale-105">
            <span className="relative z-10">View All Projects</span>
            <ArrowRight className="relative z-10 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
            <div className="absolute inset-0 bg-gradient-to-r from-secondary to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </button>
        </div> */}
      </div>

    </section>
  );
};



export default PortfolioSection;