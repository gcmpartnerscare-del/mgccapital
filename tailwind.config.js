/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        "mgc-dark": "#1B1B1F",
        "mgc-deepgray": "#4A4A4F",
        "mgc-midgray": "#5E6366",
        "mgc-gold": "#C6A15D",
        primary: {
          50: "#fdfaf3", // Very light gold
          100: "#f9f1db",
          200: "#f1ddb0",
          300: "#e7c883",
          400: "#ddb35b",
          500: "#C6A15D", // Main brand gold (your existing mgc-gold)
          600: "#a8844d",
          700: "#89693e",
          800: "#6a4f2f",
          900: "#4d391f", // Deep dark gold for contrast
          950: "#2e2213", // Near-black brown/gold tone
        },

        secondary: {
          50: "#f0f4fc",
          100: "#d9e2fa",
          200: "#b0c4f5",
          300: "#879bec",
          400: "#5e73e4",
          500: "#445293", // Accent color from gradient
          600: "#36427b",
          700: "#2a3562",
          800: "#1d2649",
          900: "#121732",
          950: "#0a0d1f",
        },
        accent: {
          50: "#f1f3f9",
          100: "#e2e7f2",
          200: "#b6c1e2",
          300: "#8a9bd2",
          400: "#5e75c2",
          500: "#102056", // Dark gradient step
          600: "#0c1a46",
          700: "#091435",
          800: "#050d24",
          900: "#030818",
          950: "#010410",
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
          950: "#052e16",
        },
        warning: {
          50: "#fffbeb",
          100: "#fef3c7",
          200: "#fde68a",
          300: "#fcd34d",
          400: "#fbbf24",
          500: "#f59e0b",
          600: "#d97706",
          700: "#b45309",
          800: "#92400e",
          900: "#78350f",
          950: "#451a03",
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
          950: "#450a0a",
        },
      },
      zIndex: {
        "-50": "-50",
        "-10": "-10",
      },
      fontFamily: {
        sans: ["Mona Sans", "system-ui", "sans-serif"],
        display: ["IBM Plex Sans", "sans-serif"],
      },
      boxShadow: {
        soft: "0 4px 20px rgba(0, 0, 0, 0.05)",
        hover: "0 10px 40px rgba(0, 0, 0, 0.1)",
      },
    },
  },
  plugins: [],
};
