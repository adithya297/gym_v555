/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: '#0a0a0b',
          soft: '#0f0f11',
          800: '#141417',
          700: '#1b1b1f',
          600: '#26262b',
        },
        gold: {
          DEFAULT: '#c8a14a',
          soft: '#d9bd72',
          deep: '#a17d2c',
        },
        ember: '#e23744',
      },
      fontFamily: {
        sans: ['Poppins', 'system-ui', 'sans-serif'],
        display: ['Poppins', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        widest: '0.25em',
      },
      boxShadow: {
        glass: '0 8px 32px 0 rgba(0, 0, 0, 0.55)',
        gold: '0 10px 40px -10px rgba(200, 161, 74, 0.45)',
      },
      backgroundImage: {
        'radial-gold':
          'radial-gradient(circle at 50% 0%, rgba(200,161,74,0.18), transparent 60%)',
        'hero-overlay':
          'linear-gradient(180deg, rgba(10,10,11,0.35) 0%, rgba(10,10,11,0.65) 55%, rgba(10,10,11,0.98) 100%)',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'scroll-dot': {
          '0%': { opacity: '0', transform: 'translateY(-6px)' },
          '50%': { opacity: '1' },
          '100%': { opacity: '0', transform: 'translateY(10px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.7s ease forwards',
        'scroll-dot': 'scroll-dot 1.6s ease-in-out infinite',
        shimmer: 'shimmer 2.5s linear infinite',
      },
    },
  },
  plugins: [],
}
