/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "16px",
      },
      colors: {
        primary: "#7D0A0A",
        secondary: "#436850",
      },
      screens: {
        "2xl": "1320px",
      },
    },
  },
  plugins: [],
};
