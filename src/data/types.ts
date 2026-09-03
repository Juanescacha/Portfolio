export interface Profile {
	name: string
	role: string
	bio: string
	about: string
}

export type Social = {
	title: string
	url: string
	icon: string
}

export interface Experience {
	company: string
	position: string
	country: string
	description: string
	start: {
		month?: string
		year?: number
	}
	end?: {
		month?: string
		year?: number
	}
	technologies: Technologies[]
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
	technologies: Technologies[]
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
