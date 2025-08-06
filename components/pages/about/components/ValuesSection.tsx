"use client";

import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Heart, Lightbulb, Award, Users, TrendingUp, Target } from 'lucide-react';

const values = [
  {
    icon: Heart,
    title: 'Client-Focused',
    description: 'We put our clients at the center of everything we do, ensuring their success is our priority.',
    color: 'from-red-500 to-pink-600'
  },
  {
    icon: Lightbulb,
    title: 'Innovation',
    description: 'We embrace new technologies and creative solutions to stay ahead of the curve.',
    color: 'from-yellow-500 to-orange-600'
  },
  {
    icon: Award,
    title: 'Excellence',
    description: 'We strive for excellence in every project, delivering quality that exceeds expectations.',
    color: 'from-blue-500 to-purple-600'
  },
  {
    icon: Users,
    title: 'Collaboration',
    description: 'We believe in the power of teamwork and collaborate closely with our clients.',
    color: 'from-green-500 to-emerald-600'
  },
  {
    icon: TrendingUp,
    title: 'Growth',
    description: 'We are committed to continuous learning and helping our clients grow their businesses.',
    color: 'from-indigo-500 to-blue-600'
  },
  {
    icon: Target,
    title: 'Results',
    description: 'We focus on delivering measurable results that drive real business impact.',
    color: 'from-purple-500 to-violet-600'
  }
];

export const ValuesSection = () => {
  return (
    <section className="py-20 px-4 md:px-[10%] relative overflow-hidden dark:bg-gray-900">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-emerald-200/30 to-cyan-200/30 dark:from-emerald-900/20 dark:to-cyan-900/20 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="inline-block mb-4"
          >
            <span className="px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 text-blue-800 dark:text-blue-200 text-sm font-medium rounded-full border border-blue-200/50 dark:border-blue-700/50">
              Our Foundation
            </span>
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 dark:from-white dark:via-gray-100 dark:to-white bg-clip-text text-transparent">
            Core Values That Drive Us
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            These values guide everything we do and shape how we work with our clients and each other.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <Card className="h-full text-center relative overflow-hidden border border-gray-200/50 dark:border-gray-700/50 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm hover:bg-white dark:hover:bg-gray-800 transition-all duration-500 hover:scale-105 hover:shadow-2xl">
                {/* Animated Border */}
                <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-500 p-[1px] rounded-lg">
                  <div className={`absolute inset-0 bg-gradient-to-r ${value.color} rounded-lg animate-pulse`}></div>
                  <div className="relative h-full bg-white dark:bg-gray-800 rounded-lg"></div>
                </div>
                
                <CardContent className="p-8 relative z-10">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                    className={`w-16 h-16 bg-gradient-to-r ${value.color} rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-xl transition-shadow duration-300`}
                  >
                    <value.icon className="w-8 h-8 text-white" />
                  </motion.div>
                  
                  <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-gray-900 group-hover:to-gray-600 dark:group-hover:from-white dark:group-hover:to-gray-300 transition-all duration-300">
                    {value.title}
                  </h3>
                  
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed group-hover:text-gray-700 dark:group-hover:text-gray-200 transition-colors duration-300">
                    {value.description}
                  </p>
                  
                  {/* Subtle bottom accent */}
                  <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${value.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}></div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
        
      </div>
    </section>
  );
};