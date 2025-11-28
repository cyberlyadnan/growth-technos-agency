"use client";
import React, { useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Sparkles } from 'lucide-react';
import { AnimatedDivider } from '@/components/ui/AnimatedDivider';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';

// Futuristic Project Showcase Item with Framer Motion
const ProjectShowcase = ({ project, index }) => {
  const isEven = index % 2 === 0;
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-200px" });
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  // Fade out when scrolled out of view
  const opacity = useTransform(
    scrollYProgress,
    [0, 0.1, 0.9, 1],
    [0, 1, 1, 0]
  );

  return (
    <motion.div
      ref={ref}
      style={{
        opacity,
        scrollSnapAlign: 'start',
        scrollSnapStop: 'always'
      }}
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, margin: "-100px" }}
      transition={{
        duration: 0.6,
        ease: [0.25, 0.1, 0.25, 1],
        delay: index * 0.1,
      }}
      className="group relative h-[70vh] overflow-hidden"
    >
      <Link href={`/projects/${project.id}`} className="block h-full">
        {/* Image Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0">
            <Image
              src={project.image || '/placeholder.jpg'}
              alt={project.title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
              sizes="100vw"
            />
          </div>
          
          {/* Stronger Gradient Overlay for Text Visibility */}
          <div className={`absolute inset-0 ${isEven ? 'bg-gradient-to-r' : 'bg-gradient-to-l'} from-background/98 via-background/90 to-background/70 dark:from-background/99 dark:via-background/95 dark:to-background/85`}></div>
          
          {/* Dark Overlay on Background Image for Better Contrast */}
          <div className="absolute inset-0 bg-black/50 dark:bg-black/60"></div>
          
          {/* Additional Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent dark:from-black/70 dark:via-black/40"></div>
          
          {/* Tech Grid Overlay */}
          <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]">
            <div className="absolute inset-0" style={{
              backgroundImage: `linear-gradient(rgba(156, 30, 42, 0.2) 1px, transparent 1px),
                                linear-gradient(90deg, rgba(156, 30, 42, 0.2) 1px, transparent 1px)`,
              backgroundSize: '40px 40px'
            }}></div>
          </div>

          {/* Circuit Lines */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className={`absolute ${isEven ? 'left-0' : 'right-0'} top-1/4 w-px h-24 bg-gradient-to-b from-primary/30 via-accent/30 to-transparent`}></div>
            <div className={`absolute ${isEven ? 'right-0' : 'left-0'} bottom-1/4 w-px h-24 bg-gradient-to-t from-secondary/30 via-primary/30 to-transparent`}></div>
          </div>
        </div>

        {/* Content Overlay with Better Visibility */}
        <div className="relative z-10 h-full flex items-center">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6 md:gap-8 items-center">
              {/* Image Preview - Compact */}
              <div className={`order-2 ${isEven ? 'md:order-1' : 'md:order-2'} relative`}>
                <div className="relative aspect-[4/3] rounded-xl overflow-hidden border-2 border-primary/30 dark:border-primary/40 group-hover:border-primary/60 transition-all duration-700 shadow-xl">
                  {/* Glow Effect */}
                  <div className="absolute -inset-1 bg-gradient-to-r from-primary via-accent to-secondary rounded-xl opacity-0 group-hover:opacity-40 blur-2xl transition-opacity duration-700"></div>
                  
                  <div className="relative w-full h-full">
                    <Image
                      src={project.image || '/placeholder.jpg'}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                  
                  {/* Scan Line Effect */}
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent animate-pulse"></div>
                  </div>

                  {/* Corner Indicators */}
                  <div className="absolute top-3 left-3 w-2.5 h-2.5 bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-lg shadow-primary/50"></div>
                  <div className="absolute bottom-3 right-3 w-2.5 h-2.5 bg-accent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-lg shadow-accent/50" style={{ transitionDelay: '0.1s' }}></div>
                </div>
              </div>

              {/* Content Side with Better Background */}
              <div className={`order-1 ${isEven ? 'md:order-2' : 'md:order-1'} space-y-4`}>
                {/* Category Badge */}
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/20 dark:bg-primary/30 border border-primary/40 dark:border-primary/50 backdrop-blur-md shadow-lg">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse"></div>
                  <span className="text-xs font-semibold text-primary uppercase tracking-wider">
                    {project.category || 'Project'}
                  </span>
                </div>

                {/* Title with Strong Background */}
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight">
                  <span className="relative inline-block">
                    <span className="relative z-10 text-foreground drop-shadow-lg">{project.title}</span>
                    <span className="absolute inset-0 bg-background/80 dark:bg-background/90 blur-xl -z-0"></span>
                  </span>
                </h3>

                {/* Description with Background */}
                <p className="text-base md:text-lg text-foreground/90 dark:text-foreground/95 leading-relaxed max-w-xl relative">
                  <span className="relative z-10 drop-shadow-md">
                    {project.excerpt || project.description || 'A cutting-edge project showcasing innovation and excellence.'}
                  </span>
                  <span className="absolute inset-0 bg-background/60 dark:bg-background/70 blur-md -z-0 rounded-lg"></span>
                </p>

                {/* Key Features - Compact */}
                {project.features && project.features.length > 0 && (
                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.features.slice(0, 2).map((feature, idx) => (
                      <div
                        key={idx}
                        className="px-3 py-1.5 rounded-lg bg-card/80 dark:bg-card/60 backdrop-blur-md border border-border/60 text-xs md:text-sm font-medium text-foreground/90 shadow-sm"
                      >
                        {typeof feature === 'string' ? feature : feature.title || feature}
                      </div>
                    ))}
                  </div>
                )}

                {/* CTA - Compact */}
                <div className="flex items-center gap-3 pt-2">
                  <div className="flex items-center gap-2 text-primary font-semibold text-sm md:text-base group-hover:gap-3 transition-all duration-300">
                    <span>Explore</span>
                    <ArrowRight className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Hover Glow Effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-accent/0 to-secondary/0 opacity-0 group-hover:opacity-10 transition-opacity duration-700 pointer-events-none"></div>
      </Link>
    </motion.div>
  );
};

