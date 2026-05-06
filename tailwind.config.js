/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        institutional: {
          primary: '#0B1C3F', // Azul noche profundo
          secondary: '#64748B', // Gris metálico
          accent: '#C5A059', // Dorado sutil / Cobre
          light: '#F8FAFC',
          dark: '#020617',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'], // Tipografía moderna sugerida
      }
    },
  },
  plugins: [],
}
