import { HelpCircle, Sparkles } from 'lucide-react';
import { AnimatedDivider } from '@/components/ui/AnimatedDivider';

export function FAQSection({ service }) {
  if (!service.faqs || service.faqs.length === 0) return null;

  return (
    <section className="relative py-20 bg-gradient-to-b from-background/95 to-background overflow-hidden">
      {/* Futuristic Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px] dark:bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)]"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center p-3 bg-primary/10 rounded-full mb-6">
            <HelpCircle className="w-6 h-6 text-primary" />
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-foreground via-primary to-accent bg-clip-text text-transparent">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Get answers to common questions about our {service.title.toLowerCase()} service
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-4">
          {service.faqs.map((faq, index) => (
            <details
              key={index}
              className="group bg-card/60 backdrop-blur-sm border border-border/50 rounded-xl hover:border-primary/50 transition-all duration-300 overflow-hidden hover:shadow-lg hover:shadow-primary/10"
            >
              <summary className="p-6 cursor-pointer list-none">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="font-bold text-lg text-foreground group-hover:text-primary transition-colors flex-1">
                    {faq.question}
                  </h3>
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center group-open:bg-primary/20 transition-colors">
                    <svg
                      className="w-4 h-4 text-primary transition-transform group-open:rotate-180"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
              </summary>
              <div className="px-6 pb-6 pt-0">
                <div className="pl-4 border-l-2 border-primary/30">
                  <p className="text-foreground/80 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </details>
          ))}
        </div>
      </div>

      {/* Animated Divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <AnimatedDivider />
      </div>
    </section>
  );
}
