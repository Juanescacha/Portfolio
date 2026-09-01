// @ts-check
import react from "@astrojs/react"
import tailwindcss from "@tailwindcss/vite"
import { defineConfig, fontProviders } from "astro/config"

// https://astro.build/config
export default defineConfig({
	integrations: [react()],

	vite: {
		plugins: [tailwindcss()],
	},

	fonts: [
		{
			provider: fontProviders.google(),
			name: "Inter",
			cssVariable: "--font-inter",
			weights: [100, 200, 300, 400, 500, 600, 700, 800, 900],
			styles: ["normal"],
			subsets: ["latin"],
		},
	],

	// i18n: {
	// 	locales: ["en", "es"],
	// 	defaultLocale: "en",
	// 	routing: {
	// 		prefixDefaultLocale: false,
	// 	},
	// },

	output: "static",
})
