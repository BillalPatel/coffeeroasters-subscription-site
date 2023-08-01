/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      cyan: "#66D2CF",
      darkCyan: "#0E8784",
      darkGreyBlue: "#333D4B",
      paleOrange: "#FDD6BA",
      lightCream: "#FEFCF7",
      lightGrey: "#F4F1EB",
      lighterGrey: "#E2DEDB",
      grey: "#83888F",
    },
    fontFamily: {
      fraunces: ["Fraunces"],
      barlow: ["Barlow"],
    },
    fontSize: {
      sm: "0.9375rem",
      "2xl": "1.5rem",
      "3xl": "1.75rem",
      "4xl": "2.5rem",
      "5xl": "4.5rem",
    },
    borderRadius: {
      default: "0.625rem",
    },
  },
  plugins: [],
};
