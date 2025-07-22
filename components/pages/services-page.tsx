"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Check, Code, Search, Megaphone, Palette, Globe, Smartphone, ShoppingCart, BarChart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const services = [
  {
    id: 'web-development',
    icon: Code,
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
    color: 'text-blue-600',
    gradient: 'from-blue-500 to-blue-600',
    iconBg: 'bg-blue-100 dark:bg-blue-900',
    iconColor: 'text-blue-600 dark:text-blue-300'
  },
  {
    id: 'seo-services',
    icon: Search,
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
    color: 'text-green-600',
    gradient: 'from-green-500 to-green-600',
    iconBg: 'bg-green-100 dark:bg-green-900',
    iconColor: 'text-green-600 dark:text-green-300'
  },
  {
    id: 'digital-marketing',
    icon: Megaphone,
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
    color: 'text-purple-600',
    gradient: 'from-purple-500 to-purple-600',
    iconBg: 'bg-purple-100 dark:bg-purple-900',
    iconColor: 'text-purple-600 dark:text-purple-300'
  },
  {
    id: 'branding',
    icon: Palette,
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
    color: 'text-pink-600',
    gradient: 'from-pink-500 to-pink-600',
    iconBg: 'bg-pink-100 dark:bg-pink-900',
    iconColor: 'text-pink-600 dark:text-pink-300'
  },
  {
    id: 'ui-ux-design',
    icon: Globe,
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
    color: 'text-indigo-600',
    gradient: 'from-indigo-500 to-indigo-600',
    iconBg: 'bg-indigo-100 dark:bg-indigo-900',
    iconColor: 'text-indigo-600 dark:text-indigo-300'
  },
  {
    id: 'mobile-development',
    icon: Smartphone,
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
    color: 'text-orange-600',
    gradient: 'from-orange-500 to-orange-600',
    iconBg: 'bg-orange-100 dark:bg-orange-900',
    iconColor: 'text-orange-600 dark:text-orange-300'
  },
  {
    id: 'ecommerce-solutions',
    icon: ShoppingCart,
    title: 'E-commerce Solutions',
    description: 'Complete e-commerce platforms that drive sales and provide seamless shopping experiences.',
    features: [
      'Online Store Setup',
      'Payment Integration',
      'Inventory Management',
      'Order Processing',
      'Customer Support',
      'Analytics & Reporting'
    ],
    technologies: ['Shopify', 'WooCommerce', 'Magento', 'BigCommerce'],
    color: 'text-red-600',
    gradient: 'from-red-500 to-red-600',
    iconBg: 'bg-red-100 dark:bg-red-900',
    iconColor: 'text-red-600 dark:text-red-300'
  },
  {
    id: 'analytics-reporting',
    icon: BarChart,
    title: 'Analytics & Reporting',
    description: 'Data-driven insights to track performance, understand your audience, and optimize your digital strategy.',
    features: [
      'Web Analytics',
      'Conversion Tracking',
      'Performance Monitoring',
      'Custom Dashboards',
      'A/B Testing',
      'ROI Analysis'
    ],
    technologies: ['Google Analytics', 'Google Tag Manager', 'Hotjar', 'Mixpanel'],
    color: 'text-emerald-600',
    gradient: 'from-emerald-500 to-emerald-600',
    iconBg: 'bg-emerald-100 dark:bg-emerald-900',
    iconColor: 'text-emerald-600 dark:text-emerald-300'
  }
];

const process = [
  {
    step: '01',
    title: 'Discovery & Planning',
    description: 'We start by understanding your business goals, target audience, and project requirements.'
  },
  {
    step: '02',
    title: 'Strategy Development',
    description: 'Our team creates a comprehensive strategy tailored to your specific needs and objectives.'
  },
  {
    step: '03',
    title: 'Design & Development',
    description: 'We bring your vision to life with cutting-edge design and development techniques.'
  },
  {
    step: '04',
    title: 'Testing & Optimization',
    description: 'Rigorous testing ensures everything works perfectly before launch and ongoing optimization.'
  },
  {
    step: '05',
    title: 'Launch & Support',
    description: 'We handle the launch and provide ongoing support to ensure your continued success.'
  }
];

export function ServicesPage() {
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
              Our Services
            </h1>
            <p className="text-xl text-primary-100 mb-8">
              Comprehensive digital solutions to help your business grow and succeed in the digital landscape. 
              From web development to digital marketing, we've got you covered.
            </p>
            <Button asChild size="lg" className="bg-accent-500 hover:bg-accent-600">
              <Link href="/contact">
                Get Started Today
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
              What We Do
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              We offer a comprehensive suite of digital services designed to help your business thrive online.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-6">
            {services.map((service, index) => (
              <Link href={`/services/${service.id}`} key={service.title}>
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ 
                    duration: 0.6,
                    delay: index * 0.1,
                    ease: "easeOut"
                  }}
                  viewport={{ once: true }}
                  className="group bg-white dark:bg-gray-800 rounded-xl p-4 md:p-5 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700 hover:border-gray-200 dark:hover:border-gray-600 cursor-pointer"
                >
                  {/* Icon */}
                  <div className={`inline-flex items-center justify-center p-3 rounded-lg mb-2 ${service.iconBg} ${service.iconColor}`}>
                    <service.icon className="w-6 h-6" />
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white group-hover:text-primary-600 transition-colors duration-300">
                    {service.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed text-sm">
                    {service.description}
                  </p>
                  
                  {/* Features */}
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

                  {/* Technologies Badges */}
                  <div className="pt-2 border-t border-gray-100 dark:border-gray-700 mb-4">
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

                  {/* Learn More Button */}
                  <div className="flex items-center justify-between pt-2 border-t border-gray-100 dark:border-gray-700">
                    <span className="text-sm font-medium text-primary-600 dark:text-primary-400 group-hover:text-primary-700 transition-colors duration-300">
                      Learn More
                    </span>
                    <ArrowRight className="w-4 h-4 text-primary-600 dark:text-primary-400 group-hover:text-primary-700 group-hover:translate-x-1 transition-all duration-300" />
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
              Our Process
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              We follow a proven process to ensure every project is delivered on time, on budget, and exceeds expectations.
            </p>
          </motion.div>
          
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-primary-200 dark:bg-primary-800 hidden md:block"></div>
            <div className="space-y-12">
              {process.map((step, index) => (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                >
                  <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                    <Card className="hover:shadow-lg transition-shadow duration-300">
                      <CardContent className="p-6">
                        <div className="text-primary-600 dark:text-primary-400 font-bold text-lg mb-2">
                          {step.step}
                        </div>
                        <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
                          {step.title}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300">
                          {step.description}
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                  <div className="hidden md:flex w-12 h-12 bg-primary-600 rounded-full items-center justify-center text-white font-bold absolute left-1/2 transform -translate-x-1/2 shadow-lg">
                    {step.step}
                  </div>
                </motion.div>
              ))}
            </div>
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
              Ready to Get Started?
            </h2>
            <p className="text-lg text-primary-100 mb-8">
              Let's discuss your project and see how we can help you achieve your digital goals. 
              Contact us today for a free consultation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-accent-500 hover:bg-accent-600">
                <Link href="/contact">
                  Start Your Project
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary-600">
                <Link href="/projects">
                  View Our Work
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}