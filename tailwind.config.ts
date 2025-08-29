import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx,mdx}",
    "./components/**/*.{ts,tsx,mdx}",
    "./registry/**/*.{ts,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#00C776",
          100: "#00914C",
          200: "#00A056",
          300: "#00AE64",
          400: "#00D684",
          500: "#00E08B",
          600: "#00F6AD",
          700: "#E6FFF3",
        },
        secondary: {
          DEFAULT: "#2578FF",
          100: "#0F70FF",
          200: "#4087FF",
          300: "#5C99FF",
          400: "#70A7FF",
          500: "#8FBBFF",
          600: "#C1DAFF",
          700: "#F0F6FF",
        },
        alert: "#FF5E37",
        gray: {
          900: "#464646",
          800: "#545454",
          700: "#656565",
          600: "#727272",
          500: "#787878",
          300: "#C5C5C5",
          200: "#E0E0E0",
        },
        light: {
          100: "#F1F1F1",
          50: "#FAFAFA",
          0: "#FFFFFF",
        },
        pink: {
          notes: "#FF56DA",
        },
      },
      fontFamily: {
        display: ["Poppins", "sans-serif"],
        heading: ["Poppins", "sans-serif"],
        body: ["Poppins", "sans-serif"],
      },
      borderRadius: {
        regular: "20px",
        small: "10px",
        pill: "1000px",
      },
      boxShadow: {
        "focus-green": "0 0 0 2px rgba(0,199,118,1)",
        "focus-gray": "0 0 0 2px rgba(114,114,114,1)",
        fab: "1px 1px 4px rgba(0,0,0,0.2)",
      },
      borderWidth: {
        "extra-thin": "0.5px",
        thin: "1px",
        thick: "2px",
      },
    },
  },
  plugins: [],
};

export default config;
