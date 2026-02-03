import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import { ThemeProvider } from "@/components/theme-provider";
import { ConditionalLayout } from "@/components/ConditionalLayout";
import { AuthProvider } from "@/contexts/AuthContext";
import { Toaster } from "@/components/ui/sonner";

const META_PIXEL_ID = "1595721014882625";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default:
      "Growth Technos - Digital Agency | Web Development, SEO & Digital Marketing",
    template: "%s | Growth Technos",
  },
  description:
    "Growth Technos is a leading digital agency specializing in web development, SEO services, digital marketing, branding, and e-commerce solutions.",
  metadataBase: new URL("https://growthtechnos.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: "https://growthtechnos.com",
    title:
      "Growth Technos - Digital Agency | Web Development, SEO & Digital Marketing",
    description:
      "Leading digital agency specializing in web development, SEO, digital marketing, and branding solutions.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Growth Technos",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Growth Technos - Digital Agency",
    description:
      "Web development, SEO & digital marketing solutions for growing businesses.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
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
        {/* Theme preload */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function () {
                try {
                  const theme = localStorage.getItem("theme") || "dark";
                  document.documentElement.classList.toggle("dark", theme === "dark");
                } catch (e) {}
              })();
            `,
          }}
        />

        {/* Organization Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Growth Technos",
              url: "https://growthtechnos.com",
              logo: "https://growthtechnos.com/growth-technos-logo.png",
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+91-98979-21038",
                contactType: "customer service",
                email: "info@growthtechnos.com",
              },
              sameAs: [
                "https://www.instagram.com/growthtechnos",
                "https://www.linkedin.com/in/growth-technos-8305b3363/",
              ],
            }),
          }}
        />
      </head>

      <body className={inter.className}>
        {/* ✅ META PIXEL – CORRECT IMPLEMENTATION */}
        <Script id="facebook-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '${META_PIXEL_ID}');
            fbq('track', 'PageView');
          `}
        </Script>

        {/* NoScript fallback */}
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src={`https://www.facebook.com/tr?id=${META_PIXEL_ID}&ev=PageView&noscript=1`}
            alt=""
          />
        </noscript>

        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          <AuthProvider>
            <ConditionalLayout>{children}</ConditionalLayout>
            <Toaster />
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
