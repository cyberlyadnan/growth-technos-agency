import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ExternalLink, Github, CheckCircle, Star, Quote, Sparkles, Target, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { AnimatedDivider } from '@/components/ui/AnimatedDivider';

const ProjectDetails = ({ project }) => {
  return (
    <section className="relative py-20 bg-gradient-to-b from-background/95 to-background overflow-hidden">
      {/* Futuristic Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px] dark:bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)]"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            {/* Overview */}
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Sparkles className="w-5 h-5 text-primary" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-foreground via-primary to-accent bg-clip-text text-transparent">
                  Project Overview
                </h2>
              </div>
              <p className="text-lg text-foreground/80 leading-relaxed">
                {project.fullDescription || project.description}
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="group relative">
                  <Button asChild size="lg" className="relative overflow-hidden bg-gradient-to-r from-primary via-primary to-accent hover:from-primary/90 hover:via-primary/90 hover:to-accent/90 text-white border-0 shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-all">
                    <Link href={project.liveUrl || '#'} className="flex items-center" target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-5 h-5 mr-2" />
                      View Live Project
                    </Link>
                  </Button>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 pointer-events-none rounded-md"></div>
                </div>
                {project.githubUrl && (
                  <Button asChild variant="outline" size="lg" className="border-2 border-primary/30 hover:border-primary hover:bg-primary/5">
                    <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center">
                      <Github className="w-5 h-5 mr-2" />
                      View Code
                    </Link>
                  </Button>
                )}
              </div>
            </div>

            {/* Challenges & Solutions */}
            {(project.challenges || project.solutions) && (
              <div className="grid md:grid-cols-2 gap-6">
                {project.challenges && project.challenges.length > 0 && (
                  <div className="group relative p-6 bg-card/60 backdrop-blur-sm border border-border/50 rounded-2xl hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10">
                    {/* Corner Indicators */}
                    <div className="absolute top-4 left-4 w-6 h-6 border-t-2 border-l-2 border-red-500/30 group-hover:border-red-500 transition-colors"></div>
                    <div className="absolute top-4 right-4 w-6 h-6 border-t-2 border-r-2 border-red-500/30 group-hover:border-red-500 transition-colors"></div>
                    <div className="absolute bottom-4 left-4 w-6 h-6 border-b-2 border-l-2 border-red-500/30 group-hover:border-red-500 transition-colors"></div>
                    <div className="absolute bottom-4 right-4 w-6 h-6 border-b-2 border-r-2 border-red-500/30 group-hover:border-red-500 transition-colors"></div>
                    
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 bg-red-500/10 rounded-lg">
                        <Target className="w-5 h-5 text-red-500" />
                      </div>
                      <h3 className="text-xl font-bold text-foreground">Challenges</h3>
                    </div>
                    <ul className="space-y-3">
                      {project.challenges.map((challenge, index) => (
                        <li key={index} className="flex items-start gap-3 text-foreground/80">
                          <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0" />
                          <span>{challenge}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                {project.solutions && project.solutions.length > 0 && (
                  <div className="group relative p-6 bg-card/60 backdrop-blur-sm border border-border/50 rounded-2xl hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10">
                    {/* Corner Indicators */}
                    <div className="absolute top-4 left-4 w-6 h-6 border-t-2 border-l-2 border-primary/30 group-hover:border-primary transition-colors"></div>
                    <div className="absolute top-4 right-4 w-6 h-6 border-t-2 border-r-2 border-primary/30 group-hover:border-primary transition-colors"></div>
                    <div className="absolute bottom-4 left-4 w-6 h-6 border-b-2 border-l-2 border-primary/30 group-hover:border-primary transition-colors"></div>
                    <div className="absolute bottom-4 right-4 w-6 h-6 border-b-2 border-r-2 border-primary/30 group-hover:border-primary transition-colors"></div>
                    
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        <CheckCircle className="w-5 h-5 text-primary" />
                      </div>
                      <h3 className="text-xl font-bold text-foreground">Solutions</h3>
                    </div>
                    <ul className="space-y-3">
                      {project.solutions.map((solution, index) => (
                        <li key={index} className="flex items-start gap-3 text-foreground/80">
                          <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                          <span>{solution}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            )}

            {/* Technologies */}
            {project.technologies && project.technologies.length > 0 && (
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-accent/10 rounded-lg">
                    <Zap className="w-5 h-5 text-accent" />
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-foreground via-primary to-accent bg-clip-text text-transparent">
                    Technologies Used
                  </h2>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {project.technologies.map((tech, index) => (
                    <div
                      key={index}
                      className="group relative p-6 bg-card/60 backdrop-blur-sm border border-border/50 rounded-xl text-center hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-1"
                    >
                      {/* Corner Indicators */}
                      <div className="absolute top-2 left-2 w-3 h-3 border-t border-l border-primary/30 group-hover:border-primary transition-colors"></div>
                      <div className="absolute top-2 right-2 w-3 h-3 border-t border-r border-primary/30 group-hover:border-primary transition-colors"></div>
                      <div className="absolute bottom-2 left-2 w-3 h-3 border-b border-l border-primary/30 group-hover:border-primary transition-colors"></div>
                      <div className="absolute bottom-2 right-2 w-3 h-3 border-b border-r border-primary/30 group-hover:border-primary transition-colors"></div>
                      
                      {tech.logo && (
                        <div className="w-12 h-12 mx-auto mb-3 relative">
                          <Image
                            src={tech.logo}
                            alt={`${tech.name || tech} logo`}
                            fill
                            className="object-contain"
                          />
                        </div>
                      )}
                      <span className="text-sm font-medium text-foreground">{tech.name || tech}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Testimonial */}
            {project.testimonial && (
              <div className="group relative p-8 bg-card/60 backdrop-blur-sm border border-border/50 rounded-2xl hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10">
                {/* Corner Indicators */}
                <div className="absolute top-4 left-4 w-6 h-6 border-t-2 border-l-2 border-primary/30 group-hover:border-primary transition-colors"></div>
                <div className="absolute top-4 right-4 w-6 h-6 border-t-2 border-r-2 border-primary/30 group-hover:border-primary transition-colors"></div>
                <div className="absolute bottom-4 left-4 w-6 h-6 border-b-2 border-l-2 border-primary/30 group-hover:border-primary transition-colors"></div>
                <div className="absolute bottom-4 right-4 w-6 h-6 border-b-2 border-r-2 border-primary/30 group-hover:border-primary transition-colors"></div>
                
                <div className="relative space-y-6">
                  <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full">
                    <Quote className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-amber-400 fill-amber-400" />
                    ))}
                  </div>
                  <blockquote className="text-xl text-foreground/90 italic leading-relaxed">
                    &quot;{project.testimonial.text}&quot;
                  </blockquote>
                  <div className="flex items-center gap-4 pt-4 border-t border-border/50">
                    <div className="relative w-12 h-12 rounded-full overflow-hidden ring-2 ring-primary/20">
                      {project.testimonial.avatar ? (
                        <Image
                          src={project.testimonial.avatar}
                          alt={project.testimonial.author}
                          fill
                          className="object-cover"
                        />
                      ) : (
                        <div className="w-full h-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-bold">
                          {project.testimonial.author.charAt(0)}
                        </div>
                      )}
                    </div>
                    <div>
                      <div className="font-semibold text-foreground">{project.testimonial.author}</div>
                      <div className="text-sm text-foreground/60">{project.testimonial.position}</div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <div className="sticky top-32">
              <div className="group relative p-6 bg-card/60 backdrop-blur-sm border border-border/50 rounded-2xl hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10">
                {/* Corner Indicators */}
                <div className="absolute top-4 left-4 w-6 h-6 border-t-2 border-l-2 border-primary/30 group-hover:border-primary transition-colors"></div>
                <div className="absolute top-4 right-4 w-6 h-6 border-t-2 border-r-2 border-primary/30 group-hover:border-primary transition-colors"></div>
                <div className="absolute bottom-4 left-4 w-6 h-6 border-b-2 border-l-2 border-primary/30 group-hover:border-primary transition-colors"></div>
                <div className="absolute bottom-4 right-4 w-6 h-6 border-b-2 border-r-2 border-primary/30 group-hover:border-primary transition-colors"></div>
                
                <div className="relative space-y-6">
                  <h3 className="text-xl font-bold text-foreground">Project Details</h3>
                  <div className="space-y-4">
                    {project.client && (
                      <div>
                        <span className="text-sm text-foreground/60">Client</span>
                        <p className="font-medium text-foreground mt-1">{project.client}</p>
                      </div>
                    )}
                    {project.duration && (
                      <div>
                        <span className="text-sm text-foreground/60">Duration</span>
                        <p className="font-medium text-foreground mt-1">{project.duration}</p>
                      </div>
                    )}
                    {project.team && (
                      <div>
                        <span className="text-sm text-foreground/60">Team Size</span>
                        <p className="font-medium text-foreground mt-1">{project.team}</p>
                      </div>
                    )}
                    {project.budget && (
                      <div>
                        <span className="text-sm text-foreground/60">Budget</span>
                        <p className="font-medium text-foreground mt-1">{project.budget}</p>
                      </div>
                    )}
                    {project.completionDate && (
                      <div>
                        <span className="text-sm text-foreground/60">Completion</span>
                        <p className="font-medium text-foreground mt-1">{project.completionDate}</p>
                      </div>
                    )}
                  </div>

                  {project.features && project.features.length > 0 && (
                    <div className="pt-6 border-t border-border/50">
                      <h4 className="font-bold mb-4 text-foreground">Key Features</h4>
                      <div className="space-y-2">
                        {project.features.map((feature, index) => (
                          <div key={index} className="flex items-center gap-2 text-sm text-foreground/80">
                            <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {project.achievements && project.achievements.length > 0 && (
                    <div className="pt-6 border-t border-border/50">
                      <h4 className="font-bold mb-4 text-foreground">Achievements</h4>
                      <div className="space-y-3">
                        {project.achievements.map((achievement, index) => (
                          <div key={index} className="flex items-start gap-2 text-sm">
                            <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                            <span className="text-foreground/80">{achievement}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Animated Divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <AnimatedDivider />
      </div>
    </section>
  );
};

export default ProjectDetails;
