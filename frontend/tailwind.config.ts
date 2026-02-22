import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          blue: "#4A90E2",
          green: "#7CB342",
        },
        accent: "#FF8C42",
        background: "#F5F5F5",
        text: "#333333",
      },
    },
  },
  plugins: [],
};
export default config;
