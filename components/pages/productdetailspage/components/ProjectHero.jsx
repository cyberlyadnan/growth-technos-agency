import { Calendar, Tag, User, ArrowLeft, Sparkles } from "lucide-react";
import Link from "next/link";
import ProjectGalleryInteractive from "./ProjectGalleryInteractive";
import { AnimatedDivider } from "@/components/ui/AnimatedDivider";

export default function ProjectHero({ project }) {
  const galleryImages = project.gallery || [];
  const mainImage = project.coverImage || galleryImages[0];
  const allImages = mainImage ? [mainImage, ...galleryImages.filter(img => img !== mainImage)] : galleryImages;

  return (
    <section className="relative min-h-[85vh] flex items-center bg-gradient-to-br from-background via-background/95 to-background overflow-hidden">
      {/* Futuristic Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Tech Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] dark:bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)]"></div>
        
        {/* Floating Orbs */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        
        {/* Circuit Lines */}
        <div className="absolute top-0 left-0 w-full h-full opacity-30 dark:opacity-20">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="circuitGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="var(--primary)" stopOpacity="0.3" />
                <stop offset="100%" stopColor="var(--accent)" stopOpacity="0.3" />
              </linearGradient>
            </defs>
            <path d="M0,100 Q200,50 400,100 T800,100" stroke="url(#circuitGradient)" strokeWidth="1" fill="none" />
            <path d="M0,300 Q300,250 600,300 T1200,300" stroke="url(#circuitGradient)" strokeWidth="1" fill="none" />
          </svg>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20">
        <div className="max-w-7xl mx-auto">
          {/* Back Button */}
          <Link href="/projects" className="inline-flex items-center text-foreground/70 hover:text-primary transition-colors group mb-8">
            <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
            Back to Projects
          </Link>

          <div className="grid lg:grid-cols-2 gap-12 items-start mb-12">
            {/* Left Column - Content */}
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full">
                <Sparkles className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-primary">{project.category}</span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-foreground via-primary to-accent bg-clip-text text-transparent">
                {project.title}
              </h1>

              <p className="text-xl md:text-2xl text-foreground/80 leading-relaxed">
                {project.description}
              </p>

              {/* Project Meta Info */}
              <div className="flex flex-wrap gap-6 pt-4">
                {project.client && (
                  <div className="flex items-center gap-2 text-foreground/70">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <User className="w-4 h-4 text-primary" />
                    </div>
                    <span className="text-sm font-medium">{project.client}</span>
                  </div>
                )}
                {project.completionDate && (
                  <div className="flex items-center gap-2 text-foreground/70">
                    <div className="p-2 bg-accent/10 rounded-lg">
                      <Calendar className="w-4 h-4 text-accent" />
                    </div>
                    <span className="text-sm font-medium">{project.completionDate}</span>
                  </div>
                )}
                {project.duration && (
                  <div className="flex items-center gap-2 text-foreground/70">
                    <div className="p-2 bg-secondary/10 rounded-lg">
                      <Tag className="w-4 h-4 text-secondary" />
                    </div>
                    <span className="text-sm font-medium">{project.duration}</span>
                  </div>
                )}
              </div>
            </div>

            {/* Right Column - Interactive Gallery */}
            {allImages.length > 0 && (
              <div className="relative">
                <ProjectGalleryInteractive images={allImages} title={project.title} />
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Animated Divider at Bottom */}
      <div className="absolute bottom-0 left-0 right-0">
        <AnimatedDivider />
      </div>
    </section>
  );
}
