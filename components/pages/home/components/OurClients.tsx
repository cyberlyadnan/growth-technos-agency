import React from "react";
import { Building2, Sparkles, ArrowRight, Award, Globe, TrendingUp, Zap } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const OurClients = () => {

  const allLogos = [
    { name: "Alveera Hospitality", logo: "https://alveerahospitality.com/assets/images/logo.png" },
    { name: "TripMagics", logo: "https://tripmagics.com/img/city.png" },
    { name: "Jai Sethi", logo: "https://www.jaisethi.com/wp-content/uploads/2025/06/new.png" },
    { name: "DreamlineWedding", logo: "https://dreamlinewedding.in/public/logo.webp" },
    { name: "Alveera", logo: "https://alveerahospitality.in/assets/images/Alveera.jpg" },
    { name: "UrbanGray", logo: "https://urbangreyfurniture.com/wp-content/uploads/2025/05/logo-1.png" },
    { name: "Mauligi", logo: "https://maulijee.org/wp-content/uploads/2025/04/Moujiya-logo.webp" },
    { name: "Seerah Library", logo: "https://the-seerah-library.vercel.app/_next/image?url=%2Fimages%2Flogo%2Fcompany-logo.webp&w=384&q=75" },
    { name: "TechCraft", logo: "https://app.mimicogroupinc.ca/assets/image/main-logo.png" },
    { name: "Woodsy", logo: "https://urbangreyfurniture.com/wp-content/uploads/2025/05/logo-1.png" },
    { name: "HrClicks", logo: "https://hrclicks.com/NewTheme/image/HRLOGO.png" },
    { name: "Litversee", logo: "https://litversee.vercel.app/images/icon.png" },
    { name: "Zeptik", logo: "https://zeptik-sit-v2.vercel.app/icons/zeptik-green-logo.svg" },
    { name: "OJas Life", logo: "https://ojaslife.multivisiontechcells.com/assets/images/logo/logo-final.webp" },
    { name: "Food Protection Global", logo: "https://foodprotectionglobal.multivisiontechcells.com/wp-content/uploads/2025/08/Food-Protection-Global-1-1024x569.png" },
  ];

  return (
    <section className="relative py-8 md:py-18 overflow-hidden">
      {/* Futuristic Dividing Line at Top */}
      <div className="absolute top-0 left-0 right-0 z-20">
        <div className="relative flex items-center justify-center">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full h-px bg-gradient-to-r from-transparent via-primary/50 via-accent/50 to-transparent"></div>
          </div>
          {/* <div className="relative bg-background px-6">
            <div className="w-3 h-3 rounded-full bg-gradient-to-r from-primary via-accent to-secondary animate-pulse"></div>
            <div className="absolute inset-0 w-3 h-3 rounded-full bg-primary/50 blur-md animate-pulse"></div>
          </div> */}
        </div>
        {/* Shining line effect */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/50 to-transparent animate-pulse"></div>
      </div>

      {/* Futuristic Background with Theme Colors */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-primary/5 dark:via-primary/10 to-accent/5 dark:to-accent/10"></div>
      
      {/* Animated Grid Pattern with Primary Color */}
      <div className="absolute inset-0 opacity-[0.04] dark:opacity-[0.06]">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(rgba(156, 30, 42, 0.15) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(156, 30, 42, 0.15) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      {/* Circuit Lines - Futuristic Tech Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-0 w-px h-32 bg-gradient-to-b from-primary/30 via-accent/30 to-transparent"></div>
        <div className="absolute bottom-1/4 right-0 w-px h-40 bg-gradient-to-b from-secondary/30 via-primary/30 to-transparent"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent"></div>
        <div className="absolute bottom-1/3 right-1/4 w-32 h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent"></div>
      </div>

      {/* Floating Orbs with Theme Colors */}
      <div className="absolute top-20 right-10 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-secondary/10 rounded-full blur-3xl"></div>
      
      {/* Floating Particles */}
      <div className="absolute top-1/3 left-1/4 w-2 h-2 bg-primary/40 rounded-full blur-sm animate-pulse" style={{ animationDelay: '0.5s' }}></div>
      <div className="absolute top-2/3 right-1/3 w-1.5 h-1.5 bg-accent/40 rounded-full blur-sm animate-pulse" style={{ animationDelay: '1.5s' }}></div>
      <div className="absolute bottom-1/4 left-1/3 w-2.5 h-2.5 bg-secondary/40 rounded-full blur-sm animate-pulse" style={{ animationDelay: '2s' }}></div>

      <div className="container mt-20 mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20 max-w-5xl mx-auto">
          {/* Badge with Animation */}
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary/15 dark:bg-primary/25 border border-primary/30 dark:border-primary/40 mb-8 backdrop-blur-sm shadow-lg relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/20 to-primary/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
            <Sparkles className="w-4 h-4 text-primary relative z-10" />
            <span className="text-sm font-semibold text-primary relative z-10">Trusted by Industry Leaders</span>
          </div>

          {/* Main Heading with Tech Accent */}
          <div className="relative mb-6">
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight relative z-10">
              <span className="text-foreground">Powering Innovation</span>
              <br />
              <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
                Worldwide
              </span>
            </h2>
            {/* Decorative underline */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-transparent via-primary to-transparent"></div>
          </div>

          <p className="text-lg sm:text-xl md:text-2xl text-foreground/80 dark:text-foreground/90 font-light max-w-3xl mx-auto leading-relaxed mb-8">
            Join the <span className="font-semibold text-primary">100+</span> forward-thinking companies who trust us to transform their digital presence
          </p>

          {/* Trust Indicators - Premium Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-4xl mx-auto mt-12">
            {[
              { icon: Award, value: "100+", label: "Clients", colorClass: "primary" },
              { icon: Globe, value: "12+", label: "Countries", colorClass: "accent" },
              { icon: TrendingUp, value: "98%", label: "Success Rate", colorClass: "secondary" },
              { icon: Zap, value: "24/7", label: "Support", colorClass: "primary" }
            ].map((stat, idx) => (
              <div key={idx} className="group relative">
                <div className="relative bg-card/60 dark:bg-card/40 backdrop-blur-xl rounded-xl p-4 md:p-5 border border-border/30 hover:border-primary/50 transition-all duration-500 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-1">
                  <div className="flex justify-center mb-3">
                    {stat.colorClass === "primary" && (
                      <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary/20 to-primary/30 flex items-center justify-center group-hover:scale-110 transition-transform">
                        <stat.icon className="w-5 h-5 text-primary" />
                      </div>
                    )}
                    {stat.colorClass === "accent" && (
                      <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-accent/20 to-accent/30 flex items-center justify-center group-hover:scale-110 transition-transform">
                        <stat.icon className="w-5 h-5 text-accent" />
                      </div>
                    )}
                    {stat.colorClass === "secondary" && (
                      <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-secondary/20 to-secondary/30 flex items-center justify-center group-hover:scale-110 transition-transform">
                        <stat.icon className="w-5 h-5 text-secondary" />
                      </div>
                    )}
                  </div>
                  <div className={`text-2xl md:text-3xl font-bold mb-1 ${
                    stat.colorClass === "primary" ? "bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent" :
                    stat.colorClass === "accent" ? "bg-gradient-to-r from-accent via-secondary to-primary bg-clip-text text-transparent" :
                    "bg-gradient-to-r from-secondary via-primary to-accent bg-clip-text text-transparent"
                  }`}>
                    {stat.value}
                  </div>
                  <div className="text-xs md:text-sm text-foreground/70 dark:text-foreground/80 font-medium">
                    {stat.label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>


        {/* Section Divider with Tech Design */}
        <div className="relative my-16 md:my-10 flex items-center justify-center">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full h-px bg-gradient-to-r from-transparent via-border to-transparent"></div>
          </div>
          <div className="relative bg-background px-6">
            <div className="w-3 h-3 rounded-full bg-primary/50 animate-pulse"></div>
          </div>
        </div>

        {/* Logo Marquee - Single Row Futuristic Design */}
        <div className="relative">
          {/* Gradient Fade Edges with Enhanced Effect */}
          <div className="absolute left-0 top-0 bottom-0 w-40 bg-gradient-to-r from-background via-background/90 to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-40 bg-gradient-to-l from-background via-background/90 to-transparent z-10 pointer-events-none"></div>
          
          {/* Scan Line Effect */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent opacity-50 animate-pulse pointer-events-none"></div>
          
          <div className="flex overflow-hidden">
            <div className="flex animate-scroll-right">
              {[...allLogos, ...allLogos, ...allLogos].map((client, index) => (
                <div key={`client-${index}`} className="flex-shrink-0 mx-4 my-8 md:mx-6 group">
                  <div className="relative w-40 h-28 sm:w-48 sm:h-32 md:w-56 md:h-36 flex items-center justify-center">
                    {/* Multi-layer Glow effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/40 via-accent/40 to-secondary/40 rounded-2xl opacity-0 group-hover:opacity-100 blur-2xl transition-opacity duration-700"></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-accent/20 to-secondary/20 rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500"></div>
                    
                    {/* Card with Holographic Effect */}
                    <div className="relative w-full h-full bg-card/95 dark:bg-card/80 backdrop-blur-xl rounded-2xl p-5 md:p-7 border-2 border-border/50 dark:border-border/30 group-hover:border-primary/70 dark:group-hover:border-primary/70 shadow-xl group-hover:shadow-2xl group-hover:shadow-primary/30 transition-all duration-700 group-hover:scale-110 group-hover:-translate-y-3 flex items-center justify-center overflow-hidden">
                      {/* Animated Scan Line */}
                      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent animate-pulse"></div>
                      </div>
                      
                      {/* Decorative corners with gradient */}
                      <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-primary/20 via-primary/10 to-transparent rounded-bl-full"></div>
                      <div className="absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-tr from-accent/15 to-transparent rounded-tr-full"></div>
                      
                      {/* Corner Tech Indicators */}
                      <div className="absolute top-2 right-2 w-2 h-2 bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <div className="absolute bottom-2 left-2 w-2 h-2 bg-accent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ transitionDelay: '0.1s' }}></div>
                      
                      {/* Logo - Show as is without filters */}
                      <img 
                        src={client.logo} 
                        alt={client.name} 
                        className="relative z-10 max-w-full max-h-full object-contain transition-all duration-700 group-hover:scale-110"
                      />
                      
                      {/* Animated Border Gradient */}
                      <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-primary/50 transition-all duration-700"></div>
                      
                      {/* Holographic Overlay on Hover */}
                      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/0 via-accent/0 to-secondary/0 opacity-0 group-hover:opacity-10 transition-opacity duration-700 pointer-events-none"></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section with Premium Design */}
        <div className="mt-20 md:mt-24 text-center relative">
          {/* Decorative Elements */}
          <div className="absolute left-1/2 -translate-x-1/2 -top-8 w-24 h-px bg-gradient-to-r from-transparent via-primary to-transparent"></div>
          
          <div className="relative inline-block">
            <Button 
              asChild 
              size="lg" 
              className="group relative overflow-hidden bg-gradient-to-r from-primary via-accent to-secondary hover:from-primary/90 hover:via-accent/90 hover:to-secondary/90 text-white px-8 md:px-10 py-6 md:py-7 text-base md:text-lg font-semibold rounded-xl shadow-xl hover:shadow-2xl hover:shadow-primary/40 transition-all duration-500 hover:-translate-y-1"
            >
              <Link href="/contact" className="flex items-center justify-center gap-2 relative z-10">
                <span className="relative">
                  Become Our Next Success Story
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-500"></span>
                </span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            
            {/* Glow effect behind button */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary via-accent to-secondary rounded-xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-500 -z-10"></div>
          </div>
          
          {/* Trust Badge */}
          <div className="mt-8 flex items-center justify-center gap-2 text-sm text-foreground/60 dark:text-foreground/70">
            <Award className="w-4 h-4 text-primary" />
            <span>Trusted by 100+ companies worldwide</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurClients;