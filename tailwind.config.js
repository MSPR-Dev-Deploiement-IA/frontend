/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    colors: {
      green: '#28B463',
      yellow: '#FFC107',
      'gray-light': '#F8F8F8',
      'gray': '#333333',
      blue: '#4A90E2',
    },
    fontFamily: {
      sans: ['Montserrat', 'sans-serif'],
    },
    extend: {
      spacing: {
        '8xl': '96rem',
        '9xl': '128rem',
      },
    },
  },
};
