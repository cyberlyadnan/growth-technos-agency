"use client";
import BlogPostCard from "./BlogPostCard";

interface BlogPostsGridProps {
  posts: any[];
  formatDate: (date: any) => string;
}

export default function BlogPostsGrid({ posts, formatDate }: BlogPostsGridProps) {
  if (!posts || posts.length === 0) {
    return (
      <section className="py-16 px-4 md:px-[5%] bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center py-12 text-foreground/60">
            <p>No blog posts found.</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 px-4 md:px-[5%] bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          Latest Articles
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <BlogPostCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
}
