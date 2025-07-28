"use client";
import { motion } from 'framer-motion';

export default function BlogHero() {
  return (
    <section className="py-20 bg-gradient-to-br from-primary-600 to-primary-800 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Blog</h1>
          <p className="text-xl text-primary-100 mb-8">
            Stay updated with the latest insights, tips, and trends in digital marketing, web development, and technology from our team of experts.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
