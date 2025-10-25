import { ArrowRight, Check, TrendingUp, Users, Award, Zap } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export const AboutSection = () => {
  const features = [
    'Expert team of developers and marketers',
    'Proven track record of successful projects',
    'Cutting-edge technologies and strategies',
    'Dedicated support and maintenance'
  ];

  const stats = [
    { icon: TrendingUp, value: '500+', label: 'Projects Completed' },
    { icon: Users, value: '300+', label: 'Happy Clients' },
    { icon: Award, value: '5+', label: 'Years Experience' },
    { icon: Zap, value: '98%', label: 'Success Rate' }
  ];

  return (
    <section className="relative py-20 md:py-32 px-4 md:px-[10%] bg-background overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content Side */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              <span className="text-sm font-medium text-primary">
                Your Digital Growth Partner
              </span>
            </div>

            {/* Heading */}
            <div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-foreground">
                About{' '}
                <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
                  Growth Technos
                </span>
              </h2>
              <div className="h-1 w-24 bg-gradient-to-r from-primary to-secondary rounded-full"></div>
            </div>

            {/* Description */}
            <p className="text-lg md:text-xl text-slate-500 dark:text-muted-foreground leading-relaxed">
              We are a team of passionate digital experts dedicated to helping businesses 
              succeed in the digital landscape. With over 5 years of experience, we've 
              helped hundreds of companies achieve their online goals.
            </p>

            {/* Features List */}
            <div className="space-y-4">
              {features.map((item, index) => (
                <div 
                  key={index} 
                  className="flex items-start space-x-4 p-3 rounded-lg hover:bg-card transition-all duration-300 group"
                >
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Check className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-base text-foreground/80 group-hover:text-foreground transition-colors">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="pt-4">
              <Button 
                asChild 
                size="lg" 
                className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5 px-8 py-6 text-base"
              >
                <Link href="/about" className="group">
                  Learn More About Us
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>
          </div>

          {/* Image Side */}
          <div className="relative">
            {/* Main Image Container */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <div className="aspect-[4/3] relative">
                <Image
                  src="https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Our team working"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
              </div>

              {/* Decorative border */}
              <div className="absolute -inset-1 bg-gradient-to-r from-primary via-accent to-secondary rounded-2xl opacity-20 blur-sm -z-10"></div>
            </div>


            {/* Floating badge - Hidden on mobile for cleaner look */}
            <div className="hidden lg:block absolute -top-6 -right-6 p-4 rounded-2xl bg-gradient-to-br from-secondary to-accent text-secondary-foreground shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-300">
              <div className="text-center">
                <div className="text-3xl font-bold">🏆</div>
                <div className="text-sm font-semibold mt-1">Top Rated</div>
                <div className="text-xs opacity-90">Agency 2024</div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
};