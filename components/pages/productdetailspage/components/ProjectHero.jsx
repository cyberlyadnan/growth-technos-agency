"use client"
import { Calendar, Tag, User } from "lucide-react";
import React from "react";
import { motion } from 'framer-motion';


export default function ProjectHero({project}) {
  console.log("projects hero",project)
  return (
      <section className="py-12 bg-gradient-to-br from-primary-50 via-secondary-50 to-accent-50 dark:from-primary-900 dark:via-secondary-900 dark:to-accent-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <span className="bg-primary-600 text-white px-4 py-2 rounded-full text-sm font-medium mb-4 inline-block">
              {project.category}
            </span>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
              {project.title}
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              {project.description}
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-500 dark:text-gray-400">
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                {project.client}
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                {project.completionDate}
              </div>
              <div className="flex items-center gap-2">
                <Tag className="w-4 h-4" />
                {project.duration}
              </div>
            </div>
          </motion.div>
        </div>
      </section>
  );
}



