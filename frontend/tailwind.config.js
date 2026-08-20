/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          main: '#0B1F33',     // Azul rey muy oscuro (Fondo principal)
          surface: '#102A43',  // Azul oscuro (Superficies/cards)
          subtle: '#14314f',   // Azul intermedio para elevación y hovers
        },
        brand: {
          DEFAULT: '#174A7E',  // Azul rey (Color principal)
          hover: '#1d5a99',
          light: '#246ebc',
        },
        accent: {
          teal: '#287C78',     // Turquesa oscuro (Acento primario)
          'teal-light': '#369e99',
          warm: '#795548',     // Marrón cálido (Acento secundario/CTAs destacados)
          'warm-hover': '#8D6E63',
          'warm-dark': '#5D4037',
        },
        content: {
          main: '#F5F3EE',     // Blanco cálido (Texto principal)
          muted: '#AAB7C4',    // Gris azulado (Texto secundario)
          subtle: '#788896',   // Gris azulado suave
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Outfit', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      boxShadow: {
        'card': '0 10px 30px -10px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(23, 74, 126, 0.2)',
        'card-hover': '0 20px 40px -15px rgba(0, 0, 0, 0.6), 0 0 0 1px rgba(40, 124, 120, 0.4), 0 0 20px rgba(40, 124, 120, 0.15)',
        'btn-warm': '0 4px 14px 0 rgba(121, 85, 72, 0.35)',
        'glow-teal': '0 0 25px rgba(40, 124, 120, 0.25)',
      }
    },
  },
  plugins: [],
}
