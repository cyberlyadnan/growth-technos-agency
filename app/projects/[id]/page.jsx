// app/projects/[id]/page.js
import { ProjectDetailPage } from "@/components/pages/productdetailspage/ProjectDetailsPage";
import { getProjectById } from "@/hooks/getProjectById";
import { getAllProjects } from "@/hooks/getAllProjects";
import { Metadata } from "next";

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
      title: "Project Not Found | Growth Technos",
      description: "The requested project could not be found."
    };
  }

  return {
    title: `${project.title} - ${project.category || "Project"} | Growth Technos`,
    description: project.description || `Explore ${project.title} - a ${project.category || "digital"} project by Growth Technos. See how we deliver innovative solutions.`,
    keywords: [
      project.category?.toLowerCase() || "",
      "portfolio",
      "project",
      "case study",
      project.title?.toLowerCase() || "",
      "web development",
      "digital solutions",
    ],
    openGraph: {
      title: `${project.title} - Growth Technos`,
      description: project.description || `Explore ${project.title} project by Growth Technos.`,
      type: "article",
      url: `https://growthtechnos.com/projects/${projectId}`,
      siteName: "Growth Technos",
      images: project.coverImage ? [
        {
          url: project.coverImage,
          width: 1200,
          height: 630,
          alt: project.title,
        }
      ] : [
        {
          url: "/og-projects.jpg",
          width: 1200,
          height: 630,
          alt: project.title,
        }
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.title} - Growth Technos`,
      description: project.description || `Explore ${project.title} project.`,
      images: project.coverImage ? [project.coverImage] : ["/og-projects.jpg"],
    },
    alternates: {
      canonical: `https://growthtechnos.com/projects/${projectId}`,
    },
  };
}
