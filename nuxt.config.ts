// https://nuxt.com/docs/api/configuration/nuxt-config
import colors from "tailwindcss/colors";
export default defineNuxtConfig({
				compatibilityDate: "2024-11-01",
				devtools: { enabled: true },
				modules: ["@nuxtjs/tailwindcss", "@nuxt/ui"],
				tailwindcss: {
								config: {
												theme: {},
								},
				},
});