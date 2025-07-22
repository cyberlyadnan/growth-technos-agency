"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { 
  ArrowRight, 
  ArrowLeft, 
  Check, 
  Clock, 
  Users, 
  Award, 
  Phone, 
  Star,
  Mail,
  Wrench,
  ShoppingCart,
  FileText,
  Link as LinkIcon,
  Zap,
  Settings,
  Search,
  Globe,
  Cog,
  Target,
  MapPin,
  BarChart3,
  Smartphone,
  DollarSign,
  Edit3,
  AtSign,
//   Star as StarIcon,
  TrendingUp
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

// Define types for better type safety
interface Feature {
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
}

interface Technology {
  name: string;
  level: number;
}

interface ProcessStep {
  step: number;
  title: string;
  description: string;
}

interface Testimonial {
  name: string;
  company: string;
  rating: number;
  comment: string;
}

interface Pricing {
  starting: string;
  timeline: string;
  included: string[];
}

interface FAQ {
  question: string;
  answer: string;
}

interface ServiceDetail {
  title: string;
  subtitle: string;
  description: string;
  heroImage: string;
  keyBenefits: string[];
  features: Feature[];
  technologies: Technology[];
  process?: ProcessStep[];
  testimonials?: Testimonial[];
  pricing: Pricing;
  faqs?: FAQ[];
}

interface ServiceDetails {
  [key: string]: ServiceDetail;
}

