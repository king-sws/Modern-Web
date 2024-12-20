import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
          DEFAULT: "1rem",
          md: "2rem",
          lg: "4rem",
      },
  },
  fontFamily: {
      sans: ["var(--font-inter)", "sans-serif"],
  },
  screens: {
      sm: "375px",
      md: "768px",
      lg: "1200px",
  },
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [ 
    require('tailwind-scrollbar'), 
  ], 
  variants: { scrollbar: ['rounded'], },
} satisfies Config;
