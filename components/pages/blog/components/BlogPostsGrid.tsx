"use client";
import { motion } from "framer-motion";
import BlogPostCard from "./BlogPostCard";

interface Props {
  posts: any[];
}

export default function BlogPostsGrid({ posts }: Props) {
  return (
    <section className="py-16 px-4 md:px-[5%] bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-2xl font-bold mb-8 text-gray-900 dark:text-white">
            Latest Articles
          </h2>
        </motion.div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, i) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <BlogPostCard post={post} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
