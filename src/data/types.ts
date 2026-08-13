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
	description: string
	start: {
		month: string
		year: string
	}
	end?: {
		month: string
		year: string
	}
	url: string
}

export interface Project {
	name: string
	description: string
	tags: string[]
	year: number
	deployLink?: string
	imgSrc: string
}
