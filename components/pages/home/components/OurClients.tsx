import React from "react";

const OurClients = () => {
  const firstRowLogos = [
    { name: "Alveera Hospitality", logo: "https://alveerahospitality.com/wp-content/uploads/2025/03/logo.webp" },
    { name: "TripMagics", logo: "https://tripmagics.com/img/city.png" },
    { name: "Jai Sethi", logo: "https://www.jaisethi.com/wp-content/uploads/2025/06/new.png" },
    { name: "DreamlineWedding", logo: "https://dreamlinewedding.in/public/logo.webp" },
    { name: "Alveera", logo: "https://www.alveerahospitality.in/assets/img/logo.png" },
    { name: "UrbanGray", logo: "https://urbangreyfurniture.com/wp-content/uploads/2025/05/logo-1.png" },
    { name: "Mauligi", logo: "https://maulijee.org/wp-content/uploads/2025/04/Moujiya-logo.webp" },
    { name: "SellGoLive", logo: "./sellgolive_logo.svg" },
    { name: "Seerah Library", logo: "https://the-seerah-library.vercel.app/_next/image?url=%2Fimages%2Flogo%2Fcompany-logo.webp&w=384&q=75" },
    { name: "Blackrose", logo: "https://underpin-services-assignment.vercel.app/logo/Logo-black.svg" },
  ];

   const secondRowLogos = [
     { name: "TechCraft", logo: "https://app.mimicogroupinc.ca/assets/image/main-logo.png" },
     { name: "Alveera Hospitality", logo: "https://alveerahospitality.com/wp-content/uploads/2025/03/logo.webp" },
     { name: "Woodsy", logo: "./woodsy.png" },
     { name: "HrClicks", logo: "https://hrclicks.com/NewTheme/image/HRLOGO.png" },
     { name: "Seerah Library", logo: "https://the-seerah-library.vercel.app/_next/image?url=%2Fimages%2Flogo%2Fcompany-logo.webp&w=384&q=75" },
    { name: "UrbanGray", logo: "https://urbangreyfurniture.com/wp-content/uploads/2025/05/logo-1.png" },
    { name: "Jai Sethi", logo: "https://www.jaisethi.com/wp-content/uploads/2025/06/new.png" },
     { name: "Zeptik", logo: "https://zeptik-sit-v2.vercel.app/icons/zeptik-green-logo.svg" },
      { name: "RazorPay", logo: "https://cdn.prod.website-files.com/62e8d2ea218fb7676b6892a6/66b2e1d9df9ed25fc882efeb_Frame-3.avif" },
    { name: "TripMagics", logo: "https://tripmagics.com/img/city.png" },
    { name: "DreamlineWedding", logo: "https://dreamlinewedding.in/public/logo.webp" },
  ];

  // const secondRowLogos = [
  //   { name: "CRED", logo: "https://cdn.prod.website-files.com/62e8d2ea218fb7676b6892a6/66b2e1da323e091750829be2_Frame-7.avif" },
  //   { name: "Cisco", logo: "https://upload.wikimedia.org/wikipedia/commons/0/08/Cisco_logo_blue_2016.svg" },
  //   { name: "Stripe", logo: "https://cdn.prod.website-files.com/62e8d2ea218fb7676b6892a6/66b2e1d86e362dd649c2c911_Frame.avif" },
  //   { name: "Netflix", logo: "https://cdn.prod.website-files.com/62e8d2ea218fb7676b6892a6/66b2e1d89a0557fcd86344f0_Frame-1.avif" },
  //   { name: "Flipkart", logo: "https://cdn.prod.website-files.com/62e8d2ea218fb7676b6892a6/66b2e1d802c2d809de1ec43c_flipkart.avif" },
  //   { name: "Visa", logo: "https://cdn.prod.website-files.com/62e8d2ea218fb7676b6892a6/66b2e1da02c2d809de1ec50b_Frame-4.avif" },
  //   { name: "Atlassian", logo: "https://cdn.prod.website-files.com/62e8d2ea218fb7676b6892a6/66b2e1d85e3feca9b3b0f06e_Frame-5.avif" },
  //   { name: "PayPal", logo: "https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" },
  // ];

  return (
    <div className="py-16 bg-gray-50 dark:bg-gray-900 overflow-hidden transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Who We <span className="text-primary-600">Work</span> with
          </h2>
          <p className="text-lg text-gray-500 dark:text-gray-300 max-w-3xl mx-auto">
            Our clients inspire us to push boundaries. Together, we’ve built
            high-performance websites, apps, and platforms that solve real
            business challenges.
          </p>
        </div>

        {/* First Row */}
        <div className="relative mb-12">
          <div className="flex animate-marquee-right space-x-12">
            {[...firstRowLogos, ...firstRowLogos].map((client, index) => (
              <div key={`first-${index}`} className="flex-shrink-0 flex items-center justify-center w-28 h-14">
                <img src={client.logo} alt={client.name} className="mx-auto mb-2 rounded" />
              </div>
            ))}
          </div>
        </div>

        {/* Second Row */}
        <div className="relative">
          <div className="flex animate-marquee-left space-x-12">
            {[...secondRowLogos, ...secondRowLogos].map((client, index) => (
              <div key={`second-${index}`} className="flex-shrink-0 flex items-center justify-center w-28 h-14">
                <img src={client.logo} alt={client.name} className="mx-auto mb-2 rounded" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurClients;
