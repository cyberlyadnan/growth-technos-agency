"use client";

import { usePathname } from "next/navigation";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";

export function ConditionalLayout({ children }) {
  const pathname = usePathname();
  const isLoginPage = pathname === "/login";
  const isDashboardPage = pathname?.startsWith("/dashboard");

  // Hide Navigation and Footer on login page
  if (isLoginPage) {
    return <main className="min-h-screen">{children}</main>;
  }

  // Dashboard has its own layout
  if (isDashboardPage) {
    return <main className="min-h-screen">{children}</main>;
  }

  return (
    <>
      <Navigation />
      <main className="min-h-screen">{children}</main>
      <Footer />
    </>
  );
}

