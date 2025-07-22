"use client";

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, ExternalLink, Github, Calendar, User, Tag, CheckCircle, Star, Play, Sun, Moon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

// Technology logos mapping with CDN URLs
const technologyLogos: Record<string, string> = {
  'React': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
  'Node.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
  'MongoDB': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
  'Stripe': 'https://images.ctfassets.net/fzn2n1nzq965/3AGidihOJl4nH9D1vDjM84/9540155d584be52fc54c443b6efa4ae6/brand_Stripe.svg',
  'Redis': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg',
  'AWS': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg',
  'Docker': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',
  'TypeScript': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
  'JavaScript': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
  'Python': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
  'Vue.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg',
  'Angular': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg',
  'Express': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg',
  'PostgreSQL': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
  'MySQL': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
  'Firebase': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg',
  'GraphQL': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg',
  'Next.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg',
  'Tailwind': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg',
  'Sass': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg',
  'Adobe Illustrator': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/illustrator/illustrator-plain.svg',
  'Photoshop': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-plain.svg',
  'InDesign': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/indesign/indesign-plain.svg',
  'Figma': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg',
  'SEMrush': 'https://upload.wikimedia.org/wikipedia/commons/4/4e/SEMrush_Logo.png',
  'Ahrefs': 'https://upload.wikimedia.org/wikipedia/commons/8/8e/Ahrefs_Logo.png',
  'Google Analytics': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg',
  'Search Console': 'https://www.google.com/images/icons/product/search_console-64.png',
  'React Native': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
  // 'Firebase': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg',
  'WordPress': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-plain.svg',
  'PHP': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg',
  'Bootstrap': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-plain.svg',
  'Facebook Ads': 'https://upload.wikimedia.org/wikipedia/commons/7/7b/Facebook_icon.svg',
  'Instagram': 'https://upload.wikimedia.org/wikipedia/commons/e/e7/Instagram_logo_2016.svg',
  'Hootsuite': 'https://upload.wikimedia.org/wikipedia/commons/8/8a/Hootsuite_logo.svg',
  'Canva': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/canva/canva-original.svg',
  'Adobe XD': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/xd/xd-plain.svg',
  'Principle': 'https://principleformac.com/images/icon.png',
  'Zeplin': 'https://cdn.worldvectorlogo.com/logos/zeplin.svg',
  'Sanity CMS': 'https://cdn.sanity.io/images/599r6htc/localized/46a76c802176eb17b04e12108de7e7e0f3736dc6-1024x1024.png?w=804&h=804&q=75&fit=max&auto=format'
};

interface Testimonial {
  text: string;
  author: string;
  position: string;
  avatar: string;
}

interface ProjectDetail {
  id: number;
  title: string;
  category: string;
  description: string;
  fullDescription: string;
  image: string;
  gallery: string[];
  technologies: string[];
  features: string[];
  achievements: string[];
  client: string;
  duration: string;
  team: string;
  budget: string;
  completionDate: string;
  liveUrl: string;
  githubUrl: string;
  testimonial: Testimonial;
  challenges: string[];
  solutions: string[];
}

