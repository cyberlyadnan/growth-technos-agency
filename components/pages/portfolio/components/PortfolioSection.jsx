import React from 'react';
import { ArrowUpRight, Sparkles } from 'lucide-react';
import { PortfolioCard } from './PortfolioCard';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

const PortfolioSection = ({ projects }) => {
  return (
    <section className="relative overflow-hidden px-2 md:px-[5%] py-16 md:py-24">
      <div className="absolute inset-0 bg-gradient-to-br from-background via-accent/[0.02] dark:via-accent/5 to-primary/[0.02] dark:to-primary/5" />
      <div
        className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]"
        style={{
          backgroundImage: `linear-gradient(rgba(156, 30, 42, 0.12) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(156, 30, 42, 0.12) 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
        }}
      />

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 dark:bg-primary/20 border border-primary/20 dark:border-primary/30 mb-6">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-semibold text-primary">Our Portfolio</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 tracking-tight">
            <span className="text-foreground">Our </span>
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Portfolio
            </span>
          </h2>
          <p className="text-foreground/70 dark:text-foreground/80 text-base sm:text-lg">
            Excellence across industries. How we transform businesses through digital solutions.
          </p>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-16">
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
                <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
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