import type { ImageMetadata } from "astro"

export interface Ui {
	ally: {
		aboutMe: string
		workExperience: string
		selectedProjects: string
		selectedCertificates: string
		selectedBlogs: string
		techUsed: string
		socialMediaLinks: string
		opensInNewTab: string
		inPageJumpLinks: string
		languageSelector: string
		changeTheme: string
		canonicalUrl: string
		backToTop: string
	}
	basic: {
		present: string
		from: string
		to: string
		viewFullResume: string
	}
}

export interface Profile {
	name: string
	role: string
	bio: string
	about: string
	footer: string
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
	| "Google Analytics"
	| "Swiper"

export interface Project {
	name: string
	description: string
	technologies: Technologies[]
	year: number
	deployUrl?: string
	imgSrc: ImageMetadata
}

export interface Certificate {
	name: string
	issuer: string
	date: {
		month: string
		year: number
	}
	imgSrc: ImageMetadata
	url: string
}

export interface Blog {
	title: string
	date: {
		month: string
		year: number
	}
	imgSrc: ImageMetadata
	url: string
}
