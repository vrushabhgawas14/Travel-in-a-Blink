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
        // For borders
        Border: {
          // slate: "#0f172a", // Slate-900
          slate: "#ffffff", // White
        },
      },
      screens: {
        sm: { max: "900px" },
        md: { max: "1024px" },
        lg: "1025px",
      },
    },
  },
  plugins: [],
};
export default config;
