"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Check, Code, Search, Megaphone, Palette, Globe, Smartphone, ShoppingCart, BarChart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const services = [
  {
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
    color: 'text-blue-600'
  },
  {
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
    color: 'text-green-600'
  },
  {
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
    color: 'text-purple-600'
  },
  {
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
    color: 'text-pink-600'
  },
  {
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
    color: 'text-indigo-600'
  },
  {
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
    color: 'text-orange-600'
  },
  {
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
    color: 'text-red-600'
  },
  {
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
    color: 'text-emerald-600'
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
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className={`w-12 h-12 rounded-lg bg-gray-100 dark:bg-gray-700 flex items-center justify-center mb-4`}>
                      <service.icon className={`w-6 h-6 ${service.color}`} />
                    </div>
                    <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      {service.description}
                    </p>
                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Features:</h4>
                      <ul className="space-y-1">
                        {service.features.slice(0, 4).map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                            <Check className="w-4 h-4 text-success-500 mr-2 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      <strong>Technologies:</strong> {service.technologies.join(', ')}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
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
                    <Card>
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
                  <div className="hidden md:flex w-12 h-12 bg-primary-600 rounded-full items-center justify-center text-white font-bold absolute left-1/2 transform -translate-x-1/2">
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