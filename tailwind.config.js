/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./src/**/*.{js,jsx,ts,tsx}",
		"./public/**/*.html",
		"./public/index.html",
	],
	theme: {
		extend: {},
	},
	plugins: [
		require("@catppuccin/tailwindcss")({
			prefix: "ctp",
			defaultFlavour: "macchiato",
		}),
	],
}

