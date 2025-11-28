import { Target, Sparkles } from 'lucide-react';
import CompactSubServiceCard from "@/components/pages/servicedetails/components/CompactSubServiceCard";
import { AnimatedDivider } from '@/components/ui/AnimatedDivider';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export function SubServices({ service }) {
  if (!service?.subServices || Object.keys(service.subServices).length === 0) {
    return null;
  }

  const subServicesArray = Object.entries(service.subServices).map(([key, subService]) => ({
    ...subService,
    id: key
  }));

  return (
    <section className="relative py-20 bg-gradient-to-b from-background to-background/95 overflow-hidden">
      {/* Futuristic Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px] dark:bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)]"></div>
        <div className="absolute top-0 left-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center p-3 bg-primary/10 rounded-full mb-6">
            <Target className="w-6 h-6 text-primary" />
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-foreground via-primary to-accent bg-clip-text text-transparent">
            Our {service.title} Specializations
          </h2>
          <p className="text-lg text-foreground/70 max-w-3xl mx-auto">
            Explore our specialized services designed to address your unique business challenges
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 mb-12 max-w-7xl mx-auto">
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
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-6 bg-card/60 backdrop-blur-sm border border-border/50 rounded-2xl hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/10">
            <div className="text-left">
              <h3 className="text-lg font-semibold text-foreground mb-1">
                Can&apos;t decide which service fits your needs?
              </h3>
              <p className="text-foreground/70 text-sm">
                Get a free consultation to find the perfect solution
              </p>
            </div>
            <Button asChild className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white whitespace-nowrap">
              <Link href="/contact">Free Consultation</Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Animated Divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <AnimatedDivider />
      </div>
    </section>
  );
}
