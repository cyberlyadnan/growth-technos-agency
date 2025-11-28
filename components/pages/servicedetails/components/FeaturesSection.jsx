import Image from 'next/image';
import { AnimatedDivider } from '@/components/ui/AnimatedDivider';

const FeaturesSection = ({ service }) => {
  return (
    <section className="relative py-20 bg-gradient-to-b from-background/95 to-background overflow-hidden">
      {/* Futuristic Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808010_1px,transparent_1px),linear-gradient(to_bottom,#80808010_1px,transparent_1px)] bg-[size:32px_32px] dark:bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)]"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-foreground via-primary to-accent bg-clip-text text-transparent">
            What&apos;s Included
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Comprehensive features designed to deliver exceptional results
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {service.features?.map((feature, index) => (
            <div
              key={index}
              className="group relative p-8 bg-card/60 backdrop-blur-sm border border-border/50 rounded-2xl hover:border-primary/50 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-2"
            >
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
              
              {/* Corner Brackets */}
              <div className="absolute top-4 left-4 w-6 h-6 border-t-2 border-l-2 border-primary/30 group-hover:border-primary transition-colors"></div>
              <div className="absolute top-4 right-4 w-6 h-6 border-t-2 border-r-2 border-primary/30 group-hover:border-primary transition-colors"></div>
              <div className="absolute bottom-4 left-4 w-6 h-6 border-b-2 border-l-2 border-primary/30 group-hover:border-primary transition-colors"></div>
              <div className="absolute bottom-4 right-4 w-6 h-6 border-b-2 border-r-2 border-primary/30 group-hover:border-primary transition-colors"></div>

              <div className="relative text-center space-y-4">
                {feature?.iconImage && (
                  <div className="flex justify-center mb-4">
                    <div className="relative w-16 h-16 p-3 bg-primary/10 rounded-xl group-hover:bg-primary/20 transition-colors">
                      <Image
                        src={feature.iconImage}
                        alt={feature.title}
                        width={40}
                        height={40}
                        className="object-contain"
                      />
                      <div className="absolute inset-0 bg-primary/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity blur-xl"></div>
                    </div>
                  </div>
                )}
                <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                  {feature.title}
                </h3>
                <p className="text-foreground/70 leading-relaxed">
                  {feature.description}
                </p>
              </div>

              {/* Circuit Line on Hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M 0,0 L 20,0 M 0,0 L 0,20 M 100%,0 L calc(100% - 20),0 M 100%,0 L 100%,20 M 0,100% L 0,calc(100% - 20) M 0,100% L 20,100% M 100%,100% L calc(100% - 20),100% M 100%,100% L 100%,calc(100% - 20)"
                    stroke="var(--primary)"
                    strokeWidth="1"
                    fill="none"
                    className="opacity-30"
                  />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Animated Divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <AnimatedDivider />
      </div>
    </section>
  );
};

export default FeaturesSection;
