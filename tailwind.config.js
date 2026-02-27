/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        hubix: {
          50: '#eef1ff',
          100: '#d9deff',
          200: '#b3bdff',
          300: '#8d9cff',
          400: '#6d7fff',
          500: '#5865F2',
          600: '#4752c4',
          700: '#363e96',
          800: '#252b68',
          900: '#14173a',
          950: '#0a0c1d',
        },
        dark: {
          50: '#f6f6f7',
          100: '#e2e3e5',
          200: '#c5c7cb',
          300: '#a1a4ab',
          400: '#7d818a',
          500: '#636770',
          600: '#4e5159',
          700: '#404247',
          800: '#2b2d31',
          900: '#1e1f22',
          950: '#111214',
        },
        accent: {
          cyan: '#00d4ff',
          purple: '#a855f7',
          pink: '#ec4899',
          green: '#10b981',
          orange: '#f59e0b',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['Plus Jakarta Sans', 'Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-delayed': 'float 6s ease-in-out 2s infinite',
        'float-slow': 'float 8s ease-in-out 1s infinite',
        'pulse-glow': 'pulseGlow 3s ease-in-out infinite',
        'gradient-shift': 'gradientShift 8s ease infinite',
        'slide-up': 'slideUp 0.6s ease-out forwards',
        'fade-in': 'fadeIn 0.8s ease-out forwards',
        'scale-in': 'scaleIn 0.5s ease-out forwards',
        'shimmer': 'shimmer 2.5s linear infinite',
        'orbit': 'orbit 20s linear infinite',
        'morph': 'morph 8s ease-in-out infinite',
        'typewriter': 'typewriter 3s steps(20) infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-20px) rotate(2deg)' },
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(88, 101, 242, 0.3)' },
          '50%': { boxShadow: '0 0 40px rgba(88, 101, 242, 0.6), 0 0 80px rgba(88, 101, 242, 0.2)' },
        },
        gradientShift: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.9)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        orbit: {
          '0%': { transform: 'rotate(0deg) translateX(120px) rotate(0deg)' },
          '100%': { transform: 'rotate(360deg) translateX(120px) rotate(-360deg)' },
        },
        morph: {
          '0%, 100%': { borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%' },
          '50%': { borderRadius: '30% 60% 70% 40% / 50% 60% 30% 60%' },
        },
      },
      backgroundSize: {
        '300%': '300%',
      },
    },
  },
  plugins: [],
}