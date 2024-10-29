/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				primary: '#082a50',
				secondary: '#a07600',
				info: '#000000'
			},
			fontFamily: {
				'myriad': ['MyriadPro', 'sans-serif'],
				'simplex': ['Simplex', 'sans-serif'],
				'futura': ['Futuramedium', 'sans-serif'],
				'blacklisted': ['Blacklisted', 'sans-serif'],
			},
		},
	},
	plugins: [],
}
