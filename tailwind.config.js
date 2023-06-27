/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      keyframes: {
        bounce: {
          '0%': { transform: 'translateY(0em)' },
          '50%': { transform: 'translateY(.5em)' },
          '100%': { transform: 'translateY(0em)' },
        },
      },
      animation: {
        'bouncing': 'bounce .5s ease infinite',
      },
    },
  },
  plugins: [
    require("tailwindcss-animation-delay")
  ],
}
