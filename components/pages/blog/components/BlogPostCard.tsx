"use client";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, User, Clock, Calendar } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface Props {
  post: any;
  formatDate?: (date: any) => string;
}

export default function BlogPostCard({ post, formatDate }: Props) {
  const readingTime = (content: string) => {
    if (!content) return "5 min read";
    const text = content.replace(/<[^>]*>/g, "");
    const words = text.split(/\s+/).length;
    return `${Math.ceil(words / 200)} min read`;
  };
  const dateStr = post.createdAt && formatDate ? formatDate(post.createdAt) : (post.date ? new Date(post.date).toLocaleDateString("en-US") : "");

  return (
    <Card className="group overflow-hidden h-full flex flex-col border border-border/50 bg-card hover:border-primary/20 hover:shadow-xl hover:shadow-primary/5 dark:hover:shadow-none transition-all duration-300 rounded-xl">
      <div className="aspect-[16/10] relative overflow-hidden">
        <Image
          src={post.image || post.featuredImage || "/placeholder-blog.jpg"}
          alt={post.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute top-3 left-3 sm:top-4 sm:left-4">
          <span className="inline-flex items-center rounded-full bg-primary/90 backdrop-blur-sm text-primary-foreground px-2.5 py-1 text-xs font-semibold">
            {post.category || "General"}
          </span>
        </div>
      </div>
      <CardContent className="p-4 sm:p-5 flex flex-col flex-1">
        <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-xs sm:text-sm text-muted-foreground mb-2">
          {dateStr && (
            <span className="inline-flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5" />
              {dateStr}
            </span>
          )}
          <span className="inline-flex items-center gap-1">
            <Clock className="w-3.5 h-3.5" />
            {post.readTime || readingTime(post.content || post.description)}
          </span>
        </div>
        <h3 className="text-lg sm:text-xl font-bold mb-2 text-foreground line-clamp-2 leading-snug group-hover:text-primary transition-colors">
          {post.title}
        </h3>
        <p className="text-foreground/70 text-sm sm:text-base mb-4 line-clamp-3 flex-1 leading-relaxed">
          {post.excerpt || post.description}
        </p>
        {post.author && (
          <div className="flex items-center gap-2 mb-3">
            <User className="w-4 h-4 text-muted-foreground shrink-0" />
            <span className="text-sm text-muted-foreground">{post.author}</span>
          </div>
        )}
        {post.tags && post.tags.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mb-4">
            {post.tags.slice(0, 3).map((tag: string, i: number) => (
              <span
                key={i}
                className="rounded bg-primary/10 text-primary px-2 py-0.5 text-xs font-medium border border-primary/20"
              >
                #{tag}
              </span>
            ))}
          </div>
        )}
        <Button
          asChild
          size="sm"
          className="w-full sm:w-auto mt-auto bg-gradient-to-r from-primary to-accent hover:opacity-90 text-white font-medium rounded-lg"
        >
          <Link href={`/blog/${post.slug || post.id}`}>
            Read More
            <ArrowRight className="w-4 h-4 ml-1.5" />
          </Link>
        </Button>
      </CardContent>
    </Card>
  );
}
