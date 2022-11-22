/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/index.html",
    "./src/app/*.{html,tx}",
    "./src/app/components/**/*.{html,ts}",
    "./src/app/includes/**/*.{html,ts}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
