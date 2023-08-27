/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        hdprimary: {
          DEFAULT: "#264710",
        },
        hdsecondary: {
          DEFAULT: "#de9e36",
        },
        hdcontrast: {
          DEFAULT: "#800000",
        },
      },
    },
  },
  plugins: [],
};
