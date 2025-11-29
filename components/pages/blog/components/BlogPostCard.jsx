"use client";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, User, Clock, Calendar } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function BlogPostCard({ post, formatDate }) {
  if (!post) return null;

  const readingTime = (content) => {
    if (!content) return "5 min";
    const text = content.replace(/<[^>]*>/g, "");
    const words = text.split(/\s+/).length;
    const minutes = Math.ceil(words / 200);
    return `${minutes} min read`;
  };

  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300 h-full border-border/50 bg-background/80 backdrop-blur-sm">
      <div className="aspect-video relative">
        <Image
          src={post.featuredImage || post.image || "/placeholder-blog.jpg"}
          alt={post.title}
          fill
          className="object-cover hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-4 left-4">
          <span className="bg-gradient-to-r from-primary to-accent text-white px-3 py-1 rounded-full text-sm font-medium">
            {post.category || "General"}
          </span>
        </div>
      </div>
      <CardContent className="p-6">
        <div className="flex items-center gap-4 mb-3 text-sm text-foreground/60">
          <div className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            {readingTime(post.content || post.description)}
          </div>
          {post.createdAt && (
            <div className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              {formatDate(post.createdAt)}
            </div>
          )}
        </div>
        <h3 className="text-xl font-semibold mb-3 text-foreground line-clamp-2">
          {post.title}
        </h3>
        <p className="text-foreground/70 mb-4 line-clamp-3">
          {post.excerpt || post.description}
        </p>
        {post.author && (
          <div className="flex items-center gap-2 mb-4">
            <User className="w-4 h-4 text-foreground/40" />
            <span className="text-sm text-foreground/60">{post.author}</span>
          </div>
        )}
        {post.tags && post.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {post.tags.slice(0, 3).map((tag, i) => (
              <span
                key={i}
                className="bg-primary/10 text-primary px-2 py-1 rounded text-xs border border-primary/20"
              >
                #{tag}
              </span>
            ))}
          </div>
        )}
        <Button asChild size="sm" className="w-full bg-gradient-to-r from-primary to-accent">
          <Link href={`/blog/${post.slug || post.id}`}>
            Read More
            <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </Button>
      </CardContent>
    </Card>
  );
}

