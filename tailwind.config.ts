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
        "background": "#312E38",
        "gray": "#999591",
        "orange": "#FF9000",
        "inputs": "#232129",
        "background-medium": "#28262E",
        "shape": "#3E3B47",
        "done": "#04D361",
      }
    },
  },
  plugins: [],
};
export default config;
