"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Calendar, User, Tag, ArrowRight, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';

const blogPosts = [
  {
    id: 1,
    title: 'The Future of Web Development: Trends to Watch in 2024',
    excerpt: 'Explore the latest trends shaping the future of web development, from AI integration to progressive web apps.',
    image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Web Development',
    author: 'John Smith',
    date: '2024-01-15',
    readTime: '5 min read',
    tags: ['React', 'Next.js', 'AI', 'PWA']
  },
  {
    id: 2,
    title: 'SEO Best Practices for 2024: A Complete Guide',
    excerpt: 'Learn the latest SEO strategies and techniques to improve your website\'s search engine rankings.',
    image: 'https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'SEO',
    author: 'Sarah Johnson',
    date: '2024-01-10',
    readTime: '8 min read',
    tags: ['SEO', 'Google', 'Keywords', 'Rankings']
  },
  {
    id: 3,
    title: 'Social Media Marketing Strategies That Actually Work',
    excerpt: 'Discover proven social media marketing strategies that drive engagement and convert followers into customers.',
    image: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Digital Marketing',
    author: 'Emily Rodriguez',
    date: '2024-01-05',
    readTime: '6 min read',
    tags: ['Social Media', 'Marketing', 'Engagement', 'ROI']
  },
  {
    id: 4,
    title: 'Building a Strong Brand Identity: A Designer\'s Perspective',
    excerpt: 'Learn how to create a memorable brand identity that resonates with your target audience.',
    image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Branding',
    author: 'Michael Chen',
    date: '2024-01-01',
    readTime: '7 min read',
    tags: ['Branding', 'Design', 'Identity', 'Logo']
  },
  {
    id: 5,
    title: 'Mobile-First Design: Why It Matters More Than Ever',
    excerpt: 'Understand the importance of mobile-first design and how to implement it effectively.',
    image: 'https://images.pexels.com/photos/3760263/pexels-photo-3760263.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'UI/UX Design',
    author: 'Lisa Thompson',
    date: '2023-12-28',
    readTime: '5 min read',
    tags: ['Mobile', 'Design', 'UX', 'Responsive']
  },
  {
    id: 6,
    title: 'The Power of Data Analytics in Digital Marketing',
    excerpt: 'Harness the power of data analytics to make informed marketing decisions and improve ROI.',
    image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Analytics',
    author: 'David Wilson',
    date: '2023-12-25',
    readTime: '9 min read',
    tags: ['Analytics', 'Data', 'Marketing', 'ROI']
  },
  {
    id: 7,
    title: 'E-commerce Optimization: Converting Visitors to Customers',
    excerpt: 'Learn proven techniques to optimize your e-commerce store and increase conversion rates.',
    image: 'https://images.pexels.com/photos/4348401/pexels-photo-4348401.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'E-commerce',
    author: 'John Smith',
    date: '2023-12-20',
    readTime: '6 min read',
    tags: ['E-commerce', 'Conversion', 'Optimization', 'Sales']
  },
  {
    id: 8,
    title: 'Content Marketing Strategies for B2B Success',
    excerpt: 'Discover effective content marketing strategies specifically designed for B2B businesses.',
    image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Content Marketing',
    author: 'Sarah Johnson',
    date: '2023-12-15',
    readTime: '7 min read',
    tags: ['Content', 'B2B', 'Marketing', 'Strategy']
  },
  {
    id: 9,
    title: 'The Rise of Voice Search: Optimizing for the Future',
    excerpt: 'Prepare your website for voice search optimization and stay ahead of the competition.',
    image: 'https://images.pexels.com/photos/4545193/pexels-photo-4545193.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'SEO',
    author: 'Emily Rodriguez',
    date: '2023-12-10',
    readTime: '5 min read',
    tags: ['Voice Search', 'SEO', 'Future', 'Optimization']
  }
];

const categories = ['All', 'Web Development', 'SEO', 'Digital Marketing', 'Branding', 'UI/UX Design', 'Analytics', 'E-commerce', 'Content Marketing'];

export function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const featuredPost = blogPosts[0];

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
              Our Blog
            </h1>
            <p className="text-xl text-primary-100 mb-8">
              Stay updated with the latest insights, tips, and trends in digital marketing, 
              web development, and technology from our team of experts.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-8 px-4 md:px-[5%] bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-16 px-4 md:px-[5%] bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-2xl font-bold mb-8 text-gray-900 dark:text-white">
              Featured Article
            </h2>
            <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="grid lg:grid-cols-2 gap-0">
                <div className="aspect-video lg:aspect-square relative">
                  <Image
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardContent className="p-8">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {featuredPost.category}
                    </span>
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      {featuredPost.readTime}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                    {featuredPost.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-6">
                    {featuredPost.excerpt}
                  </p>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="flex items-center gap-2">
                      <User className="w-4 h-4 text-gray-400" />
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        {featuredPost.author}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-gray-400" />
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        {new Date(featuredPost.date).toLocaleDateString()}
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {featuredPost.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-2 py-1 rounded text-sm"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                  <Button asChild>
                    <Link href={`/blog/${featuredPost.id}`}>
                      Read More
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                </CardContent>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16 px-4 md:px-[5%] bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-2xl font-bold mb-8 text-gray-900 dark:text-white">
              Latest Articles
            </h2>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.slice(1).map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300 h-full">
                  <div className="aspect-video relative">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4 mb-3">
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        {post.readTime}
                      </span>
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        {new Date(post.date).toLocaleDateString()}
                      </span>
                    </div>
                    <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center gap-2 mb-4">
                      <User className="w-4 h-4 text-gray-400" />
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        {post.author}
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.slice(0, 3).map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-2 py-1 rounded text-xs"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                    <Button asChild size="sm" className="w-full">
                      <Link href={`/blog/${post.id}`}>
                        Read More
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16 bg-primary-600 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto"
          >
            <h2 className="text-3xl font-bold mb-4">
              Never Miss an Update
            </h2>
            <p className="text-lg text-primary-100 mb-8">
              Subscribe to our newsletter to get the latest articles, insights, and tips delivered to your inbox.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-accent-500"
              />
              <Button type="submit" className="bg-accent-500 text-center hover:bg-accent-600 px-6 py-6">
                Subscribe
              </Button>
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  );
}