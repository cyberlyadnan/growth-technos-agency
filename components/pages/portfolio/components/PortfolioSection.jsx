import React from 'react';
import { ArrowRight, Layers, Sparkles } from 'lucide-react';
import { PortfolioCard } from './PortfolioCard';
import { AnimatedDivider } from '@/components/ui/AnimatedDivider';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

const PortfolioSection = ({ projects }) => {
  return (
    <section className="relative px-2 md:px-[5%] py-24 md:py-32 overflow-hidden">
      {/* Animated Divider at Top */}
      <div className="absolute top-0 left-0 right-0 z-20">
        <AnimatedDivider />
      </div>

      {/* Futuristic Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-primary/5 dark:via-primary/10 to-accent/5 dark:to-accent/10"></div>
      
      {/* Tech Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.04] dark:opacity-[0.06]">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(rgba(156, 30, 42, 0.15) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(156, 30, 42, 0.15) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      {/* Floating Orbs */}
      <div className="absolute top-20 right-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl opacity-50"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl opacity-50"></div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20 max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary/15 dark:bg-primary/25 border border-primary/30 dark:border-primary/40 mb-8 backdrop-blur-sm shadow-lg">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-semibold text-primary">Our Portfolio</span>
          </div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            <span className="text-foreground">Our </span>
            <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
              Portfolio
            </span>
          </h2>

          <p className="text-lg sm:text-xl md:text-2xl text-foreground/80 dark:text-foreground/90 font-light max-w-3xl mx-auto leading-relaxed">
            Showcasing excellence across industries. Discover how we transform businesses through innovative digital solutions.
          </p>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-16">
          {projects?.map((project, index) => (
            <PortfolioCard key={index} project={project} index={index} />
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center relative">
          <div className="absolute left-1/2 -translate-x-1/2 -top-8 w-24 h-px bg-gradient-to-r from-transparent via-primary to-transparent"></div>
          
          <div className="relative inline-block">
            <Button 
              asChild 
              size="lg" 
              className="group relative overflow-hidden bg-gradient-to-r from-primary via-accent to-secondary hover:from-primary/90 hover:via-accent/90 hover:to-secondary/90 text-white px-8 md:px-10 py-6 md:py-7 text-base md:text-lg font-semibold rounded-xl shadow-xl hover:shadow-2xl hover:shadow-primary/40 transition-all duration-500 hover:-translate-y-1"
            >
              <Link href="/portfolio" className="flex items-center justify-center gap-2 relative z-10">
                <span className="relative">
                  View All Projects
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-500"></span>
                </span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            
            {/* Glow effect behind button */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary via-accent to-secondary rounded-xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-500 -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};



export default PortfolioSection;