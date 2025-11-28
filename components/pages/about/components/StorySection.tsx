import { Calendar, Users, Trophy, Rocket, Sparkles } from 'lucide-react';
import Image from 'next/image';
import { AnimatedDivider } from '@/components/ui/AnimatedDivider';

const milestones = [
  { 
    icon: Calendar, 
    year: '2018', 
    title: 'Founded', 
    description: 'Started with a vision to transform businesses through digital innovation', 
    color: 'from-primary to-accent',
    gradient: 'from-primary/20 to-accent/10'
  },
  { 
    icon: Users, 
    year: '100+', 
    title: 'Clients', 
    description: 'Built trusted partnerships across various industries', 
    color: 'from-accent to-secondary',
    gradient: 'from-accent/20 to-secondary/10'
  },
  { 
    icon: Trophy, 
    year: '200+', 
    title: 'Projects', 
    description: 'Delivered successful solutions that drive real results', 
    color: 'from-secondary to-primary',
    gradient: 'from-secondary/20 to-primary/10'
  },
  { 
    icon: Rocket, 
    year: '50+', 
    title: 'Team', 
    description: 'Grown into a talented team of digital professionals', 
    color: 'from-primary via-accent to-secondary',
    gradient: 'from-primary/20 via-accent/20 to-secondary/10'
  }
];

const storyTimeline = [
  {
    period: '2018',
    title: 'The Beginning',
    description: 'Growth Technos was founded with a simple yet powerful vision: to help businesses grow through innovative digital solutions. What started as a small team of passionate developers and marketers has grown into a full-service digital agency.',
    icon: Calendar,
    color: 'primary',
    image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    period: '2019-2021',
    title: 'Growth & Learning',
    description: 'Over the years, we\'ve had the privilege of working with hundreds of clients across various industries, from ambitious startups to established enterprises. Each project has been a learning experience, helping us refine our approach.',
    icon: Users,
    color: 'accent',
    image: 'https://images.pexels.com/photos/3184405/pexels-photo-3184405.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    period: '2022-Present',
    title: 'Today & Beyond',
    description: 'Today, we\'re proud to be a trusted partner for businesses looking to establish or enhance their digital presence. Our team continues to grow, but our commitment to excellence, innovation, and client success remains the cornerstone.',
    icon: Trophy,
    color: 'secondary',
    image: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=800'
  }
];

