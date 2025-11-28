import { Target, Eye, Rocket, Globe, Sparkles } from 'lucide-react';
import Image from 'next/image';
import { AnimatedDivider } from '@/components/ui/AnimatedDivider';

export const MissionVision = () => {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      {/* Animated Divider at Top */}
      <div className="absolute top-0 left-0 right-0 z-20">
        <AnimatedDivider />
      </div>

      {/* Futuristic Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-accent/5 dark:via-accent/10 to-primary/5 dark:to-primary/10"></div>

      {/* Tech Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(rgba(156, 30, 42, 0.15) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(156, 30, 42, 0.15) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      {/* Floating Orbs */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl opacity-50"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl opacity-50"></div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 md:mb-20">
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary/15 dark:bg-primary/25 border border-primary/30 dark:border-primary/40 mb-8 backdrop-blur-sm shadow-lg">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-semibold text-primary">Mission & Vision</span>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              <span className="text-foreground">Our </span>
              <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
                Purpose
              </span>
            </h2>
          </div>

          {/* Mission & Vision Grid */}
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12">
            {/* Mission Card */}
            <div className="group relative">
              <div className="relative h-full overflow-hidden rounded-3xl bg-card/60 dark:bg-card/40 backdrop-blur-xl border border-border/50 dark:border-border/40 hover:border-primary/50 dark:hover:border-primary/50 transition-all duration-700 hover:shadow-2xl hover:shadow-primary/20 hover:-translate-y-2">
                {/* Background Image */}
                <div className="absolute inset-0">
                  <Image
                    src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1200"
                    alt="Mission"
                    fill
                    className="object-cover transition-transform duration-1000 group-hover:scale-110"
                  />
                  {/* Stronger overlay in light mode for better text visibility, keeping dark mode as is */}
                  <div className="absolute inset-0 bg-white/60 dark:bg-black/50"></div>
                  <div className="absolute inset-0 bg-gradient-to-br from-white/70 via-white/60 to-white/50 dark:from-black/60 dark:via-black/50 dark:to-black/40"></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-accent/15 via-transparent to-transparent"></div>
                </div>

                {/* Glow Effect */}
                <div className="absolute -inset-1 bg-gradient-to-br from-primary/20 via-accent/10 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 blur-2xl transition-opacity duration-700 -z-10"></div>

                {/* Circuit Lines */}
                <div className="absolute inset-0 overflow-hidden rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
                  <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>
                  <div className="absolute top-0 bottom-0 left-0 w-px bg-gradient-to-b from-transparent via-primary/50 to-transparent"></div>
                  <div className="absolute top-0 bottom-0 right-0 w-px bg-gradient-to-b from-transparent via-primary/50 to-transparent"></div>
                </div>

                {/* Corner Indicators */}
                <div className="absolute top-4 left-4 w-6 h-6 border-t-2 border-l-2 border-primary/50 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                <div className="absolute top-4 right-4 w-6 h-6 border-t-2 border-r-2 border-primary/50 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                <div className="absolute bottom-4 left-4 w-6 h-6 border-b-2 border-l-2 border-primary/50 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                <div className="absolute bottom-4 right-4 w-6 h-6 border-b-2 border-r-2 border-primary/50 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

                <div className="relative z-10 p-8 md:p-10">
                  {/* Badge */}
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 dark:bg-primary/30 border border-primary/40 dark:border-primary/50 mb-6 backdrop-blur-md">
                    <Target className="w-4 h-4 text-primary" />
                    <span className="text-sm font-semibold text-primary">Our Mission</span>
                  </div>

                  {/* Icon */}
                  <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-primary/30 to-primary/20 mb-6 group-hover:scale-110 transition-transform duration-300 shadow-xl backdrop-blur-sm">
                    <Rocket className="w-10 h-10 text-primary" />
                  </div>

                  {/* Heading */}
                  <h3 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
                    <span className="text-foreground drop-shadow-lg">Empowering Digital </span>
                    <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent drop-shadow-lg">
                      Transformation
                    </span>
                  </h3>

                  {/* Description */}
                  <p className="text-lg text-foreground/90 dark:text-foreground/95 leading-relaxed mb-8 drop-shadow-md">
                    To empower businesses with cutting-edge digital solutions that drive growth, enhance online presence, and deliver measurable results. We believe that every business deserves to succeed in the digital world.
                  </p>

                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-4 pt-6 border-t border-border/40">
                    <div className="text-center">
                      <div className="text-2xl md:text-3xl font-bold text-primary mb-1 drop-shadow-lg">500+</div>
                      <div className="text-xs text-foreground/70">Projects</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl md:text-3xl font-bold text-accent mb-1 drop-shadow-lg">98%</div>
                      <div className="text-xs text-foreground/70">Success</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl md:text-3xl font-bold text-secondary mb-1 drop-shadow-lg">24/7</div>
                      <div className="text-xs text-foreground/70">Support</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Vision Card */}
            <div className="group relative">
              <div className="relative h-full overflow-hidden rounded-3xl bg-card/60 dark:bg-card/40 backdrop-blur-xl border border-border/50 dark:border-border/40 hover:border-accent/50 dark:hover:border-accent/50 transition-all duration-700 hover:shadow-2xl hover:shadow-accent/20 hover:-translate-y-2">
                {/* Background Image */}
                <div className="absolute inset-0">
                  <Image
                    src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1200"
                    alt="Vision"
                    fill
                    className="object-cover transition-transform duration-1000 group-hover:scale-110"
                  />
                  {/* Stronger overlay in light mode for better text visibility, keeping dark mode as is */}
                  <div className="absolute inset-0 bg-white/60 dark:bg-black/50"></div>
                  <div className="absolute inset-0 bg-gradient-to-br from-white/70 via-white/60 to-white/50 dark:from-black/60 dark:via-black/50 dark:to-black/40"></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-accent/15 via-transparent to-transparent"></div>
                </div>

                {/* Glow Effect */}
                <div className="absolute -inset-1 bg-gradient-to-br from-accent/20 via-secondary/10 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 blur-2xl transition-opacity duration-700 -z-10"></div>

                {/* Circuit Lines */}
                <div className="absolute inset-0 overflow-hidden rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
                  <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent"></div>
                  <div className="absolute top-0 bottom-0 left-0 w-px bg-gradient-to-b from-transparent via-accent/50 to-transparent"></div>
                  <div className="absolute top-0 bottom-0 right-0 w-px bg-gradient-to-b from-transparent via-accent/50 to-transparent"></div>
                </div>

                {/* Corner Indicators */}
                <div className="absolute top-4 left-4 w-6 h-6 border-t-2 border-l-2 border-accent/50 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                <div className="absolute top-4 right-4 w-6 h-6 border-t-2 border-r-2 border-accent/50 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                <div className="absolute bottom-4 left-4 w-6 h-6 border-b-2 border-l-2 border-accent/50 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                <div className="absolute bottom-4 right-4 w-6 h-6 border-b-2 border-r-2 border-accent/50 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

                <div className="relative z-10 p-8 md:p-10">
                  {/* Badge */}
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/20 dark:bg-accent/30 border border-accent/40 dark:border-accent/50 mb-6 backdrop-blur-md">
                    <Eye className="w-4 h-4 text-accent" />
                    <span className="text-sm font-semibold text-accent">Our Vision</span>
                  </div>

                  {/* Icon */}
                  <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-accent/30 to-accent/20 mb-6 group-hover:scale-110 transition-transform duration-300 shadow-xl backdrop-blur-sm">
                    <Globe className="w-10 h-10 text-accent" />
                  </div>

                  {/* Heading */}
                  <h3 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
                    <span className="text-foreground drop-shadow-lg">Shaping the </span>
                    <span className="bg-gradient-to-r from-accent to-secondary bg-clip-text text-transparent drop-shadow-lg">
                      Digital Future
                    </span>
                  </h3>

                  {/* Description */}
                  <p className="text-lg text-foreground/90 dark:text-foreground/95 leading-relaxed mb-8 drop-shadow-md">
                    Our vision is to be the leading digital agency that shapes the future of online business, setting new standards for innovation, quality, and client satisfaction in the digital marketing industry. We strive to empower brands with cutting-edge digital solutions that enhance visibility, boost conversions, and accelerate sustainable growth.</p>

                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-4 pt-6 border-t border-border/40">
                    <div className="text-center">
                      <div className="text-2xl md:text-3xl font-bold text-accent mb-1 drop-shadow-lg">2030</div>
                      <div className="text-xs text-foreground/70">Vision Year</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl md:text-3xl font-bold text-secondary mb-1 drop-shadow-lg">Global</div>
                      <div className="text-xs text-foreground/70">Reach</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl md:text-3xl font-bold text-primary mb-1 drop-shadow-lg">∞</div>
                      <div className="text-xs text-foreground/70">Possibilities</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
