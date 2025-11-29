import { Button } from "@/components/ui/button";
import { ExternalLink, ArrowRight, Sparkles, Rocket, Eye } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { portfolioProjects } from "@/lib/mainData";
import { AnimatedDivider } from "@/components/ui/AnimatedDivider";

export default async function PortfolioPage() {
  const projects = portfolioProjects;

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section - Futuristic with Image */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
        {/* Animated Divider at Top */}
        {/* <div className="absolute top-0 left-0 right-0 z-20">
          <AnimatedDivider />
        </div> */}

        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Portfolio showcase"
            fill
            className="object-cover"
            priority
          />
          {/* Light Theme-aware Overlay */}
          <div className="absolute inset-0 bg-white/50 dark:bg-black/60"></div>
          <div className="absolute inset-0 bg-gradient-to-br from-white/60 via-white/50 to-white/40 dark:from-black/70 dark:via-black/60 dark:to-black/50"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-primary/15 via-transparent to-transparent"></div>
        </div>

        {/* Tech Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.04] dark:opacity-[0.06]">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(rgba(156, 30, 42, 0.15) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(156, 30, 42, 0.15) 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }}></div>
        </div>

        {/* Floating Orbs */}
        <div className="absolute top-20 right-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl opacity-50"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl opacity-50"></div>

        {/* Circuit Lines */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-0 w-32 h-px bg-gradient-to-r from-primary/30 to-transparent"></div>
          <div className="absolute bottom-1/4 right-0 w-32 h-px bg-gradient-to-l from-accent/30 to-transparent"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center max-w-5xl mx-auto">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary/20 dark:bg-primary/30 border border-primary/40 dark:border-primary/50 mb-8 backdrop-blur-md shadow-xl">
              <Rocket className="w-4 h-4 text-primary" />
              <span className="text-sm font-semibold text-primary">Our Work</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight">
              <span className="text-foreground drop-shadow-lg">Our </span>
              <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent drop-shadow-lg">
                Portfolio
              </span>
            </h1>

            {/* Description */}
            <p className="text-xl sm:text-2xl md:text-3xl text-foreground/90 dark:text-foreground/95 font-light max-w-4xl mx-auto leading-relaxed mb-12 drop-shadow-md">
              Explore some of the projects we've delivered across different industries. Every website is crafted with precision, performance, and user experience in mind.
            </p>

            {/* CTA Button */}
            <div className="relative inline-block group">
              <Button
                asChild
                size="lg"
                className="relative overflow-hidden bg-gradient-to-r from-primary via-accent to-secondary hover:from-primary/90 hover:via-accent/90 hover:to-secondary/90 text-white px-8 py-6 text-base font-semibold rounded-xl shadow-xl hover:shadow-2xl hover:shadow-primary/40 transition-all duration-500 hover:-translate-y-1"
              >
                <Link href="/contact" className="flex items-center gap-2 relative z-10">
                  <span>Start Your Project</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              {/* Glow Effect - Outside Button */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary via-accent to-secondary rounded-xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-500 -z-10"></div>
            </div>
          </div>
        </div>

        {/* Bottom Wave Decoration */}
        <div className="absolute bottom-0 left-0 right-0 h-24 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent"></div>
          <svg
            viewBox="0 0 1440 120"
            className="w-full h-full text-background dark:text-background"
            preserveAspectRatio="none"
          >
            <path
              d="M0,60 C240,100 480,20 720,60 C960,100 1200,20 1440,60 L1440,120 L0,120 Z"
              fill="currentColor"
            />
          </svg>
        </div>
      </section>

      {/* Portfolio Grid Section - Futuristic */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        {/* Animated Divider at Top */}
        <div className="absolute top-0 left-0 right-0 z-20">
          <AnimatedDivider />
        </div>

        {/* Futuristic Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-background via-primary/5 dark:via-primary/10 to-accent/5 dark:via-accent/10"></div>
        
        {/* Tech Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(rgba(156, 30, 42, 0.15) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(156, 30, 42, 0.15) 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }}></div>
        </div>

        {/* Floating Orbs */}
        <div className="absolute top-20 right-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl opacity-50"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl opacity-50"></div>

        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16 md:mb-20 max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary/15 dark:bg-primary/25 border border-primary/30 dark:border-primary/40 mb-8 backdrop-blur-sm shadow-lg">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-semibold text-primary">Featured Projects</span>
            </div>

            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              <span className="text-foreground">Featured </span>
              <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
                Projects
              </span>
            </h2>

            <p className="text-lg sm:text-xl md:text-2xl text-foreground/80 dark:text-foreground/90 font-light max-w-3xl mx-auto leading-relaxed">
              A glimpse into the businesses we've helped grow with tailored digital solutions.
            </p>
          </div>

          {/* Portfolio Grid - Unique Futuristic Design */}
          <div className="px-2 px-[7%] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group relative h-full min-h-[500px] overflow-hidden rounded-3xl bg-card/80 dark:bg-card/60 backdrop-blur-xl border border-border/50 dark:border-border/40 hover:border-primary/50 dark:hover:border-primary/50 transition-all duration-700 shadow-xl shadow-black/5 dark:shadow-black/20 hover:shadow-2xl hover:shadow-primary/20 hover:-translate-y-2"
              >
                {/* Glow Effect - Always visible but stronger on hover */}
                <div className="absolute -inset-1 bg-gradient-to-br from-primary/5 via-accent/5 to-secondary/5 dark:from-primary/10 dark:via-accent/10 dark:to-secondary/10 rounded-3xl opacity-60 group-hover:opacity-100 blur-2xl transition-opacity duration-700 -z-10"></div>
                
                {/* Additional Shadow Layer */}
                <div className="absolute -inset-0.5 bg-gradient-to-br from-primary/0 via-accent/0 to-secondary/0 rounded-3xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-700 -z-10"></div>

                <div className="absolute inset-0 overflow-hidden">
                  {/* Left Content Area - Always on Left */}
                  <div className="absolute left-0 top-0 bottom-0 w-[40%] bg-card/90 dark:bg-card/80 backdrop-blur-2xl z-10">
                    <div className="relative h-full p-5 md:p-6 flex flex-col">
                      {/* Status Badge */}
                      <div className="mb-4">
                        <div className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-emerald-500/90 dark:bg-emerald-600/90 rounded-full text-xs font-semibold text-white border border-emerald-400/30 backdrop-blur-md shadow-lg">
                          <div className="w-1.5 h-1.5 bg-white rounded-full animate-pulse" />
                          Live
                        </div>
                      </div>

                      {/* Title */}
                      <h3 className="text-xl md:text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300 leading-tight">
                        {project.title}
                      </h3>

                      {/* Description */}
                      <p className="text-xs md:text-sm text-foreground/70 dark:text-foreground/80 leading-relaxed mb-4 line-clamp-3 flex-1">
                        {project.description}
                      </p>

                      {/* Bottom Section */}
                      <div className="mt-auto space-y-3 pt-4">
                        {/* View Button */}
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group/btn inline-flex items-center gap-2 px-4 py-2.5 bg-primary/10 hover:bg-primary/20 rounded-lg text-xs md:text-sm font-semibold text-primary border border-primary/30 hover:border-primary/50 transition-all duration-300 w-full justify-center"
                        >
                          <span>View Project</span>
                          <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Right Side Image - Diagonal Cut */}
                  <div className="absolute right-0 top-0 bottom-0 w-[60%]" style={{ clipPath: 'polygon(40% 0, 100% 0, 100% 100%, 0 100%)' }}>
                    <div className="relative w-full h-full">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-1000 group-hover:scale-110"
                      />

                      {/* Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-l from-background/95 via-background/80 to-transparent"></div>

                      {/* Tech Grid Overlay */}
                      <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]">
                        <div
                          className="absolute inset-0"
                          style={{
                            backgroundImage: `linear-gradient(rgba(156, 30, 42, 0.2) 1px, transparent 1px),
                                              linear-gradient(90deg, rgba(156, 30, 42, 0.2) 1px, transparent 1px)`,
                            backgroundSize: "30px 30px",
                          }}
                        />
                      </div>

                      {/* Floating External Link Icon */}
                      <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20">
                        <div className="w-12 h-12 rounded-xl bg-primary/20 backdrop-blur-sm border border-primary/30 flex items-center justify-center shadow-lg">
                          <ExternalLink className="w-5 h-5 text-primary" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Futuristic Border Lines */}
                <div className="absolute inset-0 overflow-hidden rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
                  {/* Diagonal Border */}
                  <div className="absolute top-0 left-[40%] w-px h-full bg-gradient-to-b from-transparent via-primary/40 to-transparent"></div>

                  {/* Corner Lines */}
                  <div className="absolute top-0 left-0 w-16 h-px bg-gradient-to-r from-primary/60 to-transparent"></div>
                  <div className="absolute top-0 right-0 w-16 h-px bg-gradient-to-l from-accent/60 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 w-16 h-px bg-gradient-to-r from-primary/60 to-transparent"></div>
                  <div className="absolute bottom-0 right-0 w-16 h-px bg-gradient-to-l from-accent/60 to-transparent"></div>
                </div>

                {/* Scan Line Effect */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-3xl pointer-events-none">
                  <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent animate-pulse"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section - Futuristic */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        {/* Animated Divider at Top */}
        <div className="absolute top-0 left-0 right-0 z-20">
          <AnimatedDivider />
        </div>

        {/* Futuristic Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-background via-accent/5 dark:via-accent/10 to-primary/5 dark:to-primary/10"></div>
        
        {/* Tech Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(rgba(156, 30, 42, 0.15) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(156, 30, 42, 0.15) 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }}></div>
        </div>

        {/* Floating Orbs */}
        <div className="absolute top-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl opacity-50"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl opacity-50"></div>

        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary/15 dark:bg-primary/25 border border-primary/30 dark:border-primary/40 mb-8 backdrop-blur-sm shadow-lg">
              <Eye className="w-4 h-4 text-primary" />
              <span className="text-sm font-semibold text-primary">Get Started</span>
            </div>

            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              <span className="text-foreground">Inspired by </span>
              <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
                Our Work?
              </span>
            </h2>
            
            <p className="text-lg sm:text-xl md:text-2xl text-foreground/80 dark:text-foreground/90 font-light max-w-3xl mx-auto leading-relaxed mb-12">
              Let's bring your vision to life. We're ready to design and develop your next digital product.
            </p>

            <div className="relative inline-block group">
              <Button
                asChild
                size="lg"
                className="relative overflow-hidden bg-gradient-to-r from-primary via-accent to-secondary hover:from-primary/90 hover:via-accent/90 hover:to-secondary/90 text-white px-8 py-6 text-base font-semibold rounded-xl shadow-xl hover:shadow-2xl hover:shadow-primary/40 transition-all duration-500 hover:-translate-y-1"
              >
                <Link href="/contact" className="flex items-center gap-2 relative z-10">
                  <span>Get in Touch</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              {/* Glow Effect - Outside Button */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary via-accent to-secondary rounded-xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-500 -z-10"></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
