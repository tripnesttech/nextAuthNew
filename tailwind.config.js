/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
			xs: '360px',
			sm: '640px',
			md: '768px',
			lg: '1024px',
			xl: '1280px',
			xxl: '1536px',
			xxxl: '1920px',
		},
		container: {
			center: true,
		},
    extend: {
      colors: {
        "teal_blue": "#146B83",
        "orange-deep": "#EC6809",
        "orange-thin": "#FBFBFB",
        "black-simple": "#333333",
        "black-deep": "#343434",
        "sky-blue": "#2287F3",
        "input-bg": "#808080",
        "input-placeholder": "#4D4D4D",
        "input-tex": "#333333",
        },
      backgroundImage: {
        'hero-bg': "url('/heroBg.png')"
      }
    },
  },
  plugins: [],
}
