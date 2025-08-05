"use client"
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, ExternalLink, Github, Calendar, User, Tag, CheckCircle, Star, Play, Sun, Moon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { technologyLogos } from '@/lib/mainData';

const ProjectDetails = ({project}) => {
  return (
          <section className="py-16 bg-gray-50 dark:bg-gray-900">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
                {/* Main Content */}
                <div className="lg:col-span-2 space-y-12">
                  {/* Overview */}
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                  >
                    <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">Project Overview</h2>
                    <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed mb-8">
                      {project.fullDescription}
                    </p>
                    
                    <div className="flex gap-4 mb-8">
                      <Button asChild size="lg" className="bg-primary-600 hover:bg-primary-700">
                        <Link href={project.liveUrl}>
                          <ExternalLink className="w-5 h-5 mr-2" />
                          View Live Project
                        </Link>
                      </Button>
                      {project.githubUrl && (
                        <Button asChild variant="outline" size="lg">
                          <Link href={project.githubUrl}>
                            <Github className="w-5 h-5 mr-2" />
                            View Code
                          </Link>
                        </Button>
                      )}
                    </div>
                  </motion.div>
    
                  {/* Challenges & Solutions */}
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="grid md:grid-cols-2 gap-8"
                  >
                    <Card className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
                      <CardContent className="p-6">
                        <h3 className="text-xl font-semibold mb-4 text-error-600 dark:text-error-400">Challenges</h3>
                        <ul className="space-y-3">
                          {project.challenges.map((challenge, index) => (
                            <li key={index} className="flex items-start gap-3 text-gray-600 dark:text-gray-300">
                              <div className="w-2 h-2 bg-error-500 rounded-full mt-2 flex-shrink-0" />
                              {challenge}
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
    
                    <Card className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
                      <CardContent className="p-6">
                        <h3 className="text-xl font-semibold mb-4 text-success-600 dark:text-success-400">Solutions</h3>
                        <ul className="space-y-3">
                          {project.solutions.map((solution, index) => (
                            <li key={index} className="flex items-start gap-3 text-gray-600 dark:text-gray-300">
                              <CheckCircle className="w-5 h-5 text-success-500 mt-0.5 flex-shrink-0" />
                              {solution}
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  </motion.div>
    
                  {/* Technologies */}
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    viewport={{ once: true }}
                  >
                    <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">Technologies Used</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      {project.technologies.map((tech, index) => (
                        <motion.div
                          key={index}
                          whileHover={{ scale: 1.05 }}
                          className="bg-white dark:bg-gray-800 p-6 rounded-xl text-center border border-gray-200 dark:border-gray-700 hover:border-primary-500 dark:hover:border-primary-400 transition-all duration-300 hover:shadow-lg"
                        >
                          <div className="w-12 h-12 mx-auto mb-3 relative">
                            <Image
                              src={tech.logo || 'https://via.placeholder.com/48/6B7280/FFFFFF?text=0990'}
                              alt={`${tech.name} logo`}
                              fill
                              className="object-contain"
                              onError={(e) => {
                                const target = e.target;
                                target.src = `https://via.placeholder.com/48/6B7280/FFFFFF?text=${tech.name.charAt(0)}`;
                              }}
                            />
                          </div>
                          <span className="text-sm font-medium text-gray-700 dark:text-gray-200">{tech.name}</span>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
    
                  {/* Testimonial */}
                  {project.testimonial && (
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.6 }}
                      viewport={{ once: true }}
                    >
                      <Card className="bg-gradient-to-br from-primary-50 to-secondary-50 dark:from-primary-900/20 dark:to-secondary-900/20 border-primary-200 dark:border-primary-500/20">
                        <CardContent className="p-8">
                          <div className="flex mb-4">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} className="w-5 h-5 text-warning-400 fill-current" />
                            ))}
                          </div>
                          <blockquote className="text-xl text-gray-700 dark:text-gray-200 mb-6 italic">
                            "{project.testimonial.text}"
                          </blockquote>
                          <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-full overflow-hidden relative">
                              <Image
                                src={project.testimonial.avatar}
                                alt={project.testimonial.author}
                                fill
                                className="object-cover"
                              />
                            </div>
                            <div>
                              <div className="font-semibold text-gray-900 dark:text-white">{project.testimonial.author}</div>
                              <div className="text-sm text-gray-500 dark:text-gray-400">{project.testimonial.position}</div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  )}
                </div>
    
                {/* Sidebar */}
                <div className="space-y-8">
                  {/* Project Info */}
                  <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                  >
                    <Card className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 sticky top-32">
                      <CardContent className="p-6">
                        <h3 className="text-xl font-semibold mb-6 text-gray-900 dark:text-white">Project Details</h3>
                        <div className="space-y-4">
                          <div>
                            <span className="text-sm text-gray-500 dark:text-gray-400">Client</span>
                            <p className="font-medium text-gray-900 dark:text-white">{project.client}</p>
                          </div>
                          <div>
                            <span className="text-sm text-gray-500 dark:text-gray-400">Duration</span>
                            <p className="font-medium text-gray-900 dark:text-white">{project.duration}</p>
                          </div>
                          <div>
                            <span className="text-sm text-gray-500 dark:text-gray-400">Team Size</span>
                            <p className="font-medium text-gray-900 dark:text-white">{project.team}</p>
                          </div>
                          <div>
                            <span className="text-sm text-gray-500 dark:text-gray-400">Budget</span>
                            <p className="font-medium text-gray-900 dark:text-white">{project.budget}</p>
                          </div>
                          <div>
                            <span className="text-sm text-gray-500 dark:text-gray-400">Completion</span>
                            <p className="font-medium text-gray-900 dark:text-white">{project.completionDate}</p>
                          </div>
                        </div>
    
                        <div className="mt-8">
                          <h4 className="font-semibold mb-4 text-gray-900 dark:text-white">Key Features</h4>
                          <div className="space-y-2">
                            {project.features.map((feature, index) => (
                              <div key={index} className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
                                <CheckCircle className="w-4 h-4 text-success-500" />
                                {feature}
                              </div>
                            ))}
                          </div>
                        </div>
    
                        <div className="mt-8">
                          <h4 className="font-semibold mb-4 text-gray-900 dark:text-white">Achievements</h4>
                          <div className="space-y-3">
                            {project.achievements.map((achievement, index) => (
                              <div key={index} className="flex items-start gap-2 text-sm">
                                <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0" />
                                <span className="text-gray-600 dark:text-gray-300">{achievement}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                </div>
              </div>
            </div>
          </section>
  )
}

export default ProjectDetails
