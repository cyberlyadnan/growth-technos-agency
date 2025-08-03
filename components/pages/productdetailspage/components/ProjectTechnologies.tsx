// ProjectTechnologies.tsx
"use client";
import Image from "next/image";
import { motion } from "framer-motion";

interface ProjectTechnologiesProps {
  technologies: string[];
  logos: Record<string, string>;
}

export const ProjectTechnologies: React.FC<ProjectTechnologiesProps> = ({ technologies, logos }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true }}
  >
    <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">Technologies Used</h2>
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {technologies.map((tech, index) => (
        <motion.div
          key={index}
          whileHover={{ scale: 1.05 }}
          className="bg-white dark:bg-gray-800 p-6 rounded-xl text-center border border-gray-200 dark:border-gray-700 hover:border-primary-500 dark:hover:border-primary-400 transition-all duration-300 hover:shadow-lg"
        >
          <div className="w-12 h-12 mx-auto mb-3 relative">
            <Image
              src={logos[tech] || `https://via.placeholder.com/48/6B7280/FFFFFF?text=${tech.charAt(0)}`}
              alt={`${tech} logo`}
              fill
              className="object-contain"
            />
          </div>
          <span className="text-sm font-medium text-gray-700 dark:text-gray-200">{tech}</span>
        </motion.div>
      ))}
    </div>
  </motion.div>
);