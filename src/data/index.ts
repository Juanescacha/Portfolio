import type { Certificate, Experience, Profile, Project, Social } from "./types"

export type { Certificate, Experience, Profile, Project, Social }

export const profile: Profile = {
	name: "Juan Camargo",
	role: "Software Engineer",
	bio: "A passionate software engineer with a love for creating innovative solutions.",
	about: `Hi there! I'm Brittany, and I like building things. I'm a frontend engineer with expertise in crafting accessible, pixel-perfect user interfaces. I take pride in creating thoughtful, inclusive products and have a sharp eye for the little details that separate a good product from an exceptional one. I enjoy working most at the intersection of design and engineering, where great user experience meets clean, scalable code.

Currently, I'm a Senior Frontend Engineer at [**Klaviyo**](https://www.google.com "perra"), where I work on our design system and help build new products, like [**Composer**](https://www.google.com "perra2"). I lead engineering efforts across our component library and front end platform, partnering closely with designers and engineers to ensure accessibility is built into the foundation of everything we ship.

Previously, I’ve worked across a wide range of environments — from product studios to startups and large tech companies — including Apple, Starry Internet, and Upstatement. Outside of my day-to-day work, I also created an online video course a few years ago which walks through building a real-world, API-driven application from scratch. These experiences have shaped how I think about building products that are both well-crafted and widely usable.

In my spare time, you can usually find me climbing, playing tennis, hanging out with my wife and two cats, or running around Hyrule searching for Korok seeds.`,
}

export const sections = {
	about: "about",
	experience: "experience",
	projects: "projects",
} as const

export const socials = [
	{
		title: "GitHub",
		url: "https://www.github.com/juanescacha",
		icon: "github",
	},
	{
		title: "LinkedIn",
		url: "https://www.linkedin.com/in/juanescacha/",
		icon: "linkedin",
	},
	{
		title: "LeetCode",
		url: "https://leetcode.com/u/Juanescacha/",
		icon: "leetcode",
	},
	{
		title: "GitLab",
		url: "https://www.gitlab.com/juanescacha",
		icon: "gitlab",
	},
] satisfies Social[]

export const experiences = [
	{
		company: "Lulos",
		position: "Co-Founder & Full Stack Developer",
		country: "Colombia",
		description:
			"Digital solutions company specializing in web development, technical SEO, local SEO, and the implementation of scalable digital solutions for businesses. Lead the end-to-end development of web projects, from planning and technical implementation to optimization, deployment, and continuous improvement, combining software development, performance, and organic search strategy. ---- Delivered digital solutions for clients including CIT Consultoría Integral de Tránsito, GastroGest Pro, and Tiffany Esthetic Group IPS, among others. Projects have included website development, technical optimization, digital transformation, and search visibility improvements, achieving results such as 48,0+ impressions, 708 organic clicks, and an average Google Search Console position of 8.2.",
		start: {
			// month: "FEB",
			year: 2026,
		},
		technologies: ["Next.js", "TypeScript"],
		url: "https://www.lulos.com/",
	},
	{
		company: "Cloudnonic",
		position: "Full Stack Developer",
		country: "Canada",
		description:
			"Build, style, and ship high-quality websites, design systems, mobile apps, and digital experiences for a diverse array of projects for clients including Harvard Business School, Everytown for Gun Safety, Pratt Institute, Koala Health, Vanderbilt University, The 19th News, and more. Provide leadership within engineering department through close collaboration, knowledge shares, and spearheading the development of internal tools.",
		start: {
			// month: "DEC",
			year: 2024,
		},
		end: {
			// month: "FEB",
			year: 2026,
		},
		technologies: ["Next.js", "TypeScript", "Tailwindcss", "Node", "NestJs"],
		url: "https://www.cloudnonic.com/",
	},
	{
		company: "vr_BAND",
		position: "Full Stack Developer",
		country: "Czech Republic",
		description:
			"Build, style, and ship high-quality websites, design systems, mobile apps, and digital experiences for a diverse array of projects for clients including Harvard Business School, Everytown for Gun Safety, Pratt Institute, Koala Health, Vanderbilt University, The 19th News, and more. Provide leadership within engineering department through close collaboration, knowledge shares, and spearheading the development of internal tools.",
		start: {
			month: "FEB",
			// year: 2024,
		},
		end: {
			month: "NOV",
			year: 2024,
		},
		technologies: ["Vue", "TypeScript", "Tailwindcss"],
		url: "https://vrband.eu/",
	},
	{
		company: "Endava",
		position: "Front End Developer Intern",
		country: "Colombia",
		description:
			"Build, style, and ship high-quality websites, design systems, mobile apps, and digital experiences for a diverse array of projects for clients including Harvard Business School, Everytown for Gun Safety, Pratt Institute, Koala Health, Vanderbilt University, The 19th News, and more. Provide leadership within engineering department through close collaboration, knowledge shares, and spearheading the development of internal tools.",
		start: {
			// month: "JUL",
			year: 2023,
		},
		end: {
			// month: "JAN",
			year: 2024,
		},
		technologies: [
			"TypeScript",
			"React",
			"Vue",
			"Tailwindcss",
			"Node",
			"Pinia",
			"Vitest",
			"Sass",
		],
		url: "https://www.endava.com/",
	},
	{
		company: "Teleperformance",
		position: "Customer Service Associate",
		country: "Colombia",
		description:
			"Build, style, and ship high-quality websites, design systems, mobile apps, and digital experiences for a diverse array of projects for clients including Harvard Business School, Everytown for Gun Safety, Pratt Institute, Koala Health, Vanderbilt University, The 19th News, and more. Provide leadership within engineering department through close collaboration, knowledge shares, and spearheading the development of internal tools.",
		start: {
			// month: "JUL",
			year: 2023,
		},
		end: {
			// month: "JAN",
			year: 2024,
		},
		technologies: [],
		url: "https://www.tp.com/",
	},
] satisfies Experience[]

export const projects: Project[] = [
	{
		name: "GoMedicus Group",
		description: "A simple project",
		technologies: ["Next.js", "TypeScript", "Motion", "Tailwindcss"],
		year: 2025,
		deployUrl: "",
		imgSrc: "https://picsum.photos/200/201",
	},
	{
		name: "Endava Marketplace",
		description: "A simple project",
		technologies: [
			"TypeScript",
			"Vue",
			"Tailwindcss",
			"Vitest",
			"Pinia",
			"Sass",
		],
		year: 2023,
		deployUrl: "",
		imgSrc: "https://picsum.photos/200/202",
	},
	{
		name: "Portfolio V1",
		description: "A simple project",
		technologies: ["JavaScript", "React", "Three.js", "Tailwindcss"],
		year: 2022,
		deployUrl: "",
		imgSrc: "https://picsum.photos/200/203",
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
