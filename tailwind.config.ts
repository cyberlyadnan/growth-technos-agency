import type { Config } from "tailwindcss";
import colors from "tailwindcss/colors";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  safelist: [
    // Background colors (light/dark)
    {
      pattern:
        /^bg-(blue|indigo|cyan|pink|purple|green|orange|red|yellow|gray)-(50|100|200|300|400|500|600|700|800|900)$/,
    },
    {
      pattern:
        /^dark:bg-(blue|indigo|cyan|pink|purple|green|orange|red|yellow|gray)-(50|100|200|300|400|500|600|700|800|900)$/,
    },

    // Text colors (light/dark)
    {
      pattern:
        /^text-(blue|indigo|cyan|pink|purple|green|orange|red|yellow|gray)-(50|100|200|300|400|500|600|700|800|900)$/,
    },
    {
      pattern:
        /^dark:text-(blue|indigo|cyan|pink|purple|green|orange|red|yellow|gray)-(50|100|200|300|400|500|600|700|800|900)$/,
    },

    // For icons specifically
    "bg-blue-100",
    "dark:bg-blue-900",
    "text-blue-600",
    "dark:text-blue-300",
    "bg-indigo-100",
    "dark:bg-indigo-900",
    "text-indigo-600",
    "dark:text-indigo-300",
    "bg-cyan-100",
    "dark:bg-cyan-900",
    "text-cyan-600",
    "dark:text-cyan-300",
    "bg-pink-100",
    "dark:bg-pink-900",
    "text-pink-600",
    "dark:text-pink-300",
  ],
  theme: {
    extend: {
      colors: {
        // Your custom color palette
        primary: {
          50: "#f2f9fc",
          100: "#d9edf7",
          200: "#b3dbef",
          300: "#85c6e4",
          400: "#4ea9d3",
          500: "#1B84B4", // main brand blue
          600: "#176d93",
          700: "#135876",
          800: "#0f445b",
          900: "#0c3548",
        },
        secondary: {
          50: "#faf5ff",
          100: "#f3e8ff",
          200: "#e9d5ff",
          300: "#d8b4fe",
          400: "#c084fc",
          500: "#a855f7",
          600: "#9333ea",
          700: "#7c3aed",
          800: "#6b21a8",
          900: "#581c87",
        },
        accent: {
          50: "#fff8f3",
          100: "#ffe9d9",
          200: "#ffd1ad",
          300: "#ffb178",
          400: "#f98d45",
          500: "#ED7224", // main brand orange
          600: "#c85b1d",
          700: "#a04918",
          800: "#7a3914",
          900: "#5f2d10",
        },
        success: {
          50: "#f0fdf4",
          100: "#dcfce7",
          200: "#bbf7d0",
          300: "#86efac",
          400: "#4ade80",
          500: "#22c55e",
          600: "#16a34a",
          700: "#15803d",
          800: "#166534",
          900: "#14532d",
        },
        warning: {
          50: "#fefce8",
          100: "#fef9c3",
          200: "#fef08a",
          300: "#fde047",
          400: "#facc15",
          500: "#eab308",
          600: "#ca8a04",
          700: "#a16207",
          800: "#854d0e",
          900: "#713f12",
        },
        error: {
          50: "#fef2f2",
          100: "#fee2e2",
          200: "#fecaca",
          300: "#fca5a5",
          400: "#f87171",
          500: "#ef4444",
          600: "#dc2626",
          700: "#b91c1c",
          800: "#991b1b",
          900: "#7f1d1d",
        },

        // Standard Tailwind colors (for icon backgrounds)
        blue: colors.blue,
        indigo: colors.indigo,
        cyan: colors.cyan,
        pink: colors.pink,
        purple: colors.purple,
        green: colors.green,
        orange: colors.orange,
        red: colors.red,
        yellow: colors.yellow,
        gray: colors.gray,

        // Shadcn/ui colors
        background: "var(--background)",
        foreground: "var(--foreground)",
        card: {
          DEFAULT: "var(--card)",
          foreground: "var(--card-foreground)",
        },
        popover: {
          DEFAULT: "var(--popover)",
          foreground: "var(--popover-foreground)",
        },
        muted: {
          DEFAULT: "var(--muted)",
          foreground: "var(--muted-foreground)",
        },
        border: "var(--border)",
        input: "var(--input)",
        ring: "var(--ring)",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-in-out",
        "slide-up": "slideUp 0.6s ease-out",
        "slide-down": "slideDown 0.6s ease-out",
        "scale-in": "scaleIn 0.3s ease-out",
        float: "float 6s ease-in-out infinite",

        // Marquee animations
        "marquee-right": "marqueeRight 30s linear infinite",
        "marquee-left": "marqueeLeft 30s linear infinite",
      },

      keyframes: {
        "slide-up": {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(30px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        slideDown: {
          "0%": { transform: "translateY(-30px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        scaleIn: {
          "0%": { transform: "scale(0.95)", opacity: "0" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },

        // New marquee keyframes
        marqueeRight: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        marqueeLeft: {
          "0%": { transform: "translateX(-50%)" },
          "100%": { transform: "translateX(0%)" },
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
