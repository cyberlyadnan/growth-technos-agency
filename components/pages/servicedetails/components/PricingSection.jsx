import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowRight, Check, Clock } from 'lucide-react';


export function PricingSection({ service }) {
  return (
    <section className="py-20 bg-primary-600 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto animate-slide-up">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Investment & Timeline
            </h2>
            <p className="text-lg text-primary-100">
              Transparent pricing with no hidden fees
            </p>
          </div>

          <Card className="bg-white text-gray-900 animate-slide-up">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center animate-slide-up" style={{ animationDelay: `100ms`, animationFillMode: 'both' }}>
                  <div className="text-3xl font-bold text-primary-600 mb-2">
                    {service.pricing.starting}
                  </div>
                  <div className="text-gray-600">Starting Price</div>
                </div>
                <div className="text-center animate-slide-up" style={{ animationDelay: `200ms`, animationFillMode: 'both' }}>
                  <div className="text-3xl font-bold text-primary-600 mb-2 flex items-center justify-center">
                    <Clock className="w-8 h-8 mr-2" />
                    {service.pricing.timeline}
                  </div>
                  <div className="text-gray-600">Timeline</div>
                </div>
                <div className="text-center animate-slide-up" style={{ animationDelay: `300ms`, animationFillMode: 'both' }}>
                  <div className="text-3xl font-bold text-primary-600 mb-2">
                    100%
                  </div>
                  <div className="text-gray-600">Satisfaction</div>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-gray-200 animate-slide-up" style={{ animationDelay: `400ms`, animationFillMode: 'both' }}>
                <h4 className="font-semibold mb-4 text-center">What's Included:</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  {service.pricing.included.map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center animate-slide-up"
                      style={{ animationDelay: `${500 + index * 100}ms`, animationFillMode: 'both' }}
                    >
                      <Check className="w-5 h-5 text-success-500 mr-3 flex-shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 text-center animate-slide-up" style={{ animationDelay: `800ms`, animationFillMode: 'both' }}>
                <Button asChild size="lg" className="bg-primary-600 hover:bg-primary-700">
                  <Link href="/contact">
                    Get Free Quote
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
