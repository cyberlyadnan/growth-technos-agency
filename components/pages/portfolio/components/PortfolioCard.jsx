"use client";

import { ExternalLink, Eye, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

export const PortfolioCard = ({ project, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: 0.6,
        ease: [0.25, 0.1, 0.25, 1],
        delay: index * 0.1,
      }}
      className="group relative h-full min-h-[500px]"
    >
      <div className="relative h-full overflow-hidden rounded-3xl bg-card/80 dark:bg-card/60 backdrop-blur-xl border border-border/50 dark:border-border/40 group-hover:border-primary/30 dark:group-hover:border-primary/40 transition-all duration-700 shadow-xl shadow-black/5 dark:shadow-black/20 group-hover:shadow-2xl group-hover:shadow-primary/10 dark:group-hover:shadow-primary/20 group-hover:-translate-y-1">
        
        {/* Glow - Always visible but stronger on hover */}
        <div className="absolute -inset-1 bg-gradient-to-br from-primary/5 via-accent/5 to-secondary/5 dark:from-primary/10 dark:via-accent/10 dark:to-secondary/10 rounded-3xl opacity-60 group-hover:opacity-100 blur-2xl transition-opacity duration-700 -z-10"></div>
        
        {/* Additional Shadow Layer */}
        <div className="absolute -inset-0.5 bg-gradient-to-br from-primary/0 via-accent/0 to-secondary/0 rounded-3xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-700 -z-10"></div>

        <div className="absolute inset-0 overflow-hidden">

          {/* Left Content — Reduced Width */}
          <div className="absolute left-0 top-0 bottom-0 w-[35%] dark:bg-card/70 backdrop-blur-2xl">
            <div className="relative h-full p-5 md:p-6 flex flex-col">

              {/* Status */}
              <div className="mb-4">
                <div className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-emerald-500/90 dark:bg-emerald-600/90 rounded-full text-xs font-semibold text-white border border-emerald-400/30 backdrop-blur-md">
                  <div className="w-1.5 h-1.5 bg-white rounded-full animate-pulse" />
                  Live
                </div>
              </div>

              {/* Title */}
              <h3 className="text-xl md:text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300 leading-tight">
                {project.title}
              </h3>

              {/* Description */}
              <p className="text-xs md:text-sm text-foreground/70 leading-relaxed mb-4 line-clamp-4 min-h-[4rem]">
                {project.description}
              </p>

              {/* Bottom */}
              <div className="mt-auto space-y-3 pt-4">

                {/* Tech */}
                {project.technologies && (
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 2).map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-1 bg-card/60 dark:bg-card/40 backdrop-blur-sm text-xs font-medium rounded-md text-foreground/70 border border-border/40"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                )}

                {/* View button */}
                <Link
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/btn inline-flex items-center gap-2 px-4 py-2 bg-primary/10 hover:bg-primary/20 rounded-lg text-xs md:text-sm font-semibold text-primary border border-primary/30 hover:border-primary/50 transition-all duration-300 w-full justify-center"
                >
                  <span>View Project</span>
                  <ArrowUpRight className="w-4 h-4 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>

          {/* Right Side Image — Increased Width + Adjusted Diagonal */}
          <div className="absolute right-0 top-0 bottom-0 w-[65%] clip-path-diagonal-left-small">
            <div className="relative w-full h-full">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-110"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-l from-background/95 via-background/80 to-transparent"></div>

              {/* Tech Grid */}
              <div className="absolute inset-0 opacity-[0.03]">
                <div
                  className="absolute inset-0"
                  style={{
                    backgroundImage: `linear-gradient(rgba(156, 30, 42, 0.2) 1px, transparent 1px),
                                      linear-gradient(90deg, rgba(156, 30, 42, 0.2) 1px, transparent 1px)`,
                    backgroundSize: "30px 30px",
                  }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Futuristic Border Lines */}
        <div className="absolute inset-0 overflow-hidden rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
          
          {/* Updated diagonal border (moves from 45% → 35%) */}
          <div className="absolute top-0 left-[35%] w-px h-full bg-gradient-to-b from-transparent via-primary/40 to-transparent"></div>

          {/* Corner Lines */}
          <div className="absolute top-0 left-0 w-16 h-px bg-gradient-to-r from-primary/60 to-transparent"></div>
          <div className="absolute top-0 right-0 w-16 h-px bg-gradient-to-l from-accent/60 to-transparent"></div>
          <div className="absolute bottom-0 left-0 w-16 h-px bg-gradient-to-r from-primary/60 to-transparent"></div>
          <div className="absolute bottom-0 right-0 w-16 h-px bg-gradient-to-l from-accent/60 to-transparent"></div>
        </div>

        {/* Floating External Icon */}
        <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20">
          <div className="w-12 h-12 rounded-xl bg-primary/10 backdrop-blur-sm border border-primary/30 flex items-center justify-center">
            <ExternalLink className="w-5 h-5 text-primary" />
          </div>
        </div>

        {/* Scan Line */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-3xl pointer-events-none">
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent animate-pulse"></div>
        </div>
      </div>
    </motion.div>
  );
};
