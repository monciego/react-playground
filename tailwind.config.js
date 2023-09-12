import forms from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
    fontFamily: {
      sans: ["'Outfit', sans-serif"],
      syncopate: ["'Syncopate', sans-serif"],
      paytoneOne: ["'Paytone One', sans-serif"],
    },
  },
  plugins: [forms],
};
