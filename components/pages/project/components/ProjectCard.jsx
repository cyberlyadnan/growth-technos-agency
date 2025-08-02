import Image from "next/image";
import Link from "next/link";
import { ExternalLink, Github } from "lucide-react";

export const ProjectCard = ({ project }) => {
  return (
    <div className="bg-white dark:bg-gray-900 rounded-xl shadow-md overflow-hidden border border-gray-200 dark:border-gray-700">
      {/* Top Image */}
      <div className="relative w-full aspect-video">
        <Image
          src={project.image || "/placeholder.jpg"}
          alt={project.title}
          fill
          className="object-cover"
        />
        <div className="absolute top-3 left-3">
          <span className="bg-blue-600 text-white text-xs font-medium px-3 py-1 rounded-full shadow">
            {/* {project.category} */}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
          {/* {project.title} */}
        </h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm">
          {project.description}
        </p>

        {/* Client & Tech */}
        <p className="text-sm mb-1">
          <span className="font-semibold text-gray-700 dark:text-gray-300">
            Client:
          </span>{" "}
          {project.client}
        </p>
        <p className="text-sm mb-4">
          <span className="font-semibold text-gray-700 dark:text-gray-300">
            Technologies:
          </span>{" "}
          {project.technologies?.map((tech) => tech.name).join(", ")}
        </p>

        {/* Key Features */}
        {project.features?.length > 0 && (
          <>
            <p className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
              Key Features:
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.features.map((feature, idx) => (
                <span
                  key={idx}
                  className="bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-100 text-xs font-medium px-3 py-1 rounded-full"
                >
                  {feature.title}
                </span>
              ))}
            </div>
          </>
        )}

        {/* Action Buttons */}
        <div className="flex items-center justify-between gap-4 border-t pt-4">
          <Link
            href={`/projects/${project.id}`}
            className="text-sm flex items-center px-8 gap-1 text-blue-600 hover:underline"
          >
            <ExternalLink size={16} />
            View Details
          </Link>
          {project.liveUrl && (
            <Link
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm flex items-center px-8 gap-1 text-gray-600 dark:text-gray-400 hover:underline"
            >
              <Github size={16} />
              Code
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}



export default ProjectCard;