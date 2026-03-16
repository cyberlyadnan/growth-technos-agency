"use client";

import Image from "next/image";
import Link from "next/link";
import { Calendar, Clock, User, ArrowLeft, Share2, Tag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { toast } from "sonner";

export default function BlogDetailPage({ blog }) {
  /* ---------------- FORMAT DATE ---------------- */
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

  /* ---------------- READING TIME ---------------- */
  const readingTime = (content) => {
    if (!content) return "5 min read";
    const text = (content || "").replace(/<[^>]*>/g, "");
    const words = text.trim().split(/\s+/).length || 0;
    return `${Math.ceil(words / 200) || 5} min read`;
  };

  /* ---------------- SHARE ---------------- */
  const handleShare = async () => {
    const url = typeof window !== "undefined" ? window.location.href : "";
    try {
      if (navigator.share) {
        await navigator.share({
          title: blog.title,
          text: blog.excerpt,
          url,
        });
      } else {
        await navigator.clipboard.writeText(url);
        toast.success("Link copied to clipboard!");
      }
    } catch (err) {
      if (err.name !== "AbortError") {
        await navigator.clipboard.writeText(url);
        toast.success("Link copied to clipboard!");
      }
    }
  };

  /* ---------------- CLEAN HTML ---------------- */
  // This is vital for dark mode visibility. Rich text editors often add 'color: black'
  // which makes text invisible on dark backgrounds. We strip those out.
  const cleanHtml = (html) => {
    if (!html) return "";
    return html
      .replace(/color:\s*black;?/gi, "")
      .replace(/color:\s*#000000;?/gi, "")
      .replace(/color:\s*#000;?/gi, "")
      .replace(/rgb\(0,\s*0,\s*0\)/gi, "")
      // Also remove general 'style' attributes if they contain color to be safe, 
      // but let's stick to black for now to preserve other formatting.
      .replace(/style="[^"]*color:\s*(?:black|#000|rgb\(0,0,0\))[^"]*"/gi, "");
  };

  const blogContent = cleanHtml(blog.content || blog.description || "");

  return (
    <div className="min-h-screen pt-14 sm:pt-16">
      {/* HERO SECTION */}
      <section className="relative py-10 sm:py-14 lg:py-20 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          {/* Grid Background */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--foreground)/0.03)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--foreground)/0.03)_1px,transparent_1px)] bg-[size:28px_28px]" />
          {/* Decorative Orbs */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] opacity-50 -translate-y-1/2 translate-x-1/4" />
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[120px] opacity-50 translate-y-1/2 -translate-x-1/4" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Link href="/blog" className="inline-block mb-6 sm:mb-8">
            <Button
              variant="ghost"
              size="sm"
              className="gap-2 text-muted-foreground hover:text-foreground transition-all hover:bg-transparent p-0"
            >
              <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
              <span>Back to Articles</span>
            </Button>
          </Link>

          <div className="max-w-4xl mx-auto">
            {/* Meta Info */}
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-muted-foreground mb-6">
              <span className="inline-flex items-center gap-2">
                <Calendar className="w-4 h-4 text-primary" />
                {formatDate(blog.createdAt)}
              </span>

              <Separator orientation="vertical" className="h-4 hidden sm:inline opacity-50" />

              <span className="inline-flex items-center gap-2">
                <Clock className="w-4 h-4 text-primary" />
                {readingTime(blog.content)}
              </span>

              {blog.author && (
                <>
                  <Separator orientation="vertical" className="h-4 hidden sm:inline opacity-50" />
                  <span className="inline-flex items-center gap-2 font-medium text-foreground">
                    <User className="w-4 h-4 text-primary" />
                    {blog.author}
                  </span>
                </>
              )}
            </div>

            {/* Title */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 tracking-tight leading-[1.1] text-foreground">
              <span className="bg-gradient-to-r from-primary via-accent to-primary bg-[length:200%_auto] bg-clip-text text-transparent animate-gradient-slow">
                {blog.title}
              </span>
            </h1>

            {/* Excerpt */}
            {blog.excerpt && (
              <p className="text-xl sm:text-2xl text-muted-foreground mb-10 leading-relaxed max-w-3xl">
                {blog.excerpt}
              </p>
            )}

            {/* Tags */}
            {blog.tags && blog.tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-10">
                {blog.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="inline-flex items-center gap-1.5 rounded-full bg-primary/5 text-primary border border-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider"
                  >
                    <Tag className="w-3.5 h-3.5" />
                    {tag}
                  </span>
                ))}
              </div>
            )}

            {/* Featured Image */}
            {blog.featuredImage && (
              <div className="relative w-full aspect-[16/9] rounded-3xl overflow-hidden border border-border/50 shadow-2xl group">
                <Image
                  src={blog.featuredImage}
                  alt={blog.title}
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-105"
                  priority
                  sizes="(max-width: 1200px) 100vw, 1200px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
              </div>
            )}
          </div>
        </div>
      </section>

      {/* BLOG CONTENT SECTION */}
      <section className="py-12 sm:py-20 lg:py-24 relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <article
              className="blog-content prose dark:prose-invert max-w-none"
              dangerouslySetInnerHTML={{
                __html: blogContent,
              }}
            />

            {/* SHARED CARD */}
            <Card className="mt-20 border border-primary/10 bg-gradient-to-br from-card to-muted/20 backdrop-blur-sm rounded-3xl overflow-hidden shadow-xl">
              <CardContent className="p-8 sm:p-12 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-8 relative z-10">
                  <div className="max-w-md">
                    <h3 className="text-2xl font-bold mb-3 text-foreground">
                      Found this helpful?
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Share this article with your network or anyone who might find these insights valuable.
                    </p>
                  </div>

                  <Button
                    onClick={handleShare}
                    className="gap-2 h-14 px-8 rounded-2xl bg-primary hover:bg-primary/90 text-white font-semibold transition-all hover:scale-105 active:scale-95 shadow-lg shadow-primary/25"
                  >
                    <Share2 className="w-5 h-5" />
                    Share Article
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* BACK BUTTON BOTTOM */}
            <div className="mt-16 flex justify-center">
              <Link href="/blog">
                <Button variant="outline" className="rounded-full px-8 border-border hover:bg-muted font-medium">
                  View All Posts
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
