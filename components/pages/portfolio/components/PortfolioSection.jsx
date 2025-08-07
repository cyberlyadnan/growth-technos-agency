import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function PortfolioSection({ projects }) {
  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4 text-gray-800 dark:text-white">
          Our Portfolio
        </h2>
        <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-10 text-base">
          Explore a collection of websites we've built for different industries — from interior design to healthcare.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition duration-300"
            >
              <div className="relative w-full h-48">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="p-5">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                  {project.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 mt-2 mb-4">
                  {project.description}
                </p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-primary-600 dark:text-primary-400 hover:underline font-medium text-sm"
                >
                  Visit Website <ExternalLink className="ml-1 h-4 w-4" />
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10 opacity-0 animate-slide-up [animation-fill-mode:forwards]"
        style={{ animationDelay: `${projects?.length * 100}ms` }}>
          <Button asChild size="lg" className="bg-primary-600 text-white hover:bg-primary-700">
            <Link href="/portfolio">
              View All Projects
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
