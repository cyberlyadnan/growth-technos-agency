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
    <section className="py-16 px-4 md:px-[5%] bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          Featured Article
        </h2>
        <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300 border-border/50 bg-background/80 backdrop-blur-sm">
          <div className="grid lg:grid-cols-2 gap-0">
            <div className="aspect-video lg:aspect-square relative">
              <Image
                src={post.featuredImage || post.image || "/placeholder-blog.jpg"}
                alt={post.title}
                fill
                className="object-cover"
              />
            </div>
            <CardContent className="p-8">
              <div className="flex items-center gap-4 mb-4">
                <span className="bg-gradient-to-r from-primary to-accent text-white px-3 py-1 rounded-full text-sm font-medium">
                  {post.category || "General"}
                </span>
                <span className="text-sm text-foreground/60 flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  {readingTime(post.content || post.description)}
                </span>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-foreground">{post.title}</h3>
              <p className="text-foreground/70 mb-6 line-clamp-3">
                {post.excerpt || post.description}
              </p>
              <div className="flex items-center gap-4 mb-6">
                {post.author && (
                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4 text-foreground/40" />
                    <span className="text-sm text-foreground/60">{post.author}</span>
                  </div>
                )}
                {post.createdAt && (
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-foreground/40" />
                    <span className="text-sm text-foreground/60">
                      {formatDate(post.createdAt)}
                    </span>
                  </div>
                )}
              </div>
              {post.tags && post.tags.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-6">
                  {post.tags.slice(0, 3).map((tag, i) => (
                    <span
                      key={i}
                      className="bg-primary/10 text-primary px-2 py-1 rounded text-sm border border-primary/20"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              )}
              <Button asChild className="bg-gradient-to-r from-primary to-accent">
                <Link href={`/blog/${post.slug || post.id}`}>
                  Read More
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

