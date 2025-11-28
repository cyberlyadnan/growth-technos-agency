import { ProjectCard } from "./ProjectCard";
import { AnimatedDivider } from "@/components/ui/AnimatedDivider";

export function ProjectGrid({ projects }) {
  if (!projects.length) {
    return (
      <section className="relative py-20 bg-gradient-to-b from-background to-background/95 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px] dark:bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)]"></div>
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center text-foreground/60 py-12">
            <p className="text-lg">No projects found.</p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <AnimatedDivider />
        </div>
      </section>
    );
  }

  return (
    <section className="relative py-20 bg-gradient-to-b from-background to-background/95 overflow-hidden">
      {/* Futuristic Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px] dark:bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)]"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, i) => (
            <ProjectCard key={project.id || i} project={project} index={i} />
          ))}
        </div>
      </div>

      {/* Animated Divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <AnimatedDivider />
      </div>
    </section>
  );
}
