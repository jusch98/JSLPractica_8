/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
			  BadComa: ['BadComa', 'sans-serif'], // Agrega tu fuente
			},
	},
	plugins: [
    require('@tailwindcss/typography')
  ],
}
}
