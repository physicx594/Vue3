/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1024px',
      xxl: '1440px'
    },
    extend: {
      spacing: {
        15: '3.75rem'
      }
    }
  },
  plugins: []
}
