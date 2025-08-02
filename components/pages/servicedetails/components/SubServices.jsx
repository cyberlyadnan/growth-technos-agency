import { 
  ArrowRight, 
  Clock, 
  IndianRupee, 
  CheckCircle, 
  Star,
  Zap,
  Award,
  Target,
  ChevronDown,
  ChevronUp,
  ExternalLink
} from 'lucide-react';

import CompactSubServiceCard from "@/components/pages/servicedetails/components/CompactSubServiceCard"

export function SubServices({ service }) {
  if (!service?.subServices || Object.keys(service.subServices).length === 0) {
    return null;
  }

  const subServicesArray = Object.entries(service.subServices).map(([key, subService]) => ({
    ...subService,
    id: key
  }));

  return (
    <section className="py-16 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center p-3 bg-gradient-to-r from-primary-100 to-secondary-100 dark:from-primary-900/30 dark:to-secondary-900/30 rounded-full mb-6">
            <Target className="w-6 h-6 text-primary-600 dark:text-primary-400" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Our {service.title} Specializations
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Explore our specialized services designed to address your unique business challenges
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 mb-12 px-4 sm:px-8 md:px-12 lg:px-16">
          {subServicesArray.map((subService, index) => (
            <CompactSubServiceCard
              key={subService.id}
              subService={subService}
              index={index}
            />
            
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <div className="inline-flex items-center gap-4 p-6 bg-gradient-to-r from-primary-50 to-secondary-50 dark:from-primary-900/20 dark:to-secondary-900/20 rounded-2xl border border-primary-200 dark:border-primary-700">
            <div className="text-left">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                Can't decide which service fits your needs?
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Get a free consultation to find the perfect solution
              </p>
            </div>
            <button className="px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-lg transition-colors duration-300 whitespace-nowrap">
              Free Consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}


