import React from 'react';
import Link from 'next/link';
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin, 
  MessageCircle,
  Mail, 
  Phone, 
  MapPin,
  ArrowRight,
  Sparkles,
  Zap,
  Globe,
  Rocket
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Image from 'next/image';
import { AnimatedDivider } from '@/components/ui/AnimatedDivider';

const footerLinks = {
  services: [
    { name: 'Web Development', href: '/services/web-development' },
    { name: 'SEO Services', href: '/services/seo' },
    { name: 'Digital Marketing', href: '/services/digital-marketing' },
    { name: 'Branding', href: '/services/branding' },
  ],
  company: [
    { name: 'About Us', href: '/about' },
    { name: 'Our Team', href: '/about#team' },
    { name: 'Careers', href: '/careers' },
    { name: 'Contact', href: '/contact' },
  ],
  resources: [
    { name: 'Blog', href: '/blog' },
    { name: 'Case Studies', href: '/projects' },
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
  ],
};

const socialLinks = [
  { name: 'WhatsApp', href: '#', icon: MessageCircle },
  { name: 'Facebook', href: '#', icon: Facebook },
  { name: 'Twitter', href: '#', icon: Twitter },
  { name: 'Instagram', href: '#', icon: Instagram },
  { name: 'LinkedIn', href: '#', icon: Linkedin },
];

