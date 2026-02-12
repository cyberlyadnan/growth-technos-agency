"use client";

import { motion } from "framer-motion";

export default function BlogHero() {
  return (
    <section className="relative py-16 sm:py-20 lg:py-24 overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--foreground)/0.03)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--foreground)/0.03)_1px,transparent_1px)] bg-[size:28px_28px] dark:bg-[size:24px_24px]" />
        <div className="absolute top-0 right-0 w-[280px] sm:w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[280px] sm:w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center max-w-3xl mx-auto"
        >
          <p className="text-sm sm:text-base font-medium text-primary uppercase tracking-widest mb-4">
            Insights & Updates
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-5 sm:mb-6 tracking-tight">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Our Blog
            </span>
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-foreground/70 leading-relaxed max-w-2xl mx-auto">
            Expert insights on digital marketing, web development, and technology—straight from our team.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
