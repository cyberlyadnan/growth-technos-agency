import { ArrowRight, Check, TrendingUp, Users, Award, Zap, Code, Cloud, Shield, Cpu } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export const AboutSection = () => {
  const features = [
    'Full-stack development & cloud architecture',
    'AI/ML integration & data analytics',
    'Cybersecurity & compliance solutions',
    '24/7 monitoring & dedicated support'
  ];

  const stats = [
    { icon: TrendingUp, value: '500+', label: 'Projects Delivered' },
    { icon: Users, value: '300+', label: 'Global Clients' },
    { icon: Award, value: '50+', label: 'Team Experts' },
    { icon: Zap, value: '99.9%', label: 'Uptime Guarantee' }
  ];

  const technologies = [
    { icon: Code, name: 'Web & Mobile' },
    { icon: Cloud, name: 'Cloud & DevOps' },
    { icon: Cpu, name: 'AI & Machine Learning' },
    { icon: Shield, name: 'Security' }
  ];

  return (
    <section className="relative md:px-[5%] px-2 py-20 md:py-32 bg-gradient-to-br from-background via-primary-50/30 to-secondary-50/20 dark:from-background dark:via-primary-950/20 dark:to-secondary-950/20 overflow-hidden">
      {/* Enhanced background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary-500/5 rounded-full blur-3xl animate-pulse-slow"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary-500/5 rounded-full blur-3xl animate-pulse-slow delay-1000"></div>
      
      {/* Tech grid background */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.02] dark:opacity-[0.03]"></div>
      
      {/* Circuit lines */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-10 w-px h-32 bg-gradient-to-b from-primary-500/20 via-accent-500/20 to-transparent"></div>
        <div className="absolute bottom-1/3 right-20 w-px h-48 bg-gradient-to-b from-secondary-500/20 via-primary-500/20 to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Content Side */}
          <div className="space-y-10">
            {/* Enhanced Badge */}
            <div className="inline-flex items-center gap-3 px-5 py-3 rounded-2xl bg-primary-100/80 dark:bg-primary-900/50 border border-primary-200/50 dark:border-primary-800/50 backdrop-blur-sm shadow-lg">
              <div className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-primary-600 dark:bg-primary-400"></span>
              </div>
              <span className="text-sm font-semibold text-primary-900 dark:text-primary-100 tracking-wide">
                Innovation-Driven Technology Partner
              </span>
            </div>

            {/* Enhanced Heading */}
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                Building The{' '}
                <span className="bg-gradient-to-r from-primary-600 via-accent-600 to-secondary-600 dark:from-primary-400 dark:via-accent-400 dark:to-secondary-400 bg-clip-text text-transparent">
                  Digital Future
                </span>
              </h2>
              <div className="flex items-center gap-4">
                <div className="h-1 w-20 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full"></div>
                <div className="h-1 w-12 bg-gradient-to-r from-accent-500 to-secondary-500 rounded-full"></div>
                <div className="h-1 w-8 bg-gradient-to-r from-secondary-500 to-primary-500 rounded-full"></div>
              </div>
            </div>

            {/* Enhanced Description */}
            <p className="text-xl md:text-2xl text-slate-700 dark:text-muted-foreground leading-relaxed font-light">
              We are a <span className="font-semibold text-primary-600 dark:text-primary-400">premier IT solutions agency</span> 
              {' '}specializing in cutting-edge technology implementations that drive 
              business transformation and digital innovation.
            </p>

            {/* Tech Stack Pill */}
            <div className="flex flex-wrap gap-3">
              {technologies.map((tech, index) => (
                <div 
                  key={index}
                  className="flex items-center gap-2 px-4 py-3 rounded-xl bg-card/80 backdrop-blur-sm border border-border hover:border-primary-300 dark:hover:border-primary-600 transition-all duration-300 hover:shadow-lg group"
                >
                  <tech.icon className="w-4 h-4 text-primary-600 dark:text-primary-400 group-hover:scale-110 transition-transform" />
                  <span className="text-sm font-medium text-foreground/80 group-hover:text-foreground">
                    {tech.name}
                  </span>
                </div>
              ))}
            </div>

            {/* Enhanced Features List */}
            <div className="grid sm:grid-cols-2 gap-4">
              {features.map((item, index) => (
                <div 
                  key={index} 
                  className="flex items-start space-x-4 p-4 rounded-xl bg-white/60 dark:bg-slate-900/60 backdrop-blur-sm border border-slate-200/50 dark:border-slate-700/50 hover:border-primary-300 dark:hover:border-primary-600 transition-all duration-300 hover:shadow-lg group"
                >
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary-100 dark:bg-primary-900/50 flex items-center justify-center group-hover:bg-primary-200 dark:group-hover:bg-primary-800/50 transition-colors mt-0.5">
                    <Check className="w-3 h-3 text-primary-600 dark:text-primary-400 group-hover:scale-110 transition-transform" />
                  </div>
                  <span className="text-base font-medium text-foreground/80 group-hover:text-foreground leading-relaxed">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            {/* Enhanced CTA Button */}
            <div className="pt-6">
              <Button 
                asChild 
                size="lg" 
                className="bg-gradient-to-r from-primary-600 to-accent-600 hover:from-primary-700 hover:to-accent-700 text-white shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 hover:scale-105 px-10 py-7 text-lg font-semibold group"
              >
                <Link href="/about" className="flex items-center">
                  Explore Our Expertise
                  <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>
          </div>

          {/* Enhanced Image Side */}
          <div className="relative">
            {/* Main Image Container with Tech Elements */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <div className="aspect-[4/5] relative">
                <Image
                  src="https://images.pexels.com/photos/1181673/pexels-photo-1181673.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Our tech team collaborating"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
                {/* Enhanced overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent"></div>
                
                {/* Floating code elements */}
                <div className="absolute top-6 left-6 p-3 rounded-xl bg-black/60 backdrop-blur-sm border border-primary-500/30">
                  <code className="text-xs text-primary-300 font-mono">npm create next-app@latest</code>
                </div>
                <div className="absolute bottom-20 right-6 p-3 rounded-xl bg-black/60 backdrop-blur-sm border border-accent-500/30">
                  <code className="text-xs text-white font-mono">docker-compose up -d</code>
                </div>
              </div>

              {/* Enhanced decorative border */}
              <div className="absolute -inset-1 bg-gradient-to-r from-primary-500 via-accent-500 to-secondary-500 rounded-3xl opacity-30 blur-lg -z-10 animate-pulse-slow"></div>
            </div>

            {/* Enhanced Stats Grid */}
            {/* <div className="grid grid-cols-2 gap-4 mt-8">
              {stats.map((stat, index) => (
                <div 
                  key={index}
                  className="p-5 rounded-2xl bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm border border-slate-200/50 dark:border-slate-700/50 hover:border-primary-300 dark:hover:border-primary-600 transition-all duration-300 hover:shadow-xl group"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 rounded-lg bg-primary-100 dark:bg-primary-900/50 group-hover:bg-primary-200 dark:group-hover:bg-primary-800/50 transition-colors">
                      <stat.icon className="w-4 h-4 text-primary-600 dark:text-primary-400" />
                    </div>
                    <div className="text-2xl font-bold text-primary-600 dark:text-primary-400 group-hover:scale-105 transition-transform">
                      {stat.value}
                    </div>
                  </div>
                  <div className="text-sm font-medium text-slate-700 dark:text-muted-foreground group-hover:text-foreground transition-colors">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div> */}

            {/* Enhanced Floating badge */}
            <div className="hidden lg:block absolute -top-8 -right-8 p-5 rounded-2xl bg-gradient-to-br from-primary-600 to-accent-600 text-white shadow-2xl rotate-3 hover:rotate-0 transition-all duration-300 group">
              <div className="text-center">
                <Award className="w-8 h-8 mx-auto mb-2 group-hover:scale-110 transition-transform" />
                <div className="text-sm font-bold tracking-wide">AWARD WINNING</div>
                <div className="text-xs opacity-90 mt-1">Tech Agency 2024</div>
              </div>
            </div>

            {/* Additional floating element */}
            <div className="hidden xl:block absolute -bottom-6 -left-6 p-4 rounded-2xl bg-gradient-to-br from-secondary-600 to-primary-600 text-white shadow-2xl -rotate-6 hover:rotate-0 transition-all duration-300 group">
              <div className="text-center">
                <Zap className="w-6 h-6 mx-auto mb-1 group-hover:scale-110 transition-transform" />
                <div className="text-xs font-semibold">FAST</div>
                <div className="text-xs opacity-90">Delivery</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};