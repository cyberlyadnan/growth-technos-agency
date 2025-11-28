import Image from "next/image";
import { AnimatedDivider } from "@/components/ui/AnimatedDivider";

export default function ProjectGallery({ project }) {
  if (!project.gallery || project.gallery.length === 0) {
    return null;
  }

  return (
    <section className="relative py-20 bg-gradient-to-b from-background to-background/95 overflow-hidden">
      {/* Futuristic Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px] dark:bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)]"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-foreground via-primary to-accent bg-clip-text text-transparent">
              Project Gallery
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Explore the visual journey of this project
            </p>
          </div>

          {/* Main Featured Image */}
          {project.gallery[0] && (
            <div className="mb-8">
              <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl border border-border/50 group">
                <Image
                  src={project.gallery[0]}
                  alt={`${project.title} - Featured`}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent"></div>
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent animate-pulse"></div>
                </div>
              </div>
            </div>
          )}

          {/* Gallery Grid */}
          {project.gallery.length > 1 && (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {project.gallery.slice(1).map((image, index) => (
                <div
                  key={index}
                  className="group relative aspect-video rounded-xl overflow-hidden border border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-1"
                >
                  <Image
                    src={image}
                    alt={`${project.title} - Image ${index + 2}`}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  {/* Corner Indicators */}
                  <div className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-primary/30 group-hover:border-primary transition-colors"></div>
                  <div className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-primary/30 group-hover:border-primary transition-colors"></div>
                  <div className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-primary/30 group-hover:border-primary transition-colors"></div>
                  <div className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-primary/30 group-hover:border-primary transition-colors"></div>
                  {/* Glow Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Animated Divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <AnimatedDivider />
      </div>
    </section>
  );
}
