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
        villain: {
          dark: "#0a0a0a",
          darker: "#050505",
          purple: "#8b0a50",
          blood: "#b91c1c",
          shadow: "#1a0a1f",
        },
        accent: "#dc2626",
        background: "#0f0f0f",
        text: "#e5e5e5",
      },
    },
  },
  plugins: [],
};
export default config;
