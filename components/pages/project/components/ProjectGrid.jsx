import { ProjectCard } from "./ProjectCard";

export function ProjectGrid({ projects }) {
     if (!projects.length) {
    return (
      <div className="text-center text-gray-500 py-12">
        No projects found.
      </div>
    );
  }
  return (
    <section className="py-20 px-4 bg-white dark:bg-gray-800">
      <div className="container mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8 px-8 md:px-[5%]">
        {projects.map((project, i) => (
          <ProjectCard key={i} project={project} index={i} />
        ))}
      </div>
    </section>
  );
}
