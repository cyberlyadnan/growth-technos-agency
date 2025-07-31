
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { ServiceCard } from '../../services/components/ServiceCard';
import { ServiceDetail } from '@/types/service-types';

// interface ServicesSectionProps {
//   services: ServiceDetail[];
//   title: string;
//   desc: string;
//   hideViewAllSection?: boolean;
// }

export const ServicesSection = ({
  services,
  title,
  desc,
  hideViewAllSection = true,
}) => {
  return (
    <section className="py-20 px-4 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Animated Heading */}
        <div className="text-center mb-16 opacity-0 animate-slide-up [animation-fill-mode:forwards]">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            {title}
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            {desc}
          </p>
        </div>

        {/* Grid of Cards with Animations */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-6 items-stretch">
          {services?.map((service, index) => (
            <div
              key={service.id}
              className="opacity-0 animate-slide-up [animation-fill-mode:forwards]"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <ServiceCard service={service} index={index} />
            </div>
          ))}
        </div>

        
        {/* Button with animation */}
        {hideViewAllSection &&
        <div className="text-center mt-10 opacity-0 animate-slide-up [animation-fill-mode:forwards]"
        style={{ animationDelay: `${services?.length * 100}ms` }}>
          <Button asChild size="lg" className="bg-primary-600 text-white hover:bg-primary-700">
            <Link href="/services">
              View All Services
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </Button>
        </div>}
      </div>
    </section>
  );
};
