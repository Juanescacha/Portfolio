import * as en from "./en"
import * as es from "./es"

const content = {
	en,
	es,
} as const

export type Locale = keyof typeof content

console.log("EN:", en)
console.log("ES:", es)

export function getContent(locale: string = "en") {
	return content[locale as Locale] ?? content.en
}
