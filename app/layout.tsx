import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Growth Technos - Digital Agency",
    template: "%s | Growth Technos",
  },
  icons: {
    icon: "./favicon.ico", // from public folder
  },
  description:
    "Growth Technos is a leading digital agency specializing in web development, SEO, digital marketing, and branding solutions that drive business growth.",
  keywords: [
    "digital agency",
    "web development",
    "SEO",
    "digital marketing",
    "branding",
  ],
  authors: [{ name: "Growth Technos" }],
  creator: "Growth Technos",
  metadataBase: new URL("https://growthtechnos.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://growthtechnos.com",
    title: "Growth Technos - Digital Agency",
    description:
      "Leading digital agency specializing in web development, SEO, digital marketing, and branding solutions.",
    siteName: "Growth Technos",
    images: [
      {
        url: "/growth-technos-logo.png",
        width: 1200,
        height: 630,
        alt: "Growth Technos - Digital Agency",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Growth Technos - Digital Agency",
    description:
      "Leading digital agency specializing in web development, SEO, digital marketing, and branding solutions.",
    images: ["/og-image.jpg"],
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
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
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
