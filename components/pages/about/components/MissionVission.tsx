"use client";

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { Target, Eye, Rocket, Globe } from 'lucide-react';

export const MissionVision = () => {
  const sectionRef = useRef(null);
  const [showVision, setShowVision] = useState(false);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start center", "end center"]
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  useEffect(() => {
    const unsubscribe = scrollYProgress.onChange((latest) => {
      setShowVision(latest > 0.5);
    });
    return unsubscribe;
  }, [scrollYProgress]);

  return (
    <section 
      ref={sectionRef} 
      className="relative h-screen flex items-center justify-center overflow-hidden dark:bg-gray-900"
    >
      {/* Animated Background Elements */}
      <motion.div 
        style={{ y: backgroundY }}
        className="absolute inset-0 opacity-30"
      >
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200 dark:bg-blue-800 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-purple-200 dark:bg-purple-800 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
      </motion.div>

      <div className="relative container mx-auto px-4 md:px-[10%]">
        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
          {/* Image Section */}
          <motion.div
            key={showVision ? 'vision' : 'mission'}
            initial={{ opacity: 0, scale: 0.9, rotateY: 90 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            exit={{ opacity: 0, scale: 0.9, rotateY: -90 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="relative"
          >
            <motion.div
              whileHover={{ scale: 1.05, rotateY: 5 }}
              transition={{ duration: 0.3 }}
              className="relative overflow-hidden rounded-3xl shadow-2xl"
              style={{ perspective: "1000px" }}
            >
              <div className={`aspect-[4/3] relative ${
                showVision 
                  ? 'bg-gradient-to-br from-purple-400 via-pink-500 to-rose-600' 
                  : 'bg-gradient-to-br from-blue-400 via-purple-500 to-indigo-600'
              }`}>
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-white">
                    {showVision ? (
                      <>
                        <Eye className="w-20 h-20 mx-auto mb-4 opacity-90" />
                        <h3 className="text-3xl font-bold">Our Vision</h3>
                      </>
                    ) : (
                      <>
                        <Target className="w-20 h-20 mx-auto mb-4 opacity-90" />
                        <h3 className="text-3xl font-bold">Our Mission</h3>
                      </>
                    )}
                  </div>
                </div>
                
                {/* Floating Elements */}
                <motion.div
                  animate={{ 
                    y: showVision ? [-10, 10, -10] : [10, -10, 10],
                    rotate: showVision ? [0, 360] : [360, 0]
                  }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="absolute top-8 right-8 w-12 h-12 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm"
                >
                  {showVision ? (
                    <Globe className="w-6 h-6 text-white" />
                  ) : (
                    <Rocket className="w-6 h-6 text-white" />
                  )}
                </motion.div>
              </div>
            </motion.div>
            
            {/* Decorative Elements */}
            <div className={`absolute -top-6 -left-6 w-20 h-20 rounded-full blur-xl ${
              showVision ? 'bg-purple-500/20' : 'bg-blue-500/20'
            }`}></div>
            <div className={`absolute -bottom-6 -right-6 w-32 h-32 rounded-full blur-xl ${
              showVision ? 'bg-pink-500/20' : 'bg-purple-500/20'
            }`}></div>
          </motion.div>

          {/* Content Section */}
          <motion.div
            key={showVision ? 'vision-content' : 'mission-content'}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-medium ${
              showVision 
                ? 'bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300'
                : 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300'
            }`}>
              {showVision ? (
                <>
                  <Eye className="w-4 h-4 mr-2" />
                  Our Vision
                </>
              ) : (
                <>
                  <Target className="w-4 h-4 mr-2" />
                  Our Mission
                </>
              )}
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white leading-tight">
              {showVision ? (
                <>
                  Shaping the
                  <span className="block bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                    Digital Future
                  </span>
                </>
              ) : (
                <>
                  Empowering Digital
                  <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    Transformation
                  </span>
                </>
              )}
            </h2>
            
            <div className="space-y-6">
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                {showVision ? (
                  "To be the leading digital agency that shapes the future of online business, setting new standards for innovation, quality, and client satisfaction in the digital marketing industry."
                ) : (
                  "To empower businesses with cutting-edge digital solutions that drive growth, enhance online presence, and deliver measurable results. We believe that every business deserves to succeed in the digital world."
                )}
              </p>
              
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-6 pt-4">
              {showVision ? (
                <>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">2030</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">Vision Year</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-pink-600 dark:text-pink-400">Global</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">Reach</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-rose-600 dark:text-rose-400">∞</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">Possibilities</div>
                  </div>
                </>
              ) : (
                <>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">500+</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">Projects</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">98%</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">Success</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">24/7</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">Support</div>
                  </div>
                </>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};