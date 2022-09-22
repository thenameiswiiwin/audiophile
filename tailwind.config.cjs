/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    screens: {
      md: '768px',
      lg: '1060px',
      xl: '1248px',
      '2xl': '1440px'
    },
    container: {
      center: true,
      padding: '1.5rem',
    },
    colors: {
      primary: {
        100: 'hsl(var(--clr-primary-100) / <alpha-value>)',
        200: 'hsl(var(--clr-primary-200) / <alpha-value>)',
      },
      secondary: {
        100: 'hsl(var(--clr-secondary-100) / <alpha-value>)',
        200: 'hsl(var(--clr-secondary-200) / <alpha-value>)',
        300: 'hsl(var(--clr-secondary-300) / <alpha-value>)',
        400: 'hsl(var(--clr-secondary-400) / <alpha-value>)',
      },
      black: 'hsl(var(--clr-black) / <alpha-value>)',
      white: 'hsl(var(--clr-white) / <alpha-value>)',
    },
    fontFamily: {
      manrope: ['Manrope', 'sans-serif'],
    },
    fontWeight: {
      normal: '400',
      medium: '500',
      bold: '700',
    },
    fontSize: {
      h1: ['3.5rem', { lineHeight: '3.625rem', letterSpacing: '0.125em' }],
      h2: ['2.5rem', { lineHeight: '2.75rem', letterSpacing: '0.09375em' }],
      h3: ['2rem', { lineHeight: '2.25rem', letterSpacing: '0.071875em' }],
      h4: ['1.75rem', { lineHeight: '2.375rem', letterSpacing: '0.125em' }],
      h5: ['1.5rem', { lineHeight: '2.0625rem', letterSpacing: '0.10625em' }],
      h6: ['1.125rem', { lineHeight: '1.5rem', letterSpacing: '0.08125em' }],
      subTitle: [
        '0.8125rem',
        { lineHeight: '1.5625rem', letterSpacing: '.125em' },
      ],
      overLine: [
        '0.875rem',
        { lineHeight: '1.1875rem', letterSpacing: '0.625em' },
      ],
      body: ['0.9375rem', '1.5625rem'],
      base: ['16px', { lineHeight: '24px' }],
      md: ['1.75rem', { lineHeight: '2.375rem', letterSpacing: '0.125em' }],
      lg: ['2.25rem', { lineHeight: '2.5rem', letterSpacing: '0.08125em' }],
    },
    lineHeight: {
      'mobile-subTitle': '1.11rem',
      'mobile-body': '1.28rem',
    },
    letterSpacing: {
      'mobile-subTitle': '.0625em',
      'mobile-body': '.066875rem',
    },
    extend: {
      spacing: {
        84: '22rem',
        100: '30rem',
      },
      backgroundImage: {
        hero: "url('./src/assets/images/mobile/hero.png')",
        'hero-desktop': "url('./src/assets/images/desktop/hero.png')",
      },
    },
  },
  plugins: [],
};
