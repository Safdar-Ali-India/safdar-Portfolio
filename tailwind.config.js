/** @type {import('tailwindcss').Config} */
module.exports = {
  /** Must match next-themes `attribute="class"` — otherwise `dark:*` follows OS only, not site theme */
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        /** Primary foreground on dark canvas (accessibility + brand consistency) */
        ink: "#fafafa",
        /** Near-black page background in dark mode */
        night: "#0a0a0a",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      animation: {
        spotlight: "spotlight 2s ease .75s 1 forwards",
      },
      keyframes: {
        spotlight: {
          "0%": {
            opacity: 0,
            transform: "translate(-72%, -62%) scale(0.5)",
          },
          "100%": {
            opacity: 1,
            transform: "translate(-50%,-40%) scale(1)",
          },
        },
      },
    },
  },
  plugins: [
    /** next-themes: `dark` class on html; light = no .dark — makes `light:*` utilities work */
    function ({ addVariant }) {
      addVariant("light", "html:not(.dark) &");
    },
  ],
};
