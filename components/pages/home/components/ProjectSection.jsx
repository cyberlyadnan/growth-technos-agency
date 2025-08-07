import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export const ProjectsSection = ({ projects  }) => {
  return (
    <section className="py-20 px-4 md:px-[10%] bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 opacity-1 animate-slide-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            Featured Projects
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Take a look at some of our recent work and see how we've helped businesses achieve their goals.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Link
              href={`/projects/${project.id === 0 ? project.id : project.id - 1}`}
              key={project.title}
              className="group block opacity-1 animate-slide-up animation-delay-[index * 75] transition duration-300"
            >
              <Card className="overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 bg-white dark:bg-gray-900">
                <div className="aspect-video relative overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-5">
                  <div className="text-xs font-semibold text-primary-600 dark:text-primary-400 uppercase mb-2 tracking-wider">
                    {project.category}
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-gray-900 dark:text-white group-hover:underline underline-offset-2">
                    {project.title}
                  </h3>
                  <p className="mt-2 text-sm text-gray-600 dark:text-gray-400 line-clamp-2">
                    {project.excerpt || project.description}
                  </p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12 opacity-1 animate-slide-up">
          <Button asChild size="lg" className="text-white bg-primary-600 hover:bg-primary-700">
            <Link href="/projects">
              View All Projects
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};
