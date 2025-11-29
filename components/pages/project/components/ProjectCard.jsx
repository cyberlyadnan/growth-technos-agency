"use client";

import Image from "next/image";
import Link from "next/link";
import { ExternalLink, ArrowRight, Sparkles, Zap } from "lucide-react";

export const ProjectCard = ({ project, index }) => {
  const coverImage = project.coverImage || project.image || "/placeholder.jpg";
  
  return (
    <div className="group relative h-full min-h-[550px] overflow-hidden rounded-2xl bg-card/60 backdrop-blur-sm border border-border/50 hover:border-primary/50 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/20 hover:-translate-y-2">
      {/* Glow Effect */}
      <div className="absolute -inset-1 bg-gradient-to-br from-primary/10 via-accent/10 to-secondary/10 rounded-2xl opacity-0 group-hover:opacity-100 blur-2xl transition-opacity duration-500 -z-10"></div>
      
      {/* Main Card Link */}
      <Link href={`/projects/${project.id}`} className="block">
        {/* Image Section with Overlay */}
        <div className="relative h-64 overflow-hidden">
          <Image
            src={coverImage}
            alt={project.title}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-700"
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          
          {/* Category Badge */}
          <div className="absolute top-4 left-4">
            <div className="px-3 py-1.5 bg-primary/90 backdrop-blur-sm border border-primary/50 rounded-full">
              <span className="text-xs font-semibold text-white flex items-center gap-1.5">
                <Sparkles className="w-3 h-3" />
                {project.category || "Project"}
              </span>
            </div>
          </div>

          {/* Scan Line Effect on Hover */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity">
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent animate-pulse"></div>
          </div>
        </div>

        {/* Content Section */}
        <div className="relative p-6 space-y-4">
          {/* Corner Indicators */}
          <div className="absolute top-4 right-4 w-4 h-4 border-t-2 border-r-2 border-primary/30 group-hover:border-primary transition-colors"></div>
          <div className="absolute bottom-4 left-4 w-4 h-4 border-b-2 border-l-2 border-primary/30 group-hover:border-primary transition-colors"></div>

          {/* Title */}
          <div>
            <h3 className="text-xl md:text-2xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2">
              {project.title}
            </h3>
            <p className="text-sm text-foreground/70 line-clamp-2 leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Client & Tech Info */}
          <div className="space-y-2 pt-2 border-t border-border/50">
            {project.client && (
              <div className="flex items-center gap-2 text-sm">
                <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                <span className="text-foreground/70">
                  <span className="font-medium text-foreground">Client:</span> {project.client}
                </span>
              </div>
            )}
            {project.technologies && project.technologies.length > 0 && (
              <div className="flex items-start gap-2 text-sm">
                <Zap className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                <div className="flex-1">
                  <span className="font-medium text-foreground">Tech: </span>
                  <span className="text-foreground/70 line-clamp-1">
                    {project.technologies.slice(0, 3).map((tech) => tech.name || tech).join(", ")}
                    {project.technologies.length > 3 && " +" + (project.technologies.length - 3)}
                  </span>
                </div>
              </div>
            )}
          </div>

          {/* Features Tags */}
          {/* {project.features && project.features.length > 0 && (
            <div className="flex flex-wrap gap-2 pt-2">
              {project.features.slice(0, 3).map((feature, idx) => (
                <span
                  key={idx}
                  className="px-2.5 py-1 bg-primary/10 border border-primary/20 text-primary text-xs font-medium rounded-full"
                >
                  {feature}
                </span>
              ))}
              {project.features.length > 3 && (
                <span className="px-2.5 py-1 bg-accent/10 border border-accent/20 text-accent text-xs font-medium rounded-full">
                  +{project.features.length - 3} more
                </span>
              )}
            </div>
          )} */}

          {/* CTA Button */}
          <div className="pt-4 border-t border-border/50">
            <div className="flex items-center justify-between">
              <span className="text-sm font-semibold text-primary group-hover:text-accent transition-colors flex items-center gap-2">
                View Details
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </div>
          </div>
        </div>
      </Link>

      {/* External Link Button - Positioned absolutely to avoid nesting */}
      {project.liveUrl && (
        <div className="absolute bottom-6 right-6 z-10">
          <Link
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="p-2 bg-card/80 backdrop-blur-sm border border-border/50 hover:bg-primary/10 hover:border-primary/50 rounded-lg transition-colors"
          >
            <ExternalLink className="w-4 h-4 text-foreground/60 hover:text-primary transition-colors" />
          </Link>
        </div>
      )}

      {/* Circuit Lines on Hover */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M 0,0 L 20,0 M 0,0 L 0,20 M 100%,0 L calc(100% - 20),0 M 100%,0 L 100%,20 M 0,100% L 0,calc(100% - 20) M 0,100% L 20,100% M 100%,100% L calc(100% - 20),100% M 100%,100% L 100%,calc(100% - 20)"
            stroke="var(--primary)"
            strokeWidth="1"
            fill="none"
            className="opacity-30"
          />
        </svg>
      </div>
    </div>
  );
};

export default ProjectCard;
