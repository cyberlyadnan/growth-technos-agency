import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowRight, Phone } from 'lucide-react';
import { ServiceDetail } from '@/types/service-types';

export function CTASection({ service }) {
  return (
    <section className="py-20 bg-gradient-to-r from-primary-600 to-primary-700 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto animate-slide-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-lg text-primary-100 mb-8">
            Let&apos;s discuss your project and see how our {service.title.toLowerCase()} service can help you achieve your goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-accent-500 hover:bg-accent-600">
              <Link href="/contact">
                Start Your Project
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-white dark:text-white hover:bg-gray-800 text-primary-600 hover:text-primary-800"
            >
              <Link href="tel:+1234567890">
                <Phone className="w-5 h-5 mr-2" />
                Call Us Now
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
