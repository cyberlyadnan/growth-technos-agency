import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function ProjectCTA() {
  return (
    <section className="py-20 bg-primary-600 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Ready to Start Your Project?
        </h2>
        <p className="text-lg text-primary-100 mb-8">
          Let&quot;s create something amazing together. Contact us to discuss your
          project and see how we can help bring your vision to life.
        </p>
        <Button asChild size="lg" className="bg-accent-500 hover:bg-accent-600">
          <Link href="/contact">Start Your Project</Link>
        </Button>
      </div>
    </section>
  );
}
