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
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-[100vh] z-0">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-[80vh] object-cover scale-105"
        >
          <source src="/assets/videos/bg-video.mp4" type="video/mp4" />
          {/* Fallback for browsers that don't support video */}
          <div className="absolute inset-0 bg-gradient-to-br from-background via-primary/10 to-secondary/10"></div>
        </video>
        
        {/* Base dark overlay - stronger for better text contrast */}
        <div className="absolute inset-0 bg-black/60"></div>
        
        {/* Radial gradient overlay - darker in center where text is */}
        <div className="absolute inset-0 bg-radial-gradient from-black/80 via-black/70 to-black/50" 
             style={{
               background: 'radial-gradient(ellipse at center, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.75) 40%, rgba(0,0,0,0.55) 100%)'
             }}></div>
        
        {/* Vignette effect for focus on center content */}
        <div className="absolute inset-0" 
             style={{
               background: 'radial-gradient(ellipse 80% 50% at 50% 50%, transparent 0%, rgba(0,0,0,0.1) 100%)'
             }}></div>
        
        {/* Top and bottom gradient overlays for better text area contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-transparent to-black/80"></div>
        
        {/* Subtle colored overlay with theme colors - reduced opacity */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/15 via-transparent to-secondary/15 mix-blend-soft-light"></div>
        
        {/* Animated gradient orbs - reduced opacity to not interfere with text */}
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-float opacity-40"></div>
        <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-float-delayed opacity-40"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/15 rounded-full blur-3xl animate-pulse-slow opacity-20"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20 md:py-32">
        <div className="max-w-5xl mx-auto text-center">
         

          {/* Main Heading */}
          <h1 className="text-4xl mt-10 sm:text-5xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold mb-6 text-balance leading-tight animate-fade-in-up animation-delay-100">
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
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-fade-in-up animation-delay-300">
            <Button
              asChild
              size="lg"
              className="bg-primary hover:bg-primary/90 text-white px-10 py-7 text-lg md:text-xl font-semibold shadow-2xl shadow-primary/50 transition-all duration-300 hover:shadow-primary/70 hover:-translate-y-2 hover:scale-105 group backdrop-blur-sm border-2 border-primary/50"
            >
              <Link href="/contact" className="flex items-center gap-2">
                Start Your Project
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          
          </div>

        </div>
      </div>

    </section>
  );
};