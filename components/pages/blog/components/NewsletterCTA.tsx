"use client";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function NewsletterCTA() {
  return (
    <section className="py-16 bg-primary-600 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto"
        >
          <h2 className="text-3xl font-bold mb-4">Never Miss an Update</h2>
          <p className="text-lg text-primary-100 mb-8">
            Subscribe to our newsletter to get the latest articles, insights, and tips delivered to your inbox.
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-accent-500"
            />
            <Button type="submit" className="bg-accent-500 text-center hover:bg-accent-600 px-6 py-6">
              Subscribe
            </Button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
