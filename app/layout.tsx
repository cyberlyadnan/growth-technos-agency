import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Growth Technos - Digital Agency | Web Development, SEO & Digital Marketing",
    template: "%s | Growth Technos",
  },
  description:
    "Growth Technos is a leading digital agency specializing in web development, SEO services, digital marketing, branding, and e-commerce solutions. We help businesses grow online with cutting-edge technology and strategic digital solutions.",
  keywords: [
    "digital agency",
    "web development",
    "SEO services",
    "digital marketing",
    "branding",
    "e-commerce solutions",
    "website design",
    "responsive web design",
    "UI/UX design",
    "content marketing",
    "social media marketing",
    "PPC advertising",
    "Noida digital agency",
    "India web development",
    "growth technos",
  ],
  authors: [{ name: "Growth Technos", url: "https://growthtechnos.com" }],
  creator: "Growth Technos",
  publisher: "Growth Technos",
  metadataBase: new URL("https://growthtechnos.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://growthtechnos.com",
    siteName: "Growth Technos",
    title: "Growth Technos - Digital Agency | Web Development, SEO & Digital Marketing",
    description:
      "Leading digital agency specializing in web development, SEO, digital marketing, and branding solutions. Transform your business with our innovative digital strategies.",
    images: [
      {
        url: "/og-image.jpg", // You need to provide this: 1200x630px
        width: 1200,
        height: 630,
        alt: "Growth Technos - Digital Agency",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Growth Technos - Digital Agency | Web Development & SEO",
    description:
      "Leading digital agency specializing in web development, SEO, digital marketing, and branding solutions.",
    images: ["/og-image.jpg"], // You need to provide this: 1200x630px
    creator: "@growthtechnos", // Update with your Twitter handle if available
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code", // Replace with your Google Search Console verification code
    // yandex: "your-yandex-verification-code", // Optional
    // bing: "your-bing-verification-code", // Optional
  },
  category: "Digital Agency",
  classification: "Business",
  other: {
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "black-translucent",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Structured Data - Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Growth Technos",
              url: "https://growthtechnos.com",
              logo: "https://growthtechnos.com/growth-technos-logo.png",
              description:
                "Leading digital agency specializing in web development, SEO, digital marketing, and branding solutions.",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Noida Sector 62",
                addressLocality: "Noida",
                addressRegion: "Uttar Pradesh",
                addressCountry: "IN",
              },
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+91-98979-21038",
                contactType: "Customer Service",
                email: "info@growthtechnos.com",
                areaServed: "IN",
                availableLanguage: "en",
              },
              sameAs: [
                // Add your social media URLs here
                "https://www.instagram.com/growthtechnos",
                "https://www.linkedin.com/in/growth-technos-8305b3363/",
                
                // "https://www.facebook.com/growthtechnos",
                // "https://www.twitter.com/growthtechnos",
                // "https://www.linkedin.com/company/growthtechnos",
                // "https://www.instagram.com/growthtechnos",
              ],
            }),
          }}
        />
        {/* Structured Data - WebSite */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Growth Technos",
              url: "https://growthtechnos.com",
              potentialAction: {
                "@type": "SearchAction",
                target: {
                  "@type": "EntryPoint",
                  urlTemplate: "https://growthtechnos.com/search?q={search_term_string}",
                },
                "query-input": "required name=search_term_string",
              },
            }),
          }}
        />
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navigation />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
