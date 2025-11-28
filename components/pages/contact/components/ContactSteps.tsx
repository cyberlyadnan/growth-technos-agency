import { Sparkles, CheckCircle2, ArrowRight } from "lucide-react";
import { AnimatedDivider } from "@/components/ui/AnimatedDivider";

export default function ContactSteps() {
  const steps = [
    {
      number: "01",
      title: "Tell us about your project",
      desc: "Share your ideas, goals, and requirements with us"
    },
    {
      number: "02",
      title: "We'll schedule a consultation",
      desc: "Free 30-minute consultation to discuss your needs"
    },
    {
      number: "03",
      title: "Get a custom proposal",
      desc: "Detailed proposal with timeline and pricing"
    }
  ];

  return (
    <div className="relative">
      {/* Header */}
      <div className="mb-12">
        <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary/15 dark:bg-primary/25 border border-primary/30 dark:border-primary/40 mb-6 backdrop-blur-sm shadow-lg">
          <Sparkles className="w-4 h-4 text-primary" />
          <span className="text-sm font-semibold text-primary">How It Works</span>
        </div>
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight">
          <span className="text-foreground">Let's Start a </span>
          <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
            Conversation
          </span>
        </h2>
        <p className="text-lg sm:text-xl text-foreground/80 dark:text-foreground/90 font-light leading-relaxed">
          Fill out the form below and we'll get back to you within 24 hours. Our team is ready to help you achieve your digital goals.
        </p>
      </div>

      {/* Steps */}
      <div className="space-y-8">
        {steps.map((step, i) => (
          <div
            key={i}
            className="group relative overflow-hidden rounded-2xl bg-card/60 dark:bg-card/40 backdrop-blur-xl border border-border/50 dark:border-border/40 p-6 md:p-8 hover:border-primary/50 dark:hover:border-primary/50 transition-all duration-500 hover:shadow-xl hover:shadow-primary/20 hover:-translate-y-1"
          >
            {/* Glow Effect */}
            <div className="absolute -inset-1 bg-gradient-to-br from-primary/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500 -z-10"></div>

            <div className="flex items-start gap-6">
              {/* Number Badge */}
              <div className="relative flex-shrink-0">
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary/20 to-primary/10 border border-primary/30 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <span className="text-2xl font-bold text-primary">
                    {step.number}
                  </span>
                </div>
                {/* Connector Line (except last) */}
                {i < steps.length - 1 && (
                  <div className="absolute top-16 left-1/2 -translate-x-1/2 w-px h-8 bg-gradient-to-b from-primary/30 to-transparent"></div>
                )}
              </div>

              {/* Content */}
              <div className="flex-1 pt-2">
                <h3 className="text-xl md:text-2xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {step.title}
                </h3>
                <p className="text-base text-foreground/80 dark:text-foreground/90 leading-relaxed">
                  {step.desc}
                </p>
              </div>

              {/* Arrow Icon */}
              <div className="flex-shrink-0 pt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <ArrowRight className="w-6 h-6 text-primary" />
              </div>
            </div>

            {/* Circuit Lines on Hover */}
            <div className="absolute inset-0 overflow-hidden rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
