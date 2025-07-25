"use client";

import { motion } from 'framer-motion';
import { ArrowRight, Check } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export const AboutSection = () => {
  return (
    <section className="py-20 px-4 md:px-[10%] bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white">
              About Growth Technos
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
              We are a team of passionate digital experts dedicated to helping businesses 
              succeed in the digital landscape. With over 5 years of experience, we've 
              helped hundreds of companies achieve their online goals.
            </p>
            <div className="space-y-4">
              {[
                'Expert team of developers and marketers',
                'Proven track record of successful projects',
                'Cutting-edge technologies and strategies',
                'Dedicated support and maintenance'
              ].map((item, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-success-500 flex-shrink-0" />
                  <span className="text-gray-700 dark:text-gray-300">{item}</span>
                </div>
              ))}
            </div>
            <div className="mt-8">
              <Button asChild size="lg" className="bg-primary-600 dark:text-black text-white hover:bg-primary-700">
                <Link href="/about">
                  Learn More About Us
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-w-16 aspect-h-12 rounded-2xl overflow-hidden">
              <Image
                src="https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Our team working"
                width={600}
                height={400}
                className="object-cover rounded-2xl"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-accent-500 text-white p-6 rounded-2xl">
              <div className="text-2xl font-bold">500+</div>
              <div className="text-sm opacity-90">Projects Completed</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};