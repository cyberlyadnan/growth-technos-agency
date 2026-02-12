"use client";

import Image from "next/image";
import Link from "next/link";
import { Calendar, Clock, User, ArrowLeft, Share2, Tag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { toast } from "sonner";

export default function BlogDetailPage({ blog }) {
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
      if (isNaN(d.getTime())) return "";
      return new Intl.DateTimeFormat("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      }).format(d);
    } catch {
      return "";
    }
  };

  const readingTime = (content) => {
    if (!content) return "5 min";
    const text = content.replace(/<[^>]*>/g, "");
    const words = text.split(/\s+/).length;
    return `${Math.ceil(words / 200)} min read`;
  };

  const handleShare = () => {
    if (typeof navigator !== "undefined" && navigator.share) {
      navigator.share({
        title: blog.title,
        text: blog.excerpt,
        url: window.location.href,
      }).catch(() => {
        navigator.clipboard?.writeText(window.location.href);
        toast.success("Link copied to clipboard!");
      });
    } else {
      navigator.clipboard?.writeText(window.location.href);
      toast.success("Link copied to clipboard!");
    }
  };

  return (
    <div className="min-h-screen pt-14 sm:pt-16">
      {/* Hero */}
      <section className="relative py-10 sm:py-14 lg:py-20 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--foreground)/0.03)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--foreground)/0.03)_1px,transparent_1px)] bg-[size:28px_28px] dark:bg-[size:24px_24px]" />
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Link href="/blog" className="inline-block mb-6 sm:mb-8">
            <Button variant="ghost" size="sm" className="gap-2 text-muted-foreground hover:text-foreground">
              <ArrowLeft className="w-4 h-4" />
              Back to Blog
            </Button>
          </Link>

          <div className="max-w-4xl mx-auto">
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-muted-foreground mb-4">
              <span className="inline-flex items-center gap-2">
                <Calendar className="w-4 h-4 shrink-0" />
                {formatDate(blog.createdAt)}
              </span>
              <Separator orientation="vertical" className="h-4 hidden sm:inline" />
              <span className="inline-flex items-center gap-2">
                <Clock className="w-4 h-4 shrink-0" />
                {readingTime(blog.content)}
              </span>
              {blog.author && (
                <>
                  <Separator orientation="vertical" className="h-4 hidden sm:inline" />
                  <span className="inline-flex items-center gap-2">
                    <User className="w-4 h-4 shrink-0" />
                    {blog.author}
                  </span>
                </>
              )}
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 tracking-tight leading-tight text-foreground">
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                {blog.title}
              </span>
            </h1>

            {blog.excerpt && (
              <p className="text-lg sm:text-xl text-foreground/70 mb-4 sm:mb-6 leading-relaxed">
                {blog.excerpt}
              </p>
            )}

            {blog.tags && blog.tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-6 sm:mb-8">
                {blog.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 text-primary border border-primary/20 px-3 py-1.5 text-xs font-medium"
                  >
                    <Tag className="w-3.5 h-3.5" />
                    {tag}
                  </span>
                ))}
              </div>
            )}

            {blog.featuredImage && (
              <div className="relative w-full aspect-[16/10] sm:aspect-[2/1] md:h-[420px] lg:h-[500px] rounded-xl sm:rounded-2xl overflow-hidden border border-border/50 shadow-xl">
                <Image
                  src={blog.featuredImage}
                  alt={blog.title}
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 896px"
                />
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-10 sm:py-12 lg:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <article
              className="blog-content prose prose-lg dark:prose-invert max-w-none
                prose-headings:font-bold prose-headings:text-foreground prose-headings:scroll-mt-20
                prose-h2:text-2xl sm:prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-4
                prose-h3:text-xl sm:prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-3
                prose-p:text-foreground/85 prose-p:leading-relaxed prose-p:mb-4
                prose-a:text-primary prose-a:no-underline hover:prose-a:underline prose-a:font-medium
                prose-strong:text-foreground prose-strong:font-semibold
                prose-code:text-primary prose-code:bg-muted/80 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:text-sm
                prose-pre:bg-muted prose-pre:border prose-pre:border-border prose-pre:rounded-xl prose-pre:overflow-x-auto
                prose-img:rounded-xl prose-img:border prose-img:border-border prose-img:shadow-md
                prose-blockquote:border-l-4 prose-blockquote:border-l-primary prose-blockquote:bg-muted/40 prose-blockquote:pl-5 prose-blockquote:py-2 prose-blockquote:rounded-r-lg prose-blockquote:italic prose-blockquote:text-foreground/85
                prose-ul:list-disc prose-ol:list-decimal prose-li:text-foreground/85 prose-li:my-1
                prose-hr:border-border prose-hr:my-10"
              dangerouslySetInnerHTML={{ __html: blog.content || blog.description || "" }}
            />

            {/* Share */}
            <Card className="mt-12 sm:mt-16 border border-border/50 bg-card/80 backdrop-blur-sm rounded-xl overflow-hidden">
              <CardContent className="p-6 sm:p-8">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-1">Share this article</h3>
                    <p className="text-sm text-muted-foreground">
                      Help others discover this content
                    </p>
                  </div>
                  <Button
                    variant="outline"
                    size="default"
                    onClick={handleShare}
                    className="gap-2 shrink-0 border-border hover:bg-primary/10 hover:border-primary/30 hover:text-primary"
                  >
                    <Share2 className="w-4 h-4" />
                    Share
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
