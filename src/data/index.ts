import type { Experience, Profile, Project, Socials } from "./types"

export type { Experience, Profile, Project, Socials }

export const profile: Profile = {
	name: "Juan Esteban Camargo",
	role: "Software Engineer",
	bio: "A passionate software engineer with a love for creating innovative solutions.",
}

export const sections = ["About", "Experience", "Projects"]

export const socials: Socials = {
	github: "https://www.github.com/juanescacha",
	linkedin: "https://www.linkedin.com/in/juanescacha/",
	leetcode: "https://leetcode.com/u/Juanescacha/",
	gitlab: "https://www.gitlab.com/juanescacha",
}

export const experiences: Experience[] = [
	{
		company: "Company 1",
		position: "Position 1",
		description: "A simple experience",
		start: {
			month: "JAN",
			year: "2020",
		},
		end: {
			month: "DEC",
			year: "2021",
		},
		url: "",
	},
]

export const projects: Project[] = [
	{
		name: "Project 1",
		description: "A simple project",
		tags: ["TypeScript", "React"],
		year: 2023,
		deployLink: "",
		imgSrc: "",
	},
]
