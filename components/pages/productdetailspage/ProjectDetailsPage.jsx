import React from 'react';
import Link from 'next/link';
import { ArrowLeft, ExternalLink, Github, Calendar, User, Tag, CheckCircle, Star, Play, Sun, Moon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ProjectGallery from '../project/components/ProjectGallery';
import ProjectDetails from '@/components/pages/productdetailspage/components/ProjectDetails';
import ProjectHero from '@/components/pages/productdetailspage/components/ProjectHero';
import {ProjectCTA} from '@/components/pages/productdetailspage/components/ProjectCTA';
import { getProjectById } from '@/hooks/getProjectById';




const ProjectDetailPage = async ({ projectId }) => {
  const project = await getProjectById(projectId)
  // const project = projectDetails[projectId];
  console.log("projectprojectprojectproject,",project)

  if (project?.status === "rejected") {
    return (
      <div className="min-h-screen pt-16 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Project Not Found</h1>
          <Button asChild>
            <Link href="/projects">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Projects
            </Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-16 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white">

      {/* Hero Section */}
      <ProjectHero project={project}/>

      {/* Project Gallery */}
      <ProjectGallery project={project}/>

      {/* Project Details */}
      <ProjectDetails project={project} />

      {/* CTA Section */}
      <ProjectCTA />
    </div>
  );
};

export { ProjectDetailPage };