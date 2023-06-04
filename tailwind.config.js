const colors = require("tailwindcss/colors");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  theme: {
    extend: {
      colors: {
				primary: {
					DEFAULT: colors.violet[700],
					...colors.violet,
				},
			},
			fontFamily: {
				sans: ["Inter"],
			},
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    // ...
  ],
}