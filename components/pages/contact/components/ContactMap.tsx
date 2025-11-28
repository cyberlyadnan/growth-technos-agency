"use client";
import { MapPin, Sparkles } from "lucide-react";
import { AnimatedDivider } from "@/components/ui/AnimatedDivider";

export default function ContactMap() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      {/* Animated Divider at Top */}
      <div className="absolute top-0 left-0 right-0 z-20">
        <AnimatedDivider />
      </div>

      {/* Futuristic Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-secondary/5 dark:via-secondary/10 to-primary/5 dark:to-primary/10"></div>
      
      {/* Tech Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(rgba(156, 30, 42, 0.15) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(156, 30, 42, 0.15) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      {/* Floating Orbs */}
      <div className="absolute top-20 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl opacity-50"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl opacity-50"></div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary/15 dark:bg-primary/25 border border-primary/30 dark:border-primary/40 mb-8 backdrop-blur-sm shadow-lg">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-semibold text-primary">Visit Us</span>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight">
            <span className="text-foreground">Visit Our </span>
            <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
              Office
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-foreground/80 dark:text-foreground/90 font-light leading-relaxed">
            We'd love to meet you in person. Stop by our office for a coffee and a chat.
          </p>
        </div>

        {/* Map Container - Standard Size */}
        <div className="max-w-4xl mx-auto">
          <div className="relative rounded-3xl overflow-hidden border border-border/50 dark:border-border/40 shadow-2xl group hover:border-primary/50 dark:hover:border-primary/50 transition-all duration-500" style={{ height: '450px' }}>
            {/* Glow Effect */}
            <div className="absolute -inset-1 bg-gradient-to-br from-primary/10 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500 -z-10"></div>

            {/* Subtle Overlay */}
            <div className="absolute inset-0 bg-background/10 dark:bg-background/20 z-10 pointer-events-none"></div>

            {/* Address Card - Positioned at bottom right */}
            <div className="absolute bottom-6 right-6 z-20 bg-card/95 dark:bg-card/90 backdrop-blur-xl border border-border/50 dark:border-border/40 p-5 rounded-2xl shadow-2xl max-w-[280px] group/card hover:scale-105 transition-transform duration-300">
              <div className="flex items-start gap-4">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-primary/10 flex-shrink-0">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold mb-1.5 text-foreground">Our Location</h3>
                  <p className="text-sm text-foreground/90 dark:text-foreground/95 font-medium mb-1">Noida Sector 62</p>
                  <p className="text-xs text-foreground/70 dark:text-foreground/80 mb-2">Uttar Pradesh, India</p>
                  <p className="text-xs text-foreground/60 dark:text-foreground/70">Mon–Fri, 8am–6pm</p>
                </div>
              </div>
            </div>

            {/* Map Iframe */}
            <iframe
              className="w-full h-full absolute top-0 left-0"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.1234567890123!2d77.3725!3d28.6274!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce5a43173357b%3A0x37ffce130c8b8b9d!2sNoida%20Sector%2062%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
