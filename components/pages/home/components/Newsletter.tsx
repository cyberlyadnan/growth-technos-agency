"use client";

import Link from "next/link";
import { ArrowRight, Mail, Sparkles, Zap, Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { AnimatedDivider } from "@/components/ui/AnimatedDivider";
import { motion } from "framer-motion";

export const Newsletter = () => {
  return (
    <>
      {/* Newsletter Section - Futuristic Design */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        {/* Animated Divider at Top */}
        <div className="absolute top-0 left-0 right-0 z-20">
          <AnimatedDivider />
        </div>

        {/* Futuristic Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-background via-primary/5 dark:via-primary/10 to-accent/5 dark:to-accent/10"></div>
        
        {/* Tech Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.04] dark:opacity-[0.06]">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(rgba(156, 30, 42, 0.15) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(156, 30, 42, 0.15) 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }}></div>
        </div>

        {/* Floating Orbs */}
        <div className="absolute top-20 right-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl opacity-50"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl opacity-50"></div>

        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-center max-w-4xl mx-auto"
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary/15 dark:bg-primary/25 border border-primary/30 dark:border-primary/40 mb-8 backdrop-blur-sm shadow-lg">
              <Mail className="w-4 h-4 text-primary" />
              <span className="text-sm font-semibold text-primary">Newsletter</span>
            </div>

            {/* Heading */}
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              <span className="text-foreground">Stay Updated </span>
              <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
                with Our Newsletter
              </span>
            </h2>

            {/* Description */}
            <p className="text-lg sm:text-xl md:text-2xl text-foreground/80 dark:text-foreground/90 font-light max-w-3xl mx-auto leading-relaxed mb-12">
              Get exclusive insights, industry trends, and cutting-edge solutions delivered directly to your inbox.
            </p>

            {/* Futuristic Newsletter Form */}
            <motion.form
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              className="relative max-w-2xl mx-auto"
              onSubmit={(e) => e.preventDefault()}
            >
              {/* Glassmorphism Container */}
              <div className="relative p-1 rounded-2xl bg-card/60 dark:bg-card/40 backdrop-blur-xl border border-border/50 dark:border-border/40 group-hover:border-primary/50 dark:group-hover:border-primary/50 transition-all duration-500">
                {/* Glow Effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-primary via-accent to-secondary rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500 -z-10"></div>

                {/* Circuit Lines */}
                <div className="absolute inset-0 overflow-hidden rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                  <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent"></div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 p-2">
                  {/* Email Input */}
                  <div className="relative flex-1">
                    <div className="absolute left-4 top-1/2 -translate-y-1/2 z-10">
                      <Mail className="w-5 h-5 text-foreground/40" />
                    </div>
                    <Input
                      id="email"
                      type="email"
                      placeholder="Enter your email address"
                      required
                      className="pl-12 pr-4 py-6 bg-card/80 dark:bg-card/60 backdrop-blur-sm border-border/50 focus:border-primary/50 focus:ring-2 focus:ring-primary/20 text-foreground placeholder:text-foreground/50 text-base rounded-xl transition-all duration-300"
                    />
                  </div>

                  {/* Subscribe Button */}
                  <Button
                    type="submit"
                    className="group relative overflow-hidden bg-gradient-to-r from-primary via-accent to-secondary hover:from-primary/90 hover:via-accent/90 hover:to-secondary/90 text-white px-8 py-6 text-base font-semibold rounded-xl shadow-xl hover:shadow-2xl hover:shadow-primary/40 transition-all duration-500 hover:-translate-y-1"
                  >
                    <span className="relative z-10 flex items-center gap-2">
                      <Zap className="w-5 h-5" />
                      Subscribe
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </span>
                    
                    {/* Shine Effect */}
                    <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
                    
                    {/* Glow Effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-primary via-accent to-secondary rounded-xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-500 -z-10"></div>
                  </Button>
                </div>
              </div>

              {/* Trust Indicators */}
              <div className="mt-6 flex items-center justify-center gap-6 text-xs text-foreground/60 dark:text-foreground/70">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
                  <span>No spam, ever</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
                  <span>Unsubscribe anytime</span>
                </div>
              </div>
            </motion.form>
          </motion.div>
        </div>
      </section>

      {/* CTA Section - Futuristic & Professional */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        {/* Animated Divider at Top */}
        <div className="absolute top-0 left-0 right-0 z-20">
          <AnimatedDivider />
        </div>

        {/* Futuristic Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-background via-primary/5 dark:via-primary/10 to-accent/5 dark:to-accent/10"></div>
        
        {/* Tech Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.04] dark:opacity-[0.06]">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(rgba(156, 30, 42, 0.15) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(156, 30, 42, 0.15) 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }}></div>
        </div>

        {/* Floating Orbs */}
        <div className="absolute top-20 right-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl opacity-50"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl opacity-50"></div>

        {/* Circuit Lines Background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-0 w-32 h-px bg-gradient-to-r from-primary/30 to-transparent"></div>
          <div className="absolute bottom-1/4 right-0 w-32 h-px bg-gradient-to-l from-accent/30 to-transparent"></div>
          <div className="absolute top-0 left-1/4 w-px h-32 bg-gradient-to-b from-primary/30 to-transparent"></div>
          <div className="absolute bottom-0 right-1/4 w-px h-32 bg-gradient-to-t from-accent/30 to-transparent"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-center max-w-4xl mx-auto"
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary/15 dark:bg-primary/25 border border-primary/30 dark:border-primary/40 mb-8 backdrop-blur-sm shadow-lg">
              <Rocket className="w-4 h-4 text-primary" />
              <span className="text-sm font-semibold text-primary">Get Started</span>
            </div>

            {/* Heading */}
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              <span className="text-foreground">Ready to Grow </span>
              <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
                Your Business?
              </span>
            </h2>
            
            {/* Description */}
            <p className="text-lg sm:text-xl md:text-2xl text-foreground/80 dark:text-foreground/90 font-light max-w-3xl mx-auto leading-relaxed mb-12">
              Let's work together to create something amazing. Get in touch with us today and let's discuss how we can help you achieve your digital goals.
            </p>
            
            {/* Premium CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              {/* Primary CTA Button */}
              <div className="relative inline-block group">
                <Button
                  asChild
                  size="lg"
                  className="relative overflow-hidden bg-gradient-to-r from-primary via-accent to-secondary hover:from-primary/90 hover:via-accent/90 hover:to-secondary/90 text-white px-8 py-6 text-base font-semibold rounded-xl shadow-xl hover:shadow-2xl hover:shadow-primary/40 transition-all duration-500 hover:-translate-y-1"
                >
                  <Link href="/contact" className="flex items-center gap-2 relative z-10">
                    <span>Get Started Now</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
                {/* Glow Effect - Outside Button */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary via-accent to-secondary rounded-xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-500 -z-10"></div>
                {/* Shine Effect */}
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent rounded-xl pointer-events-none"></div>
              </div>
              
              {/* Secondary CTA Button */}
              <Button
                asChild
                variant="outline"
                size="lg"
                className="group px-8 py-6 text-base font-semibold rounded-xl border-2 border-border/50 hover:border-primary/50 bg-card/50 dark:bg-card/30 backdrop-blur-sm transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-1"
              >
                <Link href="/portfolio" className="flex items-center gap-2">
                  <span>View Our Portfolio</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};
