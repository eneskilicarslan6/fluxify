/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          brand: {
            dark: "#0F172A",
            primary: "#38BDF8",
            secondary: "#0EA5E9",
            accent: "#0284C7",
          }
        },
        fontFamily: {
          sans: ['Inter', 'system-ui', 'sans-serif'],
        }
      },
    },
    plugins: [],
  }