"use client";

import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: [0.25, 0.1, 0.25, 1], delay: i * 0.08 },
  }),
};

export const PortfolioCard = ({ project, index }) => {
  return (
    <motion.div
      custom={index}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-40px" }}
      variants={cardVariants}
      className="group h-full"
    >
      <Link
        href={project.link || "#"}
        target="_blank"
        rel="noopener noreferrer"
        className="relative block h-full rounded-2xl overflow-hidden border border-border/60 dark:border-border/50 bg-card/70 dark:bg-card/50 backdrop-blur-sm shadow-lg shadow-black/[0.02] dark:shadow-black/10 transition-all duration-300 hover:shadow-xl hover:shadow-primary/5 dark:hover:shadow-primary/10 hover:border-primary/30 dark:hover:border-primary/40 hover:-translate-y-1"
      >
        {/* Image */}
        <div className="relative aspect-[4/3] overflow-hidden bg-muted/30">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-80" />
          <div className="absolute bottom-0 left-0 right-0 p-4 flex items-end justify-between">
            {project.technologies?.length > 0 && (
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-primary/90 dark:bg-primary text-primary-foreground text-xs font-medium">
                {project.technologies[0]}
              </span>
            )}
            <span className="flex items-center justify-center w-9 h-9 rounded-lg bg-background/80 dark:bg-background/90 border border-border/50 text-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <ArrowUpRight className="w-4 h-4" />
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-5 md:p-6 flex flex-col min-h-[140px]">
          <h3 className="text-lg md:text-xl font-bold text-foreground mb-2 line-clamp-2 group-hover:text-primary transition-colors">
            {project.title}
          </h3>
          <p className="text-sm text-foreground/70 dark:text-foreground/75 line-clamp-2 leading-relaxed flex-1 mb-3">
            {project.description}
          </p>
          {project.technologies && project.technologies.length > 1 && (
            <div className="flex flex-wrap gap-1.5 mb-3">
              {project.technologies.slice(0, 3).map((tech, idx) => (
                <span
                  key={idx}
                  className="px-2 py-0.5 rounded bg-muted/80 dark:bg-muted/60 text-xs text-foreground/70"
                >
                  {tech}
                </span>
              ))}
            </div>
          )}
          <span className="inline-flex items-center gap-1.5 mt-1 px-3 py-2 rounded-lg bg-primary/10 dark:bg-primary/15 border border-primary/20 text-sm font-semibold text-primary w-fit">
            View project
            <ArrowUpRight className="w-4 h-4 shrink-0" />
          </span>
        </div>

        {/* Top accent line on hover */}
        <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary via-accent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-t-2xl" />
      </Link>
    </motion.div>
  );
};
