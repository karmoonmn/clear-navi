/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        navyblue: {
          50: "#ECEEF8",
          100: "#D9DFEF",
          200: "#B3BFDF",
          300: "#8D9FCF",
          400: "#677FBF",
          500: "#5A71C6",
          600: "#4A60B8",
          700: "#3A4F9E",
          800: "#2A3F84",
          900: "#1A2F6A",
        },
      },
    },
  },
  plugins: [],
};
