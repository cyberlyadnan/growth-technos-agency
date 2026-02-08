// app/projects/[id]/page.js
import { redirect } from "next/navigation";
import { ProjectDetailPage } from "@/components/pages/productdetailspage/ProjectDetailsPage";
import { getProjectById } from "@/hooks/getProjectById";
import { getProjectSlug } from "@/lib/utils";
import { getAllProjects } from "@/hooks/getAllProjects";
import { Metadata } from "next";

/**
 * Project detail page - [id] can be slug or document ID (backward compatible)
 * Redirects to slug URL when user visits with document ID (SEO canonical).
 */
export default async function ProjectDetail({ params }) {
  const resolved = await Promise.resolve(params);
  const slugOrId = resolved.id;
  const project = await getProjectById(slugOrId);

  if (!project) return <ProjectDetailPage project={null} />;

  const canonicalSlug = getProjectSlug(project);
  if (canonicalSlug && canonicalSlug !== slugOrId) {
    redirect(`/projects/${canonicalSlug}`);
  }

  return <ProjectDetailPage project={project} />;
}

/**
 * Generate static params - use SEO-friendly slug for each project
 */
export async function generateStaticParams() {
  try {
    const projects = await getAllProjects();
    return projects.map((project) => ({
      id: getProjectSlug(project) || project.id,
    })).filter((p) => p.id);
  } catch (error) {
    console.error("Error fetching project slugs for static params:", error);
    return [];
  }
}

/**
 * Dynamic SEO metadata - canonical URL uses slug
 */
export async function generateMetadata({ params }) {
  const resolved = await Promise.resolve(params);
  const slugOrId = resolved.id;
  const project = await getProjectById(slugOrId);

  if (!project) {
    return {
      title: "Project Not Found | Growth Technos",
      description: "The requested project could not be found.",
    };
  }

  const canonicalSlug = getProjectSlug(project);

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
      url: `https://growthtechnos.com/projects/${canonicalSlug}`,
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
      canonical: `https://growthtechnos.com/projects/${canonicalSlug}`,
    },
  };
}
