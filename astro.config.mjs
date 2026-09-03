// @ts-check
import react from "@astrojs/react"
import tailwindcss from "@tailwindcss/vite"
import { defineConfig, fontProviders } from "astro/config"
import icon from "astro-icon"

// https://astro.build/config
export default defineConfig({
	integrations: [react(), icon()],

	vite: {
		plugins: [tailwindcss()],
	},

	fonts: [
		{
			provider: fontProviders.local(),
			name: "Inter",
			cssVariable: "--font-inter",

			options: {
				variants: [
					{
						src: ["./src/assets/fonts/InterVariable3.woff2"],
						weight: "100 900",
						style: "normal",
					},
				],
			},
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
