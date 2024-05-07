/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      'xs': '0px',
      'smd':'682px',
    },
    extend: {
      backgroundImage: {
        'header': "url('/sparkles.jpg')",
        'weddingbutton': "url('/events-wedding-button.jpg')",
        'anniversarybutton': "url('/events-anniversary-button.jpg')",
        'bdaybutton': "url('/events-bday-button4.jpg')",
        'coorporatebutton': "url('/events-coorporate-button.jpg')"
      },
      animation: {
        'fade': 'fadeInOut 5s ease-in-out'
      }
    },
  },
  plugins: [],
}
