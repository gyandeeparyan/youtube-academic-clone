/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
   darkMode: "class",
  theme: {
    extend: {

      
        colors: {
          'brand-coal':'#0f0f0f',
          'brand-charcoal': '#231f20',
          'brand-charcoal-muted': '#1b1918',
          'brand-gray': '#262522',
          'brand-yellow': '#fcba28',
          'brand-teal':'#075E54',
          'brand-pink': '#f38ba3',
          'brand-green': '#0ba95b',
          'brand-purple': '#7b5ea7',
          'brand-beige': '#f9f4da',
          'brand-blue': '#12b5e5',
          'brand-orange': '#fc7428',
          'brand-red': '#ed203d',
          'brand-white': '#fff',
          
        },
    },
  },
  plugins: [],
}