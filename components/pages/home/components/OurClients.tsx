import React from "react";

const OurClients = () => {

  const firstRowLogos = [
    { name: "Alveera Hospitality", logo: "https://alveerahospitality.com/assets/images/logo.png" },
    { name: "TripMagics", logo: "https://tripmagics.com/img/city.png" },
    { name: "Jai Sethi", logo: "https://www.jaisethi.com/wp-content/uploads/2025/06/new.png" },
    { name: "DreamlineWedding", logo: "https://dreamlinewedding.in/public/logo.webp" },
    { name: "Alveera", logo: "https://alveerahospitality.in/assets/images/Alveera.jpg" },
    { name: "UrbanGray", logo: "https://urbangreyfurniture.com/wp-content/uploads/2025/05/logo-1.png" },
    { name: "Mauligi", logo: "https://maulijee.org/wp-content/uploads/2025/04/Moujiya-logo.webp" },
    { name: "Seerah Library", logo: "https://the-seerah-library.vercel.app/_next/image?url=%2Fimages%2Flogo%2Fcompany-logo.webp&w=384&q=75" },
  ];

  const secondRowLogos = [
    { name: "TechCraft", logo: "https://app.mimicogroupinc.ca/assets/image/main-logo.png" },
    { name: "Woodsy", logo: "https://urbangreyfurniture.com/wp-content/uploads/2025/05/logo-1.png" },
    { name: "HrClicks", logo: "https://hrclicks.com/NewTheme/image/HRLOGO.png" },
    { name: "Seerah Library", logo: "https://the-seerah-library.vercel.app/_next/image?url=%2Fimages%2Flogo%2Fcompany-logo.webp&w=384&q=75" },
    { name: "Litversee", logo: "https://litversee.vercel.app/images/icon.png" },
    { name: "Zeptik", logo: "https://zeptik-sit-v2.vercel.app/icons/zeptik-green-logo.svg" },
    { name: "OJas Life", logo: "https://ojaslife.multivisiontechcells.com/assets/images/logo/logo-final.webp" },
    { name: "Food Protection Global", logo: "https://foodprotectionglobal.multivisiontechcells.com/wp-content/uploads/2025/08/Food-Protection-Global-1-1024x569.png" },
  ];

  return (
    <div className="relative py-24 bg-gray-50 dark:bg-[#0e0e12] overflow-hidden transition-colors duration-300">
      {/* Animated Background Grid */}
      <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(#F8810D 1px, transparent 1px), linear-gradient(90deg, #F8810D 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }} />
      </div>

      {/* Gradient Orbs */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-primary rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-[128px] opacity-20 dark:opacity-10 animate-pulse" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-secondary rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-[128px] opacity-20 dark:opacity-10 animate-pulse" style={{ animationDelay: '1s' }} />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-6">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white dark:bg-[#1c1b26] border border-gray-200 dark:border-[#2a2a36] shadow-sm">
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            <span className="text-sm font-medium text-gray-600 dark:text-gray-300">Trusted by Industry Leaders</span>
          </div>

          {/* Main Heading with Gradient */}
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white">
            Powering Innovation{" "}
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Worldwide
              </span>
              <svg className="absolute -bottom-2 left-0 w-full" height="8" viewBox="0 0 200 8" fill="none">
                <path d="M0 4C50 4 50 8 100 4C150 0 150 4 200 4" stroke="url(#gradient)" strokeWidth="2" />
                <defs>
                  <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#F8810D" />
                    <stop offset="100%" stopColor="#4C2E91" />
                  </linearGradient>
                </defs>
              </svg>
            </span>
          </h2>

          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Join the <span className="font-semibold text-primary">100+</span> forward-thinking companies who trust us to transform their digital presence
          </p>
        </div>

        {/* Stats Bar */}
        <div className="grid grid-cols-3 gap-4 mb-16 max-w-3xl mx-auto">
          {[
            { label: "Active Projects", value: "50+" },
            { label: "Success Rate", value: "98%" },
            { label: "Countries", value: "12+" }
          ].map((stat, idx) => (
            <div key={idx} className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-2xl opacity-0 group-hover:opacity-100 blur transition-opacity duration-300" />
              <div className="relative bg-white dark:bg-[#1c1b26] rounded-2xl p-4 sm:p-6 text-center border border-gray-200 dark:border-[#2a2a36] transition-transform duration-300 group-hover:scale-105">
                <div className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 mt-1">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Logo Marquees */}
        <div className="space-y-8">
          {/* First Row - Right to Left */}
          <div className="relative">
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-gray-50 dark:from-[#0e0e12] to-transparent z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-gray-50 dark:from-[#0e0e12] to-transparent z-10" />
            
            <div className="flex overflow-hidden">
              <div className="flex animate-scroll-right">
                {[...firstRowLogos, ...firstRowLogos, ...firstRowLogos].map((client, index) => (
                  <div key={`first-${index}`} className="flex-shrink-0 mx-6 group">
                    <div className="relative w-32 h-20 sm:w-40 sm:h-24 flex items-center justify-center">
                      <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-xl opacity-0 group-hover:opacity-100 blur transition-opacity duration-300" />
                      <div className="relative bg-white dark:bg-[#1c1b26] rounded-xl p-4 border border-gray-200 dark:border-[#2a2a36] shadow-sm group-hover:shadow-lg transition-all duration-300 group-hover:scale-110 w-full h-full flex items-center justify-center">
                        <img 
                          src={client.logo} 
                          alt={client.name} 
                          className="max-w-full max-h-full object-contain filter group-hover:grayscale-0 transition-all duration-300"
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Second Row - Left to Right */}
          <div className="relative">
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-gray-50 dark:from-[#0e0e12] to-transparent z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-gray-50 dark:from-[#0e0e12] to-transparent z-10" />
            
            <div className="flex overflow-hidden">
              <div className="flex animate-scroll-left">
                {[...secondRowLogos, ...secondRowLogos, ...secondRowLogos].map((client, index) => (
                  <div key={`second-${index}`} className="flex-shrink-0 mx-6 group">
                    <div className="relative w-32 h-20 sm:w-40 sm:h-24 flex items-center justify-center">
                      <div className="absolute inset-0 bg-gradient-to-r from-secondary/20 to-primary/20 rounded-xl opacity-0 group-hover:opacity-100 blur transition-opacity duration-300" />
                      <div className="relative bg-white dark:bg-[#1c1b26] rounded-xl p-4 border border-gray-200 dark:border-[#2a2a36] shadow-sm group-hover:shadow-lg transition-all duration-300 group-hover:scale-110 w-full h-full flex items-center justify-center">
                        <img 
                          src={client.logo} 
                          alt={client.name} 
                          className="max-w-full max-h-full object-contain filter group-hover:grayscale-0 transition-all duration-300"
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <button className="group relative inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-primary to-secondary text-white font-semibold rounded-full overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-primary/30">
            <span className="relative z-10">Become Our Next Success Story</span>
            <svg className="relative z-10 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
            <div className="absolute inset-0 bg-gradient-to-r from-secondary to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </button>
        </div>
      </div>

    </div>
  );
};

export default OurClients;