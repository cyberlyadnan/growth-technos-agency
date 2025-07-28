"use client";
import { motion } from 'framer-motion';

export default function ContactHero() {
  return (
    <section className="py-20 bg-gradient-to-br from-primary-600 to-primary-800 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Get In Touch</h1>
          <p className="text-xl text-primary-100 mb-8">
            Ready to start your next project? Let's discuss how we can help you achieve your digital goals and grow your business.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