const projectDetails: Record<number, ProjectDetail> = {
  1: {
    id: 1,
    title: 'E-commerce Platform',
    category: 'Web Development',
    description: 'A comprehensive modern e-commerce platform built with cutting-edge technologies, featuring advanced user experience, seamless payment integration, and robust admin dashboard.',
    fullDescription: 'This e-commerce platform represents the pinnacle of modern web development, combining elegant design with powerful functionality. Built from the ground up with scalability in mind, it handles thousands of concurrent users while maintaining lightning-fast performance. The platform includes advanced features like AI-powered product recommendations, real-time inventory management, and comprehensive analytics dashboard.',
    image: 'https://images.pexels.com/photos/4348401/pexels-photo-4348401.jpeg?auto=compress&cs=tinysrgb&w=1200',
    gallery: [
      'https://images.pexels.com/photos/4348401/pexels-photo-4348401.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    technologies: ['React', 'Node.js', 'MongoDB', 'Stripe', 'Redis', 'AWS', 'Docker', 'TypeScript'],
    features: [
      'Responsive Design', 'Payment Integration', 'Admin Dashboard', 'SEO Optimized',
      'AI Recommendations', 'Real-time Chat', 'Inventory Management', 'Multi-language Support'
    ],
    achievements: [
      '300% increase in conversion rate',
      '50% reduction in page load time',
      '99.9% uptime achieved',
      '10x scalability improvement'
    ],
    client: 'TechStore Inc.',
    duration: '6 months',
    team: '8 developers',
    budget: '$75,000',
    completionDate: 'March 2024',
    liveUrl: '#',
    githubUrl: '#',
    testimonial: {
      text: "Working with this team transformed our business completely. The e-commerce platform exceeded all our expectations and delivered exceptional results.",
      author: "Sarah Johnson",
      position: "CEO, TechStore Inc.",
      avatar: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=100"
    },
    challenges: [
      'Integrating multiple payment gateways securely',
      'Building scalable architecture for high traffic',
      'Implementing real-time inventory synchronization',
      'Creating intuitive admin dashboard'
    ],
    solutions: [
      'Implemented microservices architecture',
      'Used Redis for caching and session management',
      'Built custom API gateway for payment processing',
      'Created responsive admin panel with real-time updates'
    ]
  },
  2: {
    id: 2,
    title: 'Brand Identity Design',
    category: 'Branding',
    description: 'Complete brand identity package including logo, guidelines, and marketing materials for a creative studio looking to establish a strong market presence.',
    fullDescription: 'This comprehensive brand identity project involved extensive market research, competitor analysis, and creative exploration to develop a unique visual language for Creative Studio. The project encompassed logo design, color palette development, typography system, brand guidelines, and full suite of marketing collateral. The result was a cohesive, memorable brand identity that effectively communicates the studio\'s creative vision and values.',
    image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1200',
    gallery: [
      'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/7376/startup-photos.jpg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/270360/pexels-photo-270360.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/326514/pexels-photo-326514.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    technologies: ['Adobe Illustrator', 'Photoshop', 'InDesign', 'Figma'],
    features: [
      'Logo Design', 'Brand Guidelines', 'Business Cards', 'Social Media Kit',
      'Stationery Design', 'Brand Book', 'Packaging Design', 'Merchandise'
    ],
    achievements: [
      'Established strong brand recognition',
      'Increased social media engagement by 200%',
      'Won design awards in 2 categories',
      'Client satisfaction score of 98%'
    ],
    client: 'Creative Studio',
    duration: '3 months',
    team: '3 designers',
    budget: '$25,000',
    completionDate: 'January 2024',
    liveUrl: '#',
    githubUrl: '#',
    testimonial: {
      text: "The brand identity created for us perfectly captures our creative spirit while maintaining professional appeal. It has become our most valuable business asset.",
      author: "Michael Chen",
      position: "Creative Director, Creative Studio",
      avatar: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=100"
    },
    challenges: [
      'Creating a design that appeals to both corporate and creative audiences',
      'Developing a timeless identity that wouldn\'t feel dated quickly',
      'Ensuring consistency across all brand touchpoints',
      'Translating abstract creative concepts into visual language'
    ],
    solutions: [
      'Conducted extensive mood boarding and concept testing',
      'Developed modular design system for flexibility',
      'Created comprehensive brand guidelines',
      'Implemented iterative feedback process with client'
    ]
  },
  3: {
    id: 3,
    title: 'SEO Campaign Results',
    category: 'Digital Marketing',
    description: 'Comprehensive SEO strategy that increased organic traffic by 300% in 6 months for a local business looking to expand its online presence.',
    fullDescription: 'This SEO campaign involved a complete overhaul of the client\'s digital presence, from technical SEO improvements to content strategy development. We conducted in-depth keyword research, optimized website architecture, created high-quality content, and built authoritative backlinks. The campaign also included local SEO optimization, schema markup implementation, and ongoing performance monitoring to ensure continuous improvement.',
    image: 'https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1200',
    gallery: [
      'https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    technologies: ['SEMrush', 'Ahrefs', 'Google Analytics', 'Search Console'],
    features: [
      'Keyword Research', 'On-Page SEO', 'Link Building', 'Content Strategy',
      'Technical SEO', 'Local SEO', 'Performance Monitoring', 'Competitor Analysis'
    ],
    achievements: [
      '300% increase in organic traffic',
      'First page rankings for 85% of target keywords',
      'Conversion rate increased by 150%',
      'Reduced bounce rate by 40%'
    ],
    client: 'Local Business',
    duration: '6 months',
    team: '4 specialists',
    budget: '$30,000',
    completionDate: 'February 2024',
    liveUrl: '#',
    githubUrl: '#',
    testimonial: {
      text: "The SEO campaign delivered results beyond our expectations. Our business visibility and customer acquisition have transformed completely thanks to this work.",
      author: "David Wilson",
      position: "Owner, Local Business",
      avatar: "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=100"
    },
    challenges: [
      'Highly competitive local market',
      'Poor existing website structure',
      'Limited quality content',
      'Low domain authority'
    ],
    solutions: [
      'Implemented comprehensive technical SEO fixes',
      'Developed content clusters around pillar topics',
      'Built high-quality backlinks through outreach',
      'Optimized for local search intent'
    ]
  },
  4: {
    id: 4,
    title: 'Mobile Banking App',
    category: 'Mobile Development',
    description: 'Secure and user-friendly mobile banking application with advanced features for a FinTech startup looking to disrupt traditional banking.',
    fullDescription: 'This mobile banking app was designed to provide a seamless, secure banking experience while incorporating innovative features not available in traditional banking apps. The app includes biometric authentication, real-time transaction processing, personalized financial insights, and robust security features. Built with React Native for cross-platform compatibility, the app delivers native performance while maintaining a single codebase for both iOS and Android.',
    image: 'https://images.pexels.com/photos/4348404/pexels-photo-4348404.jpeg?auto=compress&cs=tinysrgb&w=1200',
    gallery: [
      'https://images.pexels.com/photos/4348404/pexels-photo-4348404.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/5083491/pexels-photo-5083491.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/5082579/pexels-photo-5082579.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/5083490/pexels-photo-5083490.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    technologies: ['React Native', 'Firebase', 'Node.js', 'PostgreSQL', 'TypeScript', 'AWS'],
    features: [
      'Biometric Auth', 'Real-time Transactions', 'Push Notifications', 'Offline Mode',
      'Budgeting Tools', 'Investment Tracking', 'Peer-to-Peer Payments', 'Dark Mode'
    ],
    achievements: [
      '4.9/5 average app store rating',
      '100,000+ downloads in first month',
      '40% faster transaction processing than competitors',
      '99.99% uptime for critical services'
    ],
    client: 'FinTech Startup',
    duration: '9 months',
    team: '10 developers',
    budget: '$120,000',
    completionDate: 'April 2024',
    liveUrl: '#',
    githubUrl: '#',
    testimonial: {
      text: "The banking app developed by this team became our flagship product and helped us secure Series A funding. The attention to security and user experience was exceptional.",
      author: "Jessica Lee",
      position: "CTO, FinTech Startup",
      avatar: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=100"
    },
    challenges: [
      'Meeting strict financial security requirements',
      'Handling real-time transaction processing',
      'Ensuring cross-platform consistency',
      'Implementing offline functionality'
    ],
    solutions: [
      'Implemented end-to-end encryption',
      'Used event sourcing for transaction integrity',
      'Shared component library for UI consistency',
      'Developed robust sync engine for offline mode'
    ]
  },
  5: {
    id: 5,
    title: 'Restaurant Website',
    category: 'Web Development',
    description: 'Modern restaurant website with online ordering and reservation system for a high-end dining establishment looking to enhance customer experience.',
    fullDescription: 'This restaurant website project combined elegant design with practical functionality to create an online presence that reflects the premium dining experience of Bella Vista Restaurant. The website features online ordering with real-time menu updates, table reservation system with calendar integration, chef\'s specials showcase, and event management. The headless CMS allows restaurant staff to easily update content without technical knowledge.',
    image: 'https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=1200',
    gallery: [
      'https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/260922/pexels-photo-260922.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    technologies: ['Next.js', 'Tailwind', 'Sanity CMS', 'Stripe', 'TypeScript'],
    features: [
      'Online Ordering', 'Reservation System', 'Menu Management', 'Mobile Responsive',
      'Event Calendar', 'Gallery Showcase', 'Customer Reviews', 'Loyalty Program'
    ],
    achievements: [
      '50% increase in online orders',
      'Reservations up by 75%',
      'Reduced staff workload by 30 hours/week',
      'Won Best Restaurant Website 2024'
    ],
    client: 'Bella Vista Restaurant',
    duration: '3 months',
    team: '4 developers',
    budget: '$35,000',
    completionDate: 'December 2023',
    liveUrl: '#',
    githubUrl: '#',
    testimonial: {
      text: "Our new website has transformed how we interact with customers. The online ordering and reservation features have significantly increased our revenue while reducing administrative work.",
      author: "Antonio Rossi",
      position: "Owner, Bella Vista Restaurant",
      avatar: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=100"
    },
    challenges: [
      'Integrating with existing POS system',
      'Creating intuitive reservation flow',
      'Displaying real-time menu availability',
      'Maintaining premium aesthetic'
    ],
    solutions: [
      'Developed custom API middleware for POS integration',
      'Designed step-by-step reservation wizard',
      'Implemented caching strategy for menu data',
      'Collaborated closely with restaurant\'s designer'
    ]
  },
  6: {
    id: 6,
    title: 'Corporate Website',
    category: 'Web Development',
    description: 'Professional corporate website with content management system and SEO optimization for a multinational corporation undergoing digital transformation.',
    fullDescription: 'This corporate website project involved creating a modern, accessible digital presence for Global Corp that reflects their position as an industry leader. The website features a custom CMS tailored to the company\'s specific content needs, multi-language support, investor relations portal, and comprehensive SEO optimization. The design system we created ensures brand consistency across all digital properties while allowing flexibility for different departments.',
    image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1200',
    gallery: [
      'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    technologies: ['WordPress', 'PHP', 'MySQL', 'Bootstrap', 'JavaScript'],
    features: [
      'Custom CMS', 'SEO Optimized', 'Contact Forms', 'Blog System',
      'Multi-language', 'Investor Portal', 'Accessibility Compliant', 'Performance Monitoring'
    ],
    achievements: [
      '40% increase in organic traffic',
      '95% WCAG 2.1 AA compliance',
      'Reduced page load time by 60%',
      'Unified 12 regional websites into one'
    ],
    client: 'Global Corp',
    duration: '5 months',
    team: '6 developers',
    budget: '$65,000',
    completionDate: 'November 2023',
    liveUrl: '#',
    githubUrl: '#',
    testimonial: {
      text: "The new corporate website has become a cornerstone of our digital strategy. It effectively communicates our brand values while providing the functionality our global teams need.",
      author: "Robert Thompson",
      position: "Digital Director, Global Corp",
      avatar: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=100"
    },
    challenges: [
      'Consolidating multiple regional websites',
      'Meeting strict accessibility requirements',
      'Creating flexible content structures',
      'Ensuring compliance with corporate policies'
    ],
    solutions: [
      'Developed multi-region content architecture',
      'Implemented comprehensive accessibility testing',
      'Created modular content blocks system',
      'Established governance workflow for content approval'
    ]
  },
  7: {
    id: 7,
    title: 'Social Media Campaign',
    category: 'Digital Marketing',
    description: 'Comprehensive social media marketing campaign that increased engagement by 250% for a fashion brand launching a new product line.',
    fullDescription: 'This social media campaign was designed to create buzz around a fashion brand\'s new sustainable product line. The 360-degree campaign included content strategy development, influencer partnerships, paid advertising, community engagement, and performance analytics. We created a cohesive visual identity for the campaign across all platforms while tailoring content to each platform\'s unique audience and algorithms.',
    image: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=1200',
    gallery: [
      'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/298863/pexels-photo-298863.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/934070/pexels-photo-934070.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    technologies: ['Facebook Ads', 'Instagram', 'Hootsuite', 'Canva', 'Google Analytics'],
    features: [
      'Content Strategy', 'Paid Advertising', 'Analytics', 'Community Management',
      'Influencer Partnerships', 'Hashtag Strategy', 'User-generated Content', 'Crisis Management'
    ],
    achievements: [
      '250% increase in engagement',
      'Reached 5 million impressions',
      'Generated 15,000 leads',
      'Increased followers by 120%'
    ],
    client: 'Fashion Brand',
    duration: '4 months',
    team: '5 specialists',
    budget: '$50,000',
    completionDate: 'October 2023',
    liveUrl: '#',
    githubUrl: '#',
    testimonial: {
      text: "The social media campaign exceeded all our KPIs and helped establish our new product line as a market leader. The team's creative approach and data-driven strategy delivered outstanding results.",
      author: "Emily Wilson",
      position: "Marketing Director, Fashion Brand",
      avatar: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=100"
    },
    challenges: [
      'Breaking through crowded fashion market',
      'Communicating sustainability message effectively',
      'Managing crisis when influencer controversy arose',
      'Attracting Gen Z audience'
    ],
    solutions: [
      'Developed authentic storytelling approach',
      'Created educational content about sustainability',
      'Implemented rapid response protocol',
      'Leveraged emerging platforms like TikTok'
    ]
  },
  8: {
    id: 8,
    title: 'Fitness App UI/UX',
    category: 'UI/UX Design',
    description: 'Complete UI/UX design for a fitness tracking application with intuitive interface and personalized workout recommendations.',
    fullDescription: 'This UI/UX design project involved creating a comprehensive design system for a fitness tracking app that motivates users through beautiful visuals and intuitive interactions. The project included user research, information architecture, wireframing, prototyping, and user testing. The final design features personalized workout plans, progress tracking with data visualization, social features, and seamless device synchronization.',
    image: 'https://images.pexels.com/photos/3760263/pexels-photo-3760263.jpeg?auto=compress&cs=tinysrgb&w=1200',
    gallery: [
      'https://images.pexels.com/photos/3760263/pexels-photo-3760263.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1954524/pexels-photo-1954524.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/2294361/pexels-photo-2294361.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    technologies: ['Figma', 'Adobe XD', 'Principle', 'Zeplin'],
    features: [
      'User Research', 'Wireframing', 'Prototyping', 'User Testing',
      'Design System', 'Motion Design', 'Accessibility', 'Design Handoff'
    ],
    achievements: [
      '92% user satisfaction in testing',
      'Reduced user onboarding time by 40%',
      'Increased workout completion rate by 35%',
      'Created scalable design system'
    ],
    client: 'FitLife Inc.',
    duration: '4 months',
    team: '3 designers',
    budget: '$45,000',
    completionDate: 'September 2023',
    liveUrl: '#',
    githubUrl: '#',
    testimonial: {
      text: "The UI/UX design created for our fitness app has been instrumental in our success. User engagement metrics have improved dramatically, and the design system allows us to maintain consistency as we grow.",
      author: "Daniel Kim",
      position: "Product Manager, FitLife Inc.",
      avatar: "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=100"
    },
    challenges: [
      'Designing for varying fitness levels',
      'Creating motivation through UI',
      'Displaying complex data simply',
      'Ensuring accessibility for all users'
    ],
    solutions: [
      'Conducted extensive user interviews',
      'Implemented gamification elements',
      'Developed clean data visualization approach',
      'Followed WCAG guidelines strictly'
    ]
  },
  9: {
    id: 9,
    title: 'Educational Platform',
    category: 'Web Development',
    description: 'Online learning platform with video streaming, assignments, and progress tracking for an education technology company.',
    fullDescription: 'This educational platform was designed to deliver high-quality online learning experiences with interactive features. The platform includes video streaming with adaptive bitrate, interactive assignments with auto-grading, discussion forums, progress tracking, and certification. The architecture supports thousands of concurrent users with personalized learning paths based on individual progress and preferences.',
    image: 'https://images.pexels.com/photos/3184317/pexels-photo-3184317.jpeg?auto=compress&cs=tinysrgb&w=1200',
    gallery: [
      'https://images.pexels.com/photos/3184317/pexels-photo-3184317.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/5905447/pexels-photo-5905447.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/5905480/pexels-photo-5905480.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/5905526/pexels-photo-5905526.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    technologies: ['React', 'Node.js', 'MongoDB', 'AWS', 'Docker', 'Redis', 'TypeScript'],
    features: [
      'Video Streaming', 'Assignment System', 'Progress Tracking', 'User Management',
      'Interactive Quizzes', 'Discussion Forums', 'Certification', 'Mobile App'
    ],
    achievements: [
      'Supported 10,000+ concurrent users',
      '97% video streaming reliability',
      'Reduced server costs by 40% through optimization',
      'Increased course completion rates by 60%'
    ],
    client: 'EduTech Solutions',
    duration: '8 months',
    team: '12 developers',
    budget: '$150,000',
    completionDate: 'August 2023',
    liveUrl: '#',
    githubUrl: '#',
    testimonial: {
      text: "The educational platform has become the foundation of our business, supporting our rapid growth while maintaining excellent performance. The team's technical expertise and understanding of educational needs were exceptional.",
      author: "Dr. Amanda Rodriguez",
      position: "CEO, EduTech Solutions",
      avatar: "https://images.pexels.com/photos/3760373/pexels-photo-3760373.jpeg?auto=compress&cs=tinysrgb&w=100"
    },
    challenges: [
      'Delivering high-quality video globally',
      'Creating interactive learning experiences',
      'Scaling for rapid user growth',
      'Ensuring academic integrity'
    ],
    solutions: [
      'Implemented multi-CDN video delivery',
      'Developed interactive coding environment',
      'Used microservices for scalability',
      'Built plagiarism detection system'
    ]
  }
};

// export { projectDetails, technologyLogos };

interface ProjectDetailPageProps {
  projectId?: number;
}

const ProjectDetailPage: React.FC<ProjectDetailPageProps> = ({ projectId = 1 }) => {
  const [selectedImage, setSelectedImage] = useState<number>(0);
  const project = projectDetails[projectId];

  if (!project) {
    return (
      <div className="min-h-screen pt-16 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Project Not Found</h1>
          <Button asChild>
            <Link href="/projects">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Projects
            </Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-16 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white">
      {/* Navigation */}
      <div className="container mx-auto px-2 sm:px-6 lg:px-4 py-4">
          <Button asChild variant="ghost" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
            <Link href="/projects">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Projects
            </Link>
          </Button>
        </div>

      {/* Hero Section */}
      <section className="py-12 bg-gradient-to-br from-primary-50 via-secondary-50 to-accent-50 dark:from-primary-900 dark:via-secondary-900 dark:to-accent-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <span className="bg-primary-600 text-white px-4 py-2 rounded-full text-sm font-medium mb-4 inline-block">
              {project.category}
            </span>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
              {project.title}
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              {project.description}
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-500 dark:text-gray-400">
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                {project.client}
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                {project.completionDate}
              </div>
              <div className="flex items-center gap-2">
                <Tag className="w-4 h-4" />
                {project.duration}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Project Gallery */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-6xl mx-auto"
          >
            <div className="mb-8">
              <div className="aspect-video relative overflow-hidden rounded-2xl shadow-2xl">
                <Image
                  src={project.gallery[selectedImage]}
                  alt={`${project.title} - Image ${selectedImage + 1}`}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                <Button 
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm"
                  size="lg"
                >
                  <Play className="w-6 h-6" />
                </Button>
              </div>
            </div>
            <div className="grid grid-cols-4 gap-4">
              {project.gallery.map((image, index) => (
                <motion.button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`aspect-video relative overflow-hidden rounded-lg transition-all duration-300 ${
                    selectedImage === index 
                      ? 'ring-4 ring-primary-500 scale-105' 
                      : 'hover:scale-105 opacity-70 hover:opacity-100'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Image
                    src={image}
                    alt={`${project.title} - Thumbnail ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </motion.button>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Project Details */}
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
                          src={technologyLogos[tech] || 'https://via.placeholder.com/48/6B7280/FFFFFF?text=' + tech.charAt(0)}
                          alt={`${tech} logo`}
                          fill
                          className="object-contain"
                          onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.src = `https://via.placeholder.com/48/6B7280/FFFFFF?text=${tech.charAt(0)}`;
                          }}
                        />
                      </div>
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-200">{tech}</span>
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

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-secondary-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Ready to Start Your Own Project?
            </h2>
            <p className="text-lg text-gray-100 mb-8">
              Let's create something amazing together. Contact us to discuss how we can 
              bring your vision to life with the same level of excellence and dedication.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-white text-gray-900 hover:bg-gray-100">
                <Link href="/contact">
                  Start Your Project
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white text-black dark:text-white">
                <Link href="/projects">
                  View More Projects
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export { ProjectDetailPage };