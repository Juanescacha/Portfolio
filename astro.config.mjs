// @ts-check
import react from "@astrojs/react"
import tailwindcss from "@tailwindcss/vite"
import { defineConfig } from "astro/config"

// https://astro.build/config
export default defineConfig({
	integrations: [react()],

	vite: {
		plugins: [tailwindcss()],
	},

	// i18n: {
	// 	locales: ["en", "es"],
	// 	defaultLocale: "en",
	// 	routing: {
	// 		prefixDefaultLocale: false,
	// 	},
	// },

	output: "static",
})