// Service data with detailed information
const serviceDetails: ServiceDetails = {
  'web-development': {
    title: 'Web Development',
    subtitle: 'Custom websites and web applications built for success',
    description: 'We create modern, responsive websites and web applications that deliver exceptional user experiences while driving business growth. Our development process focuses on performance, scalability, and maintainability.',
    heroImage: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg',
    keyBenefits: [
      'Fast loading times and optimal performance',
      'Mobile-first responsive design',
      'SEO-optimized architecture',
      'Scalable and maintainable code',
      'Modern security standards',
      'Cross-browser compatibility'
    ],
    features: [
      {
        title: 'Custom Web Development',
        description: 'Tailored solutions built from the ground up to meet your specific business needs.',
        icon: Wrench
      },
      {
        title: 'E-commerce Integration',
        description: 'Complete online store solutions with payment processing and inventory management.',
        icon: ShoppingCart
      },
      {
        title: 'CMS Development',
        description: 'Easy-to-use content management systems for effortless website updates.',
        icon: FileText
      },
      {
        title: 'API Integration',
        description: 'Seamless integration with third-party services and existing systems.',
        icon: LinkIcon
      },
      {
        title: 'Performance Optimization',
        description: 'Speed optimization techniques to ensure fast loading times.',
        icon: Zap
      },
      {
        title: 'Maintenance & Support',
        description: 'Ongoing support and maintenance to keep your website running smoothly.',
        icon: Settings
      }
    ],
    technologies: [
      { name: 'React', level: 95 },
      { name: 'Next.js', level: 90 },
      { name: 'Node.js', level: 85 },
      { name: 'Python', level: 80 },
      { name: 'PHP', level: 75 },
      { name: 'TypeScript', level: 88 }
    ],
    process: [
      {
        step: 1,
        title: 'Requirements Analysis',
        description: 'We dive deep into your business requirements and technical specifications.'
      },
      {
        step: 2,
        title: 'Design & Planning',
        description: 'Create wireframes, mockups, and technical architecture plans.'
      },
      {
        step: 3,
        title: 'Development',
        description: 'Build your website using modern technologies and best practices.'
      },
      {
        step: 4,
        title: 'Testing & QA',
        description: 'Comprehensive testing across devices and browsers.'
      },
      {
        step: 5,
        title: 'Launch & Support',
        description: 'Deploy your website and provide ongoing support.'
      }
    ],
    testimonials: [
      {
        name: 'Sarah Johnson',
        company: 'TechStart Inc.',
        rating: 5,
        comment: 'Exceptional web development service! They delivered exactly what we needed on time and within budget.'
      },
      {
        name: 'Michael Chen',
        company: 'E-commerce Pro',
        rating: 5,
        comment: 'Our new website has increased our online sales by 300%. Highly recommended!'
      }
    ],
    pricing: {
      starting: '$2,999',
      timeline: '4-8 weeks',
      included: [
        'Custom responsive design',
        'Content management system',
        'SEO optimization',
        'SSL certificate',
        '3 months free support',
        'Training session'
      ]
    },
    faqs: [
      {
        question: 'How long does it take to develop a website?',
        answer: 'Typically 4-8 weeks depending on complexity and requirements. We provide detailed timelines during the planning phase.'
      },
      {
        question: 'Do you provide ongoing maintenance?',
        answer: 'Yes, we offer comprehensive maintenance packages including security updates, content updates, and technical support.'
      },
      {
        question: 'Will my website be mobile-friendly?',
        answer: 'Absolutely! All our websites are built with mobile-first approach ensuring perfect display on all devices.'
      }
    ]
  },
  'seo-services': {
    title: 'SEO Services',
    subtitle: 'Boost your search rankings and drive organic traffic',
    description: 'Our comprehensive SEO services help businesses improve their search engine visibility, drive qualified traffic, and increase conversions through proven optimization strategies.',
    heroImage: '/api/placeholder/800/400',
    keyBenefits: [
      'Increased organic search visibility',
      'Higher quality website traffic',
      'Improved conversion rates',
      'Better user experience',
      'Long-term sustainable growth',
      'Competitive advantage'
    ],
    features: [
      {
        title: 'Keyword Research & Strategy',
        description: 'Comprehensive keyword analysis to target the right search terms for your business.',
        icon: Search
      },
      {
        title: 'On-Page SEO',
        description: 'Optimize your website content, meta tags, and structure for better rankings.',
        icon: Globe
      },
      {
        title: 'Technical SEO',
        description: 'Fix technical issues that prevent search engines from properly indexing your site.',
        icon: Cog
      },
      {
        title: 'Link Building',
        description: 'Build high-quality backlinks to improve your domain authority and rankings.',
        icon: LinkIcon
      },
      {
        title: 'Local SEO',
        description: 'Optimize your business for local search results and Google My Business.',
        icon: MapPin
      },
      {
        title: 'SEO Analytics',
        description: 'Track and measure your SEO performance with detailed reporting.',
        icon: BarChart3
      }
    ],
    technologies: [
      { name: 'Google Analytics', level: 95 },
      { name: 'SEMrush', level: 90 },
      { name: 'Ahrefs', level: 85 },
      { name: 'Screaming Frog', level: 80 },
      { name: 'Google Search Console', level: 95 },
      { name: 'Moz', level: 75 }
    ],
    pricing: {
      starting: '$1,499/month',
      timeline: '3-6 months',
      included: [
        'Keyword research',
        'On-page optimization',
        'Technical SEO audit',
        'Monthly reporting',
        'Link building',
        'Local SEO setup'
      ]
    }
  },
  'digital-marketing': {
    title: 'Digital Marketing',
    subtitle: 'Strategic marketing campaigns that drive results',
    description: 'Comprehensive digital marketing strategies across multiple channels to reach your target audience, build brand awareness, and drive conversions.',
    heroImage: '/api/placeholder/800/400',
    keyBenefits: [
      'Increased brand awareness',
      'Higher conversion rates',
      'Better ROI on marketing spend',
      'Targeted audience reach',
      'Multi-channel presence',
      'Data-driven insights'
    ],
    features: [
      {
        title: 'Social Media Marketing',
        description: 'Engaging social media campaigns across all major platforms.',
        icon: Smartphone
      },
      {
        title: 'PPC Advertising',
        description: 'Strategic pay-per-click campaigns for immediate results.',
        icon: DollarSign
      },
      {
        title: 'Content Marketing',
        description: 'High-quality content that educates and engages your audience.',
        icon: Edit3
      },
      {
        title: 'Email Marketing',
        description: 'Automated email sequences that nurture leads and drive sales.',
        icon: AtSign
      },
      {
        title: 'Influencer Marketing',
        description: 'Partner with influencers to expand your reach.',
        icon: Edit3
      },
      {
        title: 'Marketing Analytics',
        description: 'Track and optimize your marketing performance.',
        icon: TrendingUp
      }
    ],
    technologies: [
      { name: 'Google Ads', level: 95 },
      { name: 'Facebook Ads', level: 90 },
      { name: 'HubSpot', level: 85 },
      { name: 'Mailchimp', level: 80 },
      { name: 'Hootsuite', level: 75 },
      { name: 'Buffer', level: 70 }
    ],
    pricing: {
      starting: '$2,499/month',
      timeline: '1-3 months',
      included: [
        'Strategy development',
        'Campaign management',
        'Content creation',
        'Ad spend optimization',
        'Performance reporting',
        'Monthly consultations'
      ]
    }
  }
};

interface ServiceDetailPageProps {
  serviceId: string;
}

