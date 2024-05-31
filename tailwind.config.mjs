import animations from '@midudev/tailwind-animations'

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: 'media',
	theme: {
		extend: {
			fontFamily: {
				sans: ['font-sans', 'sans-serif'],
				handwriting: ['font-handwriting', 'sans-serif'],
				serif: ['font-serif', 'serif'],
				twoSerif: ['two-serif', 'serif'],
				twoSans: ['two-sans', 'sans'],
			},
			colors: {
				'primary': '#DDD',
				'secondary': '#333',
				'gold-dark': '#A87B05',
				'gold-light': '#EFB810',
			}
		},
	},
	plugins: [animations],
}
