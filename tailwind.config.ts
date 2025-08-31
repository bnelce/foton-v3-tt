import type { Config } from "tailwindcss"

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
          DEFAULT: "var(--cbm-color-brand)",
          100: "var(--cbm-color-brand-100)",
          200: "var(--cbm-color-brand-200)",
          300: "var(--cbm-color-brand-300)",
          400: "var(--cbm-color-brand-400)",
          500: "var(--cbm-color-brand-500)",
          600: "var(--cbm-color-brand-600)",
          700: "var(--cbm-color-brand-700)",
        },
        secondary: {
          DEFAULT: "var(--cbm-color-secondary)",
          100: "var(--cbm-color-secondary-100)",
          200: "var(--cbm-color-secondary-200)",
          300: "var(--cbm-color-secondary-300)",
          400: "var(--cbm-color-secondary-400)",
          500: "var(--cbm-color-secondary-500)",
          600: "var(--cbm-color-secondary-600)",
          700: "var(--cbm-color-secondary-700)",
        },
        alert: "var(--cbm-color-alert)",
        gray: {
          900: "var(--cbm-color-gray-900)",
          800: "var(--cbm-color-gray-800)",
          700: "var(--cbm-color-gray-700)",
          600: "var(--cbm-color-gray-600)",
          500: "var(--cbm-color-gray-500)",
          300: "var(--cbm-color-gray-300)",
          200: "var(--cbm-color-gray-200)",
        },
        light: {
          100: "var(--cbm-color-light-100)",
          50: "var(--cbm-color-light-50)",
          0: "var(--cbm-color-light-0)",
        },
        pink: {
          notes: "var(--cbm-color-notes-pink)",
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
}

export default config
