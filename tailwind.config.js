/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gym: {
          bg: '#0A0A0A',
          surface: '#121212',
          card: '#181818',
          cardHover: '#1E1E1E',
          red: '#E63946',
          redHover: '#FF4D5A',
          text: '#F5F5F5',
          muted: '#A3A3A3',
          border: 'rgba(255, 255, 255, 0.10)',
          borderHover: 'rgba(230, 57, 70, 0.40)',
        }
      },
      fontFamily: {
        display: ['"Barlow Condensed"', '"Oswald"', 'sans-serif'],
        sans: ['"Inter"', 'system-ui', '-apple-system', 'sans-serif'],
      },
      letterSpacing: {
        tighter: '-0.04em',
        tight: '-0.02em',
        wide: '0.05em',
        wider: '0.1em',
        widest: '0.2em',
      },
      boxShadow: {
        'gym-glow': '0 0 25px -5px rgba(230, 57, 70, 0.35)',
        'gym-card': '0 10px 30px -10px rgba(0, 0, 0, 0.7)',
      }
    },
  },
  plugins: [],
}
