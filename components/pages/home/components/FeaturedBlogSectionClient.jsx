"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Calendar, Clock, User, Tag } from "lucide-react";

export function FeaturedBlogSectionClient({ blogs }) {
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
      
      return d.toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      });
    } catch (error) {
      console.error("Error formatting date:", error);
      return "";
    }
  };

  const readingTime = (content) => {
    if (!content) return "2 min read";
    const text = content.replace(/<[^>]*>/g, "");
    const words = text.split(/\s+/).length;
    const minutes = Math.ceil(words / 200);
    return `${minutes} min read`;
  };

  if (blogs.length === 0) {
    return null;
  }

  return (
    <section className="py-20 bg-gradient-to-br from-background via-background to-background/95 relative overflow-hidden">
      {/* Futuristic Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px] dark:bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)]"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            <Tag className="w-4 h-4" />
            Latest Insights
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
            Our Latest Blog Posts
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Stay updated with the latest trends, insights, and tips in digital marketing, web development, and technology.
          </p>
        </div>

        {/* Blog Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12">
          {blogs.map((blog, index) => (
            <Card
              key={blog.id || index}
              className="group relative overflow-hidden border-border/50 bg-background/80 backdrop-blur-sm hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10"
            >
              {/* Gradient Overlay on Hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              {/* Image */}
              {blog.featuredImage || blog.image ? (
                <div className="relative w-full h-48 overflow-hidden">
                  <Image
                    src={blog.featuredImage || blog.image}
                    alt={blog.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent"></div>
                </div>
              ) : (
                <div className="w-full h-48 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                  <Tag className="w-12 h-12 text-primary/40" />
                </div>
              )}

              <CardContent className="p-6 relative z-10">
                {/* Category */}
                {blog.category && (
                  <div className="mb-3">
                    <span className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">
                      {blog.category}
                    </span>
                  </div>
                )}

                {/* Title */}
                <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors line-clamp-2">
                  {blog.title}
                </h3>

                {/* Excerpt */}
                <p className="text-foreground/70 text-sm mb-4 line-clamp-3">
                  {blog.excerpt || blog.description || ""}
                </p>

                {/* Meta Info */}
                <div className="flex items-center gap-4 text-xs text-foreground/60 mb-4">
                  {blog.author && (
                    <div className="flex items-center gap-1">
                      <User className="w-3 h-3" />
                      <span>{blog.author}</span>
                    </div>
                  )}
                  {blog.date || blog.createdAt ? (
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      <span>{formatDate(blog.date || blog.createdAt)}</span>
                    </div>
                  ) : null}
                  {blog.content && (
                    <div className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      <span>{readingTime(blog.content)}</span>
                    </div>
                  )}
                </div>

                {/* Tags */}
                {blog.tags && blog.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-4">
                    {blog.tags.slice(0, 3).map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="text-xs px-2 py-1 rounded bg-muted text-muted-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}

                {/* Read More Link */}
                <Link href={`/blog/${blog.slug || blog.id}`}>
                  <Button
                    variant="ghost"
                    className="w-full group-hover:text-primary group-hover:bg-primary/10 transition-colors"
                  >
                    Read More
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </CardContent>

              {/* Corner Accent */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Card>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <Link href="/blog">
            <Button
              size="lg"
              className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white border-0 shadow-lg shadow-primary/20 relative overflow-hidden group"
            >
              <span className="relative z-10 flex items-center gap-2">
                View All Blogs
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}

