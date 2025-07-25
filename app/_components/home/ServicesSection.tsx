"use client";

import { motion } from 'framer-motion';
import { ArrowRight, Check } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Code, Search, Megaphone, Palette, Globe, Smartphone } from 'lucide-react';

const services = [
    {
      icon: <Code className="w-8 h-8" />,
      title: 'Web Development',
      description: 'Custom websites and web applications built with modern technologies for optimal performance and user experience.',
      features: [
        'Responsive Design',
        'Custom CMS Solutions',
        'E-commerce Development',
        'API Integration',
        'Performance Optimization',
        'Maintenance & Support'
      ],
      technologies: ['React', 'Next.js', 'Node.js', 'Python', 'PHP'],
      iconBg: 'bg-blue-100 dark:bg-blue-900/30',
      iconColor: 'text-blue-600 dark:text-blue-400'
    },
    {
      icon: <Search className="w-8 h-8" />,
      title: 'SEO Services',
      description: 'Comprehensive search engine optimization to improve your rankings and drive organic traffic to your website.',
      features: [
        'Keyword Research',
        'On-Page SEO',
        'Technical SEO',
        'Link Building',
        'Content Optimization',
        'Local SEO'
      ],
      technologies: ['Google Analytics', 'SEMrush', 'Ahrefs', 'Screaming Frog'],
      iconBg: 'bg-green-100 dark:bg-green-900/30',
      iconColor: 'text-green-600 dark:text-green-400'
    },
    {
      icon: <Megaphone className="w-8 h-8" />,
      title: 'Digital Marketing',
      description: 'Strategic marketing campaigns across digital channels to reach your target audience and drive conversions.',
      features: [
        'Social Media Marketing',
        'PPC Advertising',
        'Content Marketing',
        'Email Marketing',
        'Influencer Marketing',
        'Marketing Analytics'
      ],
      technologies: ['Google Ads', 'Facebook Ads', 'HubSpot', 'Mailchimp'],
      iconBg: 'bg-purple-100 dark:bg-purple-900/30',
      iconColor: 'text-purple-600 dark:text-purple-400'
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: 'Branding',
      description: 'Create a strong brand identity that resonates with your audience and differentiates you from competitors.',
      features: [
        'Logo Design',
        'Brand Guidelines',
        'Visual Identity',
        'Brand Strategy',
        'Print Design',
        'Packaging Design'
      ],
      technologies: ['Adobe Creative Suite', 'Figma', 'Sketch', 'InDesign'],
      iconBg: 'bg-pink-100 dark:bg-pink-900/30',
      iconColor: 'text-pink-600 dark:text-pink-400'
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: 'UI/UX Design',
      description: 'User-centered design solutions that create intuitive and engaging experiences for your customers.',
      features: [
        'User Research',
        'Wireframing',
        'Prototyping',
        'User Testing',
        'Interface Design',
        'Design Systems'
      ],
      technologies: ['Figma', 'Adobe XD', 'Sketch', 'InVision'],
      iconBg: 'bg-indigo-100 dark:bg-indigo-900/30',
      iconColor: 'text-indigo-600 dark:text-indigo-400'
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: 'Mobile Development',
      description: 'Native and cross-platform mobile applications that deliver exceptional user experiences on all devices.',
      features: [
        'iOS Development',
        'Android Development',
        'Cross-Platform Apps',
        'App Store Optimization',
        'Mobile UI/UX',
        'App Maintenance'
      ],
      technologies: ['React Native', 'Flutter', 'Swift', 'Kotlin'],
      iconBg: 'bg-orange-100 dark:bg-orange-900/30',
      iconColor: 'text-orange-600 dark:text-orange-400'
    },
  ];

export const ServicesSection = () => {
  return (
    <section className="py-20 px-4 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            Our Services
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            We offer comprehensive digital solutions to help your business grow and succeed online.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.6,
                delay: index * 0.1,
                ease: "easeOut"
              }}
              viewport={{ once: true }}
              className="group bg-white dark:bg-gray-800 rounded-xl p-4 md:p-5 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700 hover:border-gray-200 dark:hover:border-gray-600"
            >
              <div className={`inline-flex items-center justify-center p-3 rounded-lg mb-2 ${service.iconBg} ${service.iconColor}`}>
                {service.icon}
              </div>
              
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                {service.title}
              </h3>
              
              <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed text-sm">
                {service.description}
              </p>
              
              <ul className="space-y-1 mb-2">
                {service.features.slice(0, 4).map((feature, featureIndex) => (
                  <li 
                    key={featureIndex} 
                    className="flex items-center text-sm text-gray-600 dark:text-gray-400"
                  >
                    <Check className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>

              <div className="pt-2 border-t border-gray-100 dark:border-gray-700">
                <p className="text-xs text-gray-500 dark:text-gray-400 mb-3">Technologies:</p>
                <div className="flex flex-wrap gap-2">
                  {service.technologies.slice(0, 3).map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-xs rounded-md text-gray-600 dark:text-gray-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="text-center mt-8">
          <Button asChild size="lg" className="bg-primary-600 text-white hover:bg-primary-700">
            <Link href="/services">
              View All Services
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};