import { CheckCircle, Clock, IndianRupee, Star, Zap, ExternalLink } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

const CompactSubServiceCard = ({ subService, index }) => {
  return (
    <details className="group bg-card/60 backdrop-blur-sm border border-border/50 rounded-xl hover:border-primary/50 transition-all duration-300 overflow-hidden hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-1">
      {/* Card Header */}
      <summary className="p-6 pb-4 cursor-pointer list-none">
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-lg text-white font-bold text-sm shadow-lg shadow-primary/20">
              {index + 1}
            </div>
            {index === 0 && (
              <div className="flex items-center gap-1 px-2.5 py-1 bg-gradient-to-r from-yellow-400/20 to-amber-400/20 border border-yellow-400/30 rounded-full">
                <Star className="w-3.5 h-3.5 text-yellow-500 fill-yellow-500" />
                <span className="text-xs text-yellow-600 dark:text-yellow-400 font-medium">Popular</span>
              </div>
            )}
          </div>
          <div className="text-right">
            <div className="flex items-center gap-1 text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              <IndianRupee className="w-5 h-5 text-primary" />
              <span>{subService.pricing?.starting?.replace('₹', '') || 'Custom'}</span>
            </div>
          </div>
        </div>

        <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
          {subService.title}
        </h3>

        <p className="text-foreground/70 text-sm mb-4 line-clamp-2">
          {subService.description}
        </p>

        {/* Timeline */}
        <div className="flex items-center gap-2 text-sm text-foreground/60">
          <Clock className="w-4 h-4" />
          <span>{subService.pricing?.timeline || 'Flexible timeline'}</span>
        </div>

        {/* Key Benefits Preview */}
        {subService.keyBenefits && subService.keyBenefits.length > 0 && (
          <div className="mt-4 space-y-1.5">
            {subService.keyBenefits.slice(0, 2).map((benefit, idx) => (
              <div key={idx} className="flex items-start gap-2">
                <CheckCircle className="w-3.5 h-3.5 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-xs text-foreground/70">{benefit}</span>
              </div>
            ))}
            {subService.keyBenefits.length > 2 && (
              <div className="text-xs text-primary font-medium pt-1">
                +{subService.keyBenefits.length - 2} more benefits
              </div>
            )}
          </div>
        )}
      </summary>

      {/* Expanded Content */}
      <div className="px-6 pb-6 space-y-4 border-t border-border/50">
        {subService.pricing?.included && subService.pricing.included.length > 0 && (
          <div className="pt-4">
            <div className="p-4 bg-primary/5 rounded-lg border border-primary/10">
              <h4 className="font-semibold text-foreground mb-3 text-sm flex items-center gap-2">
                <Zap className="w-4 h-4 text-primary" />
                What&apos;s Included
              </h4>
              <div className="space-y-2">
                {subService.pricing.included.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2">
                    <CheckCircle className="w-3.5 h-3.5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-xs text-foreground/80">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Card Footer */}
        <div className="flex gap-2 pt-2">
          <Button asChild className="flex-1 bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white">
            <Link href="/contact">Get Started</Link>
          </Button>
          <Button asChild variant="outline" size="icon" className="border-primary/30 hover:border-primary hover:bg-primary/5">
            <Link href={`/services/${subService.slug || '#'}`}>
              <ExternalLink className="w-4 h-4" />
            </Link>
          </Button>
        </div>
      </div>

      {/* Hover Glow Effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-xl"></div>
    </details>
  );
};

export default CompactSubServiceCard;
