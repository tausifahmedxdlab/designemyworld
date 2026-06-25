/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        background: "#0D0502",
        panel: "#140804",
        border: "#2B1B12",
        accent: "#FF7A00",
        muted: "#A69A92",
        light: "#F5F5F5"
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"]
      },
      maxWidth: {
        container: "1280px"
      }
    }
  },
  plugins: []
};