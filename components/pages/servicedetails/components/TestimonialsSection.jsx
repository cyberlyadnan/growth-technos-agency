import { Star, Quote, Sparkles } from 'lucide-react';
import Image from 'next/image';
import { AnimatedDivider } from '@/components/ui/AnimatedDivider';

export function TestimonialsSection({ service }) {
  if (!service.testimonials || service.testimonials.length === 0) return null;

  return (
    <section className="relative py-20 bg-gradient-to-b from-background to-background/95 overflow-hidden">
      {/* Futuristic Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px] dark:bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)]"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center p-3 bg-primary/10 rounded-full mb-6">
            <Sparkles className="w-6 h-6 text-primary" />
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-foreground via-primary to-accent bg-clip-text text-transparent">
            What Our Clients Say
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Don&apos;t just take our word for it - hear from our satisfied clients
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {service.testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group relative p-8 bg-card/60 backdrop-blur-sm border border-border/50 rounded-2xl hover:border-primary/50 transition-all duration-500 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-1"
            >
              {/* Corner Indicators */}
              <div className="absolute top-4 left-4 w-6 h-6 border-t-2 border-l-2 border-primary/30 group-hover:border-primary transition-colors"></div>
              <div className="absolute top-4 right-4 w-6 h-6 border-t-2 border-r-2 border-primary/30 group-hover:border-primary transition-colors"></div>
              <div className="absolute bottom-4 left-4 w-6 h-6 border-b-2 border-l-2 border-primary/30 group-hover:border-primary transition-colors"></div>
              <div className="absolute bottom-4 right-4 w-6 h-6 border-b-2 border-r-2 border-primary/30 group-hover:border-primary transition-colors"></div>

              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl"></div>

              <div className="relative space-y-6">
                {/* Quote Icon */}
                <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full">
                  <Quote className="w-6 h-6 text-primary" />
                </div>

                {/* Rating */}
                <div className="flex items-center gap-1">
                  {[...Array(testimonial.rating || 5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-amber-400 fill-amber-400" />
                  ))}
                </div>

                {/* Comment */}
                <p className="text-foreground/80 italic leading-relaxed text-lg">
                  &quot;{testimonial.comment}&quot;
                </p>

                {/* Author */}
                <div className="flex items-center gap-4 pt-4 border-t border-border/50">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden ring-2 ring-primary/20">
                    {testimonial.avatar ? (
                      <Image
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        fill
                        className="object-cover"
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-bold">
                        {testimonial.name.charAt(0)}
                      </div>
                    )}
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-foreground/60">
                      {testimonial.company}
                    </div>
                  </div>
                </div>
              </div>

              {/* Scan Line Effect on Hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent animate-pulse"></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Animated Divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <AnimatedDivider />
      </div>
    </section>
  );
}
