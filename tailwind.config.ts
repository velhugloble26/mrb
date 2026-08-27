import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Brand Palette
        "deep-black": "#0B0B0A",
        charcoal: "#151515",
        "champagne-gold": "#B58A45",
        "light-gold": "#D4AF68",
        "marble-ivory": "#F3F0E9",
        "soft-white": "#FFFFFF",
        // Derived
        "gold-muted": "#8A6B35",
        "ivory-dark": "#E8E4DB",
        "charcoal-light": "#1E1E1E",
      },
      fontFamily: {
        serif: ["Playfair Display", "Georgia", "serif"],
        sans: ["Inter", "system-ui", "sans-serif"],
        display: ["Cormorant Garamond", "Playfair Display", "serif"],
      },
      fontSize: {
        "display-xl": ["clamp(3rem, 8vw, 7rem)", { lineHeight: "1.05", letterSpacing: "-0.02em" }],
        "display-lg": ["clamp(2.5rem, 5vw, 4.5rem)", { lineHeight: "1.1", letterSpacing: "-0.01em" }],
        "display-md": ["clamp(1.75rem, 3vw, 3rem)", { lineHeight: "1.15" }],
        "display-sm": ["clamp(1.25rem, 2vw, 1.75rem)", { lineHeight: "1.2" }],
        "body-lg": ["1.125rem", { lineHeight: "1.75" }],
        "body-md": ["1rem", { lineHeight: "1.7" }],
        "body-sm": ["0.875rem", { lineHeight: "1.6" }],
        "caption": ["0.75rem", { lineHeight: "1.5", letterSpacing: "0.08em" }],
      },
      spacing: {
        "18": "4.5rem",
        "22": "5.5rem",
        "30": "7.5rem",
      },
      borderRadius: {
        "luxury": "2px",
      },
      transitionDuration: {
        "400": "400ms",
        "600": "600ms",
        "800": "800ms",
        "1000": "1000ms",
      },
      transitionTimingFunction: {
        "luxury": "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
        "smooth": "cubic-bezier(0.4, 0, 0.2, 1)",
      },
      backgroundImage: {
        "marble-dark": "linear-gradient(135deg, #0B0B0A 0%, #151515 50%, #1A1A1A 100%)",
        "marble-gold": "linear-gradient(135deg, #0B0B0A 0%, #1A1510 50%, #151515 100%)",
        "gold-shimmer": "linear-gradient(90deg, #B58A45 0%, #D4AF68 50%, #B58A45 100%)",
      },
      boxShadow: {
        "gold-soft": "0 0 40px rgba(181, 138, 69, 0.08)",
        "gold-medium": "0 0 60px rgba(181, 138, 69, 0.12)",
        "cinematic": "0 25px 80px rgba(0, 0, 0, 0.5)",
        "elevated": "0 10px 40px rgba(0, 0, 0, 0.3)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(40px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "scale-in": {
          "0%": { opacity: "0", transform: "scale(0.95)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        "shimmer": {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        "scroll-indicator": {
          "0%": { transform: "translateY(0)", opacity: "1" },
          "50%": { transform: "translateY(12px)", opacity: "0.5" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.8s ease-out forwards",
        "fade-in": "fade-in 0.6s ease-out forwards",
        "scale-in": "scale-in 0.6s ease-out forwards",
        "shimmer": "shimmer 3s ease-in-out infinite",
        "scroll-indicator": "scroll-indicator 2s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
