import { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { ExternalLink, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { portfolioProjects } from "@/lib/mainData";
// import { getPortfolioProjects } from "@/lib/portfolio"; // create a data source or import your array

export const metadata = {
  title: "Portfolio - Growth Technos",
  description:
    "Browse our portfolio showcasing professionally built websites for clients across industries like healthcare, design, construction, and more.",
};

export default async function PortfolioPage() {
  const projects =  portfolioProjects; // or static array import

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary-600 to-primary-800 text-white">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Work</h1>
          <p className="text-xl text-primary-100 mb-8">
            Explore some of the projects we've delivered across different industries.
            Every website is crafted with precision, performance, and user experience in mind.
          </p>
          <Button asChild size="lg" className="bg-accent-500 hover:bg-accent-600">
            <Link href="/contact">
              Start Your Project
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Portfolio Grid Section */}
      <section className="py-20 md:px-[5%] px-5 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-3">
              Featured Projects
            </h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              A glimpse into the businesses we've helped grow with tailored digital solutions.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-lg transition duration-300 overflow-hidden"
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
                    className="inline-flex items-center text-primary-600 dark:text-primary-400 hover:underline text-sm font-medium"
                  >
                    Visit Website <ExternalLink className="ml-1 h-4 w-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-primary-600 text-white">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Inspired by Our Work?</h2>
          <p className="text-lg text-primary-100 mb-8">
            Let's bring your vision to life. We’re ready to design and develop your next digital product.
          </p>
          <Button asChild size="lg" className="bg-white text-primary-700 hover:bg-primary-100">
            <Link href="/contact">
              Get in Touch
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
