// app/projects/[id]/page.js
import { ProjectDetailPage } from "@/components/pages/productdetailspage/ProjectDetailsPage";
import { getProjectById } from "@/hooks/getProjectById";

/**
 * Project detail page
 */
export default async function ProjectDetail({ params }) {
  const projectId = params.id; // slug as string now
  const project = await getProjectById(projectId);

  return <ProjectDetailPage project={project} />;
}

/**
 * Generate static params (fetch all slugs from Firebase)
 */
export async function generateStaticParams() {
  try {
    const projects = await getAllProjects(); // Returns array of all project docs
    return projects.map(project => ({
      id: project.id // slug is stored as document ID in Firestore
    }));
  } catch (error) {
    console.error("Error fetching project slugs for static params:", error);
    return []; // fallback to empty to avoid build errors
  }
}


/**
 * Dynamic SEO metadata
 */
export async function generateMetadata({ params }) {
  const projectId = params.id; // slug as string

  // Fetch project from Firebase
  const project = await getProjectById(projectId);

  if (!project) {
    return {
      title: "Project Not Found",
      description: "The requested project could not be found."
    };
  }

  return {
    title: `${project.title} - ${project.category || "Portfolio"} | Your Company Name`,
    description: project.description || "Detailed information about this project.",
    keywords: [
      project.category?.toLowerCase() || "",
      "portfolio",
      "project",
      "case study",
      project.title?.toLowerCase() || ""
    ],
    openGraph: {
      title: project.title,
      description: project.description,
      type: "article",
      url: `https://growthtechnos.com/projects/${projectId}`,
      images: project.coverImage ? [{ url: project.coverImage }] : undefined
    },
    twitter: {
      card: "summary_large_image",
      title: project.title,
      description: project.description,
      images: project.coverImage ? [project.coverImage] : undefined
    }
  };
}
