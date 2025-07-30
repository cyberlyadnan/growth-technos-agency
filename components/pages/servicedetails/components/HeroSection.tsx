import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, Award, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ServiceDetail } from '@/types/service-types';

interface HeroSectionProps {
  service: ServiceDetail;
}

export function HeroSection({ service }: HeroSectionProps) {
  return (
    <section className="relative py-20 bg-gradient-to-br from-primary-600 to-primary-800 text-white overflow-hidden">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Link href="/services" className="inline-flex items-center text-primary-100 hover:text-white mb-6 transition-colors">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Services
            </Link>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {service.title}
            </h1>
            <p className="text-xl text-primary-100 mb-8">
              {service.subtitle}
            </p>
            <p className="text-lg text-primary-200 mb-8">
              {service.description}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-accent-500 hover:bg-accent-600">
                <Link href="/contact">
                  Get Started Now
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" className="border-white hover:bg-white text-primary-600 dark:text-white hover:text-primary-800">
                View Portfolio
              </Button>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-video rounded-lg overflow-hidden shadow-2xl">
              <img 
                src={service.heroImage} 
                alt={service.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -left-4 bg-white text-gray-900 p-4 rounded-lg shadow-lg">
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5 text-primary-600" />
                <span className="font-semibold">500+ Projects</span>
              </div>
            </div>
            <div className="absolute -top-4 -right-4 bg-accent-500 text-white p-4 rounded-lg shadow-lg">
              <div className="flex items-center gap-2">
                <Award className="w-5 h-5" />
                <span className="font-semibold">98% Success Rate</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}