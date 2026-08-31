export interface Profile {
	name: string
	role: string
	bio: string
}

type sites = "github" | "linkedin" | "leetcode" | "gitlab"
export type Socials = Record<sites, string>

export interface Experience {
	company: string
	position: string
	country: string
	description: string
	start: {
		month: string
		year: number
	}
	end?: {
		month: string
		year: number
	}
	url: string
}

export type Technologies =
	| "React"
	| "Next.js"
	| "NestJs"
	| "TypeScript"
	| "JavaScript"
	| "Vue"
	| "Node"
	| "Tailwindcss"
	| "Vitest"
	| "Pinia"
	| "Sass"
	| "Three.js"
	| "Motion"

export interface Project {
	name: string
	description: string
	tags: Technologies[]
	year: number
	deployUrl?: string
	imgSrc: string
}

export interface Certificate {
	name: string
	issuer: string
	date: {
		month: string
		year: number
	}
	imgSrc: string
}
