import { getAllProjects } from "@/hooks/getAllProjects";
import ProjectHero from "@/components/pages/project/components/ProjectHero"
import {ProjectFilter} from "@/components/pages/project/components/ProjectFilter"
import {ProjectGrid} from "@/components/pages/project/components/ProjectGrid"
import ProjectCTA from "@/components/pages/project/components/ProjectCTA"

export default async function ProjectsPage() {
  const projects = await getAllProjects(); // You can make it dynamic later if needed
  
  return (
    <div className="min-h-screen pt-16">
      <ProjectHero
        title="Our Projects"
        subtitle="See our work in action"
        description="Explore how we've helped businesses achieve their digital goals through design, development, and marketing."
      />
      <ProjectFilter />
      <ProjectGrid projects={projects} />
      <ProjectCTA />
    </div>
  );
}
