import * as en from "./lang/en"
import * as es from "./lang/es"

const content = {
	en,
	es,
} as const

export type Locale = keyof typeof content

export function getContent(locale: string = "en") {
	return content[locale as Locale] ?? content.en
}

export const languages = {
	en: "English",
	es: "Español",
	//
	// fr: "Français",
	// jp: "日本語",
	// de: "Deutsch",
	// it: "Italian",
	// pt: "Português",
	// zh: "中文",
	// ru: "Русский",
} as const satisfies Record<Locale, string>
