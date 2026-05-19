import type { Config } from 'tailwindcss';

export default {
  darkMode: ['class'],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand': {
          'brown': '#3D2B1F',
          'green': '#5A6A40',
          'cream': '#F5F2ED',
          'white': '#FCF9F5',
        }
      },
      fontFamily: {
        'serif': ['Cormorant Garamond', 'serif'],
        'sans': ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      }
    },
  },
  plugins: [],
} as Config;
