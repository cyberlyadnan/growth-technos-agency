import { Sparkles, MessageCircle, Mail, Phone, MapPin } from "lucide-react";
import { AnimatedDivider } from "@/components/ui/AnimatedDivider";

export default function ContactHero() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden pt-16">
      {/* Animated Divider at Top */}
      <div className="absolute top-0 left-0 right-0 z-20">
        <AnimatedDivider />
      </div>

      {/* Futuristic Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-primary/5 dark:via-primary/10 to-accent/5 dark:via-accent/10"></div>
      
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
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-secondary/5 rounded-full blur-3xl opacity-30"></div>

      {/* Circuit Lines */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-0 w-32 h-px bg-gradient-to-r from-primary/30 to-transparent"></div>
        <div className="absolute bottom-1/4 right-0 w-32 h-px bg-gradient-to-l from-accent/30 to-transparent"></div>
        <div className="absolute top-0 left-1/4 w-px h-32 bg-gradient-to-b from-primary/30 to-transparent"></div>
        <div className="absolute bottom-0 right-1/4 w-px h-32 bg-gradient-to-t from-accent/30 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-5xl mx-auto mb-16">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary/15 dark:bg-primary/25 border border-primary/30 dark:border-primary/40 mb-8 backdrop-blur-sm shadow-lg">
            <MessageCircle className="w-4 h-4 text-primary" />
            <span className="text-sm font-semibold text-primary">Get In Touch</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight">
            <span className="text-foreground">Let's Start </span>
            <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
              Your Project
            </span>
          </h1>

          {/* Description */}
          <p className="text-xl sm:text-2xl md:text-3xl text-foreground/80 dark:text-foreground/90 font-light max-w-4xl mx-auto leading-relaxed mb-12">
            Ready to transform your digital presence? Let's discuss how we can help you achieve your goals and grow your business.
          </p>
        </div>

        {/* Quick Contact Cards */}
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {/* Email Card */}
          <div className="group relative overflow-hidden rounded-2xl bg-card/60 dark:bg-card/40 backdrop-blur-xl border border-border/50 dark:border-border/40 hover:border-primary/50 dark:hover:border-primary/50 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/20 hover:-translate-y-2 p-6">
            <div className="absolute -inset-1 bg-gradient-to-br from-primary/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500 -z-10"></div>
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-primary/10 mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
              <Mail className="w-7 h-7 text-primary" />
            </div>
            <h3 className="text-lg font-bold mb-2 text-foreground">Email Us</h3>
            <a href="mailto:info@growthtechnos.com" className="text-foreground/80 dark:text-foreground/90 hover:text-primary transition-colors font-medium">
              info@growthtechnos.com
            </a>
          </div>

          {/* Phone Card */}
          <div className="group relative overflow-hidden rounded-2xl bg-card/60 dark:bg-card/40 backdrop-blur-xl border border-border/50 dark:border-border/40 hover:border-accent/50 dark:hover:border-accent/50 transition-all duration-500 hover:shadow-2xl hover:shadow-accent/20 hover:-translate-y-2 p-6">
            <div className="absolute -inset-1 bg-gradient-to-br from-accent/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500 -z-10"></div>
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-accent/20 to-accent/10 mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
              <Phone className="w-7 h-7 text-accent" />
            </div>
            <h3 className="text-lg font-bold mb-2 text-foreground">Call Us</h3>
            <a href="tel:+919897921038" className="text-foreground/80 dark:text-foreground/90 hover:text-accent transition-colors font-medium block">
              +91 98979 21038
            </a>
          </div>

          {/* Location Card */}
          <div className="group relative overflow-hidden rounded-2xl bg-card/60 dark:bg-card/40 backdrop-blur-xl border border-border/50 dark:border-border/40 hover:border-secondary/50 dark:hover:border-secondary/50 transition-all duration-500 hover:shadow-2xl hover:shadow-secondary/20 hover:-translate-y-2 p-6">
            <div className="absolute -inset-1 bg-gradient-to-br from-secondary/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500 -z-10"></div>
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-secondary/20 to-secondary/10 mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
              <MapPin className="w-7 h-7 text-secondary" />
            </div>
            <h3 className="text-lg font-bold mb-2 text-foreground">Visit Us</h3>
            <p className="text-foreground/80 dark:text-foreground/90 font-medium">
              Noida Sector 62, UP
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
