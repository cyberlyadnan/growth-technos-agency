import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center px-4 pt-10 md:px-[5%] justify-center overflow-hidden bg-gradient-to-br from-background via-primary-50 to-secondary-50 dark:from-background dark:via-primary-950 dark:to-secondary-950">
      {/* Enhanced animated background */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] dark:opacity-[0.05]"></div>
      
      {/* Tech circuit pattern overlay */}
      <div className="absolute inset-0 opacity-[0.02] dark:opacity-[0.03] bg-circuit-pattern bg-cover"></div>

      {/* Improved gradient orbs with better positioning */}
      <div className="absolute -top-20 -left-20 w-80 h-80 bg-primary-500/15 dark:bg-primary-400/10 rounded-full blur-3xl animate-float"></div>
      <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-secondary-500/15 dark:bg-secondary-400/10 rounded-full blur-3xl animate-float-delayed"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-accent-500/10 dark:bg-accent-400/5 rounded-full blur-3xl animate-pulse-slow"></div>

      {/* Tech lines with better visibility */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary-500/30 to-transparent"></div>
        <div className="absolute bottom-20 left-0 w-full h-px bg-gradient-to-r from-transparent via-secondary-500/30 to-transparent"></div>
        <div className="absolute top-0 right-20 w-px h-full bg-gradient-to-b from-transparent via-accent-500/30 to-transparent"></div>
        <div className="absolute top-0 left-20 w-px h-full bg-gradient-to-b from-transparent via-primary-500/30 to-transparent"></div>
      </div>

      {/* Binary code animation background */}
      <div className="absolute inset-0 overflow-hidden opacity-[0.02] dark:opacity-[0.03]">
        <div className="animate-scroll-binary text-primary-600 dark:text-primary-400 font-mono text-sm whitespace-nowrap">
          10101001 01101000 10010101 01011010 10101001 01101000 10010101 01011010
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20">
        <div className="grid lg:grid-cols-2 py-1 md:py-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-left max-w-2xl">
            {/* Enhanced Badge */}
            <div className="inline-flex items-center gap-3 px-4 py-3 rounded-full bg-primary-100/80 dark:bg-primary-900/50 border border-primary-200/50 dark:border-primary-800/50 backdrop-blur-sm mb-8 animate-fade-in-up shadow-lg">
              <div className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-primary-600 dark:bg-primary-400"></span>
              </div>
              <span className="text-sm font-semibold text-primary-900 dark:text-primary-100 tracking-wide">
                Trusted by 500+ businesses worldwide
              </span>
            </div>

            {/* Improved Main heading */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-balance animate-fade-in-up animation-delay-100">
              <span className="text-foreground block leading-tight">
                Transform Your
              </span>
              <span className="bg-gradient-to-r from-primary-600 via-secondary-600 to-accent-600 dark:from-primary-400 dark:via-secondary-400 dark:to-accent-400 bg-clip-text text-transparent block leading-tight">
                Digital Future
              </span>
            </h1>

            {/* Enhanced Description */}
            <p className="text-lg md:text-xl lg:text-2xl mb-10 text-slate-800 dark:text-muted-foreground max-w-3xl leading-relaxed animate-fade-in-up animation-delay-200 font-light">
              We deliver <span className="font-semibold text-primary-600 dark:text-primary-400">cutting-edge IT solutions</span> that drive innovation, 
              efficiency, and growth for forward-thinking businesses in the digital age.
            </p>

            {/* Enhanced CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12 animate-fade-in-up animation-delay-300">
              <Button
                asChild
                size="lg"
                className="bg-primary-600 hover:bg-primary-700 dark:bg-primary-500 dark:hover:bg-primary-600 text-white px-8 py-6 text-lg shadow-lg shadow-primary-500/25 dark:shadow-primary-500/20 transition-all duration-300 hover:shadow-xl hover:shadow-primary-500/30 hover:-translate-y-1 hover:scale-105 group"
              >
                <Link href="/contact" className="flex items-center">
                  Start Your Project
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-2 border-slate-300 dark:border-slate-700 hover:text-primary-600 dark:hover:text-primary-400 text-foreground hover:bg-slate-50 dark:hover:bg-slate-800/50 px-8 py-6 text-lg transition-all duration-300 hover:-translate-y-1 hover:scale-105 group backdrop-blur-sm"
              >
                <Link href="/projects" className="flex items-center">
                  <Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                  View Case Studies
                </Link>
              </Button>
            </div>

            {/* Enhanced Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-2xl animate-fade-in-up animation-delay-400">
              {[
                { value: "500+", label: "Projects" },
                { value: "98%", label: "Satisfaction" },
                { value: "50+", label: "Experts" },
                { value: "24/7", label: "Support" },
              ].map((stat, index) => (
                <div
                  key={index}
                  className="p-4 rounded-xl bg-white/60 dark:bg-slate-900/60 backdrop-blur-sm border border-slate-200/50 dark:border-slate-700/50 hover:border-primary-300 dark:hover:border-primary-600 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 group"
                >
                  <div className="text-2xl md:text-3xl font-bold text-primary-600 dark:text-primary-400 mb-1 group-hover:scale-105 transition-transform">
                    {stat.value}
                  </div>
                  <div className="text-sm font-medium text-slate-700 dark:text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Visualization Side */}
          <div className="relative hidden lg:block">
            {/* Main tech visualization container */}
            <div className="relative w-full h-96 bg-gradient-to-br from-slate-100/50 to-slate-200/30 dark:from-slate-800/50 dark:to-slate-900/30 rounded-2xl border border-slate-300/50 dark:border-slate-600/50 backdrop-blur-sm shadow-2xl overflow-hidden">
              {/* Demo image placeholder */}
              <Image
                src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=80"
                alt="Technology team collaborating"
                fill
                sizes="(min-width: 1024px) 480px, 100vw"
                priority
                unoptimized
                className="object-cover brightness-105 dark:brightness-[0.85]"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-background/50 via-transparent to-primary-900/40 mix-blend-overlay"></div>

              {/* Floating tech elements */}
              <div className="absolute top-8 left-8 w-16 h-16 bg-primary-500/20 dark:bg-primary-400/10 rounded-xl border border-primary-400/30 dark:border-primary-500/20 animate-float-slow"></div>
              <div className="absolute bottom-12 right-12 w-20 h-20 bg-secondary-500/20 dark:bg-secondary-400/10 rounded-xl border border-secondary-400/30 dark:border-secondary-500/20 animate-float-delayed"></div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-accent-500/15 dark:bg-accent-400/5 rounded-full border border-accent-400/20 dark:border-accent-500/10 animate-pulse"></div>
              
              {/* Connection lines */}
              <div className="absolute inset-0">
                <div className="absolute top-16 left-20 w-32 h-0.5 bg-primary-400/30 dark:bg-primary-500/20 rotate-45"></div>
                <div className="absolute bottom-20 right-20 w-40 h-0.5 bg-secondary-400/30 dark:bg-secondary-500/20 -rotate-45"></div>
                <div className="absolute top-1/2 left-1/4 w-20 h-0.5 bg-accent-400/30 dark:bg-accent-500/20"></div>
              </div>

              {/* Data points */}
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div
                  key={i}
                  className={`absolute w-2 h-2 rounded-full bg-primary-500 dark:bg-primary-400 animate-ping-slow`}
                  style={{
                    top: `${20 + (i * 12)}%`,
                    left: `${15 + (i * 10)}%`,
                    animationDelay: `${i * 0.2}s`
                  }}
                ></div>
              ))}
            </div>

            {/* Floating tech badges around the main visualization */}
            <div className="absolute -top-4 -right-4 px-4 py-2 bg-primary-600 dark:bg-primary-500 text-white text-sm font-semibold rounded-full shadow-lg animate-float">
              Cloud Solutions
            </div>
            <div className="absolute -bottom-4 -left-4 px-4 py-2 bg-secondary-600 dark:bg-secondary-500 text-white text-sm font-semibold rounded-full shadow-lg animate-float-delayed">
              AI & ML
            </div>
            <div className="absolute top-1/2 -right-6 px-4 py-2 bg-accent-600 dark:bg-accent-500 text-white text-sm font-semibold rounded-full shadow-lg animate-float-slow">
              Web3 Ready
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Scroll indicator
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="flex flex-col items-center">
          <span className="text-xs text-slate-600 dark:text-slate-400 mb-2 font-medium tracking-wide">SCROLL TO EXPLORE</span>
          <div className="w-6 h-10 border-2 border-slate-400 dark:border-slate-500 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-slate-400 dark:bg-slate-500 rounded-full mt-2 animate-scroll-indicator"></div>
          </div>
        </div>
      </div> */}
    </section>
  );
};