import type {
	Certificate,
	Experience,
	Profile,
	Project,
	Socials,
} from "./types"

export type { Certificate, Experience, Profile, Project, Socials }

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
		company: "Cloudnonic",
		position: "Full Stack Developer",
		country: "Canada",
		description: "placeholder",
		start: {
			month: "DEC",
			year: 2024,
		},
		end: {
			month: "FEB",
			year: 2026,
		},
		url: "https://www.cloudnonic.com/",
	},
	{
		company: "vr_BAND",
		position: "Full Stack Developer",
		country: "Czech Republic",
		description: "placeholder",
		start: {
			month: "FEB",
			year: 2024,
		},
		end: {
			month: "NOV",
			year: 2024,
		},
		url: "https://vrband.eu/",
	},
	{
		company: "Endava",
		position: "Front End Developer Intern",
		country: "Colombia",
		description: "placeholder",
		start: {
			month: "JUL",
			year: 2023,
		},
		end: {
			month: "JAN",
			year: 2024,
		},
		url: "https://www.endava.com/",
	},
	{
		company: "Teleperformance",
		position: "Customer Service Associate",
		country: "Colombia",
		description: "placeholder",
		start: {
			month: "JUL",
			year: 2023,
		},
		end: {
			month: "JAN",
			year: 2024,
		},
		url: "https://www.tp.com/",
	},
]

export const projects: Project[] = [
	{
		name: "GoMedicus Group",
		description: "A simple project",
		tags: ["Next.js", "TypeScript", "Motion", "Tailwindcss"],
		year: 2025,
		deployUrl: "",
		imgSrc: "",
	},
	{
		name: "Endava Marketplace",
		description: "A simple project",
		tags: ["TypeScript", "Vue", "Tailwindcss", "Vitest", "Pinia", "Sass"],
		year: 2023,
		deployUrl: "",
		imgSrc: "",
	},
	{
		name: "Portfolio V1",
		description: "A simple project",
		tags: ["JavaScript", "React", "Three.js", "Tailwindcss"],
		year: 2022,
		deployUrl: "",
		imgSrc: "",
	},
]

export const certificates: Certificate[] = [
	{
		name: "Full Stack Open",
		issuer: "University of Helsinki",
		date: {
			month: "March",
			year: 2023,
		},
		imgSrc: "",
	},
	{
		name: "Scrum Foundation Professional Certificate",
		issuer: "CertiProf",
		date: {
			month: "January",
			year: 2023,
		},
		imgSrc: "",
	},
	{
		name: "EF Standard English Test: C2 Proficiency",
		issuer: "EF Education First",
		date: {
			month: "January",
			year: 2023,
		},
		imgSrc: "",
	},
]
