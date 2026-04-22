import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx,js,jsx,mdx}"],
  theme: {
    extend: {
      colors: {
        // Brand
        alabaster: {
          DEFAULT: "#dce0d9",
          50: "#f7f8f6",
          100: "#eef0ec",
          200: "#dce0d9",
          300: "#c3c9bf",
          400: "#a3aba0",
          500: "#828b80",
          600: "#666e64",
          700: "#525851",
          800: "#444844",
          900: "#3a3d39",
        },
        midnight: {
          DEFAULT: "#31081f",
          50: "#fbf6f9",
          100: "#f5e9f0",
          200: "#ebd2e0",
          300: "#d9aac3",
          400: "#bf759e",
          500: "#a14f7b",
          600: "#823b62",
          700: "#643051",
          800: "#4a2640",
          900: "#31081f",
          950: "#1c0512",
        },
        // Off-black per Section 11 (no #000)
        ink: "#0e0a0c",
        bone: "#f4f2ed",
        cream: "#fdfbf7",
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "Georgia", "serif"],
        sans: ["var(--font-geist-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-geist-mono)", "ui-monospace", "monospace"],
        script: ["var(--font-rustic)", "var(--font-fraunces)", "serif"],
      },
      letterSpacing: {
        tightest: "-0.04em",
        tighter2: "-0.06em",
      },
      maxWidth: {
        screen: "1680px",
      },
      transitionTimingFunction: {
        sleek: "cubic-bezier(0.32, 0.72, 0, 1)",
        editorial: "cubic-bezier(0.16, 1, 0.3, 1)",
      },
      animation: {
        marquee: "marquee 40s linear infinite",
        "marquee-reverse": "marquee-reverse 40s linear infinite",
        breathe: "breathe 4s ease-in-out infinite",
        shimmer: "shimmer 2.5s linear infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "marquee-reverse": {
          "0%": { transform: "translateX(-50%)" },
          "100%": { transform: "translateX(0%)" },
        },
        breathe: {
          "0%, 100%": { opacity: "0.6", transform: "scale(1)" },
          "50%": { opacity: "1", transform: "scale(1.04)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
