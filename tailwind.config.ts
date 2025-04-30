import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["var(--font-montserrat)"],
        inter: ["var(--font-inter)"],
      },
    },
  },
  plugins: [],
};

export default config;
