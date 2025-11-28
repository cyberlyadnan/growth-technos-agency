"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Sparkles } from "lucide-react";
import { useEffect, useRef } from "react";

export const Hero = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {
        // Autoplay was prevented, handle gracefully
      });
    }
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full z-0">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover scale-105"
        >
          <source src="/assets/videos/bg-video.mp4" type="video/mp4" />
          {/* Fallback for browsers that don't support video */}
          <div className="absolute inset-0 bg-gradient-to-br from-background via-primary/10 to-secondary/10"></div>
        </video>
        
        {/* Base dark overlay - reduced by 30% */}
        <div className="absolute inset-0 bg-black/42"></div>
        
        {/* Radial gradient overlay - reduced by 30% */}
        <div className="absolute inset-0" 
             style={{
               background: 'radial-gradient(ellipse at center, rgba(0,0,0,0.595) 0%, rgba(0,0,0,0.525) 40%, rgba(0,0,0,0.385) 100%)'
             }}></div>
        
        {/* Vignette effect for focus on center content */}
        <div className="absolute inset-0" 
             style={{
               background: 'radial-gradient(ellipse 80% 50% at 50% 50%, transparent 0%, rgba(0,0,0,0.07) 100%)'
             }}></div>
        
        {/* Top and bottom gradient overlays - reduced by 30% */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/63 via-transparent to-black/56"></div>
        
        {/* Subtle colored overlay with theme colors */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/15 via-transparent to-secondary/15 mix-blend-soft-light"></div>
        
        {/* Animated gradient orbs */}
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-float opacity-40"></div>
        <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-float-delayed opacity-40"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/15 rounded-full blur-3xl animate-pulse-slow opacity-20"></div>
      </div>

      {/* Futuristic Grid Overlay */}
      <div className="absolute inset-0 z-[1] pointer-events-none opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(156, 30, 42, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(156, 30, 42, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
          maskImage: 'radial-gradient(ellipse at center, black 30%, transparent 50%)'
        }}></div>
      </div>

      {/* Animated Tech Particles */}
      <div className="absolute inset-0 overflow-hidden z-[1] pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-primary rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${5 + Math.random() * 10}s`,
              opacity: Math.random() * 0.4 + 0.2,
            }}
          />
        ))}
      </div>

      {/* Scan Lines Effect */}
      <div className="absolute inset-0 z-[2] pointer-events-none opacity-5">
        <div className="h-full w-full bg-gradient-to-b from-transparent via-primary/20 to-transparent animate-scan" />
      </div>

      {/* Top Section - Badge */}
      <div className="absolute top-28 md:top-28 left-1/2 transform -translate-x-1/2 z-10 w-full max-w-6xl px-4">
        <div className="flex justify-center animate-fade-in-up">
          <div className="relative group">
            <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full"></div>
            <div className="relative inline-flex items-center gap-3 px-5 py-3 rounded-full bg-white/10 dark:bg-white/5 border border-white/20 backdrop-blur-md shadow-xl" style={{
              boxShadow: '0 8px 32px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.2)'
            }}>
              <div className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
              </div>
              <span className="text-sm font-semibold text-white tracking-wide" style={{
                textShadow: '0 1px 3px rgba(0,0,0,0.5)'
              }}>
                Trusted by 500+ businesses
              </span>
              <Sparkles className="w-4 h-4 text-primary animate-pulse drop-shadow-lg" />
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mt-16 mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20 md:py-32">
        <div className="max-w-5xl mx-auto text-center">
          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold mb-6 text-balance leading-tight animate-fade-in-up animation-delay-100">
            <span className="block text-white mb-2" style={{ 
              textShadow: '0 4px 20px rgba(0,0,0,0.8), 0 2px 10px rgba(0,0,0,0.6), 0 0 40px rgba(0,0,0,0.4)'
            }}>
              Transform Your
            </span>
            <span className="block relative">
              <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent" style={{
                textShadow: '0 4px 20px rgba(156,30,42,0.5), 0 2px 10px rgba(194,52,64,0.4)',
                WebkitTextStroke: '1px rgba(255,255,255,0.1)'
              }}>
                Digital Future
              </span>
              {/* Glowing effect */}
              <span className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent blur-2xl opacity-40 -z-10">
                Digital Future
              </span>
            </span>
          </h1>

          {/* Description */}
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl mb-12 text-white max-w-4xl mx-auto leading-relaxed font-light animate-fade-in-up animation-delay-200" style={{
            textShadow: '0 2px 15px rgba(0,0,0,0.9), 0 1px 5px rgba(0,0,0,0.7)'
          }}>
            We deliver{" "}
            <span className="font-bold text-primary relative" style={{
              textShadow: '0 2px 10px rgba(156,30,42,0.6), 0 0 20px rgba(156,30,42,0.3)'
            }}>
              <span className="relative z-10">cutting-edge IT solutions</span>
              <span className="absolute bottom-0 left-0 right-0 h-2 bg-primary/40 -z-0 transform -skew-x-12 blur-sm"></span>
            </span>{" "}
            that drive innovation, efficiency, and growth for forward-thinking businesses in the digital age.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fade-in-up animation-delay-300">
            <Button
              asChild
              size="lg"
              className="bg-primary rounded-full hover:bg-primary/90 text-white px-10 py-7 text-lg md:text-xl font-semibold shadow-2xl shadow-primary/50 transition-all duration-300 hover:shadow-primary/70 hover:-translate-y-2 hover:scale-105 group backdrop-blur-sm border-2 border-primary/50"
            >
              <Link href="/contact" className="flex items-center gap-2">
                Start Your Project
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Bottom Section - Stats Grid */}
      {/* <div className="absolute bottom-8 md:bottom-12 left-1/2 transform -translate-x-1/2 z-10 w-full max-w-5xl px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 animate-fade-in-up animation-delay-400">
          {[
            { value: "500+", label: "Projects", icon: "🚀" },
            { value: "98%", label: "Satisfaction", icon: "⭐" },
            { value: "50+", label: "Experts", icon: "👥" },
            { value: "24/7", label: "Support", icon: "💬" },
          ].map((stat, index) => (
            <div
              key={index}
              className="p-4 md:p-6 rounded-2xl bg-white/10 dark:bg-white/5 backdrop-blur-md border border-white/20 hover:border-primary/50 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/20 hover:-translate-y-2 group"
            >
              <div className="text-2xl mb-2">{stat.icon}</div>
              <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform drop-shadow-lg">
                {stat.value}
              </div>
              <div className="text-xs md:text-sm font-medium text-white/90">{stat.label}</div>
            </div>
          ))}
        </div>
      </div> */}




    </section>
  );
};