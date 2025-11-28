import { Sparkles, Rocket, Brain, Zap, ArrowRight, Code2, Cloud, Shield } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export const AboutSection = () => {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      {/* Futuristic Background with Primary Colors */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-primary/5 dark:via-primary/10 to-accent/5 dark:to-accent/10"></div>
      
      {/* Animated Grid Pattern with Primary Color */}
      <div className="absolute inset-0 opacity-[0.04] dark:opacity-[0.06]">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(rgba(156, 30, 42, 0.15) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(156, 30, 42, 0.15) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      {/* Floating Orbs with Primary Colors */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section 1: Vision Statement */}
        <div className="max-w-6xl mx-auto mb-16 md:mb-24">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary/15 dark:bg-primary/25 border border-primary/30 dark:border-primary/40 mb-8 backdrop-blur-sm shadow-lg">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-semibold text-primary">Innovation First</span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            <span className="text-foreground">
              Shaping Tomorrow's
            </span>
            <br />
            <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
              Digital Landscape
            </span>
          </h2>
          
          <p className="text-lg sm:text-xl md:text-2xl text-foreground/80 dark:text-foreground/90 font-light max-w-2xl leading-relaxed">
            We transform ideas into <span className="font-semibold text-primary">cutting-edge solutions</span> that drive business growth and digital excellence.
          </p>
        </div>

        {/* Section 2: Core Values - Minimal Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16 md:mb-12 max-w-6xl mx-auto">
          <div className="group relative p-6 md:p-8 rounded-2xl bg-card/80 dark:bg-card/60 backdrop-blur-xl border-2 border-primary/20 dark:border-primary/30 hover:border-primary transition-all duration-500 hover:shadow-2xl hover:shadow-primary/20 hover:-translate-y-1">
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-primary/30 flex items-center justify-center mb-6 group-hover:from-primary/30 group-hover:to-primary/40 transition-all shadow-lg shadow-primary/20">
                <Rocket className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">Speed</h3>
              <p className="text-foreground/70 dark:text-foreground/80 leading-relaxed text-sm md:text-base">
                Rapid deployment with precision and quality at the core.
              </p>
            </div>
          </div>

          <div className="group relative p-6 md:p-8 rounded-2xl bg-card/80 dark:bg-card/60 backdrop-blur-xl border-2 border-accent/20 dark:border-accent/30 hover:border-accent transition-all duration-500 hover:shadow-2xl hover:shadow-accent/20 hover:-translate-y-1">
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-accent/5 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent/20 to-accent/30 flex items-center justify-center mb-6 group-hover:from-accent/30 group-hover:to-accent/40 transition-all shadow-lg shadow-accent/20">
                <Brain className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold mb-3 text-foreground group-hover:text-accent transition-colors">Intelligence</h3>
              <p className="text-foreground/70 dark:text-foreground/80 leading-relaxed text-sm md:text-base">
                AI-powered solutions that learn and adapt to your needs.
              </p>
            </div>
          </div>

          <div className="group relative p-6 md:p-8 rounded-2xl bg-card/80 dark:bg-card/60 backdrop-blur-xl border-2 border-secondary/20 dark:border-secondary/30 hover:border-secondary transition-all duration-500 hover:shadow-2xl hover:shadow-secondary/20 hover:-translate-y-1 sm:col-span-2 lg:col-span-1">
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-secondary/5 to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-secondary/20 to-secondary/30 flex items-center justify-center mb-6 group-hover:from-secondary/30 group-hover:to-secondary/40 transition-all shadow-lg shadow-secondary/20">
                <Zap className="w-6 h-6 text-secondary" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold mb-3 text-foreground group-hover:text-secondary transition-colors">Excellence</h3>
              <p className="text-foreground/70 dark:text-foreground/80 leading-relaxed text-sm md:text-base">
                Uncompromising quality in every project we deliver.
              </p>
            </div>
          </div>
        </div>

        {/* Section 3: What We Do - Enhanced with Icons */}
        <div className="max-w-6xl mx-auto mb-16 md:mb-24">
          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {/* Full-Stack Development */}
            <div className="group relative p-6 md:p-8 rounded-2xl bg-gradient-to-br from-card/90 via-card/80 to-primary/5 dark:from-card/70 dark:via-card/60 dark:to-primary/10 backdrop-blur-xl border-2 border-primary/20 dark:border-primary/30 hover:border-primary transition-all duration-500 hover:shadow-2xl hover:shadow-primary/25 hover:-translate-y-2 overflow-hidden">
              {/* Animated background gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/0 to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Decorative corner element */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-primary/20 to-transparent rounded-bl-full opacity-50"></div>
              
              <div className="relative z-10">
                {/* Icon Container */}
                <div className="relative mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 via-primary/30 to-primary/40 flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-xl shadow-primary/30">
                    <Code2 className="w-8 h-8 text-primary" />
                  </div>
                  {/* Glowing effect */}
                  <div className="absolute inset-0 w-16 h-16 rounded-2xl bg-primary/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                
                {/* Content */}
                <h4 className="text-xl md:text-2xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
                  Full-Stack Development
                </h4>
                <p className="text-foreground/70 dark:text-foreground/80 leading-relaxed text-sm md:text-base">
                  End-to-end solutions from concept to deployment
                </p>
                
                {/* Animated indicator line */}
                <div className="mt-4 h-1 w-0 bg-gradient-to-r from-primary to-accent group-hover:w-full transition-all duration-500 rounded-full"></div>
              </div>
            </div>

            {/* Cloud & AI Integration */}
            <div className="group relative p-6 md:p-8 rounded-2xl bg-gradient-to-br from-card/90 via-card/80 to-accent/5 dark:from-card/70 dark:via-card/60 dark:to-accent/10 backdrop-blur-xl border-2 border-accent/20 dark:border-accent/30 hover:border-accent transition-all duration-500 hover:shadow-2xl hover:shadow-accent/25 hover:-translate-y-2 overflow-hidden">
              {/* Animated background gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent/0 via-accent/0 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Decorative corner element */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-accent/20 to-transparent rounded-bl-full opacity-50"></div>
              
              <div className="relative z-10">
                {/* Icon Container */}
                <div className="relative mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-accent/20 via-accent/30 to-accent/40 flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-xl shadow-accent/30">
                    <Cloud className="w-8 h-8 text-accent" />
                  </div>
                  {/* Glowing effect */}
                  <div className="absolute inset-0 w-16 h-16 rounded-2xl bg-accent/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                
                {/* Content */}
                <h4 className="text-xl md:text-2xl font-bold mb-3 text-foreground group-hover:text-accent transition-colors">
                  Cloud & AI Integration
                </h4>
                <p className="text-foreground/70 dark:text-foreground/80 leading-relaxed text-sm md:text-base">
                  Scalable infrastructure with intelligent automation
                </p>
                
                {/* Animated indicator line */}
                <div className="mt-4 h-1 w-0 bg-gradient-to-r from-accent to-secondary group-hover:w-full transition-all duration-500 rounded-full"></div>
              </div>
            </div>

            {/* Security & Compliance */}
            <div className="group relative p-6 md:p-8 rounded-2xl bg-gradient-to-br from-card/90 via-card/80 to-secondary/5 dark:from-card/70 dark:via-card/60 dark:to-secondary/10 backdrop-blur-xl border-2 border-secondary/20 dark:border-secondary/30 hover:border-secondary transition-all duration-500 hover:shadow-2xl hover:shadow-secondary/25 hover:-translate-y-2 overflow-hidden">
              {/* Animated background gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-secondary/0 via-secondary/0 to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Decorative corner element */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-secondary/20 to-transparent rounded-bl-full opacity-50"></div>
              
              <div className="relative z-10">
                {/* Icon Container */}
                <div className="relative mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-secondary/20 via-secondary/30 to-secondary/40 flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-xl shadow-secondary/30">
                    <Shield className="w-8 h-8 text-secondary" />
                  </div>
                  {/* Glowing effect */}
                  <div className="absolute inset-0 w-16 h-16 rounded-2xl bg-secondary/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                
                {/* Content */}
                <h4 className="text-xl md:text-2xl font-bold mb-3 text-foreground group-hover:text-secondary transition-colors">
                  Security & Compliance
                </h4>
                <p className="text-foreground/70 dark:text-foreground/80 leading-relaxed text-sm md:text-base">
                  Enterprise-grade protection for your digital assets
                </p>
                
                {/* Animated indicator line */}
                <div className="mt-4 h-1 w-0 bg-gradient-to-r from-secondary to-primary group-hover:w-full transition-all duration-500 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Section 4: CTA */}
        <div className="text-center max-w-2xl mx-auto">
          <Button 
            asChild 
            size="lg" 
            className="group relative overflow-hidden bg-gradient-to-r from-primary via-accent to-secondary hover:from-primary/90 hover:via-accent/90 hover:to-secondary/90 text-white px-6 md:px-8 py-5 md:py-6 text-base md:text-lg font-semibold rounded-xl shadow-xl hover:shadow-2xl hover:shadow-primary/30 transition-all duration-300 hover:-translate-y-0.5"
          >
            <Link href="/about" className="flex items-center justify-center gap-2">
              Discover Our Journey
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};