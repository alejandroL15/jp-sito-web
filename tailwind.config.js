/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        green: {
          50: '#f0f9f0',
          100: '#dcefdc',
          200: '#bce0bc',
          300: '#97cb97',
          400: '#6db46d',
          500: '#4d9d4d',
          600: '#2E7D32', // Primary green
          700: '#276a2a',
          800: '#225b23',
          900: '#1b451b',
        },
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      spacing: {
        '128': '32rem',
      },
      animation: {
        'bounce': 'bounce 1.5s infinite',
      },
      keyframes: {
        bounce: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [],
};