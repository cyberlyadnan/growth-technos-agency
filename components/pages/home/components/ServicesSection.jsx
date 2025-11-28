"use client";

import { useRef, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles } from 'lucide-react';
import { AnimatedDivider } from '@/components/ui/AnimatedDivider';
import { servicess } from '@/lib/mainData';

// Register GSAP plugins
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

// 3D Service Card Component with GSAP
const ServiceCard3D = ({ service, serviceDetails, index }) => {
  const cardRef = useRef(null);
  const imageRef = useRef(null);
  const glowRef = useRef(null);
  const borderRef = useRef(null);

  useEffect(() => {
    const card = cardRef.current;
    const image = imageRef.current;
    const glow = glowRef.current;
    const border = borderRef.current;

    if (!card) return;

    // Scroll-triggered parallax and reveal
    const ctx = gsap.context(() => {
      // Card reveal animation (staggered)
      gsap.fromTo(
        card,
        {
          opacity: 0,
          y: 60,
          scale: 0.9,
          rotationX: -15,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          rotationX: 0,
          duration: 1,
          delay: index * 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: card,
            start: 'top 85%',
            end: 'top 50%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // Image parallax on scroll
      gsap.to(image, {
        y: -30,
        scrollTrigger: {
          trigger: card,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1,
        },
      });

      // Subtle 3D depth on scroll
      gsap.to(card, {
        rotationY: index % 2 === 0 ? 2 : -2,
        z: index % 3 === 0 ? 20 : index % 3 === 1 ? -20 : 10,
        scrollTrigger: {
          trigger: card,
          start: 'top 80%',
          end: 'bottom 20%',
          scrub: 1,
        },
      });
    }, card);

    // 3D tilt on mouse move
    const handleMouseMove = (e) => {
      if (!card) return;
      
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      
      const rotateX = (y - centerY) / 10;
      const rotateY = (centerX - x) / 10;
      
      gsap.to(card, {
        rotationX: rotateX,
        rotationY: rotateY,
        transformPerspective: 1000,
        duration: 0.3,
        ease: 'power2.out',
      });

      // Glow effect follows mouse
      if (glow) {
        gsap.to(glow, {
          x: x - centerX,
          y: y - centerY,
          opacity: 0.6,
          duration: 0.3,
        });
      }

      // Border glow
      if (border) {
        gsap.to(border, {
          opacity: 1,
          duration: 0.3,
        });
      }
    };

    const handleMouseLeave = () => {
      gsap.to(card, {
        rotationX: 0,
        rotationY: 0,
        duration: 0.5,
        ease: 'power2.out',
      });

      if (glow) {
        gsap.to(glow, {
          opacity: 0,
          duration: 0.3,
        });
      }

      if (border) {
        gsap.to(border, {
          opacity: 0,
          duration: 0.3,
        });
      }
    };

    card.addEventListener('mousemove', handleMouseMove);
    card.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      ctx.revert();
      card.removeEventListener('mousemove', handleMouseMove);
      card.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [index]);

  return (
    <div
      ref={cardRef}
      className="service-card-3d group relative h-full"
      style={{
        transformStyle: 'preserve-3d',
        willChange: 'transform',
      }}
    >
      <Link
        href={`/services/${service.id}`}
        className="relative block h-full"
      >
        {/* Card Container */}
        <div className="relative h-full rounded-2xl overflow-hidden bg-card/80 dark:bg-card/60 backdrop-blur-xl border-2 border-border/50 dark:border-border/30 transition-all duration-500">
          {/* Glowing Neon Edge - Ambient Glow */}
          <div
            ref={glowRef}
            className="absolute inset-0 rounded-2xl opacity-0 pointer-events-none"
            style={{
              background: 'radial-gradient(circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(156, 30, 42, 0.4), rgba(184, 54, 74, 0.2), transparent 70%)',
              filter: 'blur(20px)',
              willChange: 'opacity, transform',
            }}
          />

          {/* Neon Border Glow */}
          <div
            ref={borderRef}
            className="absolute inset-0 rounded-2xl opacity-0 pointer-events-none transition-opacity duration-300"
            style={{
              background: 'linear-gradient(135deg, rgba(156, 30, 42, 0.6), rgba(184, 54, 74, 0.4), rgba(156, 30, 42, 0.6))',
              mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
              maskComposite: 'exclude',
              padding: '2px',
              WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
              WebkitMaskComposite: 'xor',
            }}
          />

          {/* Soft Ambient Shadow */}
          <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-primary/10 via-accent/10 to-secondary/10 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500 -z-10" />

          {/* Image Container */}
          <div className="relative h-48 md:h-56 overflow-hidden">
            {serviceDetails?.heroImage ? (
              <div ref={imageRef} className="absolute inset-0">
                <Image
                  src={serviceDetails.heroImage}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  style={{ willChange: 'transform' }}
                />
              </div>
            ) : (
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-accent/20 to-secondary/20" />
            )}

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/50 to-transparent" />

            {/* Decorative Corner */}
            <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-primary/20 to-transparent rounded-bl-full" />

            {/* Icon Badge */}
            <div className="absolute bottom-4 left-4">
              <div className="w-12 h-12 rounded-xl bg-card/90 dark:bg-card/70 backdrop-blur-sm border border-primary/30 flex items-center justify-center shadow-lg">
                <Sparkles className="w-6 h-6 text-primary" />
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="p-6 md:p-8 relative z-10">
            <h3 className="text-xl md:text-2xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
              {service.title}
            </h3>

            <p className="text-foreground/70 dark:text-foreground/80 text-sm md:text-base leading-relaxed mb-4 line-clamp-2">
              {service.description?.split('.')[0] || serviceDetails?.subtitle || 'Professional service tailored to your needs'}
            </p>

            {/* Minimal Feature Indicator */}
            <div className="flex items-center gap-2 text-sm text-primary/80">
              <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              <span className="font-medium">Explore Service</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export const ServicesSection = ({
  services,
  title,
  desc,
  hideViewAllSection = true,
}) => {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const ctaRef = useRef(null);

  // Get full service details including heroImage
  const getServiceDetails = (serviceId) => {
    return servicess[serviceId] || null;
  };

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const ctx = gsap.context(() => {
      // Header animation
      if (headerRef.current) {
        gsap.fromTo(
          headerRef.current,
          {
            opacity: 0,
            y: 40,
          },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: headerRef.current,
              start: 'top 85%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      }

      // CTA button animation
      if (ctaRef.current) {
        gsap.fromTo(
          ctaRef.current,
          {
            opacity: 0,
            y: 30,
            scale: 0.95,
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: ctaRef.current,
              start: 'top 90%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative py-24 md:py-32 overflow-hidden">
      {/* Animated Divider at Top */}
      <div className="absolute top-0 left-0 right-0">
        <AnimatedDivider />
      </div>

      {/* Futuristic Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-primary/5 dark:via-primary/10 to-accent/5 dark:to-accent/10"></div>
      
      {/* Animated Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.04] dark:opacity-[0.06]">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(rgba(156, 30, 42, 0.15) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(156, 30, 42, 0.15) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      {/* Floating Orbs */}
      <div className="absolute top-20 right-10 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div ref={headerRef} className="text-center mb-16 md:mb-20 max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary/15 dark:bg-primary/25 border border-primary/30 dark:border-primary/40 mb-8 backdrop-blur-sm shadow-lg">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-semibold text-primary">Our Expertise</span>
          </div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            <span className="text-foreground">{title}</span>
          </h2>

          <p className="text-lg sm:text-xl md:text-2xl text-foreground/80 dark:text-foreground/90 font-light max-w-3xl mx-auto leading-relaxed">
            {desc}
          </p>
        </div>

        {/* Futuristic Service Cards with 3D Parallax */}
        <div className="grid px-2 md:px-[7%] grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services?.map((service, index) => {
            const serviceDetails = getServiceDetails(service.id);
            return (
              <ServiceCard3D
                key={service.id}
                service={service}
                serviceDetails={serviceDetails}
                index={index}
              />
            );
          })}
        </div>

        {/* CTA Button */}
        {hideViewAllSection && (
          <div ref={ctaRef} className="text-center mt-16 md:mt-20 relative">
            <div className="absolute left-1/2 -translate-x-1/2 -top-8 w-24 h-px bg-gradient-to-r from-transparent via-primary to-transparent"></div>
            
            <div className="relative inline-block">
              <Button 
                asChild 
                size="lg" 
                className="group relative overflow-hidden bg-gradient-to-r from-primary via-accent to-secondary hover:from-primary/90 hover:via-accent/90 hover:to-secondary/90 text-white px-8 md:px-10 py-6 md:py-7 text-base md:text-lg font-semibold rounded-xl shadow-xl hover:shadow-2xl hover:shadow-primary/40 transition-all duration-500 hover:-translate-y-1"
              >
                <Link href="/services" className="flex items-center justify-center gap-2 relative z-10">
                  <span className="relative">
                    View All Services
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-500"></span>
                  </span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              
              {/* Glow effect behind button */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary via-accent to-secondary rounded-xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-500 -z-10"></div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
