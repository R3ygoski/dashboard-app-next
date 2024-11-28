import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "selector",
  theme: {
    extend: {
      colors: {
        results: {
          up: "hsl(163, 72%, 41%)",
          down: "hsl(356, 69%, 56%)",
        },
        "social-media": {
          facebook: "hsl(208, 92%, 53%)",
          twitter: "hsl(203, 89%, 53%)",
          "instagram-1": "hsl(37, 97%, 70%)",
          "instagram-2": "hsl(329, 70%, 58%)",
          youtube: "hsl(348, 97%, 39%)",
        },
        "theme-toggler": {
          "dark-1": "hsl(210, 78%, 56%)",
          "dark-2": "hsl(146, 68%, 55%)",
          light: "hsl(230, 22%, 74%)",
        },
        main: {
          dark: {
            background: "hsl(230, 17%, 14%)",
            "background-top": "hsl(232, 19%, 15%)",
            card: "hsl(228, 28%, 20%)",
            text: "hsl(228, 34%, 66%)",
            "strong-text": "hsl(0, 0%, 100%)",
          },
          light: {
            background: "hsl(0, 0%, 100%)",
            "background-top": "hsl(225, 100%, 98%)",
            card: "hsl(227, 47%, 96%)",
            text: "hsl(228, 12%, 44%)",
            "strong-text": "hsl(230, 17%, 14%)",
          },
        },
      },
      screens: {
        xl: "1440px",
      },
      keyframes: {
        "up-to-down": {
          "0%": {
            transform: "translateY(-20vh)",
            opacity: "0",
          },
        },
        "down-to-up": {
          "0%": {
            transform: "translateY(20vh)",
            opacity: "0",
          },
        },
      },
      animation: {
        "up-to-down": "up-to-down 1s ease-in-out forwards",
        "down-to-up": "down-to-up 1s ease-in-out forwards",
      },
    },
  },
  plugins: [],
} satisfies Config;
