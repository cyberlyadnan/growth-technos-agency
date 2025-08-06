"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Calendar, Users, Trophy, Rocket, ArrowRight, Sparkles } from 'lucide-react';

const milestones = [
  { icon: Calendar, year: '2018', title: 'Founded', description: 'Started with a vision', color: 'from-blue-500 to-cyan-500' },
  { icon: Users, year: '100+', title: 'Clients', description: 'Trusted partnerships', color: 'from-purple-500 to-pink-500' },
  { icon: Trophy, year: '200+', title: 'Projects', description: 'Successful deliveries', color: 'from-emerald-500 to-green-500' },
  { icon: Rocket, year: '50+', title: 'Team', description: 'Talented professionals', color: 'from-orange-500 to-red-500' }
];

export const StorySection = () => {
  return (
    <section className="px-4 md:px-[10%]  relative overflow-hidden dark:bg-gray-900">

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="inline-block mb-4"
          >
            <span className="px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 text-blue-800 dark:text-blue-200 text-sm font-medium rounded-full border border-blue-200/50 dark:border-blue-700/50 flex items-center gap-2">
              <Sparkles className="w-4 h-4" />
              Our Journey
            </span>
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 dark:from-white dark:via-gray-100 dark:to-white bg-clip-text text-transparent">
            The Story Behind Growth Technos
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            From humble beginnings to digital excellence - discover how we became the trusted partner for businesses worldwide.
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-3 gap-12 items-start mb-16">
          {/* Story Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-8"
          >
            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-8 rounded-2xl border border-gray-200/50 dark:border-gray-700/50 hover:shadow-xl transition-all duration-500 group"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <Calendar className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">The Beginning (2018)</h3>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                      Growth Technos was founded in 2018 with a simple yet powerful vision: to help businesses grow through innovative digital solutions. What started as a small team of passionate developers and marketers has grown into a full-service digital agency, driven by the belief that every business deserves exceptional digital presence.
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-8 rounded-2xl border border-gray-200/50 dark:border-gray-700/50 hover:shadow-xl transition-all duration-500 group"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Growth & Learning</h3>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                      Over the years, we've had the privilege of working with hundreds of clients across various industries, from ambitious startups to established enterprises. Each project has been a learning experience, helping us refine our approach and develop innovative solutions that drive real business results.
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-8 rounded-2xl border border-gray-200/50 dark:border-gray-700/50 hover:shadow-xl transition-all duration-500 group"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-green-500 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <Trophy className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Today & Beyond</h3>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                      Today, we're proud to be a trusted partner for businesses looking to establish or enhance their digital presence. Our team continues to grow, but our commitment to excellence, innovation, and client success remains the cornerstone of everything we do. We're not just building websites and apps – we're crafting digital experiences that transform businesses.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 via-transparent to-purple-600/20 rounded-2xl z-10 group-hover:opacity-80 transition-opacity duration-500"></div>
              <Image
                src="https://images.unsplash.com/photo-1572021335469-31706a17aaef?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTU4fHx3ZWIlMjBkZXZlbG9wbWVudCUyMHRlYW18ZW58MHx8MHx8fDA%3D://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Team collaboration"
                width={400}
                height={280}
                className="rounded-2xl transform group-hover:scale-105 transition-transform duration-700 w-full h-64 object-cover"
              />
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                viewport={{ once: true }}
                className="absolute -bottom-4 -right-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white p-4 rounded-xl shadow-xl backdrop-blur-sm border border-white/20"
              >
                <div className="text-2xl font-bold mb-1">5+</div>
                <div className="text-xs opacity-90 font-medium">Years</div>
              </motion.div>
            </div>

            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-tr from-emerald-600/20 via-transparent to-cyan-600/20 rounded-2xl z-10 group-hover:opacity-80 transition-opacity duration-500"></div>
              <Image
                src="https://media.istockphoto.com/id/1143678440/photo/personal-growth-concept.webp?a=1&b=1&s=612x612&w=0&k=20&c=TsmpIcZDW4VqGl2dyRZKa5EoObtOEB5np4ZUQxwlpsg="
                alt="Innovation and growth"
                width={400}
                height={280}
                className="rounded-2xl transform group-hover:scale-105 transition-transform duration-700 w-full h-64 object-cover"
              />
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                viewport={{ once: true }}
                className="absolute -bottom-4 -left-4 bg-gradient-to-r from-emerald-500 to-cyan-500 text-white p-4 rounded-xl shadow-xl backdrop-blur-sm border border-white/20"
              >
                <div className="text-2xl font-bold mb-1">100+</div>
                <div className="text-xs opacity-90 font-medium">Clients</div>
              </motion.div>
            </div>

             <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 via-transparent to-purple-600/20 rounded-2xl z-10 group-hover:opacity-80 transition-opacity duration-500"></div>
              <Image
                src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Team collaboration"
                width={400}
                height={280}
                className="rounded-2xl transform group-hover:scale-105 transition-transform duration-700 w-full h-64 object-cover"
              />
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                viewport={{ once: true }}
                className="absolute -bottom-4 -right-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white p-4 rounded-xl shadow-xl backdrop-blur-sm border border-white/20"
              >
                <div className="text-2xl font-bold mb-1">5+</div>
                <div className="text-xs opacity-90 font-medium">Years</div>
              </motion.div>
            </div>
            
          </motion.div>
        </div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.title}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-6 rounded-2xl border border-gray-200/50 dark:border-gray-700/50 hover:shadow-xl transition-all duration-500 group text-center"
              >
                <div className={`w-12 h-12 bg-gradient-to-r ${milestone.color} rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <milestone.icon className="w-6 h-6 text-white" />
                </div>
                <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                  {milestone.year}
                </div>
                <div className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  {milestone.title}
                </div>
                <div className="text-xs text-gray-500 dark:text-gray-400">
                  {milestone.description}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};