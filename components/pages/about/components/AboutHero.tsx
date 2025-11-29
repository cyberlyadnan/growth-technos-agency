import { Sparkles, Rocket, Target, Zap } from "lucide-react";
import Image from "next/image";
import { AnimatedDivider } from "@/components/ui/AnimatedDivider";

export const AboutHero = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden pt-16">
      {/* Animated Divider at Top */}
      {/* <div className="absolute top-0 left-0 right-0 z-20">
        <AnimatedDivider />
      </div> */}

      {/* Background Image with Parallax Effect */}
      <div className="absolute inset-0">
        <Image
          src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt="Team collaboration"
          fill
          className="object-cover"
          priority
        />
        {/* Light Theme-aware Overlay: Lighter for better image visibility */}
        <div className="absolute inset-0 bg-white/40 dark:bg-black/50"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-white/50 via-white/40 to-white/30 dark:from-black/60 dark:via-black/50 dark:to-black/40"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-primary/15 via-transparent to-transparent"></div>
      </div>

      {/* Tech Grid Pattern Overlay */}
      <div className="absolute inset-0 opacity-[0.05] dark:opacity-[0.08]">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(rgba(156, 30, 42, 0.15) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(156, 30, 42, 0.15) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      {/* Floating Orbs */}
      <div className="absolute top-20 right-10 w-96 h-96 bg-primary/20 rounded-full blur-3xl opacity-50 animate-pulse"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl opacity-50 animate-pulse" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-secondary/10 rounded-full blur-3xl opacity-30"></div>

      {/* Circuit Lines */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-0 w-32 h-px bg-gradient-to-r from-primary/40 to-transparent animate-pulse"></div>
        <div className="absolute bottom-1/4 right-0 w-32 h-px bg-gradient-to-l from-accent/40 to-transparent animate-pulse" style={{ animationDelay: '0.5s' }}></div>
        <div className="absolute top-0 left-1/4 w-px h-32 bg-gradient-to-b from-primary/40 to-transparent animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-0 right-1/4 w-px h-32 bg-gradient-to-t from-accent/40 to-transparent animate-pulse" style={{ animationDelay: '1.5s' }}></div>
      </div>

      {/* Animated Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-primary/40 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          ></div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center max-w-5xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary/20 dark:bg-primary/30 border border-primary/40 dark:border-primary/50 mb-8 backdrop-blur-md shadow-xl">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-semibold text-primary">Digital Innovation Experts</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight">
            <span className="text-foreground drop-shadow-lg">About </span>
            <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent drop-shadow-lg">
              Growth Technos
            </span>
          </h1>

          {/* Description */}
          <p className="text-xl sm:text-2xl md:text-3xl text-foreground/90 dark:text-foreground/95 font-light max-w-4xl mx-auto leading-relaxed mb-16 drop-shadow-md">
            We're a passionate team of digital experts dedicated to helping businesses thrive in the digital landscape through innovative solutions and strategic thinking.
          </p>
        </div>
      </div>

      {/* Bottom Wave Decoration */}
      <div className="absolute bottom-0 left-0 right-0 h-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent"></div>
        <svg
          viewBox="0 0 1440 120"
          className="w-full h-full text-background dark:text-background"
          preserveAspectRatio="none"
        >
          <path
            d="M0,60 C240,100 480,20 720,60 C960,100 1200,20 1440,60 L1440,120 L0,120 Z"
            fill="currentColor"
          />
        </svg>
      </div>
    </section>
  );
};
