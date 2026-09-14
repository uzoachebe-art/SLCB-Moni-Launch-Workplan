import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        navy: {
          DEFAULT: "#1B2A6B",
          dark: "#121D4C",
          50: "#EEF0F9",
        },
        brandred: {
          DEFAULT: "#E2233B",
          dark: "#B01A2D",
          50: "#FDEBEE",
        },
      },
    },
  },
  plugins: [],
};
export default config;
