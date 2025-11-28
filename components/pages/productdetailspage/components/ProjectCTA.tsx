import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

export const ProjectCTA = () => (
  <section className="relative py-20 bg-gradient-to-br from-primary/20 via-background to-accent/20 overflow-hidden">
    {/* Futuristic Background */}
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808010_1px,transparent_1px),linear-gradient(to_bottom,#80808010_1px,transparent_1px)] bg-[size:32px_32px] dark:bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)]"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/30 rounded-full blur-3xl"></div>
    </div>

    <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="text-center max-w-4xl mx-auto">
        <div className="inline-flex items-center justify-center p-3 bg-primary/10 rounded-full mb-6">
          <Sparkles className="w-6 h-6 text-primary" />
        </div>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-foreground via-primary to-accent bg-clip-text text-transparent">
          Ready to Start Your Own Project?
        </h2>
        <p className="text-lg md:text-xl text-foreground/70 mb-10 leading-relaxed">
          Let&apos;s create something amazing together. Contact us to discuss how we can bring your vision to life with the same level of excellence and dedication.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <div className="group relative">
            <Button
              asChild
              size="lg"
              className="relative overflow-hidden bg-gradient-to-r from-primary via-primary to-accent hover:from-primary/90 hover:via-primary/90 hover:to-accent/90 text-white border-0 shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-all text-lg px-8 py-6"
            >
              <Link href="/contact" className="flex items-center">
                Start Your Project
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 pointer-events-none rounded-md"></div>
          </div>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="border-2 border-primary/30 hover:border-primary hover:bg-primary/5 text-lg px-8 py-6"
          >
            <Link href="/projects">View More Projects</Link>
          </Button>
        </div>
      </div>
    </div>
  </section>
);
