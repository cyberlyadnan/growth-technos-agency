"use client"
import React, { useState } from 'react';
import BlogHero from './components/BlogHero';
import BlogSearchFilter from './components/BlogSearchFilter';
import FeaturedBlogCard from './components/FeaturedBlogCard';
import BlogPostsGrid from './components/BlogPostsGrid';
import NewsletterCTA from './components/NewsletterCTA';
import { blogPosts } from '@/lib/data';



const categories = ["All", "Web Development", "SEO", "Digital Marketing", "Branding", "UI/UX Design", "Analytics", "E-commerce", "Content Marketing"];

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const featuredPost = blogPosts[0];

  return (
    <div className="min-h-screen pt-16">
      <BlogHero />
      <BlogSearchFilter
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        categories={categories}
      />
      <FeaturedBlogCard post={featuredPost} />
      <BlogPostsGrid posts={filteredPosts.slice(1)} />
      <NewsletterCTA />
    </div>
  );
}
