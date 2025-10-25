import type { Config } from "tailwindcss";
import colors from "tailwindcss/colors";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // === Brand Colors ===
        primary: {
          DEFAULT: "#F8810D", // main orange
          foreground: "#ffffff",
          50: "#fff5eb",
          100: "#ffe6cc",
          200: "#ffc899",
          300: "#ffa566",
          400: "#ff8c33",
          500: "#F8810D",
          600: "#db6d0b",
          700: "#b85b09",
          800: "#8f4707",
          900: "#703805",
        },
        secondary: {
          DEFAULT: "#1D91C7", // main blue
          foreground: "#ffffff",
          50: "#edf8fc",
          100: "#d6eef8",
          200: "#adddf1",
          300: "#7ec8e8",
          400: "#4aaedc",
          500: "#1D91C7",
          600: "#1775a5",
          700: "#125c83",
          800: "#0d4768",
          900: "#093652",
        },
        accent: {
          DEFAULT: "#1b82b1",
          foreground: "#ffffff",
        },
        muted: {
          DEFAULT: "#6E6E6E",
          foreground: "#ffffff",
        },
        destructive: {
          DEFAULT: "#b3261e",
          foreground: "#ffffff",
        },
        border: "var(--border)",
        input: "var(--input)",
        ring: "var(--ring)",
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

        // Keep Tailwind defaults for flexibility
        blue: colors.blue,
        indigo: colors.indigo,
        gray: colors.gray,
        green: colors.green,
        red: colors.red,
        yellow: colors.yellow,
        orange: colors.orange,
        purple: colors.purple,
        pink: colors.pink,
        cyan: colors.cyan,
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
        "marquee-right": "marqueeRight 30s linear infinite",
        "marquee-left": "marqueeLeft 30s linear infinite",
      },

      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideDown: {
          "0%": { opacity: "0", transform: "translateY(-30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        scaleIn: {
          "0%": { transform: "scale(0.95)", opacity: "0" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
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
