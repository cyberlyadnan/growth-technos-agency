import { ExternalLink, Eye, Layers } from "lucide-react";

export const PortfolioCard = ({ project, index }) => {

  return (
    <div
      className="opacity-0 animate-fade-up"
      style={{ 
        animationDelay: `${index * 100}ms`,
        animationFillMode: 'forwards'
      }}
      // onMouseEnter={() => setIsHovered(true)}
      // onMouseLeave={() => setIsHovered(false)}
    >
      <div className="group relative bg-white dark:bg-background rounded-2xl overflow-hidden border border-gray-200 dark:border-background hover:border-primary dark:hover:border-primary transition-all duration-500 h-full flex flex-col">
        {/* Glowing effect */}
        {/* <div className="absolute -inset-1 bg-gradient-to-r from-primary to-secondary rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500" /> */}
        
        <div className="relative">
          {/* Image Container with Overlay */}
          <div className="relative w-full h-56 sm:h-64 overflow-hidden bg-gray-100 dark:bg-gray-800">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
            
            {/* Animated corner accent */}
            {/* <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-primary to-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ clipPath: 'polygon(100% 0, 100% 100%, 0 0)' }} /> */}
            
            
            {/* Hover Actions */}
            <div className={`absolute inset-0 flex items-center justify-center gap-3 transition-all duration-500`}>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm rounded-full text-sm font-semibold text-gray-900 dark:text-white hover:bg-white dark:hover:bg-gray-900 transition-all duration-300 transform hover:scale-105"
                // onClick={(e) => e.stopPropagation()}
              >
                <Eye className="w-4 h-4" />
                View Live
              </a>
              <button className="flex items-center justify-center w-10 h-10 bg-primary rounded-full text-white hover:scale-110 transition-transform duration-300">
                <ExternalLink className="w-5 h-5" />
              </button>
            </div>

            {/* Status Badge */}
            <div className="absolute top-4 left-4 px-3 py-1 bg-green-500/90 backdrop-blur-sm rounded-full text-xs font-semibold text-white flex items-center gap-1.5">
              <div className="w-1.5 h-1.5 bg-white rounded-full animate-pulse" />
              Live
            </div>

            {/* Category Badge */}
            {project.category && (
              <div className="absolute top-4 right-4 px-3 py-1 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm rounded-full text-xs font-semibold text-gray-900 dark:text-white">
                {project.category}
              </div>
            )}
          </div>

          {/* Content */}
          <div className="relative p-6 flex flex-col flex-grow">
            {/* Title with gradient on hover */}
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-secondary group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
              {project.title}
            </h3>

            <p className="text-sm text-gray-600 dark:text-gray-300 mb-4 leading-relaxed flex-grow">
              {project.description}
            </p>

            {/* Tech Stack */}
            {project.technologies && (
              <div className="mb-4">
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 bg-gray-100 dark:bg-gray-800/50 backdrop-blur-sm text-xs font-medium rounded-md text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700 hover:border-primary dark:hover:border-primary transition-colors duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Footer with CTA */}
            <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-[#2a2a36] mt-auto">
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-semibold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent hover:gap-3 transition-all duration-300"
              >
                Visit Website
                <ExternalLink className="w-4 h-4 text-primary" />
              </a>
              
              <div className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400">
                <Layers className="w-3.5 h-3.5" />
                <span>{project.year || '2024'}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};