const ProjectsSection = ({ projects }) => {
  return (
    <section className="relative overflow-hidden">
      {/* Animated Divider at Top */}
      <div className="absolute top-0 left-0 right-0 z-20">
        <AnimatedDivider />
      </div>

      {/* Futuristic Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-primary/5 dark:via-primary/10 to-accent/5 dark:to-accent/10"></div>
      
      {/* Animated Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.04] dark:opacity-[0.06]">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(rgba(156, 30, 42, 0.15) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(156, 30, 42, 0.15) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      {/* Floating Orbs */}
      <div className="absolute top-20 right-10 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>

      <div className="relative z-10">
        {/* Section Header - More Compact */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="container mx-auto px-4 sm:px-6 lg:px-8 pt-16 md:pt-20 pb-12 md:pb-16"
        >
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary/15 dark:bg-primary/25 border border-primary/30 dark:border-primary/40 mb-8 backdrop-blur-sm shadow-lg">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-semibold text-primary">Featured Work</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
              <span className="text-foreground">Featured </span>
              <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
                Projects
              </span>
            </h2>

            <p className="text-base sm:text-lg md:text-xl text-foreground/80 dark:text-foreground/90 font-light max-w-3xl mx-auto leading-relaxed">
              Showcasing innovation, excellence, and transformative digital solutions
            </p>
          </div>
        </motion.div>

        {/* Projects Showcase - Scroll Snap Parallax */}
        <div 
          className="space-y-0"
          style={{
            scrollSnapType: 'y mandatory',
            scrollBehavior: 'smooth',
            WebkitOverflowScrolling: 'touch'
          }}
        >
          {projects?.map((project, index) => (
            <ProjectShowcase
              key={project.id || index}
              project={project}
              index={index}
            />
          ))}
        </div>

        {/* CTA Section - More Compact */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 text-center relative"
        >
          <div className="absolute left-1/2 -translate-x-1/2 -top-8 w-24 h-px bg-gradient-to-r from-transparent via-primary to-transparent"></div>
          
          <div className="relative inline-block">
            <Link
              href="/projects"
              className="group relative inline-flex items-center gap-3 px-10 py-6 bg-gradient-to-r from-primary via-accent to-secondary hover:from-primary/90 hover:via-accent/90 hover:to-secondary/90 text-white font-bold rounded-xl overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-primary/40 hover:-translate-y-1 text-lg md:text-xl"
            >
              <span className="relative z-10">View All Projects</span>
              <ArrowRight className="relative z-10 w-6 h-6 transition-transform duration-300 group-hover:translate-x-1" />
              
              {/* Glow effect behind button */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary via-accent to-secondary rounded-xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-500 -z-10"></div>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
export default ProjectsSection;