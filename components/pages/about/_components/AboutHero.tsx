"use client";

import { motion } from 'framer-motion';

export const AboutHero = () => {
  return (
    <section className="py-20 px-4 md:px-[10%] bg-gradient-to-br from-primary-600 to-primary-800 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            About Growth Technos
          </h1>
          <p className="text-xl text-primary-100">
            We're a passionate team of digital experts dedicated to helping businesses 
            thrive in the digital landscape through innovative solutions and strategic thinking.
          </p>
        </motion.div>
      </div>
    </section>
  );
};