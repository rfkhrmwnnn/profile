/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#0B0F19", // Deep cosmic dark
        surface: "#111827", // Slightly lighter for cards
        primary: {
          DEFAULT: "#3B82F6", // Electric Blue
          dark: "#1D4ED8",
          light: "#60A5FA",
        },
        secondary: {
          DEFAULT: "#8B5CF6", // Violet
          dark: "#6D28D9",
          light: "#A78BFA",
        },
        accent: "#10B981", // Emerald
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        heading: ["var(--font-outfit)", "sans-serif"],
      },
      animation: {
        "spin-slow": "spin 12s linear infinite",
        float: "float 6s ease-in-out infinite",
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        shine: "shine 1.5s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-20px)" },
        },
        shine: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(100%)" },
        },
      },
    },
  },
  plugins: [],
};
