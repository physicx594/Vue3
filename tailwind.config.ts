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
      fontFamily: {
        Yellowtail: ['Yellowtail']
      },
      colors: {
        primary: 'rgb(var(--color-primary) / <alpha-value>)',
        secondary: 'rgb(var(--color-secondary) / <alpha-value>)',
        tertiary: 'rgb(var(--color-tertiary) / <alpha-value>)',
        'layer-1': 'rgb(var(--color-layer-1) / <alpha-value>)',
        'layer-2': 'rgb(var(--color-layer-2) / <alpha-value>)',
        'layer-3': 'rgb(var(--color-layer-3) / <alpha-value>)',
        'black-1': 'rgb(var(--color-black-1) / <alpha-value>)',
        'black-2': 'rgb(var(--color-black-2) / <alpha-value>)',
        'black-3': 'rgb(var(--color-black-3) / <alpha-value>)'
      },
      spacing: {
        '0_25': '0.0625rem',
        '0_5': '0.125rem',
        '2_5': '0.625rem',
        15: '3.75rem'
      }
    }
  },
  plugins: []
}
