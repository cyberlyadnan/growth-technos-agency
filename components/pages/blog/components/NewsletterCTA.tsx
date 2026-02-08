"use client";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { SubscribeForm } from "@/components/SubscribeForm";

export default function NewsletterCTA() {
  return (
    <section className="relative py-20 bg-gradient-to-br from-background via-background to-background/95 overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px] dark:bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)]"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto"
        >
          <div className="flex items-center justify-center mb-4">
            <Sparkles className="w-8 h-8 text-primary" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Never Miss an Update
          </h2>
          <p className="text-lg text-foreground/70 mb-8">
            Subscribe to our newsletter to get the latest articles, insights, and tips delivered to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto justify-center">
            <SubscribeForm
              source="blog"
              variant="inline"
              placeholder="Enter your email"
              buttonText="Subscribe"
              inputClassName="flex-1 bg-card border-border text-foreground placeholder:text-foreground/50"
              buttonClassName="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white shrink-0"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
