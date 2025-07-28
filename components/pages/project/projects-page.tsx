"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ExternalLink, Github, Filter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const projects = [
  {
    id: 1,
    title: 'E-commerce Platform',
    category: 'Web Development',
    description: 'A modern e-commerce platform with advanced features and seamless user experience.',
    image: 'https://images.pexels.com/photos/4348401/pexels-photo-4348401.jpeg?auto=compress&cs=tinysrgb&w=800',
    technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    features: ['Responsive Design', 'Payment Integration', 'Admin Dashboard', 'SEO Optimized'],
    client: 'TechStore Inc.',
    liveUrl: '#',
    githubUrl: '#'
  },
  {
    id: 2,
    title: 'Brand Identity Design',
    category: 'Branding',
    description: 'Complete brand identity package including logo, guidelines, and marketing materials.',
    image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
    technologies: ['Adobe Illustrator', 'Photoshop', 'InDesign', 'Figma'],
    features: ['Logo Design', 'Brand Guidelines', 'Business Cards', 'Social Media Kit'],
    client: 'Creative Studio',
    liveUrl: '#',
    githubUrl: '#'
  },
  {
    id: 3,
    title: 'SEO Campaign Results',
    category: 'Digital Marketing',
    description: 'Comprehensive SEO strategy that increased organic traffic by 300% in 6 months.',
    image: 'https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=800',
    technologies: ['SEMrush', 'Ahrefs', 'Google Analytics', 'Search Console'],
    features: ['Keyword Research', 'On-Page SEO', 'Link Building', 'Content Strategy'],
    client: 'Local Business',
    liveUrl: '#',
    githubUrl: '#'
  },
  {
    id: 4,
    title: 'Mobile Banking App',
    category: 'Mobile Development',
    description: 'Secure and user-friendly mobile banking application with advanced features.',
    image: 'https://images.pexels.com/photos/4348404/pexels-photo-4348404.jpeg?auto=compress&cs=tinysrgb&w=800',
    technologies: ['React Native', 'Firebase', 'Node.js', 'PostgreSQL'],
    features: ['Biometric Auth', 'Real-time Transactions', 'Push Notifications', 'Offline Mode'],
    client: 'FinTech Startup',
    liveUrl: '#',
    githubUrl: '#'
  },
  {
    id: 5,
    title: 'Restaurant Website',
    category: 'Web Development',
    description: 'Modern restaurant website with online ordering and reservation system.',
    image: 'https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=800',
    technologies: ['Next.js', 'Tailwind CSS', 'Sanity CMS', 'Stripe'],
    features: ['Online Ordering', 'Reservation System', 'Menu Management', 'Mobile Responsive'],
    client: 'Bella Vista Restaurant',
    liveUrl: '#',
    githubUrl: '#'
  },
  {
    id: 6,
    title: 'Corporate Website',
    category: 'Web Development',
    description: 'Professional corporate website with content management system and SEO optimization.',
    image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800',
    technologies: ['WordPress', 'PHP', 'MySQL', 'Bootstrap'],
    features: ['Custom CMS', 'SEO Optimized', 'Contact Forms', 'Blog System'],
    client: 'Global Corp',
    liveUrl: '#',
    githubUrl: '#'
  },
  {
    id: 7,
    title: 'Social Media Campaign',
    category: 'Digital Marketing',
    description: 'Comprehensive social media marketing campaign that increased engagement by 250%.',
    image: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=800',
    technologies: ['Facebook Ads', 'Instagram', 'Hootsuite', 'Canva'],
    features: ['Content Strategy', 'Paid Advertising', 'Analytics', 'Community Management'],
    client: 'Fashion Brand',
    liveUrl: '#',
    githubUrl: '#'
  },
  {
    id: 8,
    title: 'Fitness App UI/UX',
    category: 'UI/UX Design',
    description: 'Complete UI/UX design for a fitness tracking application with intuitive interface.',
    image: 'https://images.pexels.com/photos/3760263/pexels-photo-3760263.jpeg?auto=compress&cs=tinysrgb&w=800',
    technologies: ['Figma', 'Adobe XD', 'Principle', 'Zeplin'],
    features: ['User Research', 'Wireframing', 'Prototyping', 'User Testing'],
    client: 'FitLife Inc.',
    liveUrl: '#',
    githubUrl: '#'
  },
  {
    id: 9,
    title: 'Educational Platform',
    category: 'Web Development',
    description: 'Online learning platform with video streaming, assignments, and progress tracking.',
    image: 'https://images.pexels.com/photos/3184317/pexels-photo-3184317.jpeg?auto=compress&cs=tinysrgb&w=800',
    technologies: ['React', 'Node.js', 'MongoDB', 'AWS'],
    features: ['Video Streaming', 'Assignment System', 'Progress Tracking', 'User Management'],
    client: 'EduTech Solutions',
    liveUrl: '#',
    githubUrl: '#'
  }
];

const categories = ['All', 'Web Development', 'Digital Marketing', 'Branding', 'Mobile Development', 'UI/UX Design'];

export function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary-600 to-primary-800 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Our Projects
            </h1>
            <p className="text-xl text-primary-100 mb-8">
              Explore our portfolio of successful projects and see how we've helped businesses 
              achieve their digital goals through innovative solutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8  bg-gray-50 dark:bg-gray-900 sticky top-16 z-40">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-4 justify-center">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className="flex items-center gap-2"
              >
                <Filter className="w-4 h-4" />
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 px-4 md:px-[5%] bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300 h-full">
                  <div className="aspect-video relative overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                        {project.category}
                      </span>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      {project.description}
                    </p>
                    <div className="mb-4">
                      <div className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                        <strong>Client:</strong> {project.client}
                      </div>
                      <div className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                        <strong>Technologies:</strong> {project.technologies.join(', ')}
                      </div>
                    </div>
                    <div className="mb-4">
                      <h4 className="font-medium text-gray-900 dark:text-white mb-2">Key Features:</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.features.map((feature, featureIndex) => (
                          <span
                            key={featureIndex}
                            className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-2 py-1 rounded text-sm"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <Button asChild size="sm" className="flex-1">
  <Link href={`/projects/${project.id}`}>
    <ExternalLink className="w-4 h-4 mr-2" />
    View Details
  </Link>
</Button>
                      {/* <Button asChild size="sm" className="flex-1">
                        <Link href={project.liveUrl}>
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Live Demo
                        </Link>
                      </Button> */}
                      {project.githubUrl && (
                        <Button asChild variant="outline" size="sm" className="flex-1">
                          <Link href={project.githubUrl}>
                            <Github className="w-4 h-4 mr-2" />
                            Code
                          </Link>
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-600 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Start Your Project?
            </h2>
            <p className="text-lg text-primary-100 mb-8">
              Let's create something amazing together. Contact us to discuss your project 
              and see how we can help bring your vision to life.
            </p>
            <Button asChild size="lg" className="bg-accent-500 hover:bg-accent-600">
              <Link href="/contact">
                Start Your Project
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}