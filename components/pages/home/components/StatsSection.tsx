"use client";

import { motion } from 'framer-motion';

const stats = [
  { number: '500+', label: 'Projects Completed' },
  { number: '150+', label: 'Happy Clients' },
  { number: '5+', label: 'Years Experience' },
  { number: '99%', label: 'Success Rate' }
];

export const StatsSection = () => {
  return (
    <section className="py-16 px-4 md:px-[10%] bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="text-3xl md:text-4xl font-bold text-primary-600 dark:text-primary-400 mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600 dark:text-gray-400 font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};