"use client";

import { motion } from 'framer-motion';

export const MissionVision = () => {
  return (
    <section className="py-20 px-4 md:px-[10%] bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
              Our Mission
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
              To empower businesses with cutting-edge digital solutions that drive growth, 
              enhance online presence, and deliver measurable results. We believe that every 
              business deserves to succeed in the digital world.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Our mission is to bridge the gap between technology and business success, 
              providing comprehensive digital services that transform ideas into reality.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
              Our Vision
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
              To be the leading digital agency that shapes the future of online business, 
              setting new standards for innovation, quality, and client satisfaction in 
              the digital marketing industry.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              We envision a world where every business can leverage the power of digital 
              technology to reach their full potential and achieve sustainable growth.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};