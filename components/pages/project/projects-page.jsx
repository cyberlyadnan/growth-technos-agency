import { getAllProjects } from "@/hooks/getAllProjects";
import ProjectHero from "@/components/pages/project/components/ProjectHero"
import { ProjectsClient } from "@/components/pages/project/components/ProjectsClient"
import ProjectCTA from "@/components/pages/project/components/ProjectCTA"

export default async function ProjectsPage() {
  const projects = await getAllProjects();
  
  return (
    <div className="min-h-screen pt-16">
      <ProjectHero
        title="Our Projects"
        subtitle="See our work in action"
        description="Explore how we've helped businesses achieve their digital goals through design, development, and marketing."
      />
      <ProjectsClient projects={projects} />
      <ProjectCTA />
    </div>
  );
}