export function ServiceDetailPage({ serviceId }: ServiceDetailPageProps) {
  const service = serviceDetails[serviceId];
  
  if (!service) {
    return <div>Service not found</div>;
  }

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary-600 to-primary-800 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Link href="/services" className="inline-flex items-center text-primary-100 hover:text-white mb-6 transition-colors">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Services
              </Link>
              
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                {service.title}
              </h1>
              <p className="text-xl text-primary-100 mb-8">
                {service.subtitle}
              </p>
              <p className="text-lg text-primary-200 mb-8">
                {service.description}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-accent-500 hover:bg-accent-600">
                  <Link href="/contact">
                    Get Started Now
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" className="border-white hover:bg-white text-primary-600 dark:text-white hover:text-primary-800">
                  View Portfolio
                </Button>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="aspect-video rounded-lg overflow-hidden shadow-2xl">
                <img 
                  src={service.heroImage} 
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Floating stats */}
              <div className="absolute -bottom-4 -left-4 bg-white text-gray-900 p-4 rounded-lg shadow-lg">
                <div className="flex items-center gap-2">
                  <Users className="w-5 h-5 text-primary-600" />
                  <span className="font-semibold">500+ Projects</span>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 bg-accent-500 text-white p-4 rounded-lg shadow-lg">
                <div className="flex items-center gap-2">
                  <Award className="w-5 h-5" />
                  <span className="font-semibold">98% Success Rate</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
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
              Why Choose Our {service.title}?
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Here's what makes our service stand out from the competition
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {service.keyBenefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center gap-3 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg"
              >
                <Check className="w-6 h-6 text-success-500 flex-shrink-0" />
                <span className="text-gray-900 dark:text-white font-medium">{benefit}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
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
              What's Included
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Comprehensive features designed to deliver exceptional results
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {service.features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                    <CardContent className="p-6">
                      <div className="mb-4">
                        <IconComponent className="w-10 h-10 text-primary-600" />
                      </div>
                      <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
                        {feature.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        {feature.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Technologies */}
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
              Technologies We Use
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              We leverage cutting-edge technologies to deliver the best results
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {service.technologies.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700 rounded-lg"
              >
                <span className="font-semibold text-gray-900 dark:text-white">{tech.name}</span>
                <div className="flex items-center gap-2">
                  <div className="w-32 bg-gray-200 dark:bg-gray-600 rounded-full h-2">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${tech.level}%` }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="bg-primary-600 h-2 rounded-full"
                    />
                  </div>
                  <span className="text-sm text-gray-600 dark:text-gray-400 w-12 text-right">
                    {tech.level}%
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 bg-primary-600 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Investment & Timeline
              </h2>
              <p className="text-lg text-primary-100">
                Transparent pricing with no hidden fees
              </p>
            </div>
            
            <Card className="bg-white text-gray-900">
              <CardContent className="p-8">
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary-600 mb-2">
                      {service.pricing.starting}
                    </div>
                    <div className="text-gray-600">Starting Price</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary-600 mb-2 flex items-center justify-center">
                      <Clock className="w-8 h-8 mr-2" />
                      {service.pricing.timeline}
                    </div>
                    <div className="text-gray-600">Timeline</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary-600 mb-2">
                      100%
                    </div>
                    <div className="text-gray-600">Satisfaction</div>
                  </div>
                </div>
                
                <div className="mt-8 pt-8 border-t border-gray-200">
                  <h4 className="font-semibold mb-4 text-center">What's Included:</h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    {service.pricing.included.map((item, index) => (
                      <div key={index} className="flex items-center">
                        <Check className="w-5 h-5 text-success-500 mr-3 flex-shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="mt-8 text-center">
                  <Button asChild size="lg" className="bg-primary-600 hover:bg-primary-700">
                    <Link href="/contact">
                      Get Free Quote
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      {service.testimonials && (
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
                What Our Clients Say
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Don't just take our word for it - hear from our satisfied clients
              </p>
            </motion.div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {service.testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full">
                    <CardContent className="p-6">
                      <div className="flex items-center mb-4">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                        ))}
                      </div>
                      <p className="text-gray-600 dark:text-gray-300 mb-4 italic">
                        "{testimonial.comment}"
                      </p>
                      <div className="border-t pt-4">
                        <div className="font-semibold text-gray-900 dark:text-white">
                          {testimonial.name}
                        </div>
                        <div className="text-sm text-gray-500 dark:text-gray-400">
                          {testimonial.company}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FAQ */}
      {service.faqs && (
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
                Frequently Asked Questions
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Get answers to common questions about our {service.title.toLowerCase()} service
              </p>
            </motion.div>
            
            <div className="max-w-3xl mx-auto space-y-6">
              {service.faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card>
                    <CardContent className="p-6">
                      <h3 className="font-semibold text-lg mb-3 text-gray-900 dark:text-white">
                        {faq.question}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        {faq.answer}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-primary-700 text-white">
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
              Let's discuss your project and see how our {service.title.toLowerCase()} service can help you achieve your goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-accent-500 hover:bg-accent-600">
                <Link href="/contact">
                  Start Your Project
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white dark:text-white hover:bg-gray-800 text-primary-600 hover:text-primary-800">
                <Link href="tel:+1234567890">
                  <Phone className="w-5 h-5 mr-2" />
                  Call Us Now
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}