import { Heart, Lightbulb, Award, Users, TrendingUp, Target, Sparkles } from 'lucide-react';
import Image from 'next/image';
import { AnimatedDivider } from '@/components/ui/AnimatedDivider';

const values = [
  {
    icon: Heart,
    title: 'Client-Focused',
    description: 'We put our clients at the center of everything we do, ensuring their success is our priority.',
    color: 'from-primary to-accent',
    gradient: 'from-primary/20 to-accent/10',
    image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    icon: Lightbulb,
    title: 'Innovation',
    description: 'We embrace new technologies and creative solutions to stay ahead of the curve.',
    color: 'from-accent to-secondary',
    gradient: 'from-accent/20 to-secondary/10',
    image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    icon: Award,
    title: 'Excellence',
    description: 'We strive for excellence in every project, delivering quality that exceeds expectations.',
    color: 'from-secondary to-primary',
    gradient: 'from-secondary/20 to-primary/10',
    image: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    icon: Users,
    title: 'Collaboration',
    description: 'We believe in the power of teamwork and collaborate closely with our clients.',
    color: 'from-primary via-accent to-secondary',
    gradient: 'from-primary/20 via-accent/20 to-secondary/10',
    image: 'https://images.pexels.com/photos/3184405/pexels-photo-3184405.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    icon: TrendingUp,
    title: 'Growth',
    description: 'We are committed to continuous learning and helping our clients grow their businesses.',
    color: 'from-accent via-secondary to-primary',
    gradient: 'from-accent/20 via-secondary/20 to-primary/10',
    image: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    icon: Target,
    title: 'Results',
    description: 'We focus on delivering measurable results that drive real business impact.',
    color: 'from-secondary via-primary to-accent',
    gradient: 'from-secondary/20 via-primary/20 to-accent/10',
    image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800'
  }
];

export const ValuesSection = () => {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      {/* Animated Divider at Top */}
      <div className="absolute top-0 left-0 right-0 z-20">
        <AnimatedDivider />
      </div>

      {/* Futuristic Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-primary/5 dark:via-primary/10 to-accent/5 dark:to-accent/10"></div>
      
      {/* Tech Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(rgba(156, 30, 42, 0.15) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(156, 30, 42, 0.15) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      {/* Floating Orbs */}
      <div className="absolute top-20 right-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl opacity-50"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl opacity-50"></div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 md:mb-20 max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary/15 dark:bg-primary/25 border border-primary/30 dark:border-primary/40 mb-8 backdrop-blur-sm shadow-lg">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-semibold text-primary">Our Foundation</span>
          </div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            <span className="text-foreground">Core Values That </span>
            <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
              Drive Us
            </span>
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl text-foreground/80 dark:text-foreground/90 font-light max-w-3xl mx-auto leading-relaxed">
            These values guide everything we do and shape how we work with our clients and each other.
          </p>
        </div>
        
        {/* Values Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <div
                key={value.title}
                className="group relative overflow-hidden rounded-3xl bg-card/60 dark:bg-card/40 backdrop-blur-xl border border-border/50 dark:border-border/40 hover:border-primary/50 dark:hover:border-primary/50 transition-all duration-700 hover:shadow-2xl hover:shadow-primary/20 hover:-translate-y-2"
              >
                {/* Glow Effect */}
                <div className={`absolute -inset-1 bg-gradient-to-br ${value.gradient} rounded-3xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-700 -z-10`}></div>

                {/* Image Background */}
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={value.image}
                    alt={value.title}
                    fill
                    className="object-cover transition-transform duration-1000 group-hover:scale-110"
                  />
                  {/* Gradient Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-b from-transparent via-background/60 to-background ${value.gradient}`}></div>
                  
                  {/* Icon Overlay */}
                  <div className="absolute top-4 right-4">
                    <div 
                      className={`w-14 h-14 rounded-xl bg-gradient-to-br ${value.gradient} backdrop-blur-sm border flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                      style={{
                        borderColor: value.color.includes('primary') 
                          ? 'hsl(var(--primary) / 0.3)'
                          : value.color.includes('accent')
                          ? 'hsl(var(--accent) / 0.3)'
                          : 'hsl(var(--secondary) / 0.3)'
                      }}
                    >
                      <Icon 
                        className="w-7 h-7"
                        style={{
                          color: value.color.includes('primary') 
                            ? 'hsl(var(--primary))'
                            : value.color.includes('accent')
                            ? 'hsl(var(--accent))'
                            : 'hsl(var(--secondary))'
                        }}
                      />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 relative z-10">
                  <h3 className="text-xl md:text-2xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors duration-300">
                    {value.title}
                  </h3>
                  
                  <p className="text-sm md:text-base text-foreground/80 dark:text-foreground/90 leading-relaxed">
                    {value.description}
                  </p>

                  {/* Bottom Accent Line */}
                  <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${value.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}></div>
                </div>

                {/* Circuit Lines on Hover */}
                <div className="absolute inset-0 overflow-hidden rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
                  <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
