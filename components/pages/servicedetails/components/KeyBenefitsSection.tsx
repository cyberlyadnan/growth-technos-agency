import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { ServiceDetail } from '@/types/service-types';

interface KeyBenefitsSectionProps {
  service: ServiceDetail;
}

export function KeyBenefitsSection({ service }: KeyBenefitsSectionProps) {
  return (
    <section className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            Why Choose Our {service.title}?
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Here's what makes our service stand out from the competition
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {service.keyBenefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg"
            >
              <Check className="w-6 h-6 text-success-500 flex-shrink-0" />
              <span className="text-gray-900 dark:text-white font-medium">{benefit}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}