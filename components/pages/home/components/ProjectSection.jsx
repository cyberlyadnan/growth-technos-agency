"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Sparkles } from "lucide-react";
import { AnimatedDivider } from "@/components/ui/AnimatedDivider";
import { motion } from "framer-motion";
import { getProjectSlug } from "@/lib/utils";

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: [0.25, 0.1, 0.25, 1], delay: i * 0.08 },
  }),
};

function FeaturedProjectCard({ project, index }) {
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
        href={`/projects/${getProjectSlug(project)}`}
        className="relative block h-full rounded-2xl overflow-hidden border border-border/60 dark:border-border/50 bg-card/70 dark:bg-card/50 backdrop-blur-sm shadow-lg shadow-black/[0.02] dark:shadow-black/10 transition-all duration-300 hover:shadow-xl hover:shadow-primary/5 dark:hover:shadow-primary/10 hover:border-primary/30 dark:hover:border-primary/40 hover:-translate-y-1"
      >
        {/* Image */}
        <div className="relative aspect-[4/3] overflow-hidden bg-muted/30">
          <Image
            src={project.image || "/placeholder.jpg"}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-80" />
          <div className="absolute bottom-0 left-0 right-0 p-4 flex items-end justify-between">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-primary/90 dark:bg-primary text-primary-foreground text-xs font-medium uppercase tracking-wider">
              {project.category || "Project"}
            </span>
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
          <p className="text-sm text-foreground/70 dark:text-foreground/75 line-clamp-2 leading-relaxed flex-1">
            {project.excerpt || project.description || "Explore this project."}
          </p>
          <span className="inline-flex items-center gap-1.5 mt-4 text-sm font-medium text-primary">
            View case study
            <ArrowUpRight className="w-4 h-4" />
          </span>
        </div>

        {/* Top accent line on hover */}
        <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary via-accent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-t-2xl" />
      </Link>
    </motion.div>
  );
}

const ProjectsSection = ({ projects }) => {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 z-20">
        <AnimatedDivider />
      </div>

      <div className="absolute inset-0 bg-gradient-to-br from-background via-primary/[0.02] dark:via-primary/5 to-accent/[0.02] dark:to-accent/5" />
      <div
        className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]"
        style={{
          backgroundImage: `linear-gradient(rgba(156, 30, 42, 0.12) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(156, 30, 42, 0.12) 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-12 md:mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 dark:bg-primary/20 border border-primary/20 dark:border-primary/30 mb-6">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-semibold text-primary">Featured Work</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 tracking-tight">
            <span className="text-foreground">Featured </span>
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <p className="text-foreground/70 dark:text-foreground/80 text-base sm:text-lg">
            Innovation, excellence, and transformative digital solutions
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-16">
          {projects?.map((project, index) => (
            <FeaturedProjectCard
              key={project.id || index}
              project={project}
              index={index}
            />
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="inline-block h-px w-16 bg-gradient-to-r from-transparent via-primary/50 to-transparent mb-8" />
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-foreground dark:bg-foreground text-background dark:text-background font-semibold text-sm hover:opacity-90 transition-opacity"
          >
            View all projects
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
