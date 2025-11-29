"use client";

import { useState, useMemo } from "react";
import BlogHero from "./components/BlogHero";
import BlogSearchFilter from "./components/BlogSearchFilter";
import FeaturedBlogCard from "./components/FeaturedBlogCard";
import BlogPostsGrid from "./components/BlogPostsGrid";
import NewsletterCTA from "./components/NewsletterCTA";
import Image from "next/image";
import Link from "next/link";
import { Calendar, Clock, User } from "lucide-react";

const categories = [
  "All",
  "Web Development",
  "SEO",
  "Digital Marketing",
  "Branding",
  "UI/UX Design",
  "Analytics",
  "E-commerce",
  "Content Marketing",
];

export default function BlogListPage({ blogs }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPosts = useMemo(() => {
    return blogs
      .filter((post) => post.published !== false) // Only show published blogs
      .filter((post) => {
        const matchesCategory =
          selectedCategory === "All" || post.category === selectedCategory;
        const matchesSearch =
          post.title?.toLowerCase().includes(searchQuery.toLowerCase()) ||
          post.excerpt?.toLowerCase().includes(searchQuery.toLowerCase()) ||
          post.description?.toLowerCase().includes(searchQuery.toLowerCase()) ||
          (post.tags || []).some((tag) =>
            tag.toLowerCase().includes(searchQuery.toLowerCase())
          );
        return matchesCategory && matchesSearch;
      });
  }, [blogs, selectedCategory, searchQuery]);

  const featuredPost = filteredPosts[0];
  const otherPosts = filteredPosts.slice(1);

  const formatDate = (date) => {
    if (!date) return "";
    
    let d;
    try {
      if (date?.toDate && typeof date.toDate === "function") {
        d = date.toDate();
      } else if (date instanceof Date) {
        d = date;
      } else {
        d = new Date(date);
      }
      
      // Check if date is valid
      if (isNaN(d.getTime())) {
        return "";
      }
      
      return new Intl.DateTimeFormat("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      }).format(d);
    } catch (error) {
      console.error("Error formatting date:", error);
      return "";
    }
  };

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
      {featuredPost && <FeaturedBlogCard post={featuredPost} formatDate={formatDate} />}
      <BlogPostsGrid posts={otherPosts} formatDate={formatDate} />
      <NewsletterCTA />
    </div>
  );
}

