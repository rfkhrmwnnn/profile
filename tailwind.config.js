/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#030014", // Deeper, more premium dark
        surface: "#0F172A", // Slate 900
        "surface-light": "#1E293B", // Slate 800
        primary: {
          DEFAULT: "#6366f1", // Indigo 500 - More modern/premium than standard blue
          dark: "#4338ca", // Indigo 700
          light: "#818cf8", // Indigo 400
          glow: "rgba(99, 102, 241, 0.5)",
        },
        secondary: {
          DEFAULT: "#ec4899", // Pink 500 - Vibrant contrast
          dark: "#db2777",
          light: "#f472b6",
          glow: "rgba(236, 72, 153, 0.5)",
        },
        accent: {
          DEFAULT: "#10b981", // Emerald
          glow: "rgba(16, 185, 129, 0.5)",
        },
        glass: "rgba(255, 255, 255, 0.05)",
        "glass-border": "rgba(255, 255, 255, 0.1)",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        heading: ["var(--font-outfit)", "sans-serif"],
      },
      animation: {
        "spin-slow": "spin 12s linear infinite",
        float: "float 6s ease-in-out infinite",
        "float-slow": "float 8s ease-in-out infinite",
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        shine: "shine 1.5s linear infinite",
        aurora: "aurora 60s linear infinite",
        meteor: "meteor 5s linear infinite",
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
        aurora: {
          "0%": { backgroundPosition: "50% 50%, 50% 50%" },
          "100%": { backgroundPosition: "350% 50%, 350% 50%" },
        },
        meteor: {
          "0%": { transform: "rotate(215deg) translateX(0)", opacity: 1 },
          "70%": { opacity: 1 },
          "100%": {
            transform: "rotate(215deg) translateX(-500px)",
            opacity: 0,
          },
        },
      },
    },
  },
  plugins: [],
};
