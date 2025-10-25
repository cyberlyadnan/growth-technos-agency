
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <section className="relative min-h-screen py-28 md:py-18 flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-primary-50 to-secondary-50 dark:from-background dark:via-primary-950 dark:to-secondary-950">
      {/* Animated background grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] dark:opacity-[0.05]"></div>

      {/* Gradient orbs for depth */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-400/20 dark:bg-primary-500/10 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary-400/20 dark:bg-secondary-500/10 rounded-full blur-3xl animate-float-delayed"></div>

      {/* Tech lines decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary-500/20 dark:via-primary-400/20 to-transparent"></div>
        <div className="absolute bottom-1/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-secondary-500/20 dark:via-secondary-400/20 to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-5xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-100 dark:bg-primary-900/30 border border-primary-200 dark:border-primary-800 mb-8 animate-fade-in-up">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-500"></span>
            </span>
            <span className="text-sm font-medium text-primary-900 dark:text-primary-100">
              Trusted by 500+ businesses worldwide
            </span>
          </div>

          {/* Main heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-balance animate-fade-in-up animation-delay-100">
            <span className="text-foreground">
              Transform Your Business with
            </span>
            <br />
            <span className="bg-gradient-to-r from-primary-600 via-secondary-600 to-accent-600 dark:from-primary-400 dark:via-secondary-400 dark:to-accent-400 bg-clip-text text-transparent">
              Cutting-Edge IT Solutions
            </span>
          </h1>

          {/* Description */}
          <p className="text-lg md:text-xl lg:text-2xl mb-10 text-slate-700 dark:text-muted-foreground max-w-3xl mx-auto leading-relaxed animate-fade-in-up animation-delay-200">
            From web development to cloud infrastructure, we deliver innovative technology solutions that drive growth and efficiency for modern businesses.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-fade-in-up animation-delay-300">
            <Button
              asChild
              size="lg"
              className="bg-primary-600 hover:bg-primary-700 dark:bg-primary-500 dark:hover:bg-primary-600 text-white px-8 py-6 text-lg shadow-lg shadow-primary-500/25 dark:shadow-primary-500/20 transition-all duration-300 hover:shadow-xl hover:shadow-primary-500/30 hover:-translate-y-0.5"
            >
              <Link href="/contact">
                Get Started Today
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-2 border-border text-foreground hover:bg-muted dark:hover:bg-slate-800 px-8 py-6 text-lg transition-all duration-300 hover:-translate-y-0.5"
            >
              <Link href="/projects">View Our Work</Link>
            </Button>
          </div>

          {/* Stats or features */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto animate-fade-in-up animation-delay-400">
            {[
              { value: "500+", label: "Projects Delivered" },
              { value: "98%", label: "Client Satisfaction" },
              { value: "50+", label: "Team Experts" },
              { value: "24/7", label: "Support Available" },
            ].map((stat, index) => (
              <div
                key={index}
                className="p-4 rounded-lg bg-card/50 backdrop-blur-sm border border-slate-300 dark:border-border hover:border-primary-400 dark:hover:border-primary-500 transition-all duration-300 hover:shadow-lg"
              >
                <div className="text-2xl md:text-3xl font-bold text-primary-600 dark:text-primary-400 mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-slate-600 dark:text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-muted-foreground rounded-full flex justify-center">
          <div className="w-1 h-3 bg-muted-foreground rounded-full mt-2 animate-scroll-indicator"></div>
        </div>
      </div>

    </section>
  );
};
