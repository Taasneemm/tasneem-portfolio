import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "selector",
  theme: {
    screens: {
      sm: "0px",
      md: "768px",
      lg: "1280px",
      xl: "1280px",
      "2xl": "1280px",
    },
    extend: {
      fontFamily: {
        cooperbt: ["var(--font-cooperbt)"],
        tthovespro: ["var(--font-tthovespro)"],
      },
      colors: {
        navbar: {
          l: "rgba(253, 249, 242, 0.48)",
          d: "rgba(34, 39, 36, 0.48)",
        },
        neutral: {
          100: "#F8F9FA",
          200: "#E9ECEF",
          300: "#DEE2E6",
          400: "#CED4DA",
          500: "#ADB5BD",
          600: "#6C757D",
          700: "#495057",
          800: "#343A40",
          900: "#212529",
        },
        primary: {
          100: "#EEF3F0",
          200: "#DEE7E0",
          300: "#CDDCD1",
          400: "#BDD0C1",
          500: "#ACC4B2",
          600: "#8A9D8E",
          700: "#67766B",
          800: "#454E47",
          900: "#222724",
        },
        secondary: {
          100: "#FEFDFB",
          200: "#FDFBF6",
          300: "#FDF9F2",
          400: "#FCF7ED",
          500: "#FBF5E9",
          600: "#C9C4BA",
          700: "#97938C",
          800: "#64625D",
          900: "#32312F",
        },
      },
    },
  },
  plugins: [],
};
export default config;
