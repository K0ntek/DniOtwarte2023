/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      'mono': ['Roboto Mono'],
      'orbitron': ['Orbitron'],
      'gruppo': ['Gruppo']
    },
    extend: {
      'gradient': ['text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-600 to-[crimson]']
    },
  },
  plugins: [],
}
