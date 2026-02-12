"use client";
import BlogPostCard from "./BlogPostCard";

interface BlogPostsGridProps {
  posts: any[];
  formatDate: (date: any) => string;
}

export default function BlogPostsGrid({ posts, formatDate }: BlogPostsGridProps) {
  if (!posts || posts.length === 0) {
    return (
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto text-center">
          <div className="max-w-md mx-auto py-12 px-6 rounded-2xl bg-muted/30 border border-border/50">
            <p className="text-muted-foreground text-base sm:text-lg">No articles match your filters. Try another category or search.</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-10 sm:py-14 lg:py-16 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-foreground">
          <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Latest Articles
          </span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {posts.map((post) => (
            <BlogPostCard key={post.id || post.slug} post={post} formatDate={formatDate} />
          ))}
        </div>
      </div>
    </section>
  );
}
