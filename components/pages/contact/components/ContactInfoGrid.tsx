import { Mail, Phone, MapPin, Clock, Sparkles } from "lucide-react";
import Link from "next/link";
import { AnimatedDivider } from "@/components/ui/AnimatedDivider";

const contactInfo = [
  { 
    icon: Mail, 
    title: "Email", 
    content: "info@growthtechnos.com", 
    description: "Send us an email anytime!", 
    link: "mailto:info@growthtechnos.com",
    color: "primary"
  },
  { 
    icon: Phone, 
    title: "Phone", 
    content: "+91 98979 21038", 
    content2: "+91 9756896250",
    description: "Mon-Saturday from 8am to 6pm", 
    link: "tel:+919897921038",
    link2: "tel:+919756896250",
    color: "accent"
  },
  { 
    icon: MapPin, 
    title: "Office", 
    content: "Noida Sector 62", 
    content2: "Uttar Pradesh, India",
    description: "Come say hello at our office",
    color: "secondary"
  },
  { 
    icon: Clock, 
    title: "Working Hours", 
    content: "Monday - Friday: 9am - 5pm", 
    content2: "Saturday: 10am - 4pm",
    description: "We're here when you need us",
    color: "primary"
  }
];

export default function ContactInfoGrid() {
  return (
    <section className="relative px-2 md:px-[7%] py-24 md:py-32 overflow-hidden">
      {/* Animated Divider at Top */}
      <div className="absolute top-0 left-0 right-0 z-20">
        <AnimatedDivider />
      </div>

      {/* Futuristic Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-primary/5 dark:via-primary/10 to-accent/5 dark:via-accent/10"></div>
      
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
            <span className="text-sm font-semibold text-primary">Contact Information</span>
          </div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            <span className="text-foreground">Ways to </span>
            <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
              Reach Us
            </span>
          </h2>
        </div>

        {/* Contact Info Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {contactInfo.map((info, i) => {
            const Icon = info.icon;
            return (
              <div
                key={info.title}
                className="group relative overflow-hidden rounded-2xl bg-card/60 dark:bg-card/40 backdrop-blur-xl border border-border/50 dark:border-border/40 hover:border-primary/50 dark:hover:border-primary/50 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/20 hover:-translate-y-2 p-6"
              >
                {/* Glow Effect */}
                <div 
                  className="absolute -inset-1 rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500 -z-10"
                  style={{
                    background: info.color === 'primary' 
                      ? 'linear-gradient(to bottom right, hsl(var(--primary) / 0.1), transparent)'
                      : info.color === 'accent'
                      ? 'linear-gradient(to bottom right, hsl(var(--accent) / 0.1), transparent)'
                      : 'linear-gradient(to bottom right, hsl(var(--secondary) / 0.1), transparent)'
                  }}
                ></div>

                {/* Icon */}
                <div 
                  className="inline-flex items-center justify-center w-14 h-14 rounded-xl mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg"
                  style={{
                    background: info.color === 'primary' 
                      ? 'linear-gradient(to bottom right, hsl(var(--primary) / 0.2), hsl(var(--primary) / 0.1))'
                      : info.color === 'accent'
                      ? 'linear-gradient(to bottom right, hsl(var(--accent) / 0.2), hsl(var(--accent) / 0.1))'
                      : 'linear-gradient(to bottom right, hsl(var(--secondary) / 0.2), hsl(var(--secondary) / 0.1))'
                  }}
                >
                  <Icon 
                    className="w-7 h-7"
                    style={{
                      color: info.color === 'primary' 
                        ? 'hsl(var(--primary))'
                        : info.color === 'accent'
                        ? 'hsl(var(--accent))'
                        : 'hsl(var(--secondary))'
                    }}
                  />
                </div>

                {/* Content */}
                <h3 className="text-lg font-bold mb-2 text-foreground">
                  {info.title}
                </h3>
                
                {info.link ? (
                  <Link
                    href={info.link}
                    target={info.link.startsWith("http") ? "_blank" : "_self"}
                    rel="noopener noreferrer"
                    className="block text-foreground/90 dark:text-foreground/95 font-medium hover:text-primary transition-colors mb-1"
                  >
                    {info.content}
                  </Link>
                ) : (
                  <p className="text-foreground/90 dark:text-foreground/95 font-medium mb-1">
                    {info.content}
                  </p>
                )}

                {info.content2 && (
                  info.link2 ? (
                    <Link
                      href={info.link2}
                      className="block text-foreground/90 dark:text-foreground/95 font-medium hover:text-primary transition-colors mb-2"
                    >
                      {info.content2}
                    </Link>
                  ) : (
                    <p className="text-foreground/90 dark:text-foreground/95 font-medium mb-2">
                      {info.content2}
                    </p>
                  )
                )}

                <p className="text-sm text-foreground/60 dark:text-foreground/70">
                  {info.description}
                </p>

                {/* Circuit Lines on Hover */}
                <div className="absolute inset-0 overflow-hidden rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
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
}
