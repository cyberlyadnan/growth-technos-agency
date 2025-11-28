import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, ArrowRight, Award, Users, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { AnimatedDivider } from '@/components/ui/AnimatedDivider';

export function HeroSection({ service }) {
  return (
    <section className="relative min-h-[90vh] flex items-center bg-gradient-to-br from-background via-background/95 to-background overflow-hidden">
      {/* Futuristic Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Tech Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] dark:bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)]"></div>
        
        {/* Floating Orbs */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        
        {/* Circuit Lines */}
        <div className="absolute top-0 left-0 w-full h-full opacity-30 dark:opacity-20">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="circuitGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="var(--primary)" stopOpacity="0.3" />
                <stop offset="100%" stopColor="var(--accent)" stopOpacity="0.3" />
              </linearGradient>
            </defs>
            <path d="M0,100 Q200,50 400,100 T800,100" stroke="url(#circuitGradient)" strokeWidth="1" fill="none" />
            <path d="M0,300 Q300,250 600,300 T1200,300" stroke="url(#circuitGradient)" strokeWidth="1" fill="none" />
          </svg>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Column */}
          <div className="space-y-6">
            <Link href="/services" className="inline-flex items-center text-foreground/70 hover:text-primary transition-colors group">
              <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
              Back to Services
            </Link>

            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-foreground via-primary to-accent bg-clip-text text-transparent">
                {service.title}
              </h1>
              <p className="text-xl md:text-2xl text-foreground/80 font-medium">
                {service.subtitle}
              </p>
              <p className="text-lg text-foreground/70 leading-relaxed">
                {service.description}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <div className="group relative">
                <Button asChild size="lg" className="relative overflow-hidden bg-gradient-to-r from-primary via-primary to-accent hover:from-primary/90 hover:via-primary/90 hover:to-accent/90 text-white border-0 shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-all">
                  <Link href="/contact" className="flex items-center">
                    Get Started Now
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 pointer-events-none rounded-md"></div>
              </div>
              <Button asChild variant="outline" size="lg" className="border-2 border-primary/30 hover:border-primary hover:bg-primary/5">
                <Link href="/portfolio">View Portfolio</Link>
              </Button>
            </div>
          </div>

          {/* Right Column */}
          <div className="relative">
            <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl border border-border/50 group">
              <Image
                src={service.heroImage || '/placeholder-service.jpg'}
                alt={service.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                priority
              />
              {/* Overlay with scan line effect */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent"></div>
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent animate-pulse"></div>
              </div>
            </div>
            
            {/* Floating Stats Cards */}
            <div className="absolute -bottom-6 -left-6 bg-card/90 backdrop-blur-xl border border-border/50 rounded-xl p-4 shadow-xl group hover:scale-105 transition-transform">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Users className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-foreground">500+</div>
                  <div className="text-xs text-foreground/60">Projects</div>
                </div>
              </div>
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-primary rounded-full animate-ping"></div>
            </div>
            
            <div className="absolute -top-6 -right-6 bg-card/90 backdrop-blur-xl border border-border/50 rounded-xl p-4 shadow-xl group hover:scale-105 transition-transform">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-accent/10 rounded-lg">
                  <Award className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-foreground">98%</div>
                  <div className="text-xs text-foreground/60">Success Rate</div>
                </div>
              </div>
              <div className="absolute inset-0 rounded-xl border-2 border-accent/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Animated Divider at Bottom */}
      <div className="absolute bottom-0 left-0 right-0">
        <AnimatedDivider />
      </div>
    </section>
  );
}
