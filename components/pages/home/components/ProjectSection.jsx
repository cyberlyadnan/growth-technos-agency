"use client";
import React, { useState } from 'react';
import { ArrowRight, ExternalLink, Code, Zap, Star, TrendingUp, CheckCircle2 } from 'lucide-react';

const ProjectCard = ({ project, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="opacity-0 animate-fade-up h-full"
      style={{ 
        animationDelay: `${index * 75}ms`,
        animationFillMode: 'forwards'
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="group relative h-full bg-white dark:bg-[#1c1b26] rounded-2xl overflow-hidden border border-gray-200 dark:border-[#2a2a36] hover:border-transparent transition-all duration-500">
        {/* Animated gradient border on hover */}
        <div className="absolute -inset-[1px] bg-gradient-to-r from-primary via-secondary to-primary rounded-2xl opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-500" />
        
        <div className="relative h-full bg-white dark:bg-[#1c1b26] rounded-2xl overflow-hidden flex flex-col">
          {/* Image Section with Advanced Overlay */}
          <div className="relative aspect-video overflow-hidden bg-gray-900">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:rotate-1"
            />
            
            {/* Multi-layer gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            {/* Animated scan line effect */}
            {isHovered && (
              <div className="absolute inset-0 overflow-hidden">
                <div className="absolute inset-x-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent animate-scan" />
              </div>
            )}

            {/* Category Badge with Icon */}
            <div className="absolute top-4 left-4 flex items-center gap-2 px-3 py-1.5 bg-white/95 dark:bg-gray-900/95 backdrop-blur-md rounded-full border border-white/20">
              <div className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse" />
              <span className="text-xs font-bold text-gray-900 dark:text-white uppercase tracking-wider">
                {project.category}
              </span>
            </div>

            {/* Featured Badge */}
            {project.featured && (
              <div className="absolute top-4 right-4 px-3 py-1.5 bg-gradient-to-r from-primary to-secondary rounded-full">
                <div className="flex items-center gap-1.5">
                  <Star className="w-3 h-3 text-white fill-white" />
                  <span className="text-xs font-bold text-white">Featured</span>
                </div>
              </div>
            )}

            {/* Hover Action Buttons */}
            <div className={`absolute inset-0 flex items-center justify-center gap-3 transition-all duration-500 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
              <button className="flex items-center gap-2 px-5 py-2.5 bg-white dark:bg-gray-900 backdrop-blur-md rounded-full text-sm font-bold text-gray-900 dark:text-white hover:scale-105 transition-transform duration-300 shadow-lg">
                <Code className="w-4 h-4" />
                View Details
              </button>
            </div>

            {/* Corner Accent */}
            <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-primary/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </div>

          {/* Content Section */}
          <div className="relative p-6 flex flex-col flex-grow">
            {/* Title with animated gradient */}
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-secondary group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300 line-clamp-2">
              {project.title}
            </h3>

            {/* Description */}
            <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed mb-4 line-clamp-2 flex-grow">
              {project.excerpt || project.description}
            </p>

            {/* Tags/Technologies */}
            {project.tags && (
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.slice(0, 3).map((tag, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-1 bg-gray-100 dark:bg-gray-800 text-xs font-medium rounded-md text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700 hover:border-primary transition-colors duration-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}

            {/* Stats Row */}
            {project.stats && (
              <div className="flex items-center gap-4 mb-4 pb-4 border-b border-gray-200 dark:border-[#2a2a36]">
                {project.stats.map((stat, idx) => (
                  <div key={idx} className="flex items-center gap-1.5">
                    <TrendingUp className="w-3.5 h-3.5 text-primary" />
                    <span className="text-xs font-semibold text-gray-600 dark:text-gray-400">
                      {stat}
                    </span>
                  </div>
                ))}
              </div>
            )}

            {/* Footer with CTA */}
            <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-[#2a2a36] mt-auto">
              <span className="inline-flex items-center gap-2 text-sm font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                <CheckCircle2 className="w-4 h-4 text-primary" />
                Completed
              </span>
              
              <div className="flex items-center justify-center w-9 h-9 rounded-full bg-primary group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-primary/30">
                <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-0.5 transition-transform duration-300" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ProjectsSection = ({ projects }) => {
  return (
    <section className="relative py-24 bg-white dark:bg-[#0e0e12] overflow-hidden transition-colors duration-300">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02] dark:opacity-[0.05]">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #F8810D 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }} />
      </div>

      {/* Gradient Mesh Background */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-[150px] opacity-20 dark:opacity-10 animate-pulse" style={{ animationDuration: '8s' }} />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-[150px] opacity-20 dark:opacity-10 animate-pulse" style={{ animationDuration: '10s', animationDelay: '1s' }} />

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-6">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white dark:bg-[#1c1b26] border border-gray-200 dark:border-[#2a2a36] shadow-lg opacity-0 animate-fade-in" style={{ animationFillMode: 'forwards' }}>
            <Zap className="w-4 h-4 text-primary" />
            <span className="text-sm font-bold text-gray-600 dark:text-gray-300">Our Work</span>
          </div>

          {/* Main Heading with 3D Effect */}
          <div className="opacity-0 animate-fade-up" style={{ animationDelay: '100ms', animationFillMode: 'forwards' }}>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
              <span className="text-gray-900 dark:text-white">Featured </span>
              <span className="relative inline-block">
                <span className="bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent animate-gradient bg-[length:200%_auto]">
                  Projects
                </span>
                {/* Animated underline */}
                <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-primary via-secondary to-primary rounded-full opacity-50 animate-gradient bg-[length:200%_auto]" />
              </span>
            </h2>
            
            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Take a look at some of our recent work and see how we've helped businesses achieve their goals
            </p>
          </div>

          {/* Metrics Bar */}
          <div className="flex items-center justify-center gap-6 sm:gap-12 opacity-0 animate-fade-in" style={{ animationDelay: '200ms', animationFillMode: 'forwards' }}>
            {[
              { label: 'Projects', value: projects?.length || '50+' },
              { label: 'Happy Clients', value: '100%' },
              { label: 'Success Rate', value: '98%' }
            ].map((metric, idx) => (
              <div key={idx} className="text-center">
                <div className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  {metric.value}
                </div>
                <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 mt-1">
                  {metric.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-16">
          {projects?.map((project, index) => (
            <ProjectCard key={project.id || index} project={project} index={index} />
          ))}
        </div>

        {/* CTA Section */}
        <div 
          className="text-center opacity-0 animate-fade-up"
          style={{ 
            animationDelay: `${projects?.length * 75}ms`,
            animationFillMode: 'forwards'
          }}
        >
          <button className="group relative inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-primary to-secondary text-white font-bold rounded-full overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-primary/40 hover:scale-105 text-lg">
            <span className="relative z-10">View All Projects</span>
            <ArrowRight className="relative z-10 w-6 h-6 transition-transform duration-300 group-hover:translate-x-1" />
            <div className="absolute inset-0 bg-gradient-to-r from-secondary to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            
            {/* Animated shine effect */}
            <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
          </button>
        </div>
      </div>

    </section>
  );
};
export default ProjectsSection;