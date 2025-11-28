import { Star, Quote, Sparkles, CheckCircle2, ExternalLink } from 'lucide-react';
import { testimonials } from '@/lib/mainData';
import { AnimatedDivider } from '@/components/ui/AnimatedDivider';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

export const TestimonialsSection = () => {
  return (
    <section className="relative py-24 px-4 md:px-[7%] md:py-32 overflow-hidden">
      {/* Animated Divider at Top */}
      <div className="absolute top-0 left-0 right-0 z-20">
        <AnimatedDivider />
      </div>

      {/* Futuristic Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-primary/5 dark:via-primary/10 to-accent/5 dark:to-accent/10"></div>
      
      {/* Tech Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.04] dark:opacity-[0.06]">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(rgba(156, 30, 42, 0.15) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(156, 30, 42, 0.15) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      {/* Floating Orbs */}
      <div className="absolute top-20 right-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl opacity-50"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl opacity-50"></div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20 max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary/15 dark:bg-primary/25 border border-primary/30 dark:border-primary/40 mb-8 backdrop-blur-sm shadow-lg">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-semibold text-primary">Client Testimonials</span>
          </div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            <span className="text-foreground">What Our </span>
            <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
              Clients Say
            </span>
          </h2>

          <p className="text-lg sm:text-xl md:text-2xl text-foreground/80 dark:text-foreground/90 font-light max-w-3xl mx-auto leading-relaxed">
            Trusted by industry leaders. Discover how we've transformed businesses through innovative digital solutions.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((testimonial, index) => {
            // Generate avatar image URL using UI Avatars API
            const avatarUrl = `https://ui-avatars.com/api/?name=${encodeURIComponent(testimonial.name)}&background=random&color=fff&size=128&bold=true`;
            
            return (
              <div
                key={testimonial.name}
                className="group relative h-full"
              >
                {/* Premium Testimonial Card */}
                <div className="relative h-full p-6 md:p-8 rounded-2xl bg-card/80 dark:bg-card/60 backdrop-blur-xl border border-border/50 dark:border-border/40 group-hover:border-border/80 dark:group-hover:border-border/70 transition-all duration-500 group-hover:shadow-xl group-hover:shadow-black/5 dark:group-hover:shadow-black/20 group-hover:-translate-y-1">
                  {/* Subtle Premium Glow Effect */}
                  <div className="absolute -inset-0.5 bg-gradient-to-br from-white/20 via-transparent to-transparent dark:from-white/5 rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500 -z-10"></div>

                  {/* Subtle Border Lines */}
                  <div className="absolute inset-0 overflow-hidden rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border/50 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border/50 to-transparent"></div>
                  </div>

                  {/* Content */}
                  <div className="relative z-10 flex flex-col h-full">
                    {/* Quote Icon - Premium Style */}
                    <div className="mb-6">
                      <div className="w-10 h-10 rounded-lg bg-foreground/5 dark:bg-foreground/10 flex items-center justify-center border border-border/30">
                        <Quote className="w-5 h-5 text-foreground/60 dark:text-foreground/50" />
                      </div>
                    </div>

                    {/* Testimonial Text */}
                    <p className="text-foreground/80 dark:text-foreground/90 mb-6 leading-relaxed text-base md:text-lg flex-grow font-light">
                      "{testimonial.content}"
                    </p>

                    {/* Rating Stars - Premium Style */}
                    <div className="flex items-center gap-1 mb-6">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star 
                          key={i} 
                          className="w-4 h-4 text-amber-400 dark:text-amber-500 fill-amber-400 dark:fill-amber-500" 
                        />
                      ))}
                    </div>

                    {/* Author Info with Image */}
                    <div className="mt-auto pt-6 border-t border-border/20">
                      <div className="flex items-center gap-4">
                        {/* Avatar Image */}
                        <div className="relative w-14 h-14 rounded-full overflow-hidden ring-2 ring-border/30 dark:ring-border/40 group-hover:ring-border/50 dark:group-hover:ring-border/60 transition-all duration-300 flex-shrink-0">
                          <Image
                            src={avatarUrl}
                            alt={testimonial.name}
                            fill
                            className="object-cover"
                            unoptimized
                          />
                        </div>
                        
                        <div className="flex-1 min-w-0">
                          <div className="font-semibold text-foreground text-sm md:text-base mb-1">
                            {testimonial.name}
                          </div>
                          <div className="text-xs md:text-sm text-foreground/60 dark:text-foreground/70 flex items-center gap-1.5">
                            <CheckCircle2 className="w-3.5 h-3.5 text-foreground/40 dark:text-foreground/50" />
                            <span>{testimonial.role}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Subtle Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/0 via-white/0 to-white/5 dark:from-white/0 dark:via-white/0 dark:to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none"></div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Google Review CTA */}
        <div className="mt-16 md:mt-20 text-center">
          <div className="relative inline-block">
            <div className="absolute left-1/2 -translate-x-1/2 -top-8 w-24 h-px bg-gradient-to-r from-transparent via-border/50 to-transparent"></div>
            
            <a
              href="https://www.google.com/search?q=growth+technos&oq=growth+technos&gs_lcrp=EgZjaHJvbWUqDggAEEUYJxg7GIAEGIoFMg4IABBFGCcYOxiABBiKBTIGCAEQIxgnMgcIAhAAGIAEMg0IAxAuGK8BGMcBGIAEMgYIBBBFGEEyBggFEEUYQTIGCAYQRRg9MgYIBxBFGD3SAQgzMzgyajBqN6gCCLACAfEF2IQqdC_L2pbxBdiEKnQvy9qW&sourceid=chrome&ie=UTF-8#lrd=0xb36652eebcae4bb:0xeac7f00958f2ce65,3,,,"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 hover:from-amber-600 hover:via-amber-500 hover:to-amber-600 text-white font-semibold rounded-xl overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-amber-500/40 hover:-translate-y-1"
            >
              <div className="flex items-center gap-2">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                </svg>
                <span className="relative z-10">Write a Review on Google</span>
                <ExternalLink className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
              </div>
              
              {/* Shine Effect */}
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
              
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 rounded-xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-500 -z-10"></div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
