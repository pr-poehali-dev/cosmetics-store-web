import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
        "3xl": "1440px",
      },
    },
    extend: {
      fontFamily: {
        mono: ["JetBrains Mono", "Consolas", "Monaco", "monospace"],
        handwritten: ["Handwritten", "cursive"],
        coffee: ["Coffee", "Impact", "sans-serif"],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        pantone: {
          mocha: "hsl(var(--pantone-mocha))",
          cream: "hsl(var(--pantone-cream))",
          earth: "hsl(var(--pantone-earth))",
          warm: "hsl(var(--pantone-warm))",
          deep: "hsl(var(--pantone-deep))",
        },
      },
      // 7-колоночная сетка
      gridTemplateColumns: {
        "7": "repeat(7, minmax(0, 1fr))",
      },
      gridColumn: {
        "span-7": "span 7 / span 7",
      },
      spacing: {
        "golden-xs": "var(--golden-xs)",
        "golden-sm": "var(--golden-sm)",
        "golden-md": "var(--golden-md)",
        "golden-lg": "var(--golden-lg)",
        "golden-xl": "var(--golden-xl)",
        "golden-2xl": "var(--golden-2xl)",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "sine-wave-to-cart": {
          "0%": { transform: "translate(0, 0) scale(1)", opacity: "1" },
          "25%": {
            transform: "translate(25%, -20px) scale(0.8)",
            opacity: "0.8",
          },
          "50%": {
            transform: "translate(50%, 15px) scale(0.6)",
            opacity: "0.6",
          },
          "75%": {
            transform: "translate(75%, -10px) scale(0.4)",
            opacity: "0.4",
          },
          "100%": {
            transform: "translate(100%, 5px) scale(0.2)",
            opacity: "0",
          },
        },
        "mobile-slide-up": {
          from: { transform: "translateY(100%)" },
          to: { transform: "translateY(0)" },
        },
        "scroll-fade-in": {
          from: { transform: "translateY(100px)", opacity: "0" },
          to: { transform: "translateY(0)", opacity: "1" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "sine-to-cart":
          "sine-wave-to-cart 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards",
        "mobile-slide":
          "mobile-slide-up 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
        "scroll-appear": "scroll-fade-in 0.3s ease",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
