/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: "true",
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        poppins: ["var(--font-poppins)"],
        kumar: ["'Kumar One'", "cursive"],
        lily: ["var(--font-lily)"],
      },
      colors: {
        citrus: {
          darkred: "#460000",
          gray: "#C8C8C8",
          brown: "#776666",
          jet: "#2D2D2E",
          black: "#1E1E1E",
          "red-100": "#72231C",
          "red-200": "#500000",
          beige: "#FFEBD2",
          yellow: "#EAA54F",
          gray: "#2e2e2e",
      },
        hackathon: {
          "blue-100": "#38A3A5",
          "blue-200": "#22577A",
          "green-100": "#E7F7E9",
          "green-200": "#80ED99",
          "green-300": "#57CC99",
          "green-400": "#3CB97A",
          "yellow-100": "#FFCF55",
          "gray-100": "#E7E7E7",
          "gray-200": "#9ea4af",
          "gray-300": "#525252",
          page: "#F5F5F5",
          tags: {
            "red-bg": "#FFE9E2",
            "red-text": "#F07167",
            "yellow-bg": "#FFF0BC",
            "yellow-text": "#FFB81C",
            "green-bg": "#CFEDEA",
            "green-text": "#00AFB9",
            "gray-bg": "#E9E9E9",
            "gray-text": "#969696",
            "purple-bg": "#E6DFF6",
            "purple-text": "#825ED0",
            "grayblue-bg": "#D3DDE4",
            "grayblue-text": "#22577A",
            "teal-bg": "#D7EDED",
            "teal-text": "#38A3A5",
            "lightgreen-bg": "#DDF5EB",
            "lightgreen-text": "#57CC99",
            "pink-bg": "#FFE3FB",
            "pink-text": "#F583F1",
            white: "#fff",
          },
        },
        sidebar: {
          DEFAULT: "#22577A",
          foreground: "#F5F5F5",
          primary: "#38A3A5",
          "primary-foreground": "#F5F5F5",
          accent: "#FFCF55",
          "accent-foreground": "#22577A",
          border: "#E7E7E7",
          ring: "#FFCF55",
          "primary-foreground": "#F5F5F5",
          "accent-foreground": "#22577A",
        },
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "collapsible-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-collapsible-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
        "collapsible-up": {
          from: {
            height: "var(--radix-collapsible-content-height)",
          },
          to: {
            height: "0",
          },
        },
        "caret-blink": {
          "0%,70%,100%": {
            opacity: "1",
          },
          "20%,50%": {
            opacity: "0",
          },
        },
        flicker: {
          "0%, 100%": { opacity: 1 },
          "50%": { opacity: 0.5 },
        },
      },
      animation: {
        "cinema-flicker": "flicker 8s infinite",
        "accordion-down": "accordion-down 0.2s ease-out",
        "collapsible-down": "collapsible-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "collapsible-up": "collapsible-up 0.2s ease-out",
        "caret-blink": "caret-blink 1.25s ease-out infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")],
};
