"use client";

import { SubscribeForm } from "@/components/SubscribeForm";

export function FooterSubscribeForm() {
  return (
    <SubscribeForm
      source="footer"
      variant="stacked"
      placeholder="Enter your email"
      buttonText="Subscribe"
      className="space-y-4"
      inputClassName="w-full bg-card/50 dark:bg-card/30 backdrop-blur-sm border-border/50 focus:border-primary/50 focus:ring-2 focus:ring-primary/20 text-foreground placeholder:text-foreground/50 transition-all duration-300"
      buttonClassName="w-full group relative overflow-hidden bg-gradient-to-r from-primary via-accent to-secondary hover:from-primary/90 hover:via-accent/90 hover:to-secondary/90 text-white font-semibold shadow-lg hover:shadow-xl hover:shadow-primary/40 transition-all duration-500 hover:-translate-y-0.5"
    />
  );
}
