import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowRight, Check, Clock } from 'lucide-react';
import { ServiceDetail } from '@/types/service-types';

interface PricingSectionProps {
  service: ServiceDetail;
}

export function PricingSection({ service }: PricingSectionProps) {
  return (
    <section className="py-20 bg-primary-600 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Investment & Timeline
            </h2>
            <p className="text-lg text-primary-100">
              Transparent pricing with no hidden fees
            </p>
          </div>
          
          <Card className="bg-white text-gray-900">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary-600 mb-2">
                    {service.pricing.starting}
                  </div>
                  <div className="text-gray-600">Starting Price</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary-600 mb-2 flex items-center justify-center">
                    <Clock className="w-8 h-8 mr-2" />
                    {service.pricing.timeline}
                  </div>
                  <div className="text-gray-600">Timeline</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary-600 mb-2">
                    100%
                  </div>
                  <div className="text-gray-600">Satisfaction</div>
                </div>
              </div>
              
              <div className="mt-8 pt-8 border-t border-gray-200">
                <h4 className="font-semibold mb-4 text-center">What's Included:</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  {service.pricing.included.map((item, index) => (
                    <div key={index} className="flex items-center">
                      <Check className="w-5 h-5 text-success-500 mr-3 flex-shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="mt-8 text-center">
                <Button asChild size="lg" className="bg-primary-600 hover:bg-primary-700">
                  <Link href="/contact">
                    Get Free Quote
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}