"use client";

import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Check, Star, Code, Search, Megaphone, Palette, Globe, Smartphone, ShoppingCart, BarChart } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

import { Card, CardContent } from '@/components/ui/card';
import { listAllCollections } from '@/lib/firebase';

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
    // {
    //   icon: <ShoppingCart className="w-8 h-8" />,
    //   title: 'E-commerce Solutions',
    //   description: 'Complete e-commerce platforms that drive sales and provide seamless shopping experiences.',
    //   features: [
    //     'Online Store Setup',
    //     'Payment Integration',
    //     'Inventory Management',
    //     'Order Processing',
    //     'Customer Support',
    //     'Analytics & Reporting'
    //   ],
    //   technologies: ['Shopify', 'WooCommerce', 'Magento', 'BigCommerce'],
    //   iconBg: 'bg-red-100 dark:bg-red-900/30',
    //   iconColor: 'text-red-600 dark:text-red-400'
    // },
    // {
    //   icon: <BarChart className="w-8 h-8" />,
    //   title: 'Analytics & Reporting',
    //   description: 'Data-driven insights to track performance, understand your audience, and optimize your digital strategy.',
    //   features: [
    //     'Web Analytics',
    //     'Conversion Tracking',
    //     'Performance Monitoring',
    //     'Custom Dashboards',
    //     'A/B Testing',
    //     'ROI Analysis'
    //   ],
    //   technologies: ['Google Analytics', 'Google Tag Manager', 'Hotjar', 'Mixpanel'],
    //   iconBg: 'bg-emerald-100 dark:bg-emerald-900/30',
    //   iconColor: 'text-emerald-600 dark:text-emerald-400'
    // }
  ];




const stats = [
  { number: '500+', label: 'Projects Completed' },
  { number: '150+', label: 'Happy Clients' },
  { number: '5+', label: 'Years Experience' },
  { number: '99%', label: 'Success Rate' }
];

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'CEO, TechStart Inc.',
    content: 'Growth Technos transformed our online presence completely. Their expertise in web development and digital marketing helped us increase our revenue by 200%.',
    rating: 5
  },
  {
    name: 'Michael Chen',
    role: 'Marketing Director, Global Corp',
    content: 'The team\'s SEO strategies brought our website from page 10 to the top 3 results. Outstanding work and great communication throughout the project.',
    rating: 5
  },
  {
    name: 'Emily Rodriguez',
    role: 'Founder, Creative Studio',
    content: 'Professional, creative, and results-driven. Growth Technos delivered exactly what we needed to establish our brand in the market.',
    rating: 5
  }
];

const projects = [
  {
    title: 'E-commerce Platform',
    category: 'Web Development',
    image: 'https://images.pexels.com/photos/4348401/pexels-photo-4348401.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    title: 'Brand Identity Design',
    category: 'Branding',
    image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    title: 'SEO Campaign',
    category: 'Digital Marketing',
    image: 'https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=800'
  }
];

export default function HomePage() {
      const displayedServices = services.slice(0, 8);
      useEffect(() => {
    listAllCollections();
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&cs=tinysrgb&w=1920')] bg-cover bg-center opacity-10"></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-balance"
            >
              Grow Your Business with 
              <span className="text-accent-400"> Digital Excellence</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg md:text-xl lg:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto"
            >
              We help businesses thrive in the digital world with cutting-edge web development, 
              SEO optimization, and strategic digital marketing solutions.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <Button asChild size="lg" className="bg-accent-500 hover:bg-accent-600 text-white px-8 py-6 text-lg">
                <Link href="/contact">
                  Get Started Today
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white dark:text-white text-black hover:bg-white hover:text-primary-600 px-8 py-6 text-lg">
                <Link href="/projects">
                  View Our Work
                </Link>
              </Button>
            </motion.div>
          </div>
        </div>
        
        <motion.div
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
          </div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 md:px-[10%] bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-bold text-primary-600 dark:text-primary-400 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 dark:text-gray-400 font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4 md:px-[10%] bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white">
                About Growth Technos
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                We are a team of passionate digital experts dedicated to helping businesses 
                succeed in the digital landscape. With over 5 years of experience, we've 
                helped hundreds of companies achieve their online goals.
              </p>
              <div className="space-y-4">
                {[
                  'Expert team of developers and marketers',
                  'Proven track record of successful projects',
                  'Cutting-edge technologies and strategies',
                  'Dedicated support and maintenance'
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-success-500 flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300">{item}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8">
                <Button asChild size="lg" className="bg-primary-600 dark:text-black text-white hover:bg-primary-700">
                  <Link href="/about">
                    Learn More About Us
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                </Button>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-w-16 aspect-h-12 rounded-2xl overflow-hidden">
                <Image
                  src="https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Our team working"
                  width={600}
                  height={400}
                  className="object-cover rounded-2xl"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-accent-500 text-white p-6 rounded-2xl">
                <div className="text-2xl font-bold">500+</div>
                <div className="text-sm opacity-90">Projects Completed</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
       <section className="py-20 px-4 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Header */}
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
        
        {/* Services Grid - 2 rows of 4 cards */}
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
              {/* Icon */}
              <div className={`inline-flex items-center justify-center p-3 rounded-lg mb-2 ${service.iconBg} ${service.iconColor}`}>
                {service.icon}
              </div>
              
              {/* Title */}
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
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

              {/* Technologies */}
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
        
        {/* Call to Action */}
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

      {/* Projects Section */}
      <section className="py-20 px-4 md:px-[10%] bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
              Featured Projects
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Take a look at some of our recent work and see how we've helped businesses achieve their goals.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                  <div className="aspect-video relative overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardContent className="p-6">
                    <div className="text-sm text-primary-600 dark:text-primary-400 font-medium mb-2">
                      {project.category}
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                      {project.title}
                    </h3>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Button asChild size="lg" className="text-white bg-primary-600 hover:bg-primary-700">
              <Link href="/projects">
                View All Projects
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 md:px-[10%] bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
              What Our Clients Say
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Don't just take our word for it. Here's what our satisfied clients have to say about our work.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full">
                  <CardContent className="p-6">
                    <div className="flex mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <p className="text-gray-700 dark:text-gray-300 mb-6 italic">
                      "{testimonial.content}"
                    </p>
                    <div>
                      <div className="font-semibold text-gray-900 dark:text-white">
                        {testimonial.name}
                      </div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">
                        {testimonial.role}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-primary-600 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Stay Updated with Our Newsletter
            </h2>
            <p className="text-lg text-primary-100 mb-8">
              Get the latest insights, tips, and updates from our team delivered straight to your inbox.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-accent-500"
              />
              <Button type="submit" className="bg-accent-500 hover:bg-accent-600 px-6 py-3">
                Subscribe
              </Button>
            </form>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
              Ready to Grow Your Business?
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
              Let's work together to create something amazing. Get in touch with us today 
              and let's discuss how we can help you achieve your digital goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-primary-600 hover:bg-primary-700">
                <Link href="/contact">
                  Get Started Now
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/projects">
                  View Our Portfolio
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}