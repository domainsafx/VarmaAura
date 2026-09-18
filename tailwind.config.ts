import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          DEFAULT: "#F8F6EE",
          deep: "#EFE9D8",
        },
        ink: {
          DEFAULT: "#1B2118",
          soft: "#454B3E",
        },
        forest: {
          DEFAULT: "#26402B",
          deep: "#182B1C",
        },
        gold: {
          DEFAULT: "#B8934E",
          soft: "#D8BE8A",
        },
        line: "rgba(27,33,24,0.13)",
      },
      fontFamily: {
        serif: ["var(--font-cormorant)", "serif"],
        sans: ["var(--font-jost)", "sans-serif"],
      },
      maxWidth: {
        page: "1360px",
      },
      transitionTimingFunction: {
        aura: "cubic-bezier(.16,.84,.28,1)",
      },
      keyframes: {
        kenburns: {
          "0%": { transform: "scale(1.1)" },
          "100%": { transform: "scale(1)" },
        },
        "pulse-dot": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.3" },
        },
        markIn: {
          to: { opacity: "1" },
        },
      },
      animation: {
        kenburns: "kenburns 16s cubic-bezier(.16,.84,.28,1) forwards",
        "kenburns-slow": "kenburns 22s cubic-bezier(.16,.84,.28,1) forwards",
        "pulse-dot": "pulse-dot 1.8s infinite",
      },
      boxShadow: {
        soft: "0 22px 44px -22px rgba(27,33,24,0.28)",
      },
    },
  },
  plugins: [],
};

export default config;
