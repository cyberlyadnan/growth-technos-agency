import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, Check, Sparkles } from "lucide-react";
import { AnimatedDivider } from "@/components/ui/AnimatedDivider";

export function PricingSection({ service }) {
  return (
    <section className="relative py-20 bg-gradient-to-br from-primary/10 via-background to-accent/10 overflow-hidden">
      {/* Futuristic Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px] dark:bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)]"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/20 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center p-3 bg-primary/10 rounded-full mb-6">
              <Sparkles className="w-6 h-6 text-primary" />
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-foreground via-primary to-accent bg-clip-text text-transparent">
              Investment & Timeline
            </h2>
            <p className="text-lg text-foreground/70">
              Transparent pricing with no hidden fees
            </p>
          </div>

          <div className="relative p-8 md:p-12 bg-card/80 backdrop-blur-xl border border-border/50 rounded-3xl shadow-2xl hover:shadow-primary/20 transition-all duration-500">
            {/* Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10 rounded-3xl"></div>
            
            {/* Corner Indicators */}
            <div className="absolute top-6 left-6 w-8 h-8 border-t-2 border-l-2 border-primary/50"></div>
            <div className="absolute top-6 right-6 w-8 h-8 border-t-2 border-r-2 border-primary/50"></div>
            <div className="absolute bottom-6 left-6 w-8 h-8 border-b-2 border-l-2 border-primary/50"></div>
            <div className="absolute bottom-6 right-6 w-8 h-8 border-b-2 border-r-2 border-primary/50"></div>

            <div className="relative">
              <div className="grid md:grid-cols-3 gap-8 mb-10">
                <div className="text-center md:text-left space-y-2">
                  <div className="text-xl md:text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    {service.pricing?.starting || 'Custom'}
                  </div>
                  <div className="text-foreground/60 font-medium">Starting Price</div>
                </div>
                <div className="text-center space-y-2">
                  <div className="text-xl md:text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    {service.pricing?.timeline || 'Flexible'}
                  </div>
                  <div className="text-foreground/60 font-medium">Timeline</div>
                </div>
                <div className="text-center md:text-right space-y-2">
                  <div className="text-xl md:text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    100%
                  </div>
                  <div className="text-foreground/60 font-medium">Satisfaction</div>
                </div>
              </div>

              {service.pricing?.included && service.pricing.included.length > 0 && (
                <div className="pt-8 border-t border-border/50 space-y-6">
                  <h4 className="font-bold text-xl text-center text-foreground">
                    What&apos;s Included:
                  </h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    {service.pricing.included.map((item, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-3 p-3 bg-primary/5 rounded-lg hover:bg-primary/10 transition-colors"
                      >
                        <div className="flex-shrink-0 p-1.5 bg-primary/20 rounded-full">
                          <Check className="w-4 h-4 text-primary" />
                        </div>
                        <span className="text-foreground/90">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <div className="mt-10 text-center">
                <div className="group relative inline-block">
                  <Button
                    asChild
                    size="lg"
                    className="relative overflow-hidden bg-gradient-to-r from-primary via-primary to-accent hover:from-primary/90 hover:via-primary/90 hover:to-accent/90 text-white border-0 shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-all"
                  >
                    <Link href="/contact" className="flex items-center justify-center">
                      Get Free Quote
                      <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 pointer-events-none rounded-md"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Animated Divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <AnimatedDivider />
      </div>
    </section>
  );
}
