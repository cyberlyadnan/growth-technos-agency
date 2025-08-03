// ProjectCTA.tsx
"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export const ProjectCTA = () => (
  <section className="py-20 bg-gradient-to-r from-primary-600 to-secondary-600">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center max-w-3xl mx-auto"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
          Ready to Start Your Own Project?
        </h2>
        <p className="text-lg text-gray-100 mb-8">
          Let's create something amazing together. Contact us to discuss how we can 
          bring your vision to life with the same level of excellence and dedication.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg" className="bg-white text-gray-900 hover:bg-gray-100">
            <Link href="/contact">Start Your Project</Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="border-white text-black dark:text-white">
            <Link href="/projects">View More Projects</Link>
          </Button>
        </div>
      </motion.div>
    </div>
  </section>
);