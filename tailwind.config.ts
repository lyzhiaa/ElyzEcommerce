import type { Config } from "tailwindcss";

const flowbite = require("flowbite-react/tailwind");

/** @type {import('tailwindcss').Config} */

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    flowbite.content(),
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      primary: {
        // darkest: '#1f2d3d',
        // dark: '#3c4858',
        DEFAULT: "#AF9AB2",
        // light: '#e0e6ed',
        // lightest: '#f9fafc',
      },
      secondary: {
        DEFAULT: "#E7E0E8",
        
      },
      headerText: {
        DEFAULT: "#A08DA3",
        
      },
    },
  },
  plugins: [flowbite.plugin()],
};
export default config;
