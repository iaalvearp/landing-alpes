import animations from '@midudev/tailwind-animations'

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				custom: ["font-sans", "open sans"],
				custom: ["font-handwriting", "sans-serif"],
				custom: ["font-serif", "sans-serif"],
			},
		},
	},
	plugins: [animations],
}
