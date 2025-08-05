// app/projects/[id]/page.tsx
import { ProjectDetailPage } from "@/components/pages/productdetailspage/ProjectDetailsPage";
import { Metadata } from "next";

// Define the params type
interface ProjectDetailParams {
  id: string;
}

// Define the page props type
interface ProjectDetailPageProps {
  params: ProjectDetailParams;
}

export default function ProjectDetail({ params }: ProjectDetailPageProps) {
  const projectId = parseInt(params.id);
  return <ProjectDetailPage projectId={projectId} />;
}

// Generate static params for better SEO and performance
export async function generateStaticParams(): Promise<ProjectDetailParams[]> {
  return [
    { id: '1' },
    { id: '2' },
    { id: '3' },
    { id: '4' },
    { id: '5' },
    { id: '6' },
    { id: '7' },
    { id: '8' },
    { id: '9' }
  ];
}

// Generate metadata for each project
export async function generateMetadata({ params }: ProjectDetailPageProps): Promise<Metadata> {
  const projectId = parseInt(params.id);
  
  // Project titles mapping (you can expand this or fetch from your data source)
  const projectTitles: Record<number, { title: string; description: string; category: string }> = {
    1: {
      title: 'E-commerce Platform',
      description: 'A comprehensive modern e-commerce platform built with cutting-edge technologies, featuring advanced user experience and seamless payment integration.',
      category: 'Web Development'
    },
    2: {
      title: 'Brand Identity Design',
      description: 'Complete brand identity package including logo, guidelines, and marketing materials for Creative Studio.',
      category: 'Branding'
    },
    3: {
      title: 'SEO Campaign Results',
      description: 'Comprehensive SEO strategy that increased organic traffic by 300% in 6 months for local business.',
      category: 'Digital Marketing'
    },
    4: {
      title: 'Mobile Banking App',
      description: 'Secure and user-friendly mobile banking application with advanced features for FinTech Startup.',
      category: 'Mobile Development'
    },
    5: {
      title: 'Restaurant Website',
      description: 'Modern restaurant website with online ordering and reservation system for Bella Vista Restaurant.',
      category: 'Web Development'
    },
    6: {
      title: 'Corporate Website',
      description: 'Professional corporate website with content management system and SEO optimization for Global Corp.',
      category: 'Web Development'
    },
    7: {
      title: 'Social Media Campaign',
      description: 'Comprehensive social media marketing campaign that increased engagement by 250% for Fashion Brand.',
      category: 'Digital Marketing'
    },
    8: {
      title: 'Fitness App UI/UX',
      description: 'Complete UI/UX design for a fitness tracking application with intuitive interface for FitLife Inc.',
      category: 'UI/UX Design'
    },
    9: {
      title: 'Educational Platform',
      description: 'Online learning platform with video streaming, assignments, and progress tracking for EduTech Solutions.',
      category: 'Web Development'
    }
  };
  
  const project = projectTitles[projectId];
  
  if (!project) {
    return {
      title: 'Project Not Found',
      description: 'The requested project could not be found.'
    };
  }
  
  return {
    title: `${project.title} - ${project.category} | Your Company Name`,
    description: project.description,
    keywords: [
      project.category.toLowerCase(),
      'portfolio',
      'project',
      'case study',
      project.title.toLowerCase()
    ],
    openGraph: {
      title: project.title,
      description: project.description,
      type: 'article',
      url: `https://yourwebsite.com/projects/${projectId}`,
    },
    twitter: {
      card: 'summary_large_image',
      title: project.title,
      description: project.description,
    }
  };
}