export function Footer() {
  return (
    <footer className="relative md:px-[7%] px-0 bg-background border-t border-border/50 overflow-hidden">
      {/* Futuristic Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/5 to-secondary/5 dark:from-primary/10 dark:via-accent/10 dark:to-secondary/10"></div>
      
      {/* Tech Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(rgba(156, 30, 42, 0.15) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(156, 30, 42, 0.15) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      {/* Floating Orbs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl opacity-50"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl opacity-50"></div>

      {/* Animated Divider at Top */}
      <div className="absolute top-0 left-0 right-0">
        <AnimatedDivider />
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16 md:py-16 lg:pb-20 md:pt-20 lg:pt-24">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
            {/* Company Info - Enhanced */}
            <div className="lg:col-span-2 space-y-4">
              <Link href="/" className="inline-block group">
                <div className="relative">
                  {/* Light mode logo */}
                  <Image
                    src="./growth-technos-dark.png"
                    alt="Growth Technos"
                    width={160}
                    height={40}
                    priority
                    className="transition-transform duration-300 group-hover:scale-105 dark:hidden"
                  />
                  {/* Dark mode logo */}
                  <Image
                    src="./growth-technos.png"
                    alt="Growth Technos"
                    width={160}
                    height={40}
                    priority
                    className="transition-transform duration-300 group-hover:scale-105 hidden dark:block"
                  />
                  <div className="absolute -inset-2 bg-primary/20 rounded-lg blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
                </div>
              </Link>
              
              <p className="text-foreground/70 dark:text-foreground/80 text-xs leading-relaxed max-w-md">
                Transforming businesses through cutting-edge digital solutions. 
                We're your innovation partner for the future.
              </p>

              {/* Contact Info with Futuristic Design - Compact */}
              <div className="relative pt-4">
                {/* Futuristic Line Background Effects */}
                <div className="absolute inset-0 overflow-hidden rounded-xl opacity-20 dark:opacity-30">
                  {/* Horizontal Lines */}
                  <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent to-transparent"></div>
                  
                  {/* Vertical Lines */}
                  <div className="absolute top-0 bottom-0 left-0 w-px bg-gradient-to-b from-transparent via-primary/50 to-transparent"></div>
                  <div className="absolute top-0 bottom-0 right-0 w-px bg-gradient-to-b from-transparent via-accent/50 to-transparent"></div>
                  
                  {/* Diagonal Circuit Lines */}
                  <div className="absolute top-1/4 left-0 w-24 h-px bg-gradient-to-r from-primary/40 to-transparent transform -skew-x-12"></div>
                  <div className="absolute bottom-1/4 right-0 w-24 h-px bg-gradient-to-l from-accent/40 to-transparent transform skew-x-12"></div>
                  
                  {/* Corner Indicators */}
                  <div className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-primary/50"></div>
                  <div className="absolute top-0 right-0 w-2 h-2 border-t-2 border-r-2 border-accent/50"></div>
                  <div className="absolute bottom-0 left-0 w-2 h-2 border-b-2 border-l-2 border-primary/50"></div>
                  <div className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-accent/50"></div>
                </div>

                {/* Compact Contact Items */}
                <div className="relative space-y-2.5 p-4 rounded-xl bg-card/30 dark:bg-card/20 backdrop-blur-sm border border-border/30">
                  <Link 
                    href="mailto:info@growthtechnos.com" 
                    className="group flex items-center gap-2.5 text-xs hover:text-primary transition-colors"
                  >
                    <Mail className="w-4 h-4 text-primary flex-shrink-0" />
                    <span className="text-foreground/70 dark:text-foreground/80 truncate">
                      info@growthtechnos.com
                    </span>
                  </Link>

                  <div className="flex items-center gap-3">
                    <Link 
                      href="tel:+919897921038" 
                      className="group flex items-center gap-2.5 text-xs hover:text-primary transition-colors flex-1"
                    >
                      <Phone className="w-4 h-4 text-primary flex-shrink-0" />
                      <span className="text-foreground/70 dark:text-foreground/80">
                        +91 9897921038
                      </span>
                    </Link>
                    <span className="text-foreground/30">|</span>
                    <Link 
                      href="tel:+919756896250" 
                      className="group flex items-center gap-2.5 text-xs hover:text-primary transition-colors flex-1"
                    >
                      <Phone className="w-4 h-4 text-primary flex-shrink-0" />
                      <span className="text-foreground/70 dark:text-foreground/80">
                        +91 9756896250
                      </span>
                    </Link>
                  </div>

                  <div className="flex items-start gap-2.5 text-xs pt-1 border-t border-border/20">
                    <MapPin className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground/70 dark:text-foreground/80 leading-relaxed">
                      Noida Sector 62, U.P, India
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Resources Section */}
            <div className="space-y-6">
              <div className="flex items-center gap-2 mb-2">
                <Globe className="w-5 h-5 text-primary" />
                <h3 className="text-lg font-bold text-foreground">Resources</h3>
              </div>
              <ul className="space-y-3">
                {footerLinks.resources.map((link, idx) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="group flex items-center gap-2 text-sm text-foreground/70 dark:text-foreground/80 hover:text-primary transition-all duration-300"
                    >
                      <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
                      <span className="relative">
                        {link.name}
                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company Section */}
            <div className="space-y-6">
              <div className="flex items-center gap-2 mb-2">
                <Rocket className="w-5 h-5 text-primary" />
                <h3 className="text-lg font-bold text-foreground">Company</h3>
              </div>
              <ul className="space-y-3">
                {footerLinks.company.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="group flex items-center gap-2 text-sm text-foreground/70 dark:text-foreground/80 hover:text-primary transition-all duration-300"
                    >
                      <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
                      <span className="relative">
                        {link.name}
                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Newsletter Section - Futuristic */}
            <div className="space-y-6">
              <div className="flex items-center gap-2 mb-2">
                <Zap className="w-5 h-5 text-primary" />
                <h3 className="text-lg font-bold text-foreground">Stay Updated</h3>
              </div>
              <p className="text-sm text-foreground/70 dark:text-foreground/80 leading-relaxed">
                Get the latest insights, updates, and exclusive content delivered to your inbox.
              </p>
              <form className="space-y-4">
                <div className="relative group">
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full bg-card/50 dark:bg-card/30 backdrop-blur-sm border-border/50 focus:border-primary/50 focus:ring-2 focus:ring-primary/20 text-foreground placeholder:text-foreground/50 transition-all duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/10 to-primary/0 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-300 -z-10"></div>
                </div>
                <Button 
                  type="submit" 
                  className="w-full group relative overflow-hidden bg-gradient-to-r from-primary via-accent to-secondary hover:from-primary/90 hover:via-accent/90 hover:to-secondary/90 text-white font-semibold shadow-lg hover:shadow-xl hover:shadow-primary/40 transition-all duration-500 hover:-translate-y-0.5"
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    Subscribe
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-primary via-accent to-secondary rounded-md blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-500 -z-10"></div>
                </Button>
              </form>
            </div>
          </div>
        </div>

        {/* Bottom Footer - Futuristic Design */}
        <div className="relative border-t border-border/50 py-8">
          {/* Circuit Line Effect */}
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>
          
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-primary animate-pulse" />
              <p className="text-sm text-foreground/70 dark:text-foreground/80">
                © {new Date().getFullYear()} Growth Technos. All rights reserved.
              </p>
            </div>
            
            {/* Social Links - Futuristic */}
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <Link
                  key={social.name}
                  href={social.href}
                  className="group relative w-10 h-10 rounded-lg bg-card/50 dark:bg-card/30 backdrop-blur-sm border border-border/50 hover:border-primary/50 flex items-center justify-center text-foreground/70 dark:text-foreground/80 hover:text-primary transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 hover:-translate-y-1"
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 rounded-lg transition-colors duration-300"></div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
