// ProjectOverview.tsx
"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

interface ProjectOverviewProps {
  fullDescription: string;
  liveUrl: string;
  githubUrl?: string;
}

export const ProjectOverview: React.FC<ProjectOverviewProps> = ({ fullDescription, liveUrl, githubUrl }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true }}
  >
    <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">Project Overview</h2>
    <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed mb-8">{fullDescription}</p>
    <div className="flex gap-4 mb-8">
      <Button asChild size="lg" className="bg-primary-600 hover:bg-primary-700">
        <Link href={liveUrl}><ExternalLink className="w-5 h-5 mr-2" />View Live Project</Link>
      </Button>
      {githubUrl && (
        <Button asChild variant="outline" size="lg">
          <Link href={githubUrl}><Github className="w-5 h-5 mr-2" />View Code</Link>
        </Button>
      )}
    </div>
  </motion.div>
);