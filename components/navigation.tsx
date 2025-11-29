"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const navItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  {
    name: "Services",
    href: "/services",
    dropdown: [
      { name: "Web Development", href: "/services/web-development" },
      { name: "SEO Services", href: "/services/seo" },
      { name: "Digital Marketing", href: "/services/digital-marketing" },
      { name: "Branding", href: "/services/branding" },
    ],
  },
  { name: "Projects", href: "/projects" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Blogs", href: "/blog" },
  { name: "Contact", href: "/contact" },
];

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleDropdown = (name: string) => {
    setActiveDropdown(activeDropdown === name ? null : name);
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isScrolled 
          ? "bg-black/90 dark:bg-black-950/95 backdrop-blur-xl shadow-lg border-b border-gray-800 dark:border-gray-700"
          : "bg-black dark:bg-background backdrop-blur-xl border-b border-gray-800/50 dark:border-gray-700/50"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center md:py-4 py-1 space-x-2 group">
            <div className="relative">
              <Image
                src="/growth-technos.png"
                alt="Growth Technos"
                width={140}
                height={35}
                priority
                className="transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-primary/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <div key={item.name} className="relative group">
                {item.dropdown ? (
                  <div
                    onMouseEnter={() => setActiveDropdown(item.name)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <button
                      className={`flex items-center space-x-1 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                        pathname.startsWith(item.href)
                          ? "text-white bg-primary/10"
                          : "text-white hover:text-primary hover:bg-secondary/10"
                      }`}
                    >
                      <span>{item.name}</span>
                      <ChevronDown className="w-4 h-4 transition-transform duration-300 group-hover:rotate-180" />
                    </button>

                    {/* Dropdown */}
                    <div
                      className={`absolute top-full left-0 mt-2 w-56 rounded-xl bg-gray-900 dark:bg-gray-950 shadow-2xl ring-1 ring-gray-800 dark:ring-gray-700 overflow-hidden transition-all duration-300 ${
                        activeDropdown === item.name
                          ? "opacity-100 translate-y-0 visible"
                          : "opacity-0 -translate-y-2 invisible"
                      }`}
                    >
                      <div className="p-2">
                        {item.dropdown.map((dropdownItem, index) => (
                          <Link
                            key={dropdownItem.name}
                            href={dropdownItem.href}
                            className="block px-4 py-3 text-sm text-white/80 hover:bg-primary/20 hover:text-primary rounded-lg transition-all duration-200"
                            style={{ animationDelay: `${index * 50}ms` }}
                          >
                            <div className="flex items-center justify-between">
                              <span className="font-medium">{dropdownItem.name}</span>
                              <span className="w-0 group-hover/item:w-5 transition-all duration-300 overflow-hidden">
                                <svg
                                  className="w-4 h-4"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M9 5l7 7-7 7"
                                  />
                                </svg>
                              </span>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    className={`relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                      pathname === item.href
                        ? "text-white bg-primary/10"
                        : "text-white hover:text-primary hover:bg-muted"
                    }`}
                  >
                    {item.name}
                    {pathname === item.href && (
                      <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 bg-primary rounded-full"></span>
                    )}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* Theme toggle + CTA */}
          <div className="hidden lg:flex items-center space-x-3">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="w-10 h-10 p-0 rounded-lg transition-all duration-300 hover:bg-white/10 dark:hover:bg-white/10 text-white"
            >
              <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            </Button>

            <Button
              asChild
              className="relative px-6 py-2.5 bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all duration-300 hover:-translate-y-0.5 overflow-hidden group"
            >
              <Link href="/contact">
                <span className="relative z-10 font-medium">Get Started</span>
              </Link>
            </Button>
          </div>

          {/* Mobile menu toggle */}
          <div className="lg:hidden flex items-center space-x-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="w-10 h-10 p-0 rounded-lg hover:bg-white/10 text-white"
            >
              <Sun className="h-5 w-5 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            </Button>

            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
              className="w-10 h-10 p-0 rounded-lg hover:bg-white/10 text-white"
            >
              <div className="relative w-5 h-5">
                <span
                  className={`absolute h-0.5 w-5 bg-current transform transition-all duration-300 ${
                    isOpen ? "rotate-45 top-2" : "top-0.5"
                  }`}
                ></span>
                <span
                  className={`absolute h-0.5 w-5 bg-current top-2 transition-all duration-300 ${
                    isOpen ? "opacity-0" : "opacity-100"
                  }`}
                ></span>
                <span
                  className={`absolute h-0.5 w-5 bg-current transform transition-all duration-300 ${
                    isOpen ? "-rotate-45 top-2" : "top-3.5"
                  }`}
                ></span>
              </div>
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden transition-all duration-500 ease-in-out ${
          isOpen
            ? "max-h-screen opacity-100"
            : "max-h-0 opacity-0 pointer-events-none"
        }`}
      >
        <div className="bg-gray-900/95 dark:bg-gray-950/95 backdrop-blur-xl border-t border-gray-800 dark:border-gray-700 shadow-2xl">
          <div className="px-4 pt-4 pb-6 space-y-2 max-h-[calc(100vh-5rem)] overflow-y-auto">
            {navItems.map((item, index) => (
              <div
                key={item.name}
                className="opacity-0 animate-fade-in"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {item.dropdown ? (
                  <div>
                    <button
                      onClick={() => toggleDropdown(item.name)}
                      className={`flex items-center justify-between w-full px-4 py-3 rounded-lg text-base font-medium transition-all duration-200 ${
                        pathname.startsWith(item.href)
                          ? "text-primary bg-primary/20"
                          : "text-white hover:bg-white/10"
                      }`}
                    >
                      <span>{item.name}</span>
                      <ChevronDown
                        className={`w-4 h-4 transition-transform duration-300 ${
                          activeDropdown === item.name ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    <div
                      className={`overflow-hidden transition-all duration-300 ${
                        activeDropdown === item.name
                          ? "max-h-96 opacity-100 mt-2"
                          : "max-h-0 opacity-0"
                      }`}
                    >
                      <div className="pl-4 space-y-1">
                        {item.dropdown.map((dropdownItem) => (
                          <Link
                            key={dropdownItem.name}
                            href={dropdownItem.href}
                            onClick={() => {
                              setIsOpen(false);
                              setActiveDropdown(null);
                            }}
                            className="block px-4 py-2.5 rounded-lg text-sm font-medium text-white/80 hover:text-primary hover:bg-primary/20 transition-all duration-200"
                          >
                            {dropdownItem.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={`block px-4 py-3 rounded-lg text-base font-medium transition-all duration-200 ${
                      pathname === item.href
                        ? "text-primary bg-primary/20"
                        : "text-white hover:bg-white/10"
                    }`}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}

            <div className="pt-4">
              <Button
                asChild
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg shadow-lg shadow-primary/25 py-6"
              >
                <Link
                  href="/contact"
                  onClick={() => setIsOpen(false)}
                  className="font-medium"
                >
                  Get Started
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
