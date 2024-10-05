/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx,scss}'],
  theme: {
    extend: {
      colors: {
        'font-dark': 'var(--font-dark)',
        'background-black-transparent': 'var(--background-black-transparent)',
        white: 'var(--white)',
        'primary-bright': 'var(--primary-bright)',
        orange: 'var(--orange)',
        invalid: 'var(--invalid)',
        'shadow-dark': 'var(--shadow-dark)',
        input: 'var(--input)',
        'border-input': 'var(--border-input)',
      },
      spacing: {
        8: '8px',
        10: '10px',
        20: '20px',
      },
    },
  },
  plugins: [],
};