export const StorySection = () => {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      {/* Animated Divider at Top */}
      <div className="absolute top-0 left-0 right-0 z-20">
        <AnimatedDivider />
      </div>

      {/* Futuristic Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-secondary/5 dark:via-secondary/10 to-primary/5 dark:to-primary/10"></div>
      
      {/* Tech Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(rgba(156, 30, 42, 0.15) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(156, 30, 42, 0.15) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      {/* Floating Orbs */}
      <div className="absolute top-20 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl opacity-50"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl opacity-50"></div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 md:mb-20 max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary/15 dark:bg-primary/25 border border-primary/30 dark:border-primary/40 mb-8 backdrop-blur-sm shadow-lg">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-semibold text-primary">Our Journey</span>
          </div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            <span className="text-foreground">The Story Behind </span>
            <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
              Growth Technos
            </span>
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl text-foreground/80 dark:text-foreground/90 font-light max-w-3xl mx-auto leading-relaxed">
            From humble beginnings to digital excellence - discover how we became the trusted partner for businesses worldwide.
          </p>
        </div>

        {/* Timeline Section */}
        <div className="max-w-6xl mx-auto mb-20">
          <div className="space-y-16 md:space-y-24">
            {storyTimeline.map((item, index) => {
              const Icon = item.icon;
              const isEven = index % 2 === 0;
              
              return (
                <div key={index} className={`relative flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 items-center`}>
                  {/* Image Section */}
                  <div className={`flex-1 ${isEven ? 'md:pr-8' : 'md:pl-8'}`}>
                    <div className="group relative overflow-hidden rounded-2xl aspect-[4/3]">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover transition-transform duration-1000 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/40 to-transparent"></div>
                      <div 
                        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                        style={{
                          background: item.color === 'primary' 
                            ? 'linear-gradient(to bottom right, hsl(var(--primary) / 0.1), transparent)'
                            : item.color === 'accent'
                            ? 'linear-gradient(to bottom right, hsl(var(--accent) / 0.1), transparent)'
                            : 'linear-gradient(to bottom right, hsl(var(--secondary) / 0.1), transparent)'
                        }}
                      ></div>
                      
                      {/* Icon Overlay */}
                      <div className="absolute top-4 right-4">
                        <div 
                          className="w-14 h-14 rounded-xl backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg border"
                          style={{
                            background: item.color === 'primary' 
                              ? 'linear-gradient(to bottom right, hsl(var(--primary) / 0.3), hsl(var(--primary) / 0.2))'
                              : item.color === 'accent'
                              ? 'linear-gradient(to bottom right, hsl(var(--accent) / 0.3), hsl(var(--accent) / 0.2))'
                              : 'linear-gradient(to bottom right, hsl(var(--secondary) / 0.3), hsl(var(--secondary) / 0.2))',
                            borderColor: item.color === 'primary' 
                              ? 'hsl(var(--primary) / 0.4)'
                              : item.color === 'accent'
                              ? 'hsl(var(--accent) / 0.4)'
                              : 'hsl(var(--secondary) / 0.4)'
                          }}
                        >
                          <Icon 
                            className="w-7 h-7"
                            style={{
                              color: item.color === 'primary' 
                                ? 'hsl(var(--primary))'
                                : item.color === 'accent'
                                ? 'hsl(var(--accent))'
                                : 'hsl(var(--secondary))'
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className={`flex-1 ${isEven ? 'md:text-left' : 'md:text-right'}`}>
                    <div className="group relative overflow-hidden rounded-2xl bg-card/60 dark:bg-card/40 backdrop-blur-xl border border-border/50 dark:border-border/40 p-6 md:p-8 hover:border-primary/50 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/20 hover:-translate-y-1">
                      {/* Glow Effect */}
                      <div 
                        className="absolute -inset-1 rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500 -z-10"
                        style={{
                          background: item.color === 'primary' 
                            ? 'linear-gradient(to bottom right, hsl(var(--primary) / 0.1), transparent)'
                            : item.color === 'accent'
                            ? 'linear-gradient(to bottom right, hsl(var(--accent) / 0.1), transparent)'
                            : 'linear-gradient(to bottom right, hsl(var(--secondary) / 0.1), transparent)'
                        }}
                      ></div>

                      <div className="relative z-10">
                        <div 
                          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-4 text-xs font-semibold border backdrop-blur-sm"
                          style={{
                            backgroundColor: item.color === 'primary' 
                              ? 'hsl(var(--primary) / 0.15)'
                              : item.color === 'accent'
                              ? 'hsl(var(--accent) / 0.15)'
                              : 'hsl(var(--secondary) / 0.15)',
                            borderColor: item.color === 'primary' 
                              ? 'hsl(var(--primary) / 0.3)'
                              : item.color === 'accent'
                              ? 'hsl(var(--accent) / 0.3)'
                              : 'hsl(var(--secondary) / 0.3)',
                            color: item.color === 'primary' 
                              ? 'hsl(var(--primary))'
                              : item.color === 'accent'
                              ? 'hsl(var(--accent))'
                              : 'hsl(var(--secondary))'
                          }}
                        >
                          {item.period}
                        </div>
                        <h3 className="text-2xl md:text-3xl font-bold mb-3 text-foreground">
                          {item.title}
                        </h3>
                        <p className="text-base md:text-lg text-foreground/80 dark:text-foreground/90 leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Milestones Grid */}
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {milestones.map((milestone, index) => {
              const Icon = milestone.icon;
              return (
                <div
                  key={index}
                  className="group relative overflow-hidden rounded-2xl bg-card/60 dark:bg-card/40 backdrop-blur-xl border border-border/50 dark:border-border/40 p-6 hover:border-primary/50 dark:hover:border-primary/50 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/20 hover:-translate-y-2 text-center"
                >
                  {/* Glow Effect */}
                  <div className={`absolute -inset-1 bg-gradient-to-br ${milestone.gradient} rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500 -z-10`}></div>

                  <div className="relative z-10">
                    <div 
                      className="inline-flex items-center justify-center w-14 h-14 rounded-xl mb-4 mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg"
                      style={{
                        background: `linear-gradient(to bottom right, ${milestone.gradient.includes('primary') ? 'hsl(var(--primary) / 0.2)' : milestone.gradient.includes('accent') ? 'hsl(var(--accent) / 0.2)' : 'hsl(var(--secondary) / 0.2)'}, ${milestone.gradient.includes('primary') ? 'hsl(var(--primary) / 0.1)' : milestone.gradient.includes('accent') ? 'hsl(var(--accent) / 0.1)' : 'hsl(var(--secondary) / 0.1)'})`
                      }}
                    >
                      <Icon 
                        className="w-7 h-7"
                        style={{
                          color: milestone.color.includes('primary') 
                            ? 'hsl(var(--primary))'
                            : milestone.color.includes('accent')
                            ? 'hsl(var(--accent))'
                            : 'hsl(var(--secondary))'
                        }}
                      />
                    </div>
                    <div className={`text-3xl md:text-4xl font-bold mb-2 bg-gradient-to-r ${milestone.color} bg-clip-text text-transparent`}>
                      {milestone.year}
                    </div>
                    <div className="text-sm font-semibold text-foreground mb-1">
                      {milestone.title}
                    </div>
                    <div className="text-xs text-foreground/60">
                      {milestone.description}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
