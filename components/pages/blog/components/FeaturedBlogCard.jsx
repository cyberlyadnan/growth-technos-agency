"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, User, ArrowRight, Clock } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function FeaturedBlogCard({ post, formatDate }) {
  if (!post) return null;

  const readingTime = (content) => {
    if (!content) return "5 min";
    const text = content.replace(/<[^>]*>/g, "");
    const words = text.split(/\s+/).length;
    const minutes = Math.ceil(words / 200);
    return `${minutes} min read`;
  };

  return (
    <section className="py-10 sm:py-14 lg:py-16 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-foreground">
          <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Featured Article
          </span>
        </h2>
        <Card className="overflow-hidden border border-border/50 bg-card shadow-xl shadow-black/5 dark:shadow-none hover:shadow-2xl hover:shadow-primary/5 dark:hover:border-primary/20 transition-all duration-300 rounded-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
            <div className="relative aspect-[16/10] lg:aspect-auto lg:min-h-[360px]">
              <Image
                src={post.featuredImage || post.image || "/placeholder-blog.jpg"}
                alt={post.title}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
              <div className="absolute top-4 left-4">
                <span className="inline-flex items-center rounded-full bg-primary px-3 py-1.5 text-xs font-semibold text-primary-foreground shadow">
                  {post.category || "General"}
                </span>
              </div>
            </div>
            <CardContent className="p-6 sm:p-8 flex flex-col justify-center">
              <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-3">
                <span className="inline-flex items-center gap-1.5 text-sm text-muted-foreground">
                  <Clock className="w-4 h-4" />
                  {readingTime(post.content || post.description)}
                </span>
                {post.createdAt && (
                  <span className="inline-flex items-center gap-1.5 text-sm text-muted-foreground">
                    <Calendar className="w-4 h-4" />
                    {formatDate(post.createdAt)}
                  </span>
                )}
              </div>
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-3 text-foreground leading-tight">
                {post.title}
              </h3>
              <p className="text-foreground/70 mb-4 sm:mb-6 line-clamp-3 text-sm sm:text-base leading-relaxed">
                {post.excerpt || post.description}
              </p>
              {post.author && (
                <div className="flex items-center gap-2 mb-4">
                  <User className="w-4 h-4 text-muted-foreground shrink-0" />
                  <span className="text-sm text-muted-foreground">{post.author}</span>
                </div>
              )}
              {post.tags && post.tags.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-6">
                  {post.tags.slice(0, 4).map((tag, i) => (
                    <span
                      key={i}
                      className="rounded-md bg-primary/10 text-primary px-2.5 py-1 text-xs font-medium border border-primary/20"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              )}
              <Button
                asChild
                className="w-full sm:w-auto bg-gradient-to-r from-primary to-accent hover:opacity-90 text-white font-semibold rounded-lg shadow-lg shadow-primary/25"
              >
                <Link href={`/blog/${post.slug || post.id}`}>
                  Read Article
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </CardContent>
          </div>
        </Card>
      </div>
    </section>
  );
}
