"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';

export const StorySection = () => {
  return (
    <section className="py-20 px-4 md:px-[10%] bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
              Our Story
            </h2>
            <div className="space-y-4 text-gray-600 dark:text-gray-300">
              <p>
                Growth Technos was founded in 2018 with a simple yet powerful vision: 
                to help businesses grow through innovative digital solutions. What started 
                as a small team of passionate developers and marketers has grown into a 
                full-service digital agency.
              </p>
              <p>
                Over the years, we've had the privilege of working with hundreds of clients 
                across various industries, from startups to established enterprises. Each 
                project has taught us something new and helped us refine our approach to 
                delivering exceptional results.
              </p>
              <p>
                Today, we're proud to be a trusted partner for businesses looking to 
                establish or enhance their digital presence. Our team continues to grow, 
                but our commitment to excellence and client success remains unchanged.
              </p>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <Image
              src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Our journey"
              width={600}
              height={400}
              className="rounded-2xl"
            />
            <div className="absolute -bottom-6 -left-6 bg-primary-600 text-white p-6 rounded-2xl">
              <div className="text-2xl font-bold">5+</div>
              <div className="text-sm opacity-90">Years of Excellence</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};