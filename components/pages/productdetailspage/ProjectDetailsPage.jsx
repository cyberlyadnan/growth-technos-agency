import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Construction } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ProjectDetails from './components/ProjectDetails';
import ProjectHero from './components/ProjectHero';
import { ProjectCTA } from './components/ProjectCTA';

const ProjectDetailPage = ({ project }) => {
  if (!project || project?.status === "rejected") {
    return (
      <div className="min-h-screen pt-16 flex items-center justify-center bg-gradient-to-br from-background to-background/95">
        <div className="text-center p-8 max-w-md mx-4">
          <div className="inline-flex items-center justify-center p-4 bg-red-100 dark:bg-red-900/30 rounded-full mb-4">
            <Construction className="w-10 h-10 text-red-600 dark:text-red-400" />
          </div>
          <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
            Project Not Found
          </h1>
          <p className="text-foreground/70 mb-6">
            The project you&apos;re looking for doesn&apos;t exist or has been removed.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button asChild>
              <Link href="/projects">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Projects
              </Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/">Return Home</Link>
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-16 bg-background">
      {/* Hero Section with Gallery */}
      <ProjectHero project={project} />

      {/* Project Details */}
      <ProjectDetails project={project} />

      {/* CTA Section */}
      <ProjectCTA />
    </div>
  );
};

export { ProjectDetailPage };
