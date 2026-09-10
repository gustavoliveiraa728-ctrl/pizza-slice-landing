/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#121212', // Graphite/Black
          light: '#1A1A1A',
          dark: '#0A0A0A',
        },
        accent: {
          DEFAULT: '#FF3B30', // Electric Red
          light: '#FF5E54',
          dark: '#D72D24',
        },
        surface: {
          DEFAULT: '#F5F5F5', // Off-white
          dark: '#E5E5E5',
        },
      },
      fontFamily: {
        heading: ['Inter Tight', 'Impact', 'sans-serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'slow-pan': 'pan 20s linear infinite',
      },
      keyframes: {
        pan: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
}
