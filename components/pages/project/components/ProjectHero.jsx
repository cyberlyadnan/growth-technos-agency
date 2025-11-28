import React from "react";
import { Sparkles } from "lucide-react";
import { AnimatedDivider } from "@/components/ui/AnimatedDivider";

export default function ProjectHero({ title, subtitle, description }) {
  return (
    <section className="relative min-h-[60vh] flex items-center bg-gradient-to-br from-background via-background/95 to-background overflow-hidden">
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
              <linearGradient id="circuitGradientHero" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="var(--primary)" stopOpacity="0.3" />
                <stop offset="100%" stopColor="var(--accent)" stopOpacity="0.3" />
              </linearGradient>
            </defs>
            <path d="M0,100 Q200,50 400,100 T800,100" stroke="url(#circuitGradientHero)" strokeWidth="1" fill="none" />
            <path d="M0,300 Q300,250 600,300 T1200,300" stroke="url(#circuitGradientHero)" strokeWidth="1" fill="none" />
          </svg>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20">
        <div className="text-center max-w-4xl mx-auto space-y-6">
          <div className="inline-flex items-center justify-center p-3 bg-primary/10 rounded-full mb-6">
            <Sparkles className="w-6 h-6 text-primary" />
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-foreground via-primary to-accent bg-clip-text text-transparent">
            {title}
          </h1>
          
          {subtitle && (
            <h2 className="text-2xl md:text-3xl font-semibold text-foreground/80">
              {subtitle}
            </h2>
          )}
          
          {description && (
            <p className="text-lg md:text-xl text-foreground/70 max-w-3xl mx-auto leading-relaxed">
              {description}
            </p>
          )}
        </div>
      </div>

      {/* Animated Divider at Bottom */}
      <div className="absolute bottom-0 left-0 right-0">
        <AnimatedDivider />
      </div>
    </section>
  );
